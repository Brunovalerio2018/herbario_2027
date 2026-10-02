import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Acesso } from '../../acesso/entities/acesso.entity';

@Entity('especies')
export class Especie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  genero: string;

  @Column({ length: 100 })
  especie: string;

  @Column({ length: 100, nullable: true })
  familia: string;

  @Column({ name: 'nome_comum', length: 150, nullable: true })
  nomeComum: string;

  @OneToMany(() => Acesso, (acesso) => acesso.especie)
  acessos: Acesso[];
}
