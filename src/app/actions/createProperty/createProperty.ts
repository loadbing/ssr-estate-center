'use server'

import { formDataToProperty } from "@/utils/formDataToProperty";
import { PropertiesRepository } from "@/core/adapter/http/out/properties/properties.repository";
import { CreatePropertyUseCase } from "@/core/use-cases/properties/create-property/createProperty.usecase";

export const createProperty = async (formData: FormData) => {
  try {
    const property = formDataToProperty(formData);
    const propertyRepository = new PropertiesRepository();
    const createPropertyUseCase = new CreatePropertyUseCase(propertyRepository);

    return await createPropertyUseCase.execute(property); 
  } catch {
    return false
  }
}