import { BagService } from './bag.service';
import { Bag } from './entities/bag.entity';
export declare class BagController {
    private readonly bagService;
    constructor(bagService: BagService);
    findAll(): Promise<Bag[]>;
    findOne(id: string): Promise<Bag>;
    create(data: Partial<Bag>): Promise<Bag>;
    update(id: string, data: Partial<Bag>): Promise<Bag>;
    remove(id: string): Promise<Bag>;
}
