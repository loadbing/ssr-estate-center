import { IPropertiesRepository } from '@/core/domain/interfaces/IPropertiesRepository'
import { Property } from '@/core/domain/entities/Property'
import { CreatePropertyUseCase } from './createProperty.usecase'


describe('CreatePropertyUseCase', () => {
  let repository: jest.Mocked<IPropertiesRepository>
  let useCase: CreatePropertyUseCase
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
    useCase = new CreatePropertyUseCase(repository)
  })

  it('should call repository.create and return true when property is created successfully', async () => {
    repository.create.mockResolvedValueOnce(mockProperty)

    const result = await useCase.execute(mockProperty)

    expect(repository.create).toHaveBeenCalledWith(mockProperty)
    expect(result).toBe(true)
  })

  it('should throw an error if property creation fails', async () => {
    repository.create.mockResolvedValueOnce({ ...mockProperty, id: '' })

    await expect(useCase.execute(mockProperty)).rejects.toThrow('Propiedad no creada')
  })
})
