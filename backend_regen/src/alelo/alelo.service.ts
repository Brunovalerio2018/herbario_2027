import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alelo } from './entities/alelo.entity';

@Injectable()
export class AleloService {
  constructor(
    @InjectRepository(Alelo)
    private readonly aleloRepo: Repository<Alelo>,
  ) {}

  findAll() {
    return this.aleloRepo.find({ relations: ['acesso'] });
  }

  async findOne(id: string) {
    const alelo = await this.aleloRepo.findOne({
      where: { id },
      relations: ['acesso'],
    });
    if (!alelo) throw new NotFoundException('Registro de integração Alelo não encontrado.');
    return alelo;
  }

  create(data: Partial<Alelo>) {
    const alelo = this.aleloRepo.create(data);
    return this.aleloRepo.save(alelo);
  }

  async update(id: string, data: Partial<Alelo>) {
    const alelo = await this.findOne(id);
    Object.assign(alelo, data);
    return this.aleloRepo.save(alelo);
  }

  async remove(id: string) {
    const alelo = await this.findOne(id);
    return this.aleloRepo.remove(alelo);
  }
}
