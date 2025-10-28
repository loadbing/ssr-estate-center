import { getAllProperties } from "./server/getAllProperties/getAllProperties";
import Loader from "@/components/Loader";
import Card from "@/components/Card";
import { Property } from "@/core/domain/entities/Property";

import styles from "./home.module.css";

export default async function Home() {
  const allProperties = await getAllProperties();

  return (
    <section id="home" className={styles.home}>
      <div className={styles.title}>
        <p>Estas son nuestras propiedades disponibles</p>
        <span>¡Encuentra el lugar perfecto para ti!</span>
      </div>
      {allProperties.length ?
        <div className={styles['all-properties']}>
          <Card key='add' property={{
            images: ['/add.svg']
          } as Property} />
          {allProperties.map(property => property && <Card key={property.id} property={property} />)}
        </div>
        : <Loader />
      }
    </section>
  );
}
