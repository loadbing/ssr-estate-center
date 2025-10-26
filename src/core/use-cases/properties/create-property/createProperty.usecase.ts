import { IPropertiesRepository } from '@/core/domain/interfaces/IPropertiesRepository'
import { Property } from '@/core/domain/entities/Property'

export class CreatePropertyUseCase {
  constructor(private readonly repository: IPropertiesRepository) {}

  async execute(property: Property): Promise<boolean> {
    const result = await this.repository.create(property)
    if (!result.id) throw new Error('Propiedad no creada')

    return true
  }
}
