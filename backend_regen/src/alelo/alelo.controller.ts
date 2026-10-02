import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AleloService } from './alelo.service';
import { Alelo } from './entities/alelo.entity';

@ApiTags('Integração Alelo')
@Controller('alelo')
export class AleloController {
  constructor(private readonly aleloService: AleloService) {}

  @Get()
  @ApiOperation({ summary: 'Listar mapeamentos com o sistema Alelo' })
  findAll() {
    return this.aleloService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar mapeamento por ID' })
  findOne(@Param('id') id: string) {
    return this.aleloService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Cadastrar mapeamento do Alelo' })
  create(@Body() data: Partial<Alelo>) {
    return this.aleloService.create(data);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Atualizar código/identificador Alelo' })
  update(@Param('id') id: string, @Body() data: Partial<Alelo>) {
    return this.aleloService.update(id, data);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Remover vinculação com Alelo' })
  remove(@Param('id') id: string) {
    return this.aleloService.remove(id);
  }
}
