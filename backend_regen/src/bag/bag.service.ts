import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bag } from './entities/bag.entity';

@Injectable()
export class BagService {
  constructor(
    @InjectRepository(Bag)
    private readonly bagRepo: Repository<Bag>,
  ) {}

  findAll() {
    return this.bagRepo.find({ relations: ['acesso'] });
  }

  async findOne(id: string) {
    const bag = await this.bagRepo.findOne({
      where: { id },
      relations: ['acesso'],
    });
    if (!bag) throw new NotFoundException('Registro de conservação BAG não encontrado.');
    return bag;
  }

  create(data: Partial<Bag>) {
    const bag = this.bagRepo.create(data);
    return this.bagRepo.save(bag);
  }

  async update(id: string, data: Partial<Bag>) {
    const bag = await this.findOne(id);
    Object.assign(bag, data);
    return this.bagRepo.save(bag);
  }

  async remove(id: string) {
    const bag = await this.findOne(id);
    return this.bagRepo.remove(bag);
  }
}
