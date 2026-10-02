import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acesso } from './entities/acesso.entity';
import { AcessoService } from './acesso.service';
import { AcessoController } from './acesso.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Acesso])],
  controllers: [AcessoController],
  providers: [AcessoService],
  exports: [AcessoService],
})
export class AcessoModule {}
