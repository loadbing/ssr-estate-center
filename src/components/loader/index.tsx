'use client'

import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.styles} />
      <span>Cargando...</span>
    </div>
  )
}

export default Loader
