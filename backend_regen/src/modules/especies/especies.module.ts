import { Module } from '@nestjs/common';
import { EspeciesService } from './especies.service';
import { EspeciesController } from './especies.controller';

@Module({
  controllers: [EspeciesController],
  providers: [EspeciesService],
})
export class EspeciesModule {}
