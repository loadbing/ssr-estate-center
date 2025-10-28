'use client'

import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { Property } from "@/core/domain/entities/Property";
import { useRouter } from "next/navigation";
import { compressFileToBase64 } from "@/app/utils/compressFile";
import Loader from "../loader";

import styles from "./propertiesForm.module.css";

type PropertiesFormProps = {
  defaultValues?: Property,
  labelButton?: string,
  sendData: (formData: FormData) => Promise<boolean>
}

const PropertiesForm = ({ defaultValues, labelButton, sendData }: PropertiesFormProps) => {
  const [loading, setLoading] = useState(false);
  const [newImages, setNewImages] = useState(defaultValues?.images || []);
  const router = useRouter();

  const { register, formState: { errors } } = useForm<Property>({
    defaultValues,
  });

  const handleAction = async (formData: FormData) => {
    setLoading(true)

    formData.append("id", defaultValues?.id || '');
    formData.append("images", JSON.stringify(newImages));

    if (await sendData(formData)) {
      router.push('/');
    }

    setLoading(false)
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const base64Images: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const base64 = await compressFileToBase64(files[i], 0.7, 800);
      base64Images.push(base64);
    }

    setNewImages(base64Images);
  };

  return (
    !loading ? <div className={styles['properties-form']}>
      {labelButton === 'Actualizar' ? <p>
        Actualizar propiedad <br />
        <strong>{`#${defaultValues?.code || ''}`}</strong>
      </p> : <p>Crear propiedad</p>}

      <form action={handleAction}>
        <div>
          <label>Nombre de la propiedad</label>
          <input {...register("name", { required: "El nombre de la propiedad es un campo requerido" })} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>Dirección</label>
          <input {...register("address", { required: "La dirección de la propiedad es un campo requerido" })} />
          {errors.address && <p>{errors.address.message}</p>}
        </div>
        <div>
          <label>Valor</label>
          <input
            type="number"
            {...register("price", { required: "El valor de la propiedad es un campo requerido", valueAsNumber: true })}
          />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <div>
          <label>Año de fundación</label>
          <input
            type="number"
            {...register("year", { required: "El año de fundación es un campo requerido", valueAsNumber: true })}
          />
          {errors.year && <p>{errors.year.message}</p>}
        </div>
        <div>
          <label>Subir Imágenes</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
          {errors.images && <p>{errors.images.message}</p>}
        </div>
        <div>
          <label>Nombre de propietario</label>
          <input {...register("owner.name", { required: "El nombre del propietario es un campo requerido" })} />
          {errors.owner?.name && <p>{errors.owner.name.message}</p>}
        </div>

        <div>
          <label>Teléfono de propietario</label>
          <input {...register("owner.phone", { required: "El teléfono del propietario es un campo requerido" })} />
          {errors.owner?.phone && <p>{errors.owner.phone.message}</p>}
        </div>

        <button type="submit">{labelButton ?? 'Enviar'}</button>
      </form>
    </div> : <Loader />
  );
}

export default PropertiesForm

