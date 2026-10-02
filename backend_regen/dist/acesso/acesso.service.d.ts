import { Repository } from 'typeorm';
import { Acesso } from './entities/acesso.entity';
export declare class AcessoService {
    private readonly acessoRepo;
    constructor(acessoRepo: Repository<Acesso>);
    findAll(): Promise<Acesso[]>;
    findOne(id: string): Promise<Acesso>;
    findByNumero(numeroAcesso: string): Promise<Acesso>;
    create(data: Partial<Acesso>): Promise<Acesso>;
    update(id: string, data: Partial<Acesso>): Promise<Acesso>;
    remove(id: string): Promise<Acesso>;
}
