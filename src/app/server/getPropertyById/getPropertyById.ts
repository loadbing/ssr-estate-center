'use server'

import { PropertiesRepository } from "@/core/adapter/http/out/properties/properties.repository";
import { GetPropertyByIdUseCase } from "@/core/use-cases/properties/get-property-by-id/getPropertyById.usecase"

export const getPropertyById = async (id: string) => {
  try {
    const propertyRepository = new PropertiesRepository();
    const getPropertyByIdUseCase = new GetPropertyByIdUseCase(propertyRepository);
    const result = await getPropertyByIdUseCase.execute(id);

    return result 
  } catch {
    return {}
  }
}