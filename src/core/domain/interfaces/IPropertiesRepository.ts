import { Property } from "../entities/Property"

export interface IPropertiesRepository {
  getAll(): Promise<Property[]>
  getById(id: string): Promise<Property>
  create(data: Property): Promise<Property>
  update(id: string, data: Partial<Property>): Promise<Property>
  delete(id: string): Promise<boolean>
}