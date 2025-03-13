"use client"

import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { formatPrice } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

interface ProductCardProps {
  id?: string
  image: string
  name: string
  description: string
  price: string | number
}

export default function ProductCard({ id = "", image, name, description, price }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    // Convert price string to number if it's a string
    const priceValue = typeof price === "string" ? Number.parseFloat(price.replace(/[^0-9.]/g, "")) : price

    addItem(
      {
        id: id || `product-${name.toLowerCase().replace(/\s+/g, "-")}`,
        name,
        description,
        image,
        price: priceValue,
      },
      1,
    )

    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
      duration: 3000,
    })
  }

  // Format price for display
  const displayPrice = typeof price === "string" ? price : formatPrice(price)

  return (
    <Card className="overflow-hidden border-0 shadow-sm transition-all hover:shadow-md h-full">
      <Link href={`/products/${id || name.toLowerCase().replace(/\s+/g, "-")}`}>
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4 sm:p-6">
        <Link href={`/products/${id || name.toLowerCase().replace(/\s+/g, "-")}`}>
          <h3 className="text-base sm:text-xl font-medium line-clamp-1">{name}</h3>
        </Link>
        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-neutral-600 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 sm:p-6 pt-0">
        <span className="text-base sm:text-lg font-medium">{displayPrice}</span>
        <Button variant="outline" size="sm" className="text-xs sm:text-sm h-8 px-2 sm:px-3" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

