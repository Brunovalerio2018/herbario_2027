import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alelo } from './entities/alelo.entity';
import { AleloService } from './alelo.service';
import { AleloController } from './alelo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Alelo])],
  controllers: [AleloController],
  providers: [AleloService],
  exports: [AleloService],
})
export class AleloModule {}
