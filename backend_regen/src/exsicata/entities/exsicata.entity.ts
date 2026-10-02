import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Acesso } from '../../acesso/entities/acesso.entity';

@Entity('exsicatas')
export class Exsicata {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'numero_registro', length: 100, unique: true })
  numeroRegistro: string; // Registro no Herbário CNPO

  @Column({ length: 100, default: 'Herbário CNPO' })
  herbario: string;

  @Column({ type: 'date', nullable: true })
  data: Date;

  @Column({ length: 150, nullable: true })
  responsavel: string;

  @Column({ type: 'text', nullable: true })
  observacoes: string;

  @OneToOne(() => Acesso, (acesso) => acesso.exsicata, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'acesso_id' })
  acesso: Acesso;
}