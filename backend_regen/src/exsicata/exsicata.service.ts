import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exsicata } from './entities/exsicata.entity';

@Injectable()
export class ExsicataService {
  constructor(
    @InjectRepository(Exsicata)
    private readonly exsicataRepo: Repository<Exsicata>,
  ) {}

  findAll() {
    return this.exsicataRepo.find({ relations: ['acesso'] });
  }

  async findOne(id: string) {
    const exsicata = await this.exsicataRepo.findOne({
      where: { id },
      relations: ['acesso'],
    });
    if (!exsicata) throw new NotFoundException('Registro de exsicata não encontrado.');
    return exsicata;
  }

  create(data: Partial<Exsicata>) {
    const exsicata = this.exsicataRepo.create(data);
    return this.exsicataRepo.save(exsicata);
  }

  async update(id: string, data: Partial<Exsicata>) {
    const exsicata = await this.findOne(id);
    Object.assign(exsicata, data);
    return this.exsicataRepo.save(exsicata);
  }

  async remove(id: string) {
    const exsicata = await this.findOne(id);
    return this.exsicataRepo.remove(exsicata);
  }
}
