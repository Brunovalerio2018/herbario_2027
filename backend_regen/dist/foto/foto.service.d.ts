import { Repository } from 'typeorm';
import { Foto } from './entities/foto.entity';
export declare class FotoService {
    private readonly fotoRepo;
    constructor(fotoRepo: Repository<Foto>);
    findAll(): Promise<Foto[]>;
    findOne(id: string): Promise<Foto>;
    create(data: Partial<Foto>): Promise<Foto>;
    update(id: string, data: Partial<Foto>): Promise<Foto>;
    remove(id: string): Promise<Foto>;
}
