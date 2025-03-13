"use client";

import type React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import MobileNavSimple from "@/components/mobile-nav-simple";
import { CartProvider, useCart } from "@/context/cart-context";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/components/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";
import UserButton from "@/components/user-button";

function CartIcon() {
  const { itemCount } = useCart();

  return (
    <Link href="/cart" className="flex items-center gap-1 relative">
      <ShoppingBag className="h-5 w-5" />
      <span className="text-sm hidden sm:inline">Cart</span>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
}

function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            ESSENCE
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/shop"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Shop
            </Link>
            <Link
              href="/collections"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Collections
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <UserButton />
          <CartIcon />
          <MobileNavSimple />
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider attribute="class" defaultTheme="light">
            <CartProvider>
              <ScrollToTop />
              <Header />
              {children}
              <Toaster />
            </CartProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

import "./globals.css";

// export const metadata = {
//       generator: 'v0.dev'
//     };
