"use client"

import type React from "react"

import { useState } from "react"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your newsletter service
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container max-w-4xl text-center">
        <h2 className="text-3xl font-light tracking-tight mb-4">Join Our Community</h2>
        <div className="w-20 h-px bg-neutral-300 mx-auto mb-6" />
        <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive offers, new product announcements, and fragrance inspiration.
        </p>
        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-green-600">
            <Check className="h-5 w-5" />
            <span>Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        )}
      </div>
    </section>
  )
}

