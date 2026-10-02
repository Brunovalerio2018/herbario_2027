import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coleta } from './entities/coleta.entity';

@Injectable()
export class ColetaService {
  constructor(
    @InjectRepository(Coleta)
    private readonly coletaRepo: Repository<Coleta>,
  ) {}

  findAll() {
    return this.coletaRepo.find({ relations: ['acesso'] });
  }

  async findOne(id: string) {
    const coleta = await this.coletaRepo.findOne({
      where: { id },
      relations: ['acesso'],
    });
    if (!coleta) throw new NotFoundException('Registro de coleta não encontrado.');
    return coleta;
  }

  async create(data: Partial<Coleta>) {
    // Se latitude e longitude forem informadas, constrói o ponto geométrico WGS84 no PostGIS
    if (data.latitude && data.longitude) {
      data.geom = `ST_SetSRID(ST_MakePoint(${data.longitude}, ${data.latitude}), 4326)`;
    }
    const coleta = this.coletaRepo.create(data);
    return this.coletaRepo.save(coleta);
  }

  async update(id: string, data: Partial<Coleta>) {
    const coleta = await this.findOne(id);
    if (data.latitude && data.longitude) {
      data.geom = `ST_SetSRID(ST_MakePoint(${data.longitude}, ${data.latitude}), 4326)`;
    }
    Object.assign(coleta, data);
    return this.coletaRepo.save(coleta);
  }

  async remove(id: string) {
    const coleta = await this.findOne(id);
    return this.coletaRepo.remove(coleta);
  }
}
