import { Acesso } from '../../acesso/entities/acesso.entity';
export declare class Bag {
    id: string;
    localizacao: string;
    situacao: string;
    dataAvaliacao: Date;
    observacoes: string;
    acesso: Acesso;
}
