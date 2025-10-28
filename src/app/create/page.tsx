import { createProperty } from "@/app/actions/createProperty/createProperty";
import PropertiesForm from "@/components/propertiesForm";
import { cookies } from 'next/headers'

const Create = async () => {
  const cookieStore = await cookies()
  const isAdmin = !!cookieStore.get('user')

  return (
    <section id="create">
      {isAdmin ? <PropertiesForm labelButton="Crear" sendData={createProperty} />
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

export default Create
