import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";
import Newsletter from "@/components/newsletter";
import FeaturedCollection from "@/components/featured-collection";
import { formatPrice } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              ESSENCE
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Shop
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Collections
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-1">
              <ShoppingBag className="h-5 w-5" />
              <span className="text-sm">Cart (0)</span>
            </Link>
          </div>
        </div>
      </header> */}
      <main className="flex-1">
        <section className="relative h-[80vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10" />
          <img
            src="/images/img3.jpeg"
            alt="Elegant perfume bottles on display"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
              Discover Your Signature Scent
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              Exquisite fragrances crafted with the finest ingredients for the
              modern connoisseur
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Shop Collection
            </Button>
          </div>
        </section>

        <section className="py-20 bg-neutral-50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-light tracking-tight mb-4">
                Bestsellers
              </h2>
              <div className="w-20 h-px bg-neutral-300 mb-4" />
              <p className="text-neutral-600 max-w-2xl">
                Our most coveted fragrances, loved for their distinctive
                character and lasting impression
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                image="/images/img2.jpeg"
                name="Amber Elixir"
                description="Warm, woody notes with a hint of vanilla"
                price={formatPrice(17999)}
              />
              <ProductCard
                image="/images/img1.jpeg"
                name="Velvet Rose"
                description="Delicate floral bouquet with rose and jasmine"
                price={formatPrice(19999)}
              />
              <ProductCard
                image="/images/img4.jpeg"
                name="Ocean Mist"
                description="Fresh aquatic scent with citrus undertones"
                price={formatPrice(16999)}
              />
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="group">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        <FeaturedCollection />

        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/placeholder.svg?height=800&width=600"
                  alt="Perfume crafting process"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-light tracking-tight mb-4">
                  Our Story
                </h2>
                <div className="w-20 h-px bg-neutral-300 mb-6" />
                <p className="text-neutral-600 mb-6">
                  Founded with a passion for exceptional fragrances, ESSENCE has
                  been crafting distinctive scents since 2010. Our philosophy
                  centers on using only the finest ingredients sourced from
                  around the world.
                </p>
                <p className="text-neutral-600 mb-8">
                  Each fragrance is meticulously developed by our master
                  perfumers, who blend traditional techniques with innovative
                  approaches to create scents that are both timeless and
                  contemporary.
                </p>
                <Button variant="outline">Learn More About Us</Button>
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
                Luxury fragrances for the discerning individual. Crafted with
                passion and precision.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Perfumes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Body Sprays
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Gift Sets
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
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
  );
}
