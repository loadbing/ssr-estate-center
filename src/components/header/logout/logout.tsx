'use client'

import Cookies from 'js-cookie';

type LogoutProps = {
  nickname: string
}

const Logout = ({ nickname }: LogoutProps) => {
    const deleteCookie = () => {
        Cookies.remove('user');
        window.location.href = '/'
    }
    
    return (<button onClick={deleteCookie}>{nickname} - Cerrar sesión</button>)
}

export default Logout