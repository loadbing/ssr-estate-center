import { IPropertiesRepository } from '@/core/domain/interfaces/IPropertiesRepository'
import { Property } from '@/core/domain/entities/Property'
import { GetAllPropertiesUseCase } from './getAllProperties.usecase'

describe('GetAllPropertiesUseCase', () => {
  let repository: jest.Mocked<IPropertiesRepository>
  let useCase: GetAllPropertiesUseCase
  const mockProperty: Property = {
    id: '1',
    title: 'Apartamento',
    description: 'Apartamento de lujo',
    price: 350000000,
    address: 'Guarne, Antioquia',
  }

  beforeEach(() => {
    repository = {
      getAll: jest.fn(),
      getById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    }
    useCase = new GetAllPropertiesUseCase(repository)
  })

  it('should call repository.getAll and return all properties successfully', async () => {
    repository.getAll.mockResolvedValueOnce([mockProperty])

    const result = await useCase.execute()

    expect(repository.getAll).toHaveBeenCalled()
    expect(result).toEqual([mockProperty])
  })

  it('should throw an error if no properties are found', async () => {
    repository.getAll.mockResolvedValueOnce([])

    await expect(useCase.execute()).rejects.toThrow('Propiedades no encontradas')
  })
})
