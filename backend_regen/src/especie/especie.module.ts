import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Especie } from './entities/especie.entity';
import { EspecieService } from './especie.service';
import { EspecieController } from './especie.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Especie])],
  controllers: [EspecieController],
  providers: [EspecieService],
  exports: [EspecieService],
})
export class EspecieModule {}
