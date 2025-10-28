import { cookies } from 'next/headers'
import LoginForm from "./loginForm";
import { validateUser } from '../server/validateUser/validateUser';

const Login = async () => {
  const cookieStore = await cookies()
  const isAdmin = !!cookieStore.get('user')
  
  return (
    <section id="login">
      {isAdmin ? <span style={{
        display: 'block',
        margin: '50px',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 700
      }}>
        🔓Ya tienes permisos suficientes.
      </span>
        : <LoginForm validate={validateUser}/>
      }
    </section>
  );
}

export default Login
