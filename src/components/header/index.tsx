import Link from "next/link";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">Propiedades</Link>
        <Link href="/login">Iniciar sesión</Link>
      </nav>
    </header>
  );
}
