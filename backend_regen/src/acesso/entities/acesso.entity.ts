import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Especie } from '../../especie/entities/especie.entity';
import { Coleta } from '../../coleta/entities/coleta.entity';
import { Exsicata } from '../../exsicata/entities/exsicata.entity';
import { Foto } from '../../foto/entities/foto.entity';
import { Bag } from '../../bag/entities/bag.entity';
import { Alelo } from '../../alelo/entities/alelo.entity';

@Entity('acessos')
export class Acesso {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'numero_acesso', unique: true, length: 50 })
  numeroAcesso: string;

  @Column({ length: 100, nullable: true })
  situacao: string;

  @Column({ type: 'text', nullable: true })
  observacoes: string;

  @ManyToOne(() => Especie, (especie) => especie.acessos, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'especie_id' })
  especie: Especie;

  @OneToOne(() => Coleta, (coleta) => coleta.acesso, { cascade: true })
  coleta: Coleta;

  @OneToOne(() => Exsicata, (exsicata) => exsicata.acesso, { cascade: true })
  exsicata: Exsicata;

  @OneToOne(() => Bag, (bag) => bag.acesso, { cascade: true })
  bag: Bag;

  @OneToOne(() => Alelo, (alelo) => alelo.acesso, { cascade: true })
  alelo: Alelo;

  @OneToMany(() => Foto, (foto) => foto.acesso, { cascade: true })
  fotos: Foto[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}