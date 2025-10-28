'use client'

import Cookies from 'js-cookie';
import { useEffect } from 'react'

interface ClientLayoutProps {
  token: string
  children: React.ReactNode
}

export default function ClientLayout({ token, children }: ClientLayoutProps) {
  useEffect(() => {
    const tokenValue = Cookies.get('token');
    if (token && tokenValue !== token) {
      Cookies.set('token', token, {
        expires: 1,
        path: '/',
        secure: true,
        sameSite: 'strict'
      });

      window.location.reload()
    }
  }, [token])

  return <main>{children}</main>
}
