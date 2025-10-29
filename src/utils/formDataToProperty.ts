import { v4 as uuidv4 } from "uuid";
import { Property } from "@/core/domain/entities/Property";

export const formDataToProperty = (formData: FormData): Property => {
    const id = formData.get("id") as string || '';
    const code = formData.get("code") as string || uuidv4();
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;
    const price = Number(formData.get("price"));
    const year = Number(formData.get("year"));
    const allImages = formData.get("images") as string;
    const ownerName = formData.get("owner.name") as string;
    const ownerPhone = formData.get("owner.phone") as string;

    const images: string[] = JSON.parse(allImages);

    return {
        id,
        code,
        name,
        address,
        price,
        year,
        images,
        owner: {
            name: ownerName,
            phone: ownerPhone,
        },
    };
}
