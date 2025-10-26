import { IPropertiesRepository } from '@/core/domain/interfaces/IPropertiesRepository'
import { Property } from '@/core/domain/entities/Property'
import { UpdatePropertyUseCase } from './updateProperty.usecase'

describe('UpdatePropertyUseCase', () => {
  let repository: jest.Mocked<IPropertiesRepository>
  let useCase: UpdatePropertyUseCase
  const mockProperty: Property = {
    id: '123',
    code: '01',
    name: 'Apartamento',
    address: 'Guarne, Antioquia',
    price: 350000000,
    year: 2025,
    images: [],
    owner: {name: '', phone: ''}
  }

  beforeEach(() => {
    repository = {
      getAll: jest.fn(),
      getById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    }
    useCase = new UpdatePropertyUseCase(repository)
  })

  it('should call repository.update and return true when property is updated successfully', async () => {
    repository.update.mockResolvedValueOnce(mockProperty)

    const result = await useCase.execute(mockProperty)

    expect(repository.update).toHaveBeenCalledWith('123', mockProperty)
    expect(result).toBe(true)
  })

  it('should throw an error if property update fails', async () => {
    repository.update.mockResolvedValueOnce({ ...mockProperty, id: '' })

    await expect(useCase.execute(mockProperty)).rejects.toThrow('Propiedad no actualizada')
  })
})
