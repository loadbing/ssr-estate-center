import { generateToken } from './generateToken'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

jest.mock('jsonwebtoken')
jest.mock('next/headers', () => ({
  cookies: jest.fn(),
}))

describe('generateToken', () => {
  const mockSecret = 'test_secret'

  beforeEach(() => {
    process.env.JWT_SECRET = mockSecret
    jest.clearAllMocks()
  })

  it('debe generar un nuevo token si no existe cookie', async () => {
    ; (cookies as jest.Mock).mockResolvedValue({
      get: jest.fn().mockReturnValue(undefined),
    })

      ; (jwt.sign as jest.Mock).mockReturnValue('nuevo_token')

    const token = await generateToken()
    expect(token).toBe('nuevo_token')
  })

  it('debe devolver el token si es válido', async () => {
    ; (cookies as jest.Mock).mockResolvedValue({
      get: jest.fn().mockReturnValue({ value: 'token_valido' }),
    })

      ; (jwt.verify as jest.Mock).mockReturnValue(true)

    const token = await generateToken()
    expect(token).toBe('token_valido')
  })

  it('debe generar un nuevo token si el existente es inválido', async () => {
    ; (cookies as jest.Mock).mockResolvedValue({
      get: jest.fn().mockReturnValue({ value: 'token_invalido' }),
    })

      ; (jwt.verify as jest.Mock).mockImplementation(() => {
        throw new Error('Token inválido')
      })
      ; (jwt.sign as jest.Mock).mockReturnValue('token_nuevo')

    const token = await generateToken()
    expect(token).toBe('token_nuevo')
  })
})
