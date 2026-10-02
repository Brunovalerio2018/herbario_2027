// REMOVA esta linha se ela existir: import { EspecieService } from './especie.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Especie } from './entities/especie.entity';
import { CreateEspecieDto } from './dto/create-especie.dto';
import { UpdateEspecieDto } from './dto/update-especie.dto';

@Injectable()
export class EspecieService {
  constructor(
    @InjectRepository(Especie)
    private readonly especieRepo: Repository<Especie>,
  ) {}

  create(dto: CreateEspecieDto) {
    const especie = this.especieRepo.create(dto);
    return this.especieRepo.save(especie);
  }

  findAll() {
    return this.especieRepo.find({ relations: ['acessos'] });
  }

  async findOne(id: string) {
    const especie = await this.especieRepo.findOne({
      where: { id },
      relations: ['acessos'],
    });
    if (!especie) throw new NotFoundException('Espécie não encontrada');
    return especie;
  }

  async update(id: string, dto: UpdateEspecieDto) {
    const especie = await this.findOne(id);
    this.especieRepo.merge(especie, dto);
    return this.especieRepo.save(especie);
  }

  async remove(id: string) {
    const especie = await this.findOne(id);
    return this.especieRepo.remove(especie);
  }
}
