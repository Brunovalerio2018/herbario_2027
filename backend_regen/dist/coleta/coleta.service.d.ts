import { Repository } from 'typeorm';
import { Coleta } from './entities/coleta.entity';
export declare class ColetaService {
    private readonly coletaRepo;
    constructor(coletaRepo: Repository<Coleta>);
    findAll(): Promise<Coleta[]>;
    findOne(id: string): Promise<Coleta>;
    create(data: Partial<Coleta>): Promise<Coleta>;
    update(id: string, data: Partial<Coleta>): Promise<Coleta>;
    remove(id: string): Promise<Coleta>;
}
