import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { BagService } from './bag.service';
import { Bag } from './entities/bag.entity';

@ApiTags('Banco Ativo de Germoplasma (BAG)')
@Controller('bag')
export class BagController {
  constructor(private readonly bagService: BagService) {}

  @Get()
  @ApiOperation({ summary: 'Listar registros de conservação e parcelas do BAG' })
  findAll() {
    return this.bagService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar registro do BAG por ID' })
  findOne(@Param('id') id: string) {
    return this.bagService.findOne(id);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Vincular novo registro BAG a um acesso' })
  create(@Body() data: Partial<Bag>) {
    return this.bagService.create(data);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Atualizar estado de conservação no BAG' })
  update(@Param('id') id: string, @Body() data: Partial<Bag>) {
    return this.bagService.update(id, data);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Remover registro BAG' })
  remove(@Param('id') id: string) {
    return this.bagService.remove(id);
  }
}
