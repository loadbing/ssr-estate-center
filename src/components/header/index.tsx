import Link from "next/link";
import Image from "next/image";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        key='add-img'
        src='/ec.svg'
        alt="ec"
        width={80}
        height={80}
      />
      <nav className={styles.nav}>
        <Link href="/">Propiedades</Link>
        <Link href="/login">Iniciar sesión</Link>
      </nav>
    </header>
  );
}

export default Header
