export interface Address {
  street: string
  city: string
  country: string
}

export interface Person {
  id: number
  name: string
  email: string
  phone: string
  address: Address
  company: string
  avatar: string
  age: number
  isActive: boolean
  registeredAt: string
}
