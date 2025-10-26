'use client'

import { useEffect } from 'react'

interface ClientLayoutProps {
  token: string
  children: React.ReactNode
}

export default function ClientLayout({ token, children }: ClientLayoutProps) {
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    }
  }, [token])

  return <main>{children}</main>
}
