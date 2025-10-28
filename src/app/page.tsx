import { getAllProperties } from "./server/getAllProperties/getAllProperties";
import Loader from "@/components/loader";
import Card from "@/components/card";
import { Property } from "@/core/domain/entities/Property";
import { cookies } from 'next/headers'

import styles from "./app.module.css";
const App = async () => {
  const allProperties = await getAllProperties();
  const cookieStore = await cookies()
  const isAdmin = !!cookieStore.get('user')

  return (
    <section id="app" className={styles.app}>
      <div className={styles.title}>
        <p>Estas son nuestras propiedades disponibles</p>
        <span>¡Encuentra el lugar perfecto para ti!</span>
      </div>
      {allProperties.length ?
        <div className={styles['all-properties']}>
          {isAdmin && <Card key='add' property={{
            images: ['/add.svg']
          } as Property} isAdmin={isAdmin} />}
          {allProperties.map(property => property && <Card key={property.id} property={property} isAdmin={isAdmin} />)}
        </div>
        : <Loader />
      }
    </section>
  );
}


export default App
