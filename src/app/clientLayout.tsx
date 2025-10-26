'use client'

import Cookies from 'js-cookie';
import { useEffect } from 'react'

interface ClientLayoutProps {
  token: string
  children: React.ReactNode
}

export default function ClientLayout({ token, children }: ClientLayoutProps) {
  useEffect(() => {
    if (token) {
      Cookies.set('token', token, {
        expires: 1,
        path: '/',
        secure: true,
        sameSite: 'strict'
      });
    }
  }, [token])

  return <main>{children}</main>
}
