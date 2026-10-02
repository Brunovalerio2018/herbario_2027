import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { FotoService } from './foto.service';
import { Foto } from './entities/foto.entity';

@ApiTags('Galeria de Fotos')
@Controller('fotos')
export class FotoController {
  constructor(private readonly fotoService: FotoService) {}

  @Get()
  @ApiOperation({ summary: 'Listar fotos cadastradas' })
  findAll() {
    return this.fotoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar foto por ID' })
  findOne(@Param('id') id: string) {
    return this.fotoService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Vincular foto a um acesso' })
  create(@Body() data: Partial<Foto>) {
    return this.fotoService.create(data);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Atualizar legenda/dados da foto' })
  update(@Param('id') id: string, @Body() data: Partial<Foto>) {
    return this.fotoService.update(id, data);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Remover registro de foto' })
  remove(@Param('id') id: string) {
    return this.fotoService.remove(id);
  }
}
