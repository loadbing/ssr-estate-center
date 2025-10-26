import jwt from 'jsonwebtoken'

export const generateToken = () => {
  const SECRET_KEY = process.env.JWT_SECRET
  if (!SECRET_KEY) throw new Error('JWT_SECRET is not defined')

  const payload = { timestamp: Date.now() }
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })

  return token
}
