import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bag } from './entities/bag.entity';
import { BagService } from './bag.service';
import { BagController } from './bag.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Bag])],
  controllers: [BagController],
  providers: [BagService],
  exports: [BagService],
})
export class BagModule {}
