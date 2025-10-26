import { axiosClient } from '@/infrastructure/api/axiosClient'
import { Property } from '@/core/domain/entities/Property'
import { IPropertiesRepository } from '@/core/domain/interfaces/IPropertiesRepository'

export class PropertiesRepository implements IPropertiesRepository {
  async getAll(): Promise<Property[]> {
    console.log(process.env.NEXT_PUBLIC_API_URL);
    
    const response = await axiosClient.get<Property[]>('/properties')
    console.log(response);
    
    return response.data
  }

  async getById(id: string): Promise<Property> {
    const response = await axiosClient.get<Property>(`/properties/${id}`)
    return response.data
  }

  async create(data: Property): Promise<Property> {
    const response = await axiosClient.post<Property>('/properties', data)
    return response.data
  }

  async update(id: string, data: Partial<Property>): Promise<Property> {
    const response = await axiosClient.put<Property>(`/properties/${id}`, data)
    return response.data
  }

  async delete(id: string): Promise<boolean> {
    await axiosClient.delete(`/properties/${id}`)

    return true;
  }
}
