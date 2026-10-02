import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Acesso } from '../../acesso/entities/acesso.entity';

@Entity('fotos')
export class Foto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  arquivo: string; // Caminho da imagem / URL

  @Column({ length: 50, nullable: true })
  tipo: string; // Ex: Exsicata, Planta Viva, Semente, Campo

  @Column({ type: 'date', nullable: true })
  data: Date;

  @Column({ type: 'text', nullable: true })
  descricao: string;

  @ManyToOne(() => Acesso, (acesso) => acesso.fotos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'acesso_id' })
  acesso: Acesso;
}