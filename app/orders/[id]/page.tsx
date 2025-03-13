"use client";

import { useState, useEffect, use } from "react";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Package, Truck, CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import { OrderStatusBadge } from "@/components/order-status-badge";
import { sampleOrders } from "@/lib/sample-orders";
import { formatDateTime, formatDate } from "@/lib/date-utils";
import { formatPrice } from "@/lib/utils";
import type { Order, OrderStatus } from "@/types/order";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function OrderDetailPage({ params }: { params: any }) {
  const unwrappedParams = use<any>(params);
  const { isLoaded, isSignedIn } = useUser();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  useEffect(() => {
    // In a real app, you would fetch the order from an API
    const foundOrder = sampleOrders.find((o) => o.id === params.id);
    setOrder(foundOrder || null);
    setLoading(false);
  }, [unwrappedParams.id]);

  // Redirect if not signed in
  if (isLoaded && !isSignedIn) {
    redirect("/sign-in");
  }

  if (!isLoaded || loading) {
    return <div className="container py-12">Loading...</div>;
  }

  if (!order) {
    return (
      <div className="container py-12">
        <div className="flex flex-col items-start mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/orders" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Orders
            </Link>
          </Button>
          <h1 className="text-2xl md:text-3xl font-light mb-2">
            Order Not Found
          </h1>
          <div className="w-20 h-px bg-neutral-300 mb-4" />
          <p className="text-neutral-600">
            The order you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  const handleCancelOrder = () => {
    setOrder({
      ...order,
      status: "cancelled" as OrderStatus,
      canCancel: false,
    });
    setShowCancelDialog(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12">
        <div className="container">
          <div className="flex flex-col items-start mb-8">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link href="/orders" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Orders
              </Link>
            </Button>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <h1 className="text-2xl md:text-3xl font-light">
                Order #{order.id}
              </h1>
              <OrderStatusBadge status={order.status} />
            </div>
            <div className="w-20 h-px bg-neutral-300 my-4" />
            <p className="text-neutral-600">
              Placed on {formatDateTime(order.date)}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Order Items */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-neutral-50 px-6 py-4 border-b">
                  <h2 className="font-medium flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Order Items
                  </h2>
                </div>
                <div className="p-6">
                  <div className="divide-y">
                    {order.items.map((item) => (
                      <div key={item.id} className="py-4 first:pt-0 last:pb-0">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-neutral-600">
                              Quantity: {item.quantity}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">
                              {formatPrice(item.price * item.quantity)}
                            </div>
                            <div className="text-sm text-neutral-600">
                              {formatPrice(item.price)} each
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Shipping Information */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-neutral-50 px-6 py-4 border-b">
                  <h2 className="font-medium flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    Shipping Information
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-2">Shipping Address</h3>
                      <div className="text-neutral-600">
                        <p>{order.shippingAddress.name}</p>
                        <p>{order.shippingAddress.address}</p>
                        <p>
                          {order.shippingAddress.city},{" "}
                          {order.shippingAddress.postalCode}
                        </p>
                        <p>{order.shippingAddress.country}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Shipping Details</h3>
                      <div className="text-neutral-600">
                        {order.status === "shipped" ||
                        order.status === "delivered" ? (
                          <>
                            <p>
                              <span className="font-medium">
                                Tracking Number:
                              </span>{" "}
                              {order.trackingNumber}
                            </p>
                            {order.estimatedDelivery && (
                              <p className="mt-2">
                                <span className="font-medium">
                                  Estimated Delivery:
                                </span>{" "}
                                {formatDate(order.estimatedDelivery)}
                              </p>
                            )}
                          </>
                        ) : order.status === "processing" ? (
                          <p>
                            Your order is being processed and will ship soon.
                          </p>
                        ) : order.status === "cancelled" ? (
                          <p>This order has been cancelled.</p>
                        ) : (
                          <p>
                            Shipping information will be available once your
                            order ships.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-neutral-50 px-6 py-4 border-b">
                  <h2 className="font-medium flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Payment Information
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-2">Payment Method</h3>
                      <p className="text-neutral-600">{order.paymentMethod}</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Billing Address</h3>
                      <div className="text-neutral-600">
                        <p>{order.shippingAddress.name}</p>
                        <p>{order.shippingAddress.address}</p>
                        <p>
                          {order.shippingAddress.city},{" "}
                          {order.shippingAddress.postalCode}
                        </p>
                        <p>{order.shippingAddress.country}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* Order Summary */}
              <div className="border rounded-lg overflow-hidden sticky top-4">
                <div className="bg-neutral-50 px-6 py-4 border-b">
                  <h2 className="font-medium">Order Summary</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Subtotal</span>
                      <span>{formatPrice(order.total - 12)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Shipping</span>
                      <span>{formatPrice(12)}</span>
                    </div>
                    <div className="flex justify-between border-t pt-4 font-medium">
                      <span>Total</span>
                      <span>{formatPrice(order.total)}</span>
                    </div>
                  </div>

                  {order.canCancel && (
                    <div className="mt-6">
                      <Button
                        variant="outline"
                        className="w-full text-red-600 border-red-200 hover:bg-red-50"
                        onClick={() => setShowCancelDialog(true)}
                      >
                        Cancel Order
                      </Button>
                      <p className="text-xs text-neutral-500 text-center mt-2">
                        You can cancel this order until it ships.
                      </p>
                    </div>
                  )}

                  {order.status === "shipped" && (
                    <div className="mt-6">
                      <Button className="w-full">Track Package</Button>
                    </div>
                  )}

                  {order.status === "delivered" && (
                    <div className="mt-6">
                      <Button className="w-full">Write a Review</Button>
                    </div>
                  )}

                  <div className="mt-6 text-center">
                    <h3 className="text-sm font-medium mb-2">Need Help?</h3>
                    <div className="text-sm text-neutral-600">
                      <p>
                        <Link
                          href="/contact"
                          className="text-primary hover:underline"
                        >
                          Contact Customer Support
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AlertDialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cancel Order</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to cancel this order? This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>No, keep order</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleCancelOrder}
              className="bg-red-600 text-white hover:bg-red-700"
            >
              Yes, cancel order
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
