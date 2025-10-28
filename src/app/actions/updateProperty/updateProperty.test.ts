import { UpdatePropertyUseCase } from '@/core/use-cases/properties/update-property/updateProperty.usecase'
import { PropertiesRepository } from '@/core/adapter/http/out/properties/properties.repository'
import { updateProperty } from './updateProperty'

jest.mock('@/core/adapter/http/out/properties/properties.repository')
jest.mock('@/core/use-cases/properties/update-property/updateProperty.usecase')

describe('updateProperty', () => {
  const mockFormData: FormData = {} as FormData

  it('should return true when property is updated successfully', async () => {
    ; (UpdatePropertyUseCase as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockResolvedValue(true),
    }))

    const result = await updateProperty(mockFormData)

    expect(result).toBe(true)
    expect(UpdatePropertyUseCase).toHaveBeenCalledTimes(1)
    expect(PropertiesRepository).toHaveBeenCalledTimes(1)
  })

  it('should return false when an error occurs', async () => {
    ; (UpdatePropertyUseCase as jest.Mock).mockImplementation(() => ({
      execute: jest.fn().mockRejectedValue(new Error('Unexpected error')),
    }))

    const result = await updateProperty(mockFormData)

    expect(result).toBe(false)
  })
})
