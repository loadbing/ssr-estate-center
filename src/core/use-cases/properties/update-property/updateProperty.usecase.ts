import { IPropertiesRepository } from '@/core/domain/interfaces/IPropertiesRepository'
import { Property } from '@/core/domain/entities/Property'

export class UpdatePropertyUseCase {
  constructor(private readonly repository: IPropertiesRepository) {}

  async execute(property: Property): Promise<boolean> {
    const result = await this.repository.update(property.id, property)
    if (!result.id) throw new Error('Propiedad no actualizada')

    return true
  }
}
