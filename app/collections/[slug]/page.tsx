import Link from "next/link"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import Newsletter from "@/components/newsletter"

// Define collection data
const collections = {
  noir: {
    name: "The Noir Collection",
    description:
      "Sophisticated fragrances with deep, mysterious notes. Each scent tells a story of elegance and intrigue.",
    longDescription:
      "Our exclusive Noir Collection features sophisticated fragrances with deep, mysterious notes. Each scent tells a story of elegance and intrigue, perfect for evening wear and special occasions. The collection includes Midnight Oud, Black Orchid, Velvet Amber, and Dark Vanilla—each crafted to leave a lasting impression with their complex character and exceptional longevity.",
    image: "/placeholder.svg?height=800&width=1200",
    products: [
      {
        id: "midnight-oud",
        name: "Midnight Oud",
        description: "Rich, intense fragrance with smoky undertones",
        price: 150,
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: "black-orchid",
        name: "Black Orchid",
        description: "Luxurious floral with dark, mysterious notes",
        price: 165,
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: "velvet-amber",
        name: "Velvet Amber",
        description: "Warm amber with spicy undertones",
        price: 145,
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: "dark-vanilla",
        name: "Dark Vanilla",
        description: "Rich vanilla with smoky, woody notes",
        price: 135,
        image: "/placeholder.svg?height=600&width=400",
      },
    ],
  },
  botanical: {
    name: "The Botanical Collection",
    description:
      "Fresh fragrances that capture the essence of a blooming garden, with vibrant notes that uplift and inspire.",
    longDescription:
      "Our Botanical Collection celebrates the natural beauty of flowers and herbs. These fragrances capture the essence of a blooming garden, with fresh, vibrant notes that uplift and inspire. Featuring Lavender Fields, Rose Garden, Jasmine Dream, and Wild Herbs, this collection brings the serenity of nature to your daily routine.",
    image: "/placeholder.svg?height=800&width=1200",
    products: [
      {
        id: "lavender-fields",
        name: "Lavender Fields",
        description: "Calming lavender with fresh herbal undertones",
        price: 80,
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: "rose-garden",
        name: "Rose Garden",
        description: "Delicate rose with dewy green notes",
        price: 95,
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: "jasmine-dream",
        name: "Jasmine Dream",
        description: "Intoxicating jasmine with subtle citrus",
        price: 90,
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: "wild-herbs",
        name: "Wild Herbs",
        description: "Aromatic blend of rosemary, thyme, and mint",
        price: 85,
        image: "/placeholder.svg?height=600&width=400",
      },
    ],
  },
  coastal: {
    name: "The Coastal Collection",
    description: "Fresh, aquatic fragrances inspired by the world's most beautiful coastlines.",
    longDescription:
      "Inspired by the world's most beautiful coastlines, our Coastal Collection evokes the feeling of ocean breezes and sun-warmed sand. These fresh, aquatic fragrances transport you to seaside escapes. The collection includes Ocean Mist, Mediterranean Breeze, Tropical Shore, and Seaside Escape—each designed to bring a refreshing, invigorating sensation.",
    image: "/placeholder.svg?height=800&width=1200",
    products: [
      {
        id: "ocean-mist",
        name: "Ocean Mist",
        description: "Fresh aquatic scent with citrus undertones",
        price: 85,
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: "mediterranean-breeze",
        name: "Mediterranean Breeze",
        description: "Crisp sea air with hints of citrus and herbs",
        price: 90,
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: "tropical-shore",
        name: "Tropical Shore",
        description: "Coconut and sea salt with floral notes",
        price: 95,
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: "seaside-escape",
        name: "Seaside Escape",
        description: "Fresh marine notes with amber and driftwood",
        price: 85,
        image: "/placeholder.svg?height=600&width=400",
      },
    ],
  },
  signature: {
    name: "The Signature Collection",
    description:
      "Our flagship collection representing the pinnacle of our craft, with timeless fragrances for every occasion.",
    longDescription:
      "Our flagship Signature Collection represents the pinnacle of our craft. These timeless fragrances blend traditional perfumery with modern sensibilities, creating scents that become an extension of your identity. Featuring our bestsellers Amber Elixir, Velvet Rose, Cedar & Sage, and Vanilla Dreams, this collection offers sophisticated options for every occasion and preference.",
    image: "/placeholder.svg?height=800&width=1200",
    products: [
      {
        id: "amber-elixir",
        name: "Amber Elixir",
        description: "Warm, woody notes with a hint of vanilla",
        price: 120,
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: "velvet-rose",
        name: "Velvet Rose",
        description: "Delicate floral bouquet with rose and jasmine",
        price: 95,
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: "cedar-sage",
        name: "Cedar & Sage",
        description: "Earthy, grounding blend with herbal notes",
        price: 110,
        image: "/placeholder.svg?height=600&width=400",
      },
      {
        id: "vanilla-dreams",
        name: "Vanilla Dreams",
        description: "Sweet, comforting vanilla with warm spices",
        price: 90,
        image: "/placeholder.svg?height=600&width=400",
      },
    ],
  },
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const collection = collections[slug as keyof typeof collections]

  if (!collection) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 py-16">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-light mb-4">Collection Not Found</h1>
              <p className="text-neutral-600 mb-8">
                The collection you're looking for doesn't exist or has been moved.
              </p>
              <Button asChild>
                <Link href="/collections">View All Collections</Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img
            src={collection.image || "/placeholder.svg"}
            alt={collection.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">{collection.name}</h1>
            <div className="w-20 h-px bg-white mb-4" />
            <p className="text-lg max-w-2xl">{collection.description}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-neutral-600">{collection.longDescription}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {collection.products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">Complete Your Collection</h2>
              <div className="w-20 h-px bg-neutral-300 mx-auto mb-4" />
              <p className="text-neutral-600 max-w-2xl mx-auto">Explore our other exclusive collections</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(collections)
                .filter(([key]) => key !== slug)
                .slice(0, 3)
                .map(([key, collection]) => (
                  <div key={key} className="bg-white rounded-lg overflow-hidden shadow-sm border">
                    <img
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-2">{collection.name}</h3>
                      <p className="text-neutral-600 mb-4">{collection.description}</p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/collections/${key}`}>Explore Collection</Link>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

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

