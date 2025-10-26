import { GetAllPropertiesUseCase } from '@/core/use-cases/properties/get-all-properties/getAllProperties.usecase'
import { PropertiesRepository } from '@/core/adapter/http/out/properties/properties.repository'
import { getAllProperties } from './getAllProperties'

jest.mock('@/core/adapter/http/out/properties/properties.repository')
jest.mock('@/core/use-cases/properties/get-all-properties/getAllProperties.usecase')

describe('getAllProperties', () => {
  it('should return properties when use case executes successfully', async () => {
    const mockProperties = [
      { id: '1', name: 'Property 1', price: 100, address: 'Street 1' },
      { id: '2', name: 'Property 2', price: 200, address: 'Street 2' },
    ]

    ;(GetAllPropertiesUseCase as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockResolvedValue(mockProperties),
    }))

    const result = await getAllProperties()

    expect(result).toEqual(mockProperties)
    expect(GetAllPropertiesUseCase).toHaveBeenCalledTimes(1)
    expect(PropertiesRepository).toHaveBeenCalledTimes(1)
  })

  it('should return an empty array when an error occurs', async () => {
    ;(GetAllPropertiesUseCase as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockRejectedValue(new Error('Unexpected error')),
    }))

    const result = await getAllProperties()

    expect(result).toEqual([])
  })
})
