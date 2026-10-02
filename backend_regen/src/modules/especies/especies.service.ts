import { Injectable } from '@nestjs/common';
import { CreateEspecyDto } from './dto/create-especy.dto';
import { UpdateEspecyDto } from './dto/update-especy.dto';

@Injectable()
export class EspeciesService {
  create(createEspecyDto: CreateEspecyDto) {
    return 'This action adds a new especy';
  }

  findAll() {
    return `This action returns all especies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} especy`;
  }

  update(id: number, updateEspecyDto: UpdateEspecyDto) {
    return `This action updates a #${id} especy`;
  }

  remove(id: number) {
    return `This action removes a #${id} especy`;
  }
}
