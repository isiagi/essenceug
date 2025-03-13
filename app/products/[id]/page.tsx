"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, Heart, Share2 } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/context/cart-context"
import { formatPrice } from "@/lib/utils"
import ProductCard from "@/components/product-card"
import Newsletter from "@/components/newsletter"
import { toast } from "@/components/ui/use-toast"
import { products, getRelatedProducts } from "@/lib/products"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  // Find the product by ID
  const product = products.find((p) => p.id === params.id)

  // If product not found, show error state
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 py-16">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-light mb-4">Product Not Found</h1>
              <p className="text-neutral-600 mb-8">The product you're looking for doesn't exist or has been moved.</p>
              <Button asChild>
                <Link href="/shop">Return to Shop</Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Get related products
  const relatedProducts = getRelatedProducts(product.id, product.collection, 4)

  // Handle quantity changes
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  // Handle add to cart
  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.images[0],
        price: product.price,
      },
      quantity,
    )

    toast({
      title: "Added to cart",
      description: `${product.name} (${quantity}) has been added to your cart.`,
      duration: 3000,
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container py-4 sm:py-8">
          <Button variant="ghost" size="sm" className="mb-4 sm:mb-6" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-8 lg:mb-16">
            {/* Product Images */}
            <div>
              <div className="aspect-square overflow-hidden rounded-lg mb-2 sm:mb-4">
                <img
                  src={product.images[activeImage] || "/placeholder.svg?height=600&width=600"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2 sm:gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`aspect-square rounded-md overflow-hidden border-2 ${
                        activeImage === index ? "border-primary" : "border-transparent"
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} - view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4 sm:mb-6">
                <Link
                  href={`/collections/${product.collection}`}
                  className="text-xs sm:text-sm text-neutral-500 hover:text-primary"
                >
                  {product.collectionName}
                </Link>
                <h1 className="text-2xl sm:text-3xl font-light mt-1 sm:mt-2 mb-2 sm:mb-3">{product.name}</h1>
                <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-neutral-500 line-through text-sm sm:text-base">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6">{product.description}</p>

                {product.features && (
                  <ul className="list-disc list-inside text-neutral-600 mb-6 space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}

                {/* Size Selection if applicable */}
                {product.sizes && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Size</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.sizes.map((size) => (
                        <button
                          key={size.value}
                          className={`px-4 py-2 border rounded-md ${
                            size.isDefault
                              ? "bg-primary text-primary-foreground border-primary"
                              : "border-neutral-200 hover:border-neutral-300"
                          }`}
                        >
                          {size.label} {size.price && `- ${formatPrice(size.price)}`}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity Selector */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-sm font-medium mb-2 sm:mb-3">Quantity</h3>
                  <div className="flex items-center">
                    <button
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                      className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center border rounded-l-md disabled:opacity-50"
                    >
                      <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                    <div className="w-12 sm:w-16 h-8 sm:h-10 flex items-center justify-center border-t border-b">
                      {quantity}
                    </div>
                    <button
                      onClick={increaseQuantity}
                      className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center border rounded-r-md"
                    >
                      <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <Button className="flex-1" size="lg" onClick={handleAddToCart}>
                    Add to Cart
                  </Button>
                  <div className="flex gap-3 sm:gap-4">
                    <Button variant="outline" size="icon" className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                      <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                      <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </div>
                </div>

                {/* Product Meta */}
                <div className="space-y-3 text-sm text-neutral-500 border-t pt-6">
                  {product.sku && (
                    <div>
                      <span className="font-medium text-neutral-700">SKU:</span> {product.sku}
                    </div>
                  )}
                  <div>
                    <span className="font-medium text-neutral-700">Category:</span> {product.category}
                  </div>
                  {product.tags && (
                    <div>
                      <span className="font-medium text-neutral-700">Tags:</span> {product.tags.join(", ")}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mb-8 sm:mb-16">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 overflow-x-auto">
                <TabsTrigger
                  value="description"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm whitespace-nowrap"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm whitespace-nowrap"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="ingredients"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm whitespace-nowrap"
                >
                  Ingredients
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm whitespace-nowrap"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-6">
                <div className="max-w-3xl">
                  <p className="text-neutral-600 mb-4">{product.longDescription || product.description}</p>
                  {product.additionalDescription && <p className="text-neutral-600">{product.additionalDescription}</p>}
                </div>
              </TabsContent>
              <TabsContent value="details" className="pt-6">
                <div className="max-w-3xl">
                  <h3 className="text-lg font-medium mb-4">Product Details</h3>
                  <ul className="space-y-3">
                    <li className="grid grid-cols-1 sm:grid-cols-3 py-3 border-b">
                      <span className="font-medium">Fragrance Family</span>
                      <span className="sm:col-span-2">{product.fragranceFamily || "N/A"}</span>
                    </li>
                    <li className="grid grid-cols-1 sm:grid-cols-3 py-3 border-b">
                      <span className="font-medium">Top Notes</span>
                      <span className="sm:col-span-2">{product.topNotes || "N/A"}</span>
                    </li>
                    <li className="grid grid-cols-1 sm:grid-cols-3 py-3 border-b">
                      <span className="font-medium">Heart Notes</span>
                      <span className="sm:col-span-2">{product.heartNotes || "N/A"}</span>
                    </li>
                    <li className="grid grid-cols-1 sm:grid-cols-3 py-3 border-b">
                      <span className="font-medium">Base Notes</span>
                      <span className="sm:col-span-2">{product.baseNotes || "N/A"}</span>
                    </li>
                    <li className="grid grid-cols-1 sm:grid-cols-3 py-3 border-b">
                      <span className="font-medium">Longevity</span>
                      <span className="sm:col-span-2">{product.longevity || "N/A"}</span>
                    </li>
                    <li className="grid grid-cols-1 sm:grid-cols-3 py-3 border-b">
                      <span className="font-medium">Sillage</span>
                      <span className="sm:col-span-2">{product.sillage || "N/A"}</span>
                    </li>
                    <li className="grid grid-cols-1 sm:grid-cols-3 py-3 border-b">
                      <span className="font-medium">Volume</span>
                      <span className="sm:col-span-2">{product.volume || "N/A"}</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="ingredients" className="pt-6">
                <div className="max-w-3xl">
                  <h3 className="text-lg font-medium mb-4">Ingredients</h3>
                  <p className="text-neutral-600 mb-4">
                    {product.ingredients || "Ingredient information coming soon."}
                  </p>
                  <p className="text-sm text-neutral-500">
                    Please be aware that ingredient lists may change or vary from time to time. Please refer to the
                    ingredient list on the product package for the most up-to-date list.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="pt-6">
                <div className="max-w-3xl">
                  <h3 className="text-lg font-medium mb-4">Customer Reviews</h3>
                  {product.reviews && product.reviews.length > 0 ? (
                    <div className="space-y-6">
                      {product.reviews.map((review, index) => (
                        <div key={index} className="border-b pb-6">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="font-medium">{review.name}</div>
                            <div className="text-sm text-neutral-500">{review.date}</div>
                          </div>
                          <div className="flex items-center mb-2">
                            {/* Star rating would go here */}
                            <div className="text-sm">{review.rating} / 5</div>
                          </div>
                          <p className="text-neutral-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <p className="text-neutral-600 mb-4">There are no reviews yet for this product.</p>
                      <Button>Write a Review</Button>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mb-8 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-light mb-4 sm:mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.images[0]}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <Newsletter />
      </main>
      <footer className="bg-neutral-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">ESSENCE</h3>
              <p className="text-neutral-400 text-sm">
                Luxury fragrances for the discerning individual. Crafted with passion and precision.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>
                  <Link href="/shop" className="hover:text-white">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-white">
                    Perfumes
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-white">
                    Body Sprays
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-white">
                    Gift Sets
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>123 Fragrance Avenue</li>
                <li>New York, NY 10001</li>
                <li>contact@essence.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-8 pt-8 text-sm text-neutral-400">
            <p>© 2025 ESSENCE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

