"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useCart } from "@/context/cart-context"

export default function MobileNav() {
  const pathname = usePathname()
  const [shopOpen, setShopOpen] = useState(false)
  const [collectionsOpen, setCollectionsOpen] = useState(false)
  const { itemCount } = useCart()

  // Check if the current path matches the given path
  const isActive = (path: string) => pathname === path

  // Check if the current path starts with the given path (for nested routes)
  const isActiveSection = (path: string) => pathname.startsWith(path)

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[350px] overflow-y-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-semibold tracking-tight">
                ESSENCE
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <Link href="/cart" className="flex items-center gap-2 py-2 text-lg font-medium">
                <ShoppingBag className="h-5 w-5" />
                Cart
                {itemCount > 0 && (
                  <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>

              <Collapsible open={shopOpen} onOpenChange={setShopOpen}>
                <CollapsibleTrigger
                  className={`flex items-center justify-between w-full py-2 text-left ${isActiveSection("/shop") ? "text-primary font-semibold" : ""}`}
                >
                  <span className="text-lg font-medium">Shop</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${shopOpen ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 pt-2 pb-4 space-y-3">
                  <Link
                    href="/shop"
                    className={`block py-2 ${isActive("/shop") ? "text-primary font-medium" : "text-neutral-600"}`}
                  >
                    All Products
                  </Link>
                  <Link href="/shop?category=perfumes" className="block py-2 text-neutral-600">
                    Perfumes
                  </Link>
                  <Link href="/shop?category=body-sprays" className="block py-2 text-neutral-600">
                    Body Sprays
                  </Link>
                  <Link href="/shop?category=gift-sets" className="block py-2 text-neutral-600">
                    Gift Sets
                  </Link>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible open={collectionsOpen} onOpenChange={setCollectionsOpen}>
                <CollapsibleTrigger
                  className={`flex items-center justify-between w-full py-2 text-left ${isActiveSection("/collections") ? "text-primary font-semibold" : ""}`}
                >
                  <span className="text-lg font-medium">Collections</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${collectionsOpen ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 pt-2 pb-4 space-y-3">
                  <Link
                    href="/collections/noir"
                    className={`block py-2 ${isActive("/collections/noir") ? "text-primary font-medium" : "text-neutral-600"}`}
                  >
                    The Noir Collection
                  </Link>
                  <Link
                    href="/collections/botanical"
                    className={`block py-2 ${isActive("/collections/botanical") ? "text-primary font-medium" : "text-neutral-600"}`}
                  >
                    The Botanical Collection
                  </Link>
                  <Link
                    href="/collections/coastal"
                    className={`block py-2 ${isActive("/collections/coastal") ? "text-primary font-medium" : "text-neutral-600"}`}
                  >
                    The Coastal Collection
                  </Link>
                  <Link
                    href="/collections/signature"
                    className={`block py-2 ${isActive("/collections/signature") ? "text-primary font-medium" : "text-neutral-600"}`}
                  >
                    The Signature Collection
                  </Link>
                </CollapsibleContent>
              </Collapsible>

              <Link href="/about" className={`py-2 text-lg font-medium ${isActive("/about") ? "text-primary" : ""}`}>
                About
              </Link>

              <Link
                href="/contact"
                className={`py-2 text-lg font-medium ${isActive("/contact") ? "text-primary" : ""}`}
              >
                Contact
              </Link>
            </div>

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

