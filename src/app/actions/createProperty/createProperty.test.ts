import { CreatePropertyUseCase } from '@/core/use-cases/properties/create-property/createProperty.usecase'
import { PropertiesRepository } from '@/core/adapter/http/out/properties/properties.repository'
import { createProperty } from './createProperty'

jest.mock('@/core/adapter/http/out/properties/properties.repository')
jest.mock('@/core/use-cases/properties/create-property/createProperty.usecase')

jest.mock('@/utils/formDataToProperty', () => ({
  formDataToProperty: jest.fn(() => ({
    id: 'mock-id',
    code: 'mock-code',
    name: 'Mock Property',
    address: '123 Mock Street',
    price: 100000,
    year: 2023,
    images: [],
    owner: { name: 'Mock Owner', phone: '1234567890' },
  })),
}));

describe('createProperty', () => {
  const mockFormData: FormData = {} as FormData

  it('should return true when property is created successfully', async () => {
    ;(CreatePropertyUseCase as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockResolvedValue(true),
    }))

    const result = await createProperty(mockFormData)

    expect(result).toBe(true)
    expect(CreatePropertyUseCase).toHaveBeenCalledTimes(1)
    expect(PropertiesRepository).toHaveBeenCalledTimes(1)
  })

  it('should return false when an error occurs', async () => {
    ;(CreatePropertyUseCase as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockRejectedValue(new Error('Unexpected error')),
    }))

    const result = await createProperty(mockFormData)

    expect(result).toBe(false)
  })
})
