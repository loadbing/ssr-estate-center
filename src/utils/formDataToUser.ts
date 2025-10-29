import { User } from "@/core/domain/entities/User";

export const formDataToUser = (formData: FormData): User => {
    const email = formData.get("email") as string || '';
    const password = formData.get("password") as string || '';

    return {email, password};
}
