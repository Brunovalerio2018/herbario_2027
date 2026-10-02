import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ColetaService } from './coleta.service';
import { Coleta } from './entities/coleta.entity';

@ApiTags('Coletas')
@Controller('coletas')
export class ColetaController {
  constructor(private readonly coletaService: ColetaService) {}

  @Get()
  @ApiOperation({ summary: 'Listar registros de coleta e coordenadas' })
  findAll() {
    return this.coletaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar dados da coleta por ID' })
  findOne(@Param('id') id: string) {
    return this.coletaService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Registrar dados de coleta e salvar ponto PostGIS' })
  create(@Body() data: Partial<Coleta>) {
    return this.coletaService.create(data);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Atualizar dados de coleta' })
  update(@Param('id') id: string, @Body() data: Partial<Coleta>) {
    return this.coletaService.update(id, data);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Remover registro de coleta' })
  remove(@Param('id') id: string) {
    return this.coletaService.remove(id);
  }
}
