import { getPropertyById } from "@/app/server/getPropertyById/getPropertyById";
import { updateProperty } from "@/app/actions/updateProperty/updateProperty";
import PropertiesForm from "@/components/propertiesForm";

type DetailPageProps = {
  params: Promise<{ id: string }>
}

const Edit = async ({ params }: DetailPageProps) => {
  const { id } = await params;
  const property = await getPropertyById(id)

  return (
    <section id="edit">
      <PropertiesForm defaultValues={property} labelButton="Actualizar" sendData={updateProperty}/>
    </section>
  );
}

export default Edit
