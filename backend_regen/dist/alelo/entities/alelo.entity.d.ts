import { Acesso } from '../../acesso/entities/acesso.entity';
export declare class Alelo {
    id: string;
    codigoAlelo: string;
    identificador: string;
    ultimaAtualizacao: Date;
    observacoes: string;
    acesso: Acesso;
}
