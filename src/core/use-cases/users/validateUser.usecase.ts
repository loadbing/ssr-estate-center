import { IUsersRepository } from '@/core/domain/interfaces/IUsersRepository'
import { User } from '@/core/domain/entities/User'

export class ValidateUserUseCase {
  constructor(private readonly repository: IUsersRepository) {}

  async execute(user: User): Promise<string> {
    const result = await this.repository.validateUser(user)
    if (!result.nickname) throw new Error('Usuario no valido')

    return result.nickname
  }
}
