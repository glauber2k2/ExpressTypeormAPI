import 'reflect-metadata'
import { DataSource } from 'typeorm'
import User from '../app/entities/User'
import { CreateUsersTable1707762407288 } from './migrations/1707762407288-CreateUsersTable'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '32144145',
  database: 'project_typeorm',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [CreateUsersTable1707762407288],
  subscribers: [],
})
