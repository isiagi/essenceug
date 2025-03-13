export type OrderStatus = "processing" | "shipped" | "delivered" | "cancelled"

export type OrderItem = {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export type Order = {
  id: string
  date: string
  status: OrderStatus
  total: number
  items: OrderItem[]
  shippingAddress: {
    name: string
    address: string
    city: string
    postalCode: string
    country: string
  }
  trackingNumber?: string
  estimatedDelivery?: string
  paymentMethod: string
  canCancel: boolean
}

