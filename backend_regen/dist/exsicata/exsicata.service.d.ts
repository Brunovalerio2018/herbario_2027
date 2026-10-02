import { Repository } from 'typeorm';
import { Exsicata } from './entities/exsicata.entity';
export declare class ExsicataService {
    private readonly exsicataRepo;
    constructor(exsicataRepo: Repository<Exsicata>);
    findAll(): Promise<Exsicata[]>;
    findOne(id: string): Promise<Exsicata>;
    create(data: Partial<Exsicata>): Promise<Exsicata>;
    update(id: string, data: Partial<Exsicata>): Promise<Exsicata>;
    remove(id: string): Promise<Exsicata>;
}
