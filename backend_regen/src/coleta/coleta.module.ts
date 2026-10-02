import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coleta } from './entities/coleta.entity';
import { ColetaService } from './coleta.service';
import { ColetaController } from './coleta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Coleta])],
  controllers: [ColetaController],
  providers: [ColetaService],
  exports: [ColetaService],
})
export class ColetaModule {}
