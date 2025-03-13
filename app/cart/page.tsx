"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@clerk/nextjs"
import { Minus, Plus, ShoppingBag, Trash2, ArrowLeft, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import Newsletter from "@/components/newsletter"
import { formatPrice } from "@/lib/utils"

export default function CartPage() {
  const { items, removeItem, updateQuantity, itemCount, subtotal, clearCart } = useCart()
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "checkout">("cart")
  const { isSignedIn } = useAuth()
  const router = useRouter()

  const shippingCost = subtotal > 100 ? 0 : 12
  const total = subtotal + shippingCost

  const handleProceedToCheckout = () => {
    if (!isSignedIn) {
      // Redirect to sign in page with a return URL
      router.push(`/sign-in?redirect_url=${encodeURIComponent("/cart?checkout=true")}`)
      return
    }

    setCheckoutStep("checkout")
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 py-16">
          <div className="container max-w-4xl">
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 mb-6">
                <ShoppingBag className="h-8 w-8 text-neutral-500" />
              </div>
              <h1 className="text-2xl md:text-3xl font-light mb-4">Your Cart is Empty</h1>
              <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Button asChild>
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </main>
        <Newsletter />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12">
        <div className="container">
          <div className="flex flex-col items-start mb-8">
            <h1 className="text-2xl md:text-3xl font-light mb-2">
              {checkoutStep === "cart" ? "Shopping Cart" : "Checkout"}
            </h1>
            <div className="w-20 h-px bg-neutral-300 mb-4" />
          </div>

          {checkoutStep === "cart" ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-neutral-50 px-6 py-4 border-b">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-6">
                        <h3 className="font-medium">Product</h3>
                      </div>
                      <div className="col-span-2 text-center">
                        <h3 className="font-medium">Price</h3>
                      </div>
                      <div className="col-span-2 text-center">
                        <h3 className="font-medium">Quantity</h3>
                      </div>
                      <div className="col-span-2 text-right">
                        <h3 className="font-medium">Total</h3>
                      </div>
                    </div>
                  </div>

                  <div className="divide-y">
                    {items.map((item) => (
                      <div key={item.id} className="px-6 py-4">
                        <div className="grid grid-cols-12 gap-4 items-center">
                          <div className="col-span-6">
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-medium">{item.name}</h4>
                                <p className="text-sm text-neutral-600 line-clamp-1">{item.description}</p>
                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="text-sm text-red-600 flex items-center gap-1 mt-1 hover:underline"
                                >
                                  <Trash2 className="h-3 w-3" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-2 text-center">
                            <span>{formatPrice(item.price)}</span>
                          </div>
                          <div className="col-span-2">
                            <div className="flex items-center justify-center">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className="w-8 h-8 flex items-center justify-center border rounded-l-md disabled:opacity-50"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <div className="w-10 h-8 flex items-center justify-center border-t border-b">
                                {item.quantity}
                              </div>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center border rounded-r-md"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                          </div>
                          <div className="col-span-2 text-right">
                            <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <Button variant="outline" asChild>
                    <Link href="/shop" className="flex items-center gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      Continue Shopping
                    </Link>
                  </Button>

                  <Button variant="outline" onClick={clearCart} className="text-red-600 border-red-200 hover:bg-red-50">
                    Clear Cart
                  </Button>
                </div>
              </div>

              <div>
                <div className="bg-neutral-50 rounded-lg p-6 border">
                  <h3 className="text-lg font-medium mb-4">Order Summary</h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Subtotal ({itemCount} items)</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Shipping</span>
                      <span>{shippingCost === 0 ? "Free" : formatPrice(shippingCost)}</span>
                    </div>
                    <div className="pt-3 border-t flex justify-between font-medium">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>

                  {isSignedIn ? (
                    <Button className="w-full" onClick={handleProceedToCheckout}>
                      Proceed to Checkout
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <Button className="w-full" onClick={handleProceedToCheckout}>
                        Sign In to Checkout
                      </Button>
                      <div className="text-center text-sm text-neutral-600">
                        You need to be signed in to complete your purchase
                      </div>
                    </div>
                  )}

                  <div className="mt-6 text-xs text-center text-neutral-500">
                    <p>Free shipping on orders over $100</p>
                    <p className="mt-2">Secure checkout powered by Stripe</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="border rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-medium mb-4">Shipping Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">First Name</label>
                      <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Last Name</label>
                      <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm mb-1">Email Address</label>
                      <input type="email" className="w-full p-2 border rounded" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm mb-1">Address</label>
                      <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">City</label>
                      <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Postal Code</label>
                      <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Country</label>
                      <select className="w-full p-2 border rounded">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Phone</label>
                      <input type="tel" className="w-full p-2 border rounded" />
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 border rounded">
                      <input type="radio" id="credit-card" name="payment" className="mr-3" defaultChecked />
                      <label htmlFor="credit-card" className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Credit Card
                      </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm mb-1">Card Number</label>
                        <input type="text" className="w-full p-2 border rounded" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Expiration Date</label>
                        <input type="text" className="w-full p-2 border rounded" placeholder="MM/YY" />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">CVV</label>
                        <input type="text" className="w-full p-2 border rounded" placeholder="123" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <Button variant="outline" onClick={() => setCheckoutStep("cart")}>
                    Back to Cart
                  </Button>
                </div>
              </div>

              <div>
                <div className="bg-neutral-50 rounded-lg p-6 border">
                  <h3 className="text-lg font-medium mb-4">Order Summary</h3>

                  <div className="space-y-3 mb-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>
                          {item.name} × {item.quantity}
                        </span>
                        <span>{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-4 border-t mb-6">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Shipping</span>
                      <span>{shippingCost === 0 ? "Free" : formatPrice(shippingCost)}</span>
                    </div>
                    <div className="pt-3 border-t flex justify-between font-medium">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>

                  <Button className="w-full">Complete Order</Button>

                  <div className="mt-6 text-xs text-center text-neutral-500">
                    <p>By completing your order, you agree to our Terms of Service and Privacy Policy</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Newsletter />
    </div>
  )
}

