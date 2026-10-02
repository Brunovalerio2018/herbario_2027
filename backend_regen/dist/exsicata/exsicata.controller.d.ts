import { ExsicataService } from './exsicata.service';
import { Exsicata } from './entities/exsicata.entity';
export declare class ExsicataController {
    private readonly exsicataService;
    constructor(exsicataService: ExsicataService);
    findAll(): Promise<Exsicata[]>;
    findOne(id: string): Promise<Exsicata>;
    create(data: Partial<Exsicata>): Promise<Exsicata>;
    update(id: string, data: Partial<Exsicata>): Promise<Exsicata>;
    remove(id: string): Promise<Exsicata>;
}
