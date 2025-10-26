import { IPropertiesRepository } from '@/core/domain/interfaces/IPropertiesRepository'

export class DeletePropertyUseCase {
  constructor(private readonly repository: IPropertiesRepository) {}

  async execute(id: string): Promise<boolean> {
    return await this.repository.delete(id)
  }
}
