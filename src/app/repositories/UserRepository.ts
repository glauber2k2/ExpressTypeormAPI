import { AppDataSource } from '../../database/data-source'
import User from '../entities/User'
import IUser from '../interfaces/IUser'

const userRepository = AppDataSource.getRepository(User)

const getUsers = (): Promise<IUser[]> => {
  return userRepository.find()
}

export default { getUsers }
