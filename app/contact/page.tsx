"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Newsletter from "@/components/newsletter"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log(formState)
    setSubmitted(true)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
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
              <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium underline underline-offset-4">
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
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Contact Us</h1>
              <div className="w-20 h-px bg-neutral-300 mb-4" />
              <p className="text-neutral-600 max-w-2xl">
                We'd love to hear from you. Reach out with any questions, feedback, or inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-neutral-50 p-8 rounded-lg mb-8">
                  <h2 className="text-xl font-medium mb-6">Get in Touch</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                          <MapPin className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Visit Us</h3>
                        <p className="text-neutral-600">
                          123 Fragrance Avenue
                          <br />
                          New York, NY 10001
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                          <Mail className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Email Us</h3>
                        <p className="text-neutral-600">
                          General Inquiries: contact@essence.com
                          <br />
                          Customer Support: support@essence.com
                          <br />
                          Press: press@essence.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                          <Phone className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Call Us</h3>
                        <p className="text-neutral-600">
                          Main Office: +1 (555) 123-4567
                          <br />
                          Customer Service: +1 (555) 987-6543
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                          <Clock className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Hours</h3>
                        <p className="text-neutral-600">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-medium mb-4">Store Locations</h2>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=600&width=800"
                      alt="Map of ESSENCE store locations"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white p-8 rounded-lg border">
                  <h2 className="text-xl font-medium mb-6">Send a Message</h2>

                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                        <Send className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                      <p className="text-neutral-600 mb-6">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                      <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Your Name
                          </label>
                          <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">
                            Subject
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="product">Product Question</SelectItem>
                              <SelectItem value="order">Order Status</SelectItem>
                              <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formState.message}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <Button type="submit" className="w-full">
                          Send Message
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-px bg-neutral-300 mx-auto mb-4" />
              <p className="text-neutral-600 max-w-2xl mx-auto">Find answers to our most commonly asked questions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-lg font-medium mb-2">Do you offer international shipping?</h3>
                <p className="text-neutral-600">
                  Yes, we ship to most countries worldwide. Shipping rates and delivery times vary by location.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">What is your return policy?</h3>
                <p className="text-neutral-600">
                  We accept returns within 30 days of purchase. Products must be unused and in original packaging.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Are your products cruelty-free?</h3>
                <p className="text-neutral-600">
                  Yes, all our products are cruelty-free. We do not test on animals and work only with suppliers who
                  share this commitment.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Do you offer samples?</h3>
                <p className="text-neutral-600">
                  Yes, we offer sample sets of our collections, allowing you to experience our fragrances before
                  committing to a full-size bottle.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">How long do your fragrances last?</h3>
                <p className="text-neutral-600">
                  Our perfumes typically last 6-8 hours, while our body sprays last 3-4 hours. Longevity can vary based
                  on skin type and environmental factors.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Do you have a loyalty program?</h3>
                <p className="text-neutral-600">
                  Yes, our ESSENCE Rewards program offers points on purchases, exclusive offers, and early access to new
                  collections.
                </p>
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

