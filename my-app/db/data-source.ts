import 'dotenv/config';
import { DataSource } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  migrations: ['db/migrations/*.ts'],
  migrationsTableName: 'migrations',
  synchronize: false,
});
