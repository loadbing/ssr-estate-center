import { getPropertyById } from "@/app/server/getPropertyById/getPropertyById";
import { updateProperty } from "@/app/actions/updateProperty/updateProperty";
import PropertiesForm from "@/components/propertiesForm";
import { cookies } from 'next/headers'

type DetailPageProps = {
  params: Promise<{ id: string }>
}

const Edit = async ({ params }: DetailPageProps) => {
  const { id } = await params;
  const property = await getPropertyById(id)
  const cookieStore = await cookies()
  const isAdmin = !!cookieStore.get('user')

  return (
    <section id="edit">
      {isAdmin ? <PropertiesForm defaultValues={property} labelButton="Actualizar" sendData={updateProperty} />
        : <span style={{
          display: 'block',
          margin: '50px',
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 700
        }}>
          🔒No tienes permisos suficientes para realizar esta acción.
        </span>
      }
    </section>
  );
}

export default Edit
