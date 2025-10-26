import { axiosClient } from './axiosClient'

describe('axiosClient', () => {
  it('should use the correct default baseURL', () => {
    expect(axiosClient.defaults.baseURL).toBe(
      process.env.NEXT_PUBLIC_API_URL || 'https://localhost:5001/api'
    )
  })

  it('should set Content-Type header to application/json', () => {
    expect(axiosClient.defaults.headers['Content-Type']).toBe('application/json')
  })
})
