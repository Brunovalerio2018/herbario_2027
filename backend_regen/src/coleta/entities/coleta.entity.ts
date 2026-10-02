import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Acesso } from '../../acesso/entities/acesso.entity';

@Entity('coletas')
export class Coleta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date', nullable: true })
  data: Date;

  @Column({ length: 255, nullable: true })
  local: string;

  @Column({ length: 100, nullable: true })
  municipio: string;

  @Column({ length: 2, nullable: true })
  estado: string; // UF: RS, SC, etc.

  @Column({ type: 'decimal', precision: 10, scale: 8, nullable: true })
  latitude: number;

  @Column({ type: 'decimal', precision: 11, scale: 8, nullable: true })
  longitude: number;

  // PostGIS: Armazena o ponto geográfico (Point, WGS84 - SRID 4326)
  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: true,
  })
  geom: string;

  @Column({ length: 150, nullable: true })
  coletor: string;

  @Column({ type: 'text', nullable: true })
  observacoes: string;

  @OneToOne(() => Acesso, (acesso) => acesso.coleta, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'acesso_id' })
  acesso: Acesso;
}
