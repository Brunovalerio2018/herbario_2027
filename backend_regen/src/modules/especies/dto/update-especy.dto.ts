import { PartialType } from '@nestjs/mapped-types';
import { CreateEspecyDto } from './create-especy.dto';

export class UpdateEspecyDto extends PartialType(CreateEspecyDto) {}
