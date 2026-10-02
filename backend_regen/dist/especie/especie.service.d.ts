import { Repository } from 'typeorm';
import { Especie } from './entities/especie.entity';
import { CreateEspecieDto } from './dto/create-especie.dto';
import { UpdateEspecieDto } from './dto/update-especie.dto';
export declare class EspecieService {
    private readonly especieRepo;
    constructor(especieRepo: Repository<Especie>);
    create(dto: CreateEspecieDto): Promise<Especie>;
    findAll(): Promise<Especie[]>;
    findOne(id: string): Promise<Especie>;
    update(id: string, dto: UpdateEspecieDto): Promise<Especie>;
    remove(id: string): Promise<Especie>;
}
