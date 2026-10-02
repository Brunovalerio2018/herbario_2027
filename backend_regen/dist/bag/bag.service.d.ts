import { Repository } from 'typeorm';
import { Bag } from './entities/bag.entity';
export declare class BagService {
    private readonly bagRepo;
    constructor(bagRepo: Repository<Bag>);
    findAll(): Promise<Bag[]>;
    findOne(id: string): Promise<Bag>;
    create(data: Partial<Bag>): Promise<Bag>;
    update(id: string, data: Partial<Bag>): Promise<Bag>;
    remove(id: string): Promise<Bag>;
}
