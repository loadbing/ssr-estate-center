import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

export const generateToken = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value || ''  
  const SECRET_KEY = process.env.JWT_SECRET

  if (!SECRET_KEY) throw new Error('JWT_SECRET is not defined')

  if (token) {
    try {
      jwt.verify(token, SECRET_KEY)
      return token
    } catch {
      console.log('Token expirado, se generará uno nuevo')
    }
  }

  const payload = { timestamp: Date.now() }
  const newToken = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })

  return newToken
}


