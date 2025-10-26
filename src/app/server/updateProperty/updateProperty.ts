'use server'

import { PropertiesRepository } from "@/core/adapter/http/out/properties/properties.repository";
import { Property } from "@/core/domain/entities/Property";
import { UpdatePropertyUseCase } from "@/core/use-cases/properties/update-property/updateProperty.usecase";

export const updateProperty = async (property: Property) => {
  try {
    const propertyRepository = new PropertiesRepository();
    const updatePropertyUseCase = new UpdatePropertyUseCase(propertyRepository);
    
    return  await updatePropertyUseCase.execute(property); 
  } catch {
    return false
  }
}