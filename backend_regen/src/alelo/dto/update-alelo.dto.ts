import { PartialType } from '@nestjs/swagger';
import { CreateAleloDto } from './create-alelo.dto';

export class UpdateAleloDto extends PartialType(CreateAleloDto) {}
