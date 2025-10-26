import { UpdatePropertyUseCase } from '@/core/use-cases/properties/update-property/updateProperty.usecase'
import { PropertiesRepository } from '@/core/adapter/http/out/properties/properties.repository'
import { Property } from '@/core/domain/entities/Property'
import { updateProperty } from './updateProperty'

jest.mock('@/core/adapter/http/out/properties/properties.repository')
jest.mock('@/core/use-cases/properties/update-property/updateProperty.usecase')

describe('updateProperty', () => {
  const mockProperty: Property = {
    id: '1',
    title: 'Updated House',
    description: 'Updated description',
    price: 400000000,
    address: 'Guarne, Antioquia',
  }

  it('should return true when property is updated successfully', async () => {
    ;(UpdatePropertyUseCase as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockResolvedValue(true),
    }))

    const result = await updateProperty(mockProperty)

    expect(result).toBe(true)
    expect(UpdatePropertyUseCase).toHaveBeenCalledTimes(1)
    expect(PropertiesRepository).toHaveBeenCalledTimes(1)
  })

  it('should return false when an error occurs', async () => {
    ;(UpdatePropertyUseCase as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockRejectedValue(new Error('Unexpected error')),
    }))

    const result = await updateProperty(mockProperty)

    expect(result).toBe(false)
  })
})
