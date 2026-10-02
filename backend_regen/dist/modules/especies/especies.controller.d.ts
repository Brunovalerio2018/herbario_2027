import { EspeciesService } from './especies.service';
import { CreateEspecyDto } from './dto/create-especy.dto';
import { UpdateEspecyDto } from './dto/update-especy.dto';
export declare class EspeciesController {
    private readonly especiesService;
    constructor(especiesService: EspeciesService);
    create(createEspecyDto: CreateEspecyDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEspecyDto: UpdateEspecyDto): string;
    remove(id: string): string;
}
