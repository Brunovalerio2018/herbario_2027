import { Repository } from 'typeorm';
import { Alelo } from './entities/alelo.entity';
export declare class AleloService {
    private readonly aleloRepo;
    constructor(aleloRepo: Repository<Alelo>);
    findAll(): Promise<Alelo[]>;
    findOne(id: string): Promise<Alelo>;
    create(data: Partial<Alelo>): Promise<Alelo>;
    update(id: string, data: Partial<Alelo>): Promise<Alelo>;
    remove(id: string): Promise<Alelo>;
}
