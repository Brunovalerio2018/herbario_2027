import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ExsicataService } from './exsicata.service';
import { Exsicata } from './entities/exsicata.entity';

@ApiTags('Herbário CNPO - Exsicatas')
@Controller('exsicatas')
export class ExsicataController {
  constructor(private readonly exsicataService: ExsicataService) {}

  @Get()
  @ApiOperation({ summary: 'Listar registros de exsicatas do Herbário CNPO' })
  findAll() {
    return this.exsicataService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar exsicata por ID' })
  findOne(@Param('id') id: string) {
    return this.exsicataService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Vincular exsicata a um acesso' })
  create(@Body() data: Partial<Exsicata>) {
    return this.exsicataService.create(data);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Atualizar registro de exsicata' })
  update(@Param('id') id: string, @Body() data: Partial<Exsicata>) {
    return this.exsicataService.update(id, data);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Remover registro de exsicata' })
  remove(@Param('id') id: string) {
    return this.exsicataService.remove(id);
  }
}
