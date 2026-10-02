import { Acesso } from '../../acesso/entities/acesso.entity';
export declare class Especie {
    id: string;
    genero: string;
    especie: string;
    familia: string;
    nomeComum: string;
    acessos: Acesso[];
}
