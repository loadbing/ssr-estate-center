import Link from "next/link";
import Image from "next/image";
import { cookies } from 'next/headers'
import Logout from "./logout/logout";

import styles from "./header.module.css";

const Header = async () => {
  const cookieStore = await cookies()
  const nickname = cookieStore.get('user')

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

        {!nickname?.value ?
          <Link href="/login">Iniciar sesión</Link>
          : <Logout nickname={nickname.value} />}

      </nav>
    </header>
  );
}

export default Header
