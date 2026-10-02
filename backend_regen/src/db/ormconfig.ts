import * as dotenv from 'dotenv';
import { join } from 'path';
import { DataSource } from 'typeorm';

dotenv.config();

const connectionOptions = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
  synchronize: false,
  dropSchema: false,
  logging: ['warn', 'error'],
  migrations: [join(__dirname, '/migrations/*{.ts,.js}')],
});

export default connectionOptions;
