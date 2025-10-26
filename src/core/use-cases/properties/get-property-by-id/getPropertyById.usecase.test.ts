import { IPropertiesRepository } from '@/core/domain/interfaces/IPropertiesRepository'
import { Property } from '@/core/domain/entities/Property'
import { GetPropertyByIdUseCase } from './getPropertyById.usecase'

describe('GetPropertyByIdUseCase', () => {
  let repository: jest.Mocked<IPropertiesRepository>
  let useCase: GetPropertyByIdUseCase
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
    useCase = new GetPropertyByIdUseCase(repository)
  })

  it('should call repository.getById and return a property when found', async () => {
    repository.getById.mockResolvedValueOnce(mockProperty)

    const result = await useCase.execute('123')

    expect(repository.getById).toHaveBeenCalledWith('123')
    expect(result).toEqual(mockProperty)
  })

  it('should throw an error if property is not found', async () => {
    repository.getById.mockResolvedValueOnce({} as Property)

    await expect(useCase.execute('1')).rejects.toThrow('Propiedad no encontrada')
  })
})
