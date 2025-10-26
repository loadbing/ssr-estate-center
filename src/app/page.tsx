import { getAllProperties } from "./server/getAllProperties/getAllProperties";

import styles from "./home.module.css";

export default async function Home() {
  const allProperties = await getAllProperties();
  
  return (allProperties && 
    <div className={styles.home}>
      <section id="home" className={styles['section-home']}>
        {allProperties.map(property => property && <div key={property.id}>{property.name} {property.price}</div>)}
      </section>
    </div>
  );
}
