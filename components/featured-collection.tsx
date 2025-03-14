"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function FeaturedCollection() {
  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-light tracking-tight mb-4">
              The Noir Collection
            </h2>
            <div className="w-20 h-px bg-neutral-400 mb-6" />
            <p className="text-neutral-300 mb-6">
              Introducing our exclusive Noir Collection, featuring sophisticated
              fragrances with deep, mysterious notes. Each scent tells a story
              of elegance and intrigue.
            </p>
            <p className="text-neutral-300 mb-8">
              Crafted for evening wear and special occasions, these fragrances
              leave a lasting impression with their complex character and
              exceptional longevity.
            </p>
            <Button
              className="group bg-white text-black hover:bg-white/90"
              asChild
            >
              <Link href="/collections/noir">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/img1.jpeg"
              alt="Noir Collection - Midnight Oud"
              className="rounded-lg"
            />
            <img
              src="/images/img4.jpeg"
              alt="Noir Collection - Black Orchid"
              className="rounded-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
