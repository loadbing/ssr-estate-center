import { IPropertiesRepository } from '@/core/domain/interfaces/IPropertiesRepository'
import { Property } from '@/core/domain/entities/Property'

export class GetPropertyByIdUseCase {
  constructor(private readonly repository: IPropertiesRepository) {}

  async execute(id: string): Promise<Property> {
    const property = await this.repository.getById(id)
    if (!property.id) throw new Error('Propiedad no encontrada')

    return property
  }
}
