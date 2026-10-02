import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AcessoService } from './acesso.service';
import { Acesso } from './entities/acesso.entity';

@ApiTags('Acessos BAG')
@Controller('acessos')
export class AcessoController {
  constructor(private readonly acessoService: AcessoService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os acessos com suas relações' })
  findAll() {
    return this.acessoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar acesso por ID (UUID)' })
  findOne(@Param('id') id: string) {
    return this.acessoService.findOne(id);
  }

  @Get('codigo/:numeroAcesso')
  @ApiOperation({ summary: 'Buscar acesso pelo Código/Número de Acesso (Ex: PLANT0012)' })
  findByNumero(@Param('numeroAcesso') numeroAcesso: string) {
    return this.acessoService.findByNumero(numeroAcesso);
  }

  @Post()
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Cadastrar novo acesso no BAG' })
  create(@Body() data: Partial<Acesso>) {
    return this.acessoService.create(data);
  }

  @Put(':id')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Atualizar informações de um acesso' })
  update(@Param('id') id: string, @Body() data: Partial<Acesso>) {
    return this.acessoService.update(id, data);
  }

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Remover um acesso' })
  remove(@Param('id') id: string) {
    return this.acessoService.remove(id);
  }
}