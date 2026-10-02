import { DataSource } from 'typeorm';
import connectionOptions from './ormconfig';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<DataSource> => {
      if (!connectionOptions.isInitialized) {
        return await connectionOptions.initialize();
      }
      return connectionOptions;
    },
  },
];
