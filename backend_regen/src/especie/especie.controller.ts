import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { EspecieService } from './especie.service';
import { Especie } from './entities/especie.entity';

@ApiTags('Espécies')
@Controller('especies')
export class EspecieController {
  constructor(private readonly especieService: EspecieService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas as espécies cadastradas' })
  findAll() {
    return this.especieService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar espécie por ID' })
  findOne(@Param('id') id: string) {
    return this.especieService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Cadastrar nova espécie' })
  create(@Body() data: Partial<Especie>) {
    return this.especieService.create(data);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Atualizar dados de uma espécie' })
  update(@Param('id') id: string, @Body() data: Partial<Especie>) {
    return this.especieService.update(id, data);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Remover espécie' })
  remove(@Param('id') id: string) {
    return this.especieService.remove(id);
  }
}
