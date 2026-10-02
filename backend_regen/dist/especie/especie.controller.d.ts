import { EspecieService } from './especie.service';
import { Especie } from './entities/especie.entity';
export declare class EspecieController {
    private readonly especieService;
    constructor(especieService: EspecieService);
    findAll(): Promise<Especie[]>;
    findOne(id: string): Promise<Especie>;
    create(data: Partial<Especie>): Promise<Especie>;
    update(id: string, data: Partial<Especie>): Promise<Especie>;
    remove(id: string): Promise<Especie>;
}
