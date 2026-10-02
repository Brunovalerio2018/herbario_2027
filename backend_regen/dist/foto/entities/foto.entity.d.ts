import { Acesso } from '../../acesso/entities/acesso.entity';
export declare class Foto {
    id: string;
    arquivo: string;
    tipo: string;
    data: Date;
    descricao: string;
    acesso: Acesso;
}
