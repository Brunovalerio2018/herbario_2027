import { CreateEspecyDto } from './dto/create-especy.dto';
import { UpdateEspecyDto } from './dto/update-especy.dto';
export declare class EspeciesService {
    create(createEspecyDto: CreateEspecyDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEspecyDto: UpdateEspecyDto): string;
    remove(id: number): string;
}
