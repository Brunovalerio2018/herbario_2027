import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Foto } from './entities/foto.entity';

@Injectable()
export class FotoService {
  constructor(
    @InjectRepository(Foto)
    private readonly fotoRepo: Repository<Foto>,
  ) {}

  findAll() {
    return this.fotoRepo.find({ relations: ['acesso'] });
  }

  async findOne(id: string) {
    const foto = await this.fotoRepo.findOne({
      where: { id },
      relations: ['acesso'],
    });
    if (!foto) throw new NotFoundException('Foto não encontrada.');
    return foto;
  }

  create(data: Partial<Foto>) {
    const foto = this.fotoRepo.create(data);
    return this.fotoRepo.save(foto);
  }

  async update(id: string, data: Partial<Foto>) {
    const foto = await this.findOne(id);
    Object.assign(foto, data);
    return this.fotoRepo.save(foto);
  }

  async remove(id: string) {
    const foto = await this.findOne(id);
    return this.fotoRepo.remove(foto);
  }
}
