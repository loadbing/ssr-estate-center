'use server'

import { formDataToUser } from "@/app/utils/formDataToUser";
import { UsersRepository } from "@/core/adapter/http/out/users/users.repository";
import { ValidateUserUseCase } from "@/core/use-cases/users/validateUser.usecase";

export const validateUser = async (formData: FormData) => {
  try {
    const user = formDataToUser(formData);        
    const usersRepository = new UsersRepository();
    const validateUserUseCase = new ValidateUserUseCase(usersRepository);
    
    return await validateUserUseCase.execute(user); 
  } catch {
    return ''
  }
}