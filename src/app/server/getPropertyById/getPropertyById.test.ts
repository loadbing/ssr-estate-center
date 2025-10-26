import { GetPropertyByIdUseCase } from '@/core/use-cases/properties/get-property-by-id/getPropertyById.usecase'
import { PropertiesRepository } from '@/core/adapter/http/out/properties/properties.repository'
import { getPropertyById } from './getPropertyById'

jest.mock('@/core/adapter/http/out/properties/properties.repository')
jest.mock('@/core/use-cases/properties/get-property-by-id/getPropertyById.usecase')

describe('getPropertyById', () => {
  const propertyId = '1'

  it('should return a property when use case executes successfully', async () => {
    const mockProperty = { id: propertyId, name: 'Property 1', price: 100, address: 'Street 1' }

    ;(GetPropertyByIdUseCase as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockResolvedValue(mockProperty),
    }))

    const result = await getPropertyById(propertyId)

    expect(result).toEqual(mockProperty)
    expect(GetPropertyByIdUseCase).toHaveBeenCalledTimes(1)
    expect(PropertiesRepository).toHaveBeenCalledTimes(1)
  })

  it('should return an empty object when an error occurs', async () => {
    ;(GetPropertyByIdUseCase as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockRejectedValue(new Error('Unexpected error')),
    }))

    const result = await getPropertyById(propertyId)

    expect(result).toEqual({})
  })
})
