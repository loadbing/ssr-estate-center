import { IPropertiesRepository } from '@/core/domain/interfaces/IPropertiesRepository'
import { Property } from '@/core/domain/entities/Property'

export class GetAllPropertiesUseCase {
  constructor(private readonly repository: IPropertiesRepository) {}

  async execute(): Promise<Property[]> {
    const property = await this.repository.getAll()
    if (!property.length) throw new Error('Propiedades no encontradas')
      
    return property
  }
}
