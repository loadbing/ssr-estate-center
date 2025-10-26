'use server'

import { PropertiesRepository } from "@/core/adapter/http/out/properties/properties.repository";
import { GetAllPropertiesUseCase } from "@/core/use-cases/properties/get-all-properties/getAllProperties.usecase"

export const getAllProperties = async () => {
  try {
    const propertyRepository = new PropertiesRepository();
    const getAllPropertiesUseCase = new GetAllPropertiesUseCase(propertyRepository);
    const result = await getAllPropertiesUseCase.execute();
    
    return result 
  } catch {    
    return []
  }
}