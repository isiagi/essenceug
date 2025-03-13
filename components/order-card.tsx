"use client"

import Link from "next/link"
import { ChevronRight, Package } from "lucide-react"
import type { Order } from "@/types/order"
import { formatDate } from "@/lib/date-utils"
import { formatPrice } from "@/lib/utils"
import { OrderStatusBadge } from "@/components/order-status-badge"
import { Button } from "@/components/ui/button"

interface OrderCardProps {
  order: Order
  onCancel: (orderId: string) => void
}

export function OrderCard({ order, onCancel }: OrderCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden mb-4">
      <div className="bg-neutral-50 px-4 py-3 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-2">
            <Package className="h-4 w-4 text-neutral-500" />
            <span className="font-medium">Order #{order.id}</span>
          </div>
          <div className="text-sm text-neutral-500">Placed on {formatDate(order.date)}</div>
        </div>
        <OrderStatusBadge status={order.status} />
      </div>

      <div className="p-4">
        <div className="mb-4">
          <div className="flex flex-wrap gap-4 mb-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-neutral-500">
                    {formatPrice(item.price)} × {item.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t pt-4">
            <div>
              <div className="font-medium">Total: {formatPrice(order.total)}</div>
              {order.trackingNumber && <div className="text-sm text-neutral-500">Tracking: {order.trackingNumber}</div>}
            </div>
            <div className="flex items-center gap-2">
              {order.canCancel && (
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 border-red-200 hover:bg-red-50"
                  onClick={() => onCancel(order.id)}
                >
                  Cancel Order
                </Button>
              )}
              <Button asChild size="sm">
                <Link href={`/orders/${order.id}`} className="flex items-center gap-1">
                  View Details
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

