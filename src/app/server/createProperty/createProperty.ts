'use server'

import { PropertiesRepository } from "@/core/adapter/http/out/properties/properties.repository";
import { Property } from "@/core/domain/entities/Property";
import { CreatePropertyUseCase } from "@/core/use-cases/properties/create-property/createProperty.usecase";

export const createProperty = async (property: Property) => {
  try {
    const propertyRepository = new PropertiesRepository();
    const createPropertyUseCase = new CreatePropertyUseCase(propertyRepository);

    return await createPropertyUseCase.execute(property); 
  } catch {
    return false
  }
}