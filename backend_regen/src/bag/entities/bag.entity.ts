import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Acesso } from '../../acesso/entities/acesso.entity';

@Entity('bag')
export class Bag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 150, nullable: true })
  localizacao: string;

  @Column({ length: 100, nullable: true })
  situacao: string;

  @Column({ name: 'data_avaliacao', type: 'date', nullable: true })
  dataAvaliacao: Date;

  @Column({ type: 'text', nullable: true })
  observacoes: string;

  @OneToOne(() => Acesso, (acesso) => acesso.bag, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'acesso_id' })
  acesso: Acesso;
}
