import { AleloService } from './alelo.service';
import { Alelo } from './entities/alelo.entity';
export declare class AleloController {
    private readonly aleloService;
    constructor(aleloService: AleloService);
    findAll(): Promise<Alelo[]>;
    findOne(id: string): Promise<Alelo>;
    create(data: Partial<Alelo>): Promise<Alelo>;
    update(id: string, data: Partial<Alelo>): Promise<Alelo>;
    remove(id: string): Promise<Alelo>;
}
