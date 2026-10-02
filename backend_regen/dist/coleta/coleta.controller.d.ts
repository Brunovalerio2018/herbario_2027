import { ColetaService } from './coleta.service';
import { Coleta } from './entities/coleta.entity';
export declare class ColetaController {
    private readonly coletaService;
    constructor(coletaService: ColetaService);
    findAll(): Promise<Coleta[]>;
    findOne(id: string): Promise<Coleta>;
    create(data: Partial<Coleta>): Promise<Coleta>;
    update(id: string, data: Partial<Coleta>): Promise<Coleta>;
    remove(id: string): Promise<Coleta>;
}
