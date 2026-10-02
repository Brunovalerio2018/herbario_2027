import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, UpdateDateColumn } from 'typeorm';
import { Acesso } from '../../acesso/entities/acesso.entity';

@Entity('alelos')
export class Alelo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'codigo_alelo', length: 100, nullable: true })
  codigoAlelo: string;

  @Column({ length: 100, nullable: true })
  identificador: string;

  @UpdateDateColumn({ name: 'ultima_atualizacao' })
  ultimaAtualizacao: Date;

  @Column({ type: 'text', nullable: true })
  observacoes: string;

  @OneToOne(() => Acesso, (acesso) => acesso.alelo, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'acesso_id' })
  acesso: Acesso;
}