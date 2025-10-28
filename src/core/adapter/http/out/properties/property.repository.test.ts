import { PropertiesRepository } from './properties.repository'
import { axiosClient } from '@/infrastructure/api/axiosClient'
import { Property } from '@/core/domain/entities/Property'

jest.mock('@/infrastructure/api/axiosClient', () => ({
  axiosClient: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  },
}))

describe('PropertiesRepository', () => {
  let repository: PropertiesRepository
  const mockProperty: Property = {
    id: '',
    code: '01',
    name: 'Beautiful House',
    address: 'Guarne, Antioquia',
    price: 350000000,
    year: 2025,
    images: [],
    owner: {name: '', phone: ''}
  }

  beforeEach(() => {
    repository = new PropertiesRepository()
    jest.clearAllMocks()
  })

  it('should fetch all properties', async () => {
    ;(axiosClient.get as jest.Mock).mockResolvedValueOnce({ data: [mockProperty] })

    const result = await repository.getAll()

    expect(axiosClient.get).toHaveBeenCalledWith('/properties')
    expect(result).toEqual([mockProperty])
  })

  it('should fetch a property by id', async () => {
    ;(axiosClient.get as jest.Mock).mockResolvedValueOnce({ data: mockProperty })

    const result = await repository.getById('1')

    expect(axiosClient.get).toHaveBeenCalledWith('/properties/1')
    expect(result).toEqual(mockProperty)
  })

  it('should create a property', async () => {
    ;(axiosClient.post as jest.Mock).mockResolvedValueOnce({ data: mockProperty })

    const result = await repository.create(mockProperty)

    expect(axiosClient.post).toHaveBeenCalledWith('/properties', mockProperty)
    expect(result).toEqual(mockProperty)
  })

  it('should update a property', async () => {
    ;(axiosClient.put as jest.Mock).mockResolvedValueOnce({ data: '123' })

    const result = await repository.update('1', { name: 'Casa actualizada' })

    expect(axiosClient.put).toHaveBeenCalledWith('/properties/1', { name: 'Casa actualizada' })
    expect(result).toEqual('123')
  })

  it('should delete a property', async () => {
    ;(axiosClient.delete as jest.Mock).mockResolvedValueOnce({})

    const result = await repository.delete('1')

    expect(axiosClient.delete).toHaveBeenCalledWith('/properties/1')
    expect(result).toBe(true)
  })
})
