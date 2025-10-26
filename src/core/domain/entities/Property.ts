export type Property = {
  id: string
  code: string
  name: string
  address: string
  price: number
  year: number
  images: string[]
  owner: {
    name: string
    phone: string
  }
}
