import jwt from 'jsonwebtoken'
import { generateToken } from './generateToken'

describe('generateToken', () => {
  const TEST_SECRET = 'test-secret'

  beforeAll(() => {
    process.env.JWT_SECRET = TEST_SECRET
  })

  it('should return a string token', async () => {
    const token = await generateToken()
    expect(typeof token).toBe('string')
  })

  it('should generate a valid JWT with timestamp payload', async () => {
    const token = await generateToken()
    
    const decoded = jwt.verify(token, TEST_SECRET) as { timestamp: number }

    expect(decoded).toHaveProperty('timestamp')
    expect(typeof decoded.timestamp).toBe('number')
  })
})
