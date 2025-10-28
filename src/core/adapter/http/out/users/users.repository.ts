import { axiosClient } from '@/infrastructure/api/axiosClient'
import { IUsersRepository } from '@/core/domain/interfaces/IUsersRepository'
import { User, UserResponse } from '@/core/domain/entities/User'

export class UsersRepository implements IUsersRepository {
  async validateUser(data: User): Promise<UserResponse> {
    const response = await axiosClient.post<UserResponse>('/users', data)    
    return response.data
  }
}
