import { Especie } from '../../especie/entities/especie.entity';
import { Coleta } from '../../coleta/entities/coleta.entity';
import { Exsicata } from '../../exsicata/entities/exsicata.entity';
import { Foto } from '../../foto/entities/foto.entity';
import { Bag } from '../../bag/entities/bag.entity';
import { Alelo } from '../../alelo/entities/alelo.entity';
export declare class Acesso {
    id: string;
    numeroAcesso: string;
    situacao: string;
    observacoes: string;
    especie: Especie;
    coleta: Coleta;
    exsicata: Exsicata;
    bag: Bag;
    alelo: Alelo;
    fotos: Foto[];
    createdAt: Date;
    updatedAt: Date;
}
