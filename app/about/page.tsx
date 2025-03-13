import Link from "next/link";
import { Users, Leaf, Award, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import Newsletter from "@/components/newsletter";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              ESSENCE
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/shop" className="text-sm font-medium hover:underline underline-offset-4">
                Shop
              </Link>
              <Link href="/collections" className="text-sm font-medium hover:underline underline-offset-4">
                Collections
              </Link>
              <Link href="/about" className="text-sm font-medium underline underline-offset-4">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-1">
              <span className="text-sm">Cart (0)</span>
            </Link>
          </div>
        </div>
      </header> */}
      <main className="flex-1">
        <section className="relative h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10" />
          <img
            src="/placeholder.svg?height=800&width=1600"
            alt="ESSENCE perfume laboratory"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Our Story
            </h1>
            <div className="w-20 h-px bg-white mb-4" />
            <p className="text-lg max-w-2xl">
              Crafting exceptional fragrances since 2010
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-light tracking-tight mb-6">
                  Our Journey
                </h2>
                <p className="text-neutral-600 mb-6">
                  Founded in 2010 by master perfumer Elena Moreau, ESSENCE began
                  as a small atelier in New York City. With a passion for
                  exceptional fragrances and a background in traditional French
                  perfumery, Elena set out to create scents that would capture
                  emotions and memories.
                </p>
                <p className="text-neutral-600 mb-6">
                  What started as a boutique operation quickly gained
                  recognition for its distinctive approach to fragrance
                  creation. Today, ESSENCE has grown into a respected name in
                  the industry, while maintaining our commitment to artisanal
                  quality and innovative compositions.
                </p>
                <p className="text-neutral-600">
                  Our philosophy centers on using only the finest ingredients
                  sourced from around the world, combined with sustainable
                  practices and a dedication to creating fragrances that are
                  both timeless and contemporary.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=800&width=600"
                  alt="ESSENCE founder in the laboratory"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light tracking-tight mb-4">
                Our Values
              </h2>
              <div className="w-20 h-px bg-neutral-300 mx-auto mb-4" />
              <p className="text-neutral-600 max-w-2xl mx-auto">
                At the heart of everything we do are the principles that guide
                our craft
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">Quality</h3>
                <p className="text-neutral-600">
                  We use only the finest ingredients, sourced responsibly from
                  around the world, to create fragrances of exceptional quality.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">Sustainability</h3>
                <p className="text-neutral-600">
                  We are committed to sustainable practices throughout our
                  supply chain, from responsible sourcing to eco-friendly
                  packaging.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">Innovation</h3>
                <p className="text-neutral-600">
                  While respecting traditional perfumery, we constantly explore
                  new techniques and combinations to create unique olfactory
                  experiences.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">Community</h3>
                <p className="text-neutral-600">
                  We value our relationships with customers, artisans, and
                  suppliers, fostering a community that shares our passion for
                  fine fragrances.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light tracking-tight mb-4">
                Our Craft
              </h2>
              <div className="w-20 h-px bg-neutral-300 mx-auto mb-4" />
              <p className="text-neutral-600 max-w-2xl mx-auto">
                The art and science behind our exceptional fragrances
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <img
                  src="/placeholder.svg?height=600&width=400"
                  alt="Ingredient selection process"
                  className="rounded-lg mb-6"
                />
                <h3 className="text-xl font-medium mb-3">
                  Ingredient Selection
                </h3>
                <p className="text-neutral-600">
                  Our perfumers travel the world to source the finest raw
                  materials, from Bulgarian rose to Madagascan vanilla. Each
                  ingredient is carefully evaluated for its quality,
                  sustainability, and olfactory profile.
                </p>
              </div>

              <div>
                <img
                  src="/placeholder.svg?height=600&width=400"
                  alt="Perfume composition process"
                  className="rounded-lg mb-6"
                />
                <h3 className="text-xl font-medium mb-3">Composition</h3>
                <p className="text-neutral-600">
                  Creating a fragrance is both an art and a science. Our master
                  perfumers blend hundreds of ingredients in precise
                  proportions, crafting complex compositions that evolve
                  beautifully on the skin.
                </p>
              </div>

              <div>
                <img
                  src="/placeholder.svg?height=600&width=400"
                  alt="Perfume maturation process"
                  className="rounded-lg mb-6"
                />
                <h3 className="text-xl font-medium mb-3">Maturation</h3>
                <p className="text-neutral-600">
                  Patience is essential in perfumery. Our fragrances mature for
                  weeks or months, allowing the ingredients to harmonize and
                  develop their full complexity before they're bottled and ready
                  to be enjoyed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-900 text-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-light tracking-tight mb-6">
                  Join Our Team
                </h2>
                <p className="text-neutral-300 mb-6">
                  We're always looking for passionate individuals to join our
                  growing team. Whether you're interested in perfumery, retail,
                  marketing, or operations, we offer a creative and
                  collaborative environment where you can grow and thrive.
                </p>
                <p className="text-neutral-300 mb-8">
                  Explore our current opportunities and become part of our
                  journey to create exceptional fragrances that inspire and
                  delight.
                </p>
                <Button className="bg-white text-black hover:bg-white/90">
                  View Open Positions
                </Button>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="ESSENCE team working together"
                  className="rounded-lg"
                />
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
  );
}
