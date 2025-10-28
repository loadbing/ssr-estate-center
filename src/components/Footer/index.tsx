'use client'

import Image from "next/image";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image
        key='add-img'
        src='/ec.svg'
        alt=""
        width={50}
        height={50}
      />
    </div>
  );
}

export default Footer
