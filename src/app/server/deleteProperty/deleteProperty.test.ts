import { DeletePropertyUseCase } from '@/core/use-cases/properties/delete-property/deleteProperty.usecase'
import { PropertiesRepository } from '@/core/adapter/http/out/properties/properties.repository'
import { deleteProperty } from './deleteProperty'

jest.mock('@/core/adapter/http/out/properties/properties.repository')
jest.mock('@/core/use-cases/properties/delete-property/deleteProperty.usecase')

describe('deleteProperty', () => {
  const propertyId = '1'

  it('should return true when property is deleted successfully', async () => {
    ;(DeletePropertyUseCase as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockResolvedValue(true),
    }))

    const result = await deleteProperty(propertyId)

    expect(result).toBe(true)
    expect(DeletePropertyUseCase).toHaveBeenCalledTimes(1)
    expect(PropertiesRepository).toHaveBeenCalledTimes(1)
  })

  it('should return false when an error occurs', async () => {
    ;(DeletePropertyUseCase as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockRejectedValue(new Error('Unexpected error')),
    }))

    const result = await deleteProperty(propertyId)

    expect(result).toBe(false)
  })
})
