import { IPropertiesRepository } from '@/core/domain/interfaces/IPropertiesRepository'
import { DeletePropertyUseCase } from './deleteProperty.usecase'

describe('DeletePropertyUseCase', () => {
  let repository: jest.Mocked<IPropertiesRepository>
  let useCase: DeletePropertyUseCase

  beforeEach(() => {
    repository = {
      getAll: jest.fn(),
      getById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    }
    useCase = new DeletePropertyUseCase(repository)
  })

  it('should call repository.delete and return true when property is deleted successfully', async () => {
    repository.delete.mockResolvedValueOnce(true)

    const result = await useCase.execute('1')

    expect(repository.delete).toHaveBeenCalledWith('1')
    expect(result).toBe(true)
  })
})
