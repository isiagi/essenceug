"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth, SignOutButton } from "@clerk/nextjs"
import { Menu, X, ShoppingBag, LogIn, LogOut, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet-simple"
import { useCart } from "@/context/cart-context"

export default function MobileNavSimple() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { itemCount } = useCart()
  const { isSignedIn } = useAuth()

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[350px] overflow-y-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-semibold tracking-tight" onClick={() => setIsOpen(false)}>
                ESSENCE
              </Link>
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </Button>
              </SheetClose>
            </div>

            <nav className="flex flex-col gap-4">
              {/* Auth Section */}
              {isSignedIn ? (
                <div className="py-2 border-b border-neutral-200">
                  <div className="text-lg font-medium mb-2">Account</div>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/account"
                      className="flex items-center gap-2 py-1 text-neutral-600"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="h-4 w-4" />
                      My Account
                    </Link>
                    <Link href="/orders" className="block py-1 text-neutral-600" onClick={() => setIsOpen(false)}>
                      Orders
                    </Link>
                    <div className="py-1">
                      <SignOutButton>
                        <button className="flex items-center gap-2 text-neutral-600">
                          <LogOut className="h-4 w-4" />
                          Sign Out
                        </button>
                      </SignOutButton>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href="/sign-in"
                  className="flex items-center gap-2 py-2 text-lg font-medium border-b border-neutral-200"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn className="h-5 w-5" />
                  Sign In
                </Link>
              )}

              <Link
                href="/cart"
                className="flex items-center gap-2 py-2 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingBag className="h-5 w-5" />
                Cart
                {itemCount > 0 && (
                  <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>

              <div className="py-2">
                <div className="text-lg font-medium mb-2">Shop</div>
                <div className="pl-4 space-y-2">
                  <Link href="/shop" className="block py-1 text-neutral-600" onClick={() => setIsOpen(false)}>
                    All Products
                  </Link>
                  <Link
                    href="/shop?category=perfumes"
                    className="block py-1 text-neutral-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Perfumes
                  </Link>
                  <Link
                    href="/shop?category=body-sprays"
                    className="block py-1 text-neutral-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Body Sprays
                  </Link>
                  <Link
                    href="/shop?category=gift-sets"
                    className="block py-1 text-neutral-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Gift Sets
                  </Link>
                </div>
              </div>

              <div className="py-2">
                <div className="text-lg font-medium mb-2">Collections</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/collections/noir"
                    className="block py-1 text-neutral-600"
                    onClick={() => setIsOpen(false)}
                  >
                    The Noir Collection
                  </Link>
                  <Link
                    href="/collections/botanical"
                    className="block py-1 text-neutral-600"
                    onClick={() => setIsOpen(false)}
                  >
                    The Botanical Collection
                  </Link>
                  <Link
                    href="/collections/coastal"
                    className="block py-1 text-neutral-600"
                    onClick={() => setIsOpen(false)}
                  >
                    The Coastal Collection
                  </Link>
                  <Link
                    href="/collections/signature"
                    className="block py-1 text-neutral-600"
                    onClick={() => setIsOpen(false)}
                  >
                    The Signature Collection
                  </Link>
                </div>
              </div>

              <Link href="/about" className="py-2 text-lg font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>

              <Link href="/contact" className="py-2 text-lg font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </nav>

            <div className="mt-4 pt-4 border-t border-neutral-200">
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-sm text-neutral-500">Customer Service</span>
                  <a href="tel:+15551234567" className="text-sm">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-neutral-500">Email</span>
                  <a href="mailto:contact@essence.com" className="text-sm">
                    contact@essence.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

