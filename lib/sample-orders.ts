import type { Order } from "@/types/order"

export const sampleOrders: Order[] = [
  {
    id: "ORD-2023-1001",
    date: "2025-03-10T14:30:00Z",
    status: "processing",
    total: 215.0,
    items: [
      {
        id: "midnight-oud",
        name: "Midnight Oud",
        price: 150.0,
        quantity: 1,
        image: "/placeholder.svg?height=600&width=600",
      },
      {
        id: "velvet-rose",
        name: "Velvet Rose",
        price: 95.0,
        quantity: 1,
        image: "/placeholder.svg?height=600&width=600",
      },
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main Street",
      city: "New York",
      postalCode: "10001",
      country: "United States",
    },
    estimatedDelivery: "2025-03-15",
    paymentMethod: "Credit Card (ending in 4242)",
    canCancel: true,
  },
  {
    id: "ORD-2023-0987",
    date: "2025-03-05T09:15:00Z",
    status: "shipped",
    total: 135.0,
    items: [
      {
        id: "dark-vanilla",
        name: "Dark Vanilla",
        price: 135.0,
        quantity: 1,
        image: "/placeholder.svg?height=600&width=600",
      },
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main Street",
      city: "New York",
      postalCode: "10001",
      country: "United States",
    },
    trackingNumber: "TRK123456789",
    estimatedDelivery: "2025-03-12",
    paymentMethod: "Credit Card (ending in 4242)",
    canCancel: false,
  },
  {
    id: "ORD-2023-0875",
    date: "2025-02-20T11:45:00Z",
    status: "delivered",
    total: 265.0,
    items: [
      {
        id: "amber-elixir",
        name: "Amber Elixir",
        price: 120.0,
        quantity: 1,
        image: "/placeholder.svg?height=600&width=600",
      },
      {
        id: "ocean-mist",
        name: "Ocean Mist",
        price: 85.0,
        quantity: 1,
        image: "/placeholder.svg?height=600&width=600",
      },
      {
        id: "lavender-fields",
        name: "Lavender Fields",
        price: 80.0,
        quantity: 1,
        image: "/placeholder.svg?height=600&width=600",
      },
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main Street",
      city: "New York",
      postalCode: "10001",
      country: "United States",
    },
    trackingNumber: "TRK987654321",
    paymentMethod: "Credit Card (ending in 4242)",
    canCancel: false,
  },
  {
    id: "ORD-2023-0754",
    date: "2025-02-10T16:20:00Z",
    status: "cancelled",
    total: 95.0,
    items: [
      {
        id: "velvet-rose",
        name: "Velvet Rose",
        price: 95.0,
        quantity: 1,
        image: "/placeholder.svg?height=600&width=600",
      },
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main Street",
      city: "New York",
      postalCode: "10001",
      country: "United States",
    },
    paymentMethod: "Credit Card (ending in 4242)",
    canCancel: false,
  },
]

