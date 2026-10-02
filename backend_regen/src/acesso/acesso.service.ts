import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Acesso } from './entities/acesso.entity';

@Injectable()
export class AcessoService {
  constructor(
    @InjectRepository(Acesso)
    private readonly acessoRepo: Repository<Acesso>,
  ) {}

  findAll() {
    return this.acessoRepo.find({
      relations: ['especie', 'coleta', 'exsicata', 'bag', 'alelo', 'fotos'],
    });
  }

  async findOne(id: string) {
    const acesso = await this.acessoRepo.findOne({
      where: { id },
      relations: ['especie', 'coleta', 'exsicata', 'bag', 'alelo', 'fotos'],
    });
    if (!acesso) throw new NotFoundException('Acesso não encontrado.');
    return acesso;
  }

  async findByNumero(numeroAcesso: string) {
    const acesso = await this.acessoRepo.findOne({
      where: { numeroAcesso },
      relations: ['especie', 'coleta', 'exsicata', 'bag', 'alelo', 'fotos'],
    });
    if (!acesso) throw new NotFoundException(`Acesso ${numeroAcesso} não encontrado.`);
    return acesso;
  }

  create(data: Partial<Acesso>) {
    const acesso = this.acessoRepo.create(data);
    return this.acessoRepo.save(acesso);
  }

  async update(id: string, data: Partial<Acesso>) {
    const acesso = await this.findOne(id);
    Object.assign(acesso, data);
    return this.acessoRepo.save(acesso);
  }

  async remove(id: string) {
    const acesso = await this.findOne(id);
    return this.acessoRepo.remove(acesso);
  }
}