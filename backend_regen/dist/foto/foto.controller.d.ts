import { FotoService } from './foto.service';
import { Foto } from './entities/foto.entity';
export declare class FotoController {
    private readonly fotoService;
    constructor(fotoService: FotoService);
    findAll(): Promise<Foto[]>;
    findOne(id: string): Promise<Foto>;
    create(data: Partial<Foto>): Promise<Foto>;
    update(id: string, data: Partial<Foto>): Promise<Foto>;
    remove(id: string): Promise<Foto>;
}
