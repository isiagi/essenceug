import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Newsletter from "@/components/newsletter"

export default function CollectionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Our Collections</h1>
              <div className="w-20 h-px bg-neutral-300 mb-4" />
              <p className="text-neutral-600 max-w-2xl">
                Discover our curated collections, each telling a unique olfactory story
              </p>
            </div>

            <div className="space-y-24">
              {/* Noir Collection */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">The Noir Collection</h2>
                  <div className="w-20 h-px bg-neutral-300 mb-6" />
                  <p className="text-neutral-600 mb-6">
                    Our exclusive Noir Collection features sophisticated fragrances with deep, mysterious notes. Each
                    scent tells a story of elegance and intrigue, perfect for evening wear and special occasions.
                  </p>
                  <p className="text-neutral-600 mb-8">
                    The collection includes Midnight Oud, Black Orchid, Velvet Amber, and Dark Vanilla—each crafted to
                    leave a lasting impression with their complex character and exceptional longevity.
                  </p>
                  <Button className="group" asChild>
                    <Link href="/collections/noir">
                      Explore Collection
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                  <img
                    src="/placeholder.svg?height=500&width=400"
                    alt="Noir Collection - Midnight Oud"
                    className="rounded-lg"
                  />
                  <img
                    src="/placeholder.svg?height=500&width=400"
                    alt="Noir Collection - Black Orchid"
                    className="rounded-lg mt-8"
                  />
                </div>
              </div>

              {/* Botanical Collection */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-1">
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/placeholder.svg?height=500&width=400"
                      alt="Botanical Collection - Lavender Fields"
                      className="rounded-lg"
                    />
                    <img
                      src="/placeholder.svg?height=500&width=400"
                      alt="Botanical Collection - Rose Garden"
                      className="rounded-lg mt-8"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">The Botanical Collection</h2>
                  <div className="w-20 h-px bg-neutral-300 mb-6" />
                  <p className="text-neutral-600 mb-6">
                    Our Botanical Collection celebrates the natural beauty of flowers and herbs. These fragrances
                    capture the essence of a blooming garden, with fresh, vibrant notes that uplift and inspire.
                  </p>
                  <p className="text-neutral-600 mb-8">
                    Featuring Lavender Fields, Rose Garden, Jasmine Dream, and Wild Herbs, this collection brings the
                    serenity of nature to your daily routine.
                  </p>
                  <Button className="group" asChild>
                    <Link href="/collections/botanical">
                      Explore Collection
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Coastal Collection */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">The Coastal Collection</h2>
                  <div className="w-20 h-px bg-neutral-300 mb-6" />
                  <p className="text-neutral-600 mb-6">
                    Inspired by the world's most beautiful coastlines, our Coastal Collection evokes the feeling of
                    ocean breezes and sun-warmed sand. These fresh, aquatic fragrances transport you to seaside escapes.
                  </p>
                  <p className="text-neutral-600 mb-8">
                    The collection includes Ocean Mist, Mediterranean Breeze, Tropical Shore, and Seaside Escape—each
                    designed to bring a refreshing, invigorating sensation.
                  </p>
                  <Button className="group" asChild>
                    <Link href="/collections/coastal">
                      Explore Collection
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                  <img
                    src="/placeholder.svg?height=500&width=400"
                    alt="Coastal Collection - Ocean Mist"
                    className="rounded-lg"
                  />
                  <img
                    src="/placeholder.svg?height=500&width=400"
                    alt="Coastal Collection - Mediterranean Breeze"
                    className="rounded-lg mt-8"
                  />
                </div>
              </div>

              {/* Signature Collection */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-1">
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/placeholder.svg?height=500&width=400"
                      alt="Signature Collection - Amber Elixir"
                      className="rounded-lg"
                    />
                    <img
                      src="/placeholder.svg?height=500&width=400"
                      alt="Signature Collection - Velvet Rose"
                      className="rounded-lg mt-8"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">The Signature Collection</h2>
                  <div className="w-20 h-px bg-neutral-300 mb-6" />
                  <p className="text-neutral-600 mb-6">
                    Our flagship Signature Collection represents the pinnacle of our craft. These timeless fragrances
                    blend traditional perfumery with modern sensibilities, creating scents that become an extension of
                    your identity.
                  </p>
                  <p className="text-neutral-600 mb-8">
                    Featuring our bestsellers Amber Elixir, Velvet Rose, Cedar & Sage, and Vanilla Dreams, this
                    collection offers sophisticated options for every occasion and preference.
                  </p>
                  <Button className="group" asChild>
                    <Link href="/collections/signature">
                      Explore Collection
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
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

