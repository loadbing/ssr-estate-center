import { User, UserResponse } from "../entities/User"

export interface IUsersRepository {
  validateUser(data: User): Promise<UserResponse>
}