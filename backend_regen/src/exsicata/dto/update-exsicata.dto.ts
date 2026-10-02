import { PartialType } from '@nestjs/swagger';
import { CreateExsicataDto } from './create-exsicata.dto';

export class UpdateExsicataDto extends PartialType(CreateExsicataDto) {}
