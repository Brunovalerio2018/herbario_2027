import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exsicata } from './entities/exsicata.entity';
import { ExsicataService } from './exsicata.service';
import { ExsicataController } from './exsicata.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Exsicata])],
  controllers: [ExsicataController],
  providers: [ExsicataService],
  exports: [ExsicataService],
})
export class ExsicataModule {}
