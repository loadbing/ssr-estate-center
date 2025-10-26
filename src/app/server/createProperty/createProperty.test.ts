import { CreatePropertyUseCase } from '@/core/use-cases/properties/create-property/createProperty.usecase'
import { PropertiesRepository } from '@/core/adapter/http/out/properties/properties.repository'
import { Property } from '@/core/domain/entities/Property'
import { createProperty } from './createProperty'

jest.mock('@/core/adapter/http/out/properties/properties.repository')
jest.mock('@/core/use-cases/properties/create-property/createProperty.usecase')

describe('createProperty', () => {
  const mockProperty: Property = {
    id: '',
    code: '01',
    name: 'Apartamento',
    address: 'Guarne, Antioquia',
    price: 350000000,
    year: 2025,
    images: [],
    owner: {name: '', phone: ''}
  }

  it('should return true when property is created successfully', async () => {
    ;(CreatePropertyUseCase as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockResolvedValue(true),
    }))

    const result = await createProperty(mockProperty)

    expect(result).toBe(true)
    expect(CreatePropertyUseCase).toHaveBeenCalledTimes(1)
    expect(PropertiesRepository).toHaveBeenCalledTimes(1)
  })

  it('should return false when an error occurs', async () => {
    ;(CreatePropertyUseCase as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockRejectedValue(new Error('Unexpected error')),
    }))

    const result = await createProperty(mockProperty)

    expect(result).toBe(false)
  })
})
