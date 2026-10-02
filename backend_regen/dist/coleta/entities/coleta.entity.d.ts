import { Acesso } from '../../acesso/entities/acesso.entity';
export declare class Coleta {
    id: string;
    data: Date;
    local: string;
    municipio: string;
    estado: string;
    latitude: number;
    longitude: number;
    geom: string;
    coletor: string;
    observacoes: string;
    acesso: Acesso;
}
