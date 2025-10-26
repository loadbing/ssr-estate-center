import axios from 'axios'
import { cookies } from 'next/headers'

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://localhost:5001/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use(async (config) => {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value || ''  
  config.headers!['Authorization'] = `Bearer ${token}`
  
  return config
}, (error) => {
  return Promise.reject(error)
})
