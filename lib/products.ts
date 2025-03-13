// Product database
export type Product = {
  id: string
  name: string
  description: string
  longDescription?: string
  additionalDescription?: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  collection: string
  collectionName: string
  tags?: string[]
  sku?: string
  features?: string[]
  sizes?: {
    value: string
    label: string
    price?: number
    isDefault?: boolean
  }[]
  fragranceFamily?: string
  topNotes?: string
  heartNotes?: string
  baseNotes?: string
  longevity?: string
  sillage?: string
  volume?: string
  ingredients?: string
  reviews?: {
    name: string
    date: string
    rating: number
    comment: string
  }[]
}

export const products: Product[] = [
  // Noir Collection
  {
    id: "midnight-oud",
    name: "Midnight Oud",
    description: "Rich, intense fragrance with smoky undertones",
    longDescription:
      "Midnight Oud is a captivating blend of rich, smoky notes that evoke the mystery of the night. This sophisticated fragrance combines rare oud wood with warm spices and subtle hints of rose for a complex, long-lasting scent that makes a powerful statement.",
    additionalDescription:
      "Perfect for evening wear and special occasions, Midnight Oud leaves a memorable impression with its distinctive character and exceptional longevity.",
    price: 150,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Perfume",
    collection: "noir",
    collectionName: "The Noir Collection",
    tags: ["oud", "woody", "evening", "luxury"],
    sku: "NO-MO-001",
    features: [
      "Made with rare oud wood from sustainable sources",
      "Complex, evolving scent profile",
      "Long-lasting formula",
      "Elegant glass bottle with wooden cap",
    ],
    sizes: [
      { value: "50ml", label: "50ml", price: 150, isDefault: true },
      { value: "100ml", label: "100ml", price: 220 },
    ],
    fragranceFamily: "Woody Oriental",
    topNotes: "Saffron, Pink Pepper, Rose",
    heartNotes: "Oud Wood, Patchouli, Sandalwood",
    baseNotes: "Amber, Vanilla, Musk",
    longevity: "8-10 hours",
    sillage: "Strong",
    volume: "50ml / 100ml",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Linalool, Limonene, Coumarin, Eugenol, Citronellol, Geraniol, Cinnamal, Benzyl Benzoate, Citral, Benzyl Alcohol, Farnesol, Cinnamyl Alcohol",
    reviews: [
      {
        name: "James W.",
        date: "March 15, 2025",
        rating: 5,
        comment:
          "This is the most sophisticated fragrance I've ever owned. The oud note is authentic and the longevity is impressive. Worth every penny.",
      },
      {
        name: "Sophia L.",
        date: "February 28, 2025",
        rating: 4,
        comment:
          "Powerful and distinctive. Not for the faint of heart, but if you appreciate complex fragrances, this is exceptional.",
      },
    ],
  },
  {
    id: "black-orchid",
    name: "Black Orchid",
    description: "Luxurious floral with dark, mysterious notes",
    longDescription:
      "Black Orchid is an opulent fragrance that balances rare black orchids with rich fruits, dark chocolate, and spices. This intoxicating blend creates a sensual, sophisticated scent that's both mysterious and alluring.",
    price: 165,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Perfume",
    collection: "noir",
    collectionName: "The Noir Collection",
    tags: ["floral", "oriental", "evening", "luxury"],
    sku: "NO-BO-002",
    features: [
      "Features rare black orchid extract",
      "Complex blend of floral and spicy notes",
      "Long-lasting formula",
      "Elegant black glass bottle",
    ],
    fragranceFamily: "Floral Oriental",
    topNotes: "Black Truffle, Ylang-Ylang, Bergamot",
    heartNotes: "Black Orchid, Spices, Lotus Wood",
    baseNotes: "Dark Chocolate, Patchouli, Vanilla",
    longevity: "8-12 hours",
    sillage: "Moderate to Strong",
    volume: "50ml",
  },
  {
    id: "velvet-amber",
    name: "Velvet Amber",
    description: "Warm amber with spicy undertones",
    price: 145,
    images: ["/placeholder.svg?height=600&width=600"],
    category: "Perfume",
    collection: "noir",
    collectionName: "The Noir Collection",
    tags: ["amber", "spicy", "evening", "luxury"],
    sku: "NO-VA-003",
    fragranceFamily: "Oriental Spicy",
    topNotes: "Bergamot, Cinnamon, Cardamom",
    heartNotes: "Amber, Labdanum, Rose",
    baseNotes: "Vanilla, Tonka Bean, Sandalwood",
    longevity: "6-8 hours",
    sillage: "Moderate",
    volume: "50ml",
  },
  {
    id: "dark-vanilla",
    name: "Dark Vanilla",
    description: "Rich vanilla with smoky, woody notes",
    price: 135,
    images: ["/placeholder.svg?height=600&width=600"],
    category: "Perfume",
    collection: "noir",
    collectionName: "The Noir Collection",
    tags: ["vanilla", "woody", "evening", "luxury"],
    sku: "NO-DV-004",
    fragranceFamily: "Oriental Woody",
    topNotes: "Black Pepper, Bergamot",
    heartNotes: "Vanilla Orchid, Jasmine",
    baseNotes: "Bourbon Vanilla, Tonka Bean, Cedarwood",
    longevity: "6-8 hours",
    sillage: "Moderate",
    volume: "50ml",
  },

  // Botanical Collection
  {
    id: "lavender-fields",
    name: "Lavender Fields",
    description: "Calming lavender with fresh herbal undertones",
    price: 80,
    images: ["/placeholder.svg?height=600&width=600"],
    category: "Perfume",
    collection: "botanical",
    collectionName: "The Botanical Collection",
    tags: ["lavender", "herbal", "fresh", "day"],
    sku: "BO-LF-001",
    fragranceFamily: "Aromatic Fougère",
    topNotes: "Lavender, Bergamot, Lemon",
    heartNotes: "Rosemary, Sage, Geranium",
    baseNotes: "Oakmoss, Cedarwood, Musk",
    longevity: "4-6 hours",
    sillage: "Moderate",
    volume: "50ml",
  },
  {
    id: "rose-garden",
    name: "Rose Garden",
    description: "Delicate rose with dewy green notes",
    price: 95,
    images: ["/placeholder.svg?height=600&width=600"],
    category: "Perfume",
    collection: "botanical",
    collectionName: "The Botanical Collection",
    tags: ["rose", "floral", "fresh", "day"],
    sku: "BO-RG-002",
    fragranceFamily: "Floral Green",
    topNotes: "Green Leaves, Lemon, Bergamot",
    heartNotes: "Rose, Lily of the Valley, Jasmine",
    baseNotes: "Musk, Amber, Cedarwood",
    longevity: "5-7 hours",
    sillage: "Moderate",
    volume: "50ml",
  },
  {
    id: "jasmine-dream",
    name: "Jasmine Dream",
    description: "Intoxicating jasmine with subtle citrus",
    price: 90,
    images: ["/placeholder.svg?height=600&width=600"],
    category: "Perfume",
    collection: "botanical",
    collectionName: "The Botanical Collection",
    tags: ["jasmine", "floral", "fresh", "day"],
    sku: "BO-JD-003",
    fragranceFamily: "Floral",
    topNotes: "Mandarin, Bergamot",
    heartNotes: "Jasmine, Tuberose, Orange Blossom",
    baseNotes: "Vanilla, Musk, Sandalwood",
    longevity: "5-7 hours",
    sillage: "Moderate",
    volume: "50ml",
  },
  {
    id: "wild-herbs",
    name: "Wild Herbs",
    description: "Aromatic blend of rosemary, thyme, and mint",
    price: 85,
    images: ["/placeholder.svg?height=600&width=600"],
    category: "Perfume",
    collection: "botanical",
    collectionName: "The Botanical Collection",
    tags: ["herbal", "aromatic", "fresh", "day"],
    sku: "BO-WH-004",
    fragranceFamily: "Aromatic",
    topNotes: "Mint, Basil, Lemon",
    heartNotes: "Rosemary, Thyme, Sage",
    baseNotes: "Vetiver, Oakmoss, Musk",
    longevity: "4-6 hours",
    sillage: "Light to Moderate",
    volume: "50ml",
  },

  // Coastal Collection
  {
    id: "ocean-mist",
    name: "Ocean Mist",
    description: "Fresh aquatic scent with citrus undertones",
    price: 85,
    images: ["/placeholder.svg?height=600&width=600"],
    category: "Perfume",
    collection: "coastal",
    collectionName: "The Coastal Collection",
    tags: ["aquatic", "fresh", "citrus", "day"],
    sku: "CO-OM-001",
    fragranceFamily: "Aquatic Fresh",
    topNotes: "Bergamot, Lemon, Sea Salt",
    heartNotes: "Marine Accord, Jasmine, Rosemary",
    baseNotes: "Driftwood, Musk, Amber",
    longevity: "4-6 hours",
    sillage: "Moderate",
    volume: "50ml",
  },
  {
    id: "mediterranean-breeze",
    name: "Mediterranean Breeze",
    description: "Crisp sea air with hints of citrus and herbs",
    price: 90,
    images: ["/placeholder.svg?height=600&width=600"],
    category: "Perfume",
    collection: "coastal",
    collectionName: "The Coastal Collection",
    tags: ["aquatic", "fresh", "herbal", "day"],
    sku: "CO-MB-002",
    fragranceFamily: "Aromatic Aquatic",
    topNotes: "Bergamot, Mandarin, Sea Notes",
    heartNotes: "Rosemary, Lavender, Jasmine",
    baseNotes: "Cedarwood,  Mandarin, Sea Notes",
    heartNotes: "Rosemary, Lavender, Jasmine",
    baseNotes: "Cedarwood, Musk, Amber",
    longevity: "5-7 hours",
    sillage: "Moderate",
    volume: "50ml",
  },
  {
    id: "tropical-shore",
    name: "Tropical Shore",
    description: "Coconut and sea salt with floral notes",
    price: 95,
    images: ["/placeholder.svg?height=600&width=600"],
    category: "Perfume",
    collection: "coastal",
    collectionName: "The Coastal Collection",
    tags: ["tropical", "coconut", "floral", "day"],
    sku: "CO-TS-003",
    fragranceFamily: "Floral Fruity",
    topNotes: "Coconut, Bergamot, Sea Salt",
    heartNotes: "Frangipani, Ylang-Ylang, Orange Blossom",
    baseNotes: "Vanilla, Musk, Sandalwood",
    longevity: "5-7 hours",
    sillage: "Moderate",
    volume: "50ml",
  },
  {
    id: "seaside-escape",
    name: "Seaside Escape",
    description: "Fresh marine notes with amber and driftwood",
    price: 85,
    images: ["/placeholder.svg?height=600&width=600"],
    category: "Perfume",
    collection: "coastal",
    collectionName: "The Coastal Collection",
    tags: ["marine", "woody", "fresh", "day"],
    sku: "CO-SE-004",
    fragranceFamily: "Woody Aquatic",
    topNotes: "Sea Spray, Bergamot, Grapefruit",
    heartNotes: "Marine Accord, Lavender, Geranium",
    baseNotes: "Driftwood, Amber, Musk",
    longevity: "4-6 hours",
    sillage: "Moderate",
    volume: "50ml",
  },

  // Signature Collection
  {
    id: "amber-elixir",
    name: "Amber Elixir",
    description: "Warm, woody notes with a hint of vanilla",
    longDescription:
      "Amber Elixir is our signature fragrance, featuring a harmonious blend of warm amber, precious woods, and a touch of sweet vanilla. This timeless scent creates an aura of sophistication and comfort that's perfect for any occasion.",
    price: 120,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Perfume",
    collection: "signature",
    collectionName: "The Signature Collection",
    tags: ["amber", "woody", "vanilla", "signature"],
    sku: "SI-AE-001",
    features: [
      "Our bestselling signature fragrance",
      "Balanced blend of warmth and sophistication",
      "Versatile for day or evening wear",
      "Elegant glass bottle with gold accents",
    ],
    sizes: [
      { value: "30ml", label: "30ml", price: 75 },
      { value: "50ml", label: "50ml", price: 120, isDefault: true },
      { value: "100ml", label: "100ml", price: 180 },
    ],
    fragranceFamily: "Oriental Woody",
    topNotes: "Bergamot, Mandarin, Pink Pepper",
    heartNotes: "Amber, Jasmine, Cedarwood",
    baseNotes: "Vanilla, Sandalwood, Musk",
    longevity: "6-8 hours",
    sillage: "Moderate to Strong",
    volume: "30ml / 50ml / 100ml",
    ingredients:
      "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Linalool, Limonene, Coumarin, Eugenol, Citronellol, Geraniol, Cinnamal, Benzyl Benzoate, Citral, Benzyl Alcohol, Farnesol",
    reviews: [
      {
        name: "Emily R.",
        date: "April 2, 2025",
        rating: 5,
        comment:
          "This has been my signature scent for years. It's warm, inviting, and I always get compliments when I wear it. The longevity is excellent too!",
      },
      {
        name: "Michael T.",
        date: "March 18, 2025",
        rating: 5,
        comment:
          "Bought this for my wife and now I find myself borrowing it. Such a sophisticated and versatile fragrance.",
      },
      {
        name: "Olivia K.",
        date: "February 10, 2025",
        rating: 4,
        comment:
          "Beautiful amber scent that evolves nicely throughout the day. My only wish is that it lasted a bit longer on my skin.",
      },
    ],
  },
  {
    id: "velvet-rose",
    name: "Velvet Rose",
    description: "Delicate floral bouquet with rose and jasmine",
    price: 95,
    images: ["/placeholder.svg?height=600&width=600"],
    category: "Perfume",
    collection: "signature",
    collectionName: "The Signature Collection",
    tags: ["rose", "floral", "elegant", "signature"],
    sku: "SI-VR-002",
    fragranceFamily: "Floral",
    topNotes: "Bergamot, Lemon, Pink Pepper",
    heartNotes: "Rose, Jasmine, Lily of the Valley",
    baseNotes: "Musk, Amber, Patchouli",
    longevity: "5-7 hours",
    sillage: "Moderate",
    volume: "50ml",
  },
  {
    id: "cedar-sage",
    name: "Cedar & Sage",
    description: "Earthy, grounding blend with herbal notes",
    price: 110,
    images: ["/placeholder.svg?height=600&width=600"],
    category: "Perfume",
    collection: "signature",
    collectionName: "The Signature Collection",
    tags: ["woody", "herbal", "earthy", "signature"],
    sku: "SI-CS-003",
    fragranceFamily: "Woody Aromatic",
    topNotes: "Sage, Bergamot, Lemon",
    heartNotes: "Cedarwood, Cypress, Lavender",
    baseNotes: "Vetiver, Amber, Musk",
    longevity: "6-8 hours",
    sillage: "Moderate",
    volume: "50ml",
  },
  {
    id: "vanilla-dreams",
    name: "Vanilla Dreams",
    description: "Sweet, comforting vanilla with warm spices",
    price: 90,
    images: ["/placeholder.svg?height=600&width=600"],
    category: "Perfume",
    collection: "signature",
    collectionName: "The Signature Collection",
    tags: ["vanilla", "sweet", "gourmand", "signature"],
    sku: "SI-VD-004",
    fragranceFamily: "Oriental Gourmand",
    topNotes: "Bergamot, Almond, Cinnamon",
    heartNotes: "Vanilla, Jasmine, Heliotrope",
    baseNotes: "Tonka Bean, Sandalwood, Musk",
    longevity: "6-8 hours",
    sillage: "Moderate",
    volume: "50ml",
  },
]

// Function to get related products
export function getRelatedProducts(currentProductId: string, collection: string, limit = 4): Product[] {
  // First get products from the same collection
  const sameCollectionProducts = products.filter((p) => p.collection === collection && p.id !== currentProductId)

  // If we have enough products from the same collection, return those
  if (sameCollectionProducts.length >= limit) {
    return sameCollectionProducts.slice(0, limit)
  }

  // Otherwise, add products from other collections to reach the limit
  const otherProducts = products
    .filter((p) => p.collection !== collection && p.id !== currentProductId)
    .slice(0, limit - sameCollectionProducts.length)

  return [...sameCollectionProducts, ...otherProducts]
}

// Function to get products by collection
export function getProductsByCollection(collection: string): Product[] {
  return products.filter((p) => p.collection === collection)
}

// Function to get a product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

// Function to search products
export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      p.category.toLowerCase().includes(lowercaseQuery) ||
      p.collectionName.toLowerCase().includes(lowercaseQuery),
  )
}

