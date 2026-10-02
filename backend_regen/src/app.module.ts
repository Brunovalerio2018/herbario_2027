import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './db/ormconfig';

// Módulos do Sistema REGEN
import { EspecieModule } from './especie/especie.module';
import { AcessoModule } from './acesso/acesso.module';
import { ColetaModule } from './coleta/coleta.module';
import { ExsicataModule } from './exsicata/exsicata.module';
import { BagModule } from './bag/bag.module';
import { AleloModule } from './alelo/alelo.module';
import { FotoModule } from './foto/foto.module';

@Module({
  imports: [
    // Puxa as configurações diretamente do ormconfig.ts dentro da pasta db
    TypeOrmModule.forRootAsync({
      useFactory: () => ormconfig.options,
    }),
    EspecieModule,
    AcessoModule,
    ColetaModule,
    ExsicataModule,
    BagModule,
    AleloModule,
    FotoModule,
  ],
})
export class AppModule {}
