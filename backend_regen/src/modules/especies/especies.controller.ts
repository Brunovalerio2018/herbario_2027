import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EspeciesService } from './especies.service';
import { CreateEspecyDto } from './dto/create-especy.dto';
import { UpdateEspecyDto } from './dto/update-especy.dto';

@Controller('especies')
export class EspeciesController {
  constructor(private readonly especiesService: EspeciesService) {}

  @Post()
  create(@Body() createEspecyDto: CreateEspecyDto) {
    return this.especiesService.create(createEspecyDto);
  }

  @Get()
  findAll() {
    return this.especiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.especiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEspecyDto: UpdateEspecyDto) {
    return this.especiesService.update(+id, updateEspecyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.especiesService.remove(+id);
  }
}
