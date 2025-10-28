'use server'

import { formDataToProperty } from "@/app/utils/formDataToProperty";
import { PropertiesRepository } from "@/core/adapter/http/out/properties/properties.repository";
import { UpdatePropertyUseCase } from "@/core/use-cases/properties/update-property/updateProperty.usecase";

export const updateProperty = async (formData: FormData) => {
  try {
    const property = formDataToProperty(formData);    
    const propertyRepository = new PropertiesRepository();
    const updatePropertyUseCase = new UpdatePropertyUseCase(propertyRepository);

    return await updatePropertyUseCase.execute(property); 
  } catch {
    return false
  }
}