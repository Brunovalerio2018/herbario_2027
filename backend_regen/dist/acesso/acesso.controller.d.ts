import { AcessoService } from './acesso.service';
import { Acesso } from './entities/acesso.entity';
export declare class AcessoController {
    private readonly acessoService;
    constructor(acessoService: AcessoService);
    findAll(): Promise<Acesso[]>;
    findOne(id: string): Promise<Acesso>;
    findByNumero(numeroAcesso: string): Promise<Acesso>;
    create(data: Partial<Acesso>): Promise<Acesso>;
    update(id: string, data: Partial<Acesso>): Promise<Acesso>;
    remove(id: string): Promise<Acesso>;
}
