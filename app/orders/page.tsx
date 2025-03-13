"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Package, Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { OrderCard } from "@/components/order-card"
import { sampleOrders } from "@/lib/sample-orders"
import type { Order, OrderStatus } from "@/types/order"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function OrdersPage() {
  const { isLoaded, isSignedIn } = useUser()
  const [orders, setOrders] = useState<Order[]>(sampleOrders)
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [cancelOrderId, setCancelOrderId] = useState<string | null>(null)

  // Redirect if not signed in
  if (isLoaded && !isSignedIn) {
    redirect("/sign-in")
  }

  if (!isLoaded) {
    return <div className="container py-12">Loading...</div>
  }

  const filteredOrders = statusFilter === "all" ? orders : orders.filter((order) => order.status === statusFilter)

  const handleCancelOrder = (orderId: string) => {
    setCancelOrderId(orderId)
  }

  const confirmCancelOrder = () => {
    if (cancelOrderId) {
      setOrders(
        orders.map((order) =>
          order.id === cancelOrderId ? { ...order, status: "cancelled" as OrderStatus, canCancel: false } : order,
        ),
      )
      setCancelOrderId(null)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12">
        <div className="container">
          <div className="flex flex-col items-start mb-8">
            <h1 className="text-2xl md:text-3xl font-light mb-2">My Orders</h1>
            <div className="w-20 h-px bg-neutral-300 mb-4" />
          </div>

          {orders.length > 0 ? (
            <>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div className="text-sm text-neutral-600">
                  Showing {filteredOrders.length} of {orders.length} orders
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-neutral-500" />
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Orders</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="shipped">Shipped</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => <OrderCard key={order.id} order={order} onCancel={handleCancelOrder} />)
                ) : (
                  <div className="text-center py-8 border rounded-lg">
                    <p className="text-neutral-600">No orders match the selected filter.</p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="bg-white rounded-lg border p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 mb-6">
                <Package className="h-8 w-8 text-neutral-500" />
              </div>
              <h2 className="text-xl font-medium mb-2">No Orders Yet</h2>
              <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                You haven't placed any orders yet. Start shopping to find your perfect fragrance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/shop">Browse Products</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/account" className="flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Track an Order
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <AlertDialog open={!!cancelOrderId} onOpenChange={(open) => !open && setCancelOrderId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cancel Order</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to cancel this order? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>No, keep order</AlertDialogCancel>
            <AlertDialogAction onClick={confirmCancelOrder} className="bg-red-600 text-white hover:bg-red-700">
              Yes, cancel order
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

