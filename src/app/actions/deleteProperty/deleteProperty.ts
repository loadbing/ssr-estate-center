'use server'

import { PropertiesRepository } from "@/core/adapter/http/out/properties/properties.repository";
import { DeletePropertyUseCase } from "@/core/use-cases/properties/delete-property/deleteProperty.usecase";

export const deleteProperty = async (id: string) => {
  try {
    const propertyRepository = new PropertiesRepository();
    const deletePropertyUseCase = new DeletePropertyUseCase(propertyRepository);
    
    return await deletePropertyUseCase.execute(id); 
  } catch {
    return false
  }
}