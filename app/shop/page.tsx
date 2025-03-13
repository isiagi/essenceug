"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Filter, ChevronDown, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import ProductCard from "@/components/product-card";
import Newsletter from "@/components/newsletter";
import { products } from "@/lib/products";

// Define filter types
type CategoryFilter =
  | "all"
  | "perfumes"
  | "body-sprays"
  | "gift-sets"
  | "samples";
type ScentFilter = "floral" | "woody" | "oriental" | "fresh";
type PriceFilter = "under-50" | "50-100" | "100-150" | "over-150";
type SortOption = "featured" | "newest" | "price-low" | "price-high";

function ShopPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for filters
  const [categoryFilters, setCategoryFilters] = useState<CategoryFilter[]>([]);
  const [scentFilters, setScentFilters] = useState<ScentFilter[]>([]);
  const [priceFilters, setPriceFilters] = useState<PriceFilter[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>("featured");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Initialize filters from URL parameters
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setCategoryFilters([category as CategoryFilter]);
    }

    const scent = searchParams.get("scent");
    if (scent) {
      setScentFilters([scent as ScentFilter]);
    }

    const price = searchParams.get("price");
    if (price) {
      setPriceFilters([price as PriceFilter]);
    }

    const sort = searchParams.get("sort");
    if (sort) {
      setSortOption(sort as SortOption);
    }
  }, [searchParams]);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];

    // Apply category filters
    if (categoryFilters.length > 0) {
      result = result.filter((product) => {
        const category = product.category.toLowerCase();
        return categoryFilters.some((filter) => {
          if (filter === "all") return true;
          if (filter === "perfumes") return category.includes("perfume");
          if (filter === "body-sprays")
            return category.includes("spray") || category.includes("mist");
          if (filter === "gift-sets")
            return category.includes("gift") || category.includes("set");
          if (filter === "samples") return category.includes("sample");
          return false;
        });
      });
    }

    // Apply scent filters
    if (scentFilters.length > 0) {
      result = result.filter((product) => {
        const tags = product.tags || [];
        const fragranceFamily = product.fragranceFamily?.toLowerCase() || "";

        return scentFilters.some((filter) => {
          if (filter === "floral") {
            return (
              tags.includes("floral") || fragranceFamily.includes("floral")
            );
          }
          if (filter === "woody") {
            return tags.includes("woody") || fragranceFamily.includes("woody");
          }
          if (filter === "oriental") {
            return (
              tags.includes("oriental") || fragranceFamily.includes("oriental")
            );
          }
          if (filter === "fresh") {
            return (
              tags.includes("fresh") ||
              fragranceFamily.includes("fresh") ||
              fragranceFamily.includes("aquatic")
            );
          }
          return false;
        });
      });
    }

    // Apply price filters
    if (priceFilters.length > 0) {
      result = result.filter((product) => {
        const price = product.price;
        return priceFilters.some((filter) => {
          if (filter === "under-50") return price < 50;
          if (filter === "50-100") return price >= 50 && price <= 100;
          if (filter === "100-150") return price > 100 && price <= 150;
          if (filter === "over-150") return price > 150;
          return false;
        });
      });
    }

    // Apply sorting
    if (sortOption === "newest") {
      // For demo purposes, we'll just reverse the array to simulate "newest"
      result = [...result].reverse();
    } else if (sortOption === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }
    // "featured" is the default order

    setFilteredProducts(result);
  }, [categoryFilters, scentFilters, priceFilters, sortOption]);

  // Toggle category filter
  const toggleCategoryFilter = (filter: CategoryFilter) => {
    setCategoryFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  // Toggle scent filter
  const toggleScentFilter = (filter: ScentFilter) => {
    setScentFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  // Toggle price filter
  const togglePriceFilter = (filter: PriceFilter) => {
    setPriceFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  // Clear all filters
  const clearAllFilters = () => {
    setCategoryFilters([]);
    setScentFilters([]);
    setPriceFilters([]);
    setSortOption("featured");

    // Clear URL parameters
    router.push("/shop");
  };

  // Filter components - used in both desktop and mobile
  const FilterComponents = () => (
    <>
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Category</h4>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Checkbox
              id="perfumes"
              checked={categoryFilters.includes("perfumes")}
              onCheckedChange={() => toggleCategoryFilter("perfumes")}
            />
            <Label htmlFor="perfumes" className="text-sm">
              Perfumes
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="body-sprays"
              checked={categoryFilters.includes("body-sprays")}
              onCheckedChange={() => toggleCategoryFilter("body-sprays")}
            />
            <Label htmlFor="body-sprays" className="text-sm">
              Body Sprays
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="gift-sets"
              checked={categoryFilters.includes("gift-sets")}
              onCheckedChange={() => toggleCategoryFilter("gift-sets")}
            />
            <Label htmlFor="gift-sets" className="text-sm">
              Gift Sets
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="samples"
              checked={categoryFilters.includes("samples")}
              onCheckedChange={() => toggleCategoryFilter("samples")}
            />
            <Label htmlFor="samples" className="text-sm">
              Samples
            </Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Scent Family</h4>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Checkbox
              id="floral"
              checked={scentFilters.includes("floral")}
              onCheckedChange={() => toggleScentFilter("floral")}
            />
            <Label htmlFor="floral" className="text-sm">
              Floral
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="woody"
              checked={scentFilters.includes("woody")}
              onCheckedChange={() => toggleScentFilter("woody")}
            />
            <Label htmlFor="woody" className="text-sm">
              Woody
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="oriental"
              checked={scentFilters.includes("oriental")}
              onCheckedChange={() => toggleScentFilter("oriental")}
            />
            <Label htmlFor="oriental" className="text-sm">
              Oriental
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="fresh"
              checked={scentFilters.includes("fresh")}
              onCheckedChange={() => toggleScentFilter("fresh")}
            />
            <Label htmlFor="fresh" className="text-sm">
              Fresh
            </Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Price Range</h4>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Checkbox
              id="price-1"
              checked={priceFilters.includes("under-50")}
              onCheckedChange={() => togglePriceFilter("under-50")}
            />
            <Label htmlFor="price-1" className="text-sm">
              Under $50
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="price-2"
              checked={priceFilters.includes("50-100")}
              onCheckedChange={() => togglePriceFilter("50-100")}
            />
            <Label htmlFor="price-2" className="text-sm">
              $50 - $100
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="price-3"
              checked={priceFilters.includes("100-150")}
              onCheckedChange={() => togglePriceFilter("100-150")}
            />
            <Label htmlFor="price-3" className="text-sm">
              $100 - $150
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="price-4"
              checked={priceFilters.includes("over-150")}
              onCheckedChange={() => togglePriceFilter("over-150")}
            />
            <Label htmlFor="price-4" className="text-sm">
              $150+
            </Label>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        className="w-full md:w-auto"
        onClick={clearAllFilters}
      >
        Clear All Filters
      </Button>
    </>
  );

  // Check if any filters are active
  const hasActiveFilters =
    categoryFilters.length > 0 ||
    scentFilters.length > 0 ||
    priceFilters.length > 0;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-neutral-50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                Shop All Products
              </h1>
              <div className="w-20 h-px bg-neutral-300 mb-4" />
              <p className="text-neutral-600 max-w-2xl">
                Explore our complete collection of exquisite fragrances, crafted
                with the finest ingredients
              </p>
            </div>

            {/* Mobile Filter Button */}
            <div className="w-full md:hidden mb-6">
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      <span>Filters</span>
                    </div>
                    {hasActiveFilters && (
                      <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {categoryFilters.length +
                          scentFilters.length +
                          priceFilters.length}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[300px] sm:w-[350px] overflow-y-auto"
                >
                  <SheetHeader className="mb-4">
                    <SheetTitle className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Filters
                    </SheetTitle>
                  </SheetHeader>
                  <div className="space-y-6">
                    <FilterComponents />
                  </div>
                  <div className="mt-6 flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearAllFilters}
                    >
                      Clear All
                    </Button>
                    <SheetClose asChild>
                      <Button>Apply Filters</Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Desktop Filters */}
              <div className="hidden md:block w-64 space-y-4 flex-shrink-0">
                <div className="flex items-center justify-between md:justify-start gap-2">
                  <Filter className="h-4 w-4" />
                  <h3 className="font-medium">Filters</h3>
                </div>

                <FilterComponents />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <p className="text-sm text-neutral-600">
                    Showing {filteredProducts.length} of {products.length}{" "}
                    products
                    {hasActiveFilters && " (filtered)"}
                  </p>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <span className="text-sm whitespace-nowrap">Sort by:</span>
                    <Select
                      value={sortOption}
                      onValueChange={(value) =>
                        setSortOption(value as SortOption)
                      }
                    >
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="featured">Featured</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="price-low">
                          Price: Low to High
                        </SelectItem>
                        <SelectItem value="price-high">
                          Price: High to Low
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Active Filters Display */}
                {hasActiveFilters && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {categoryFilters.map((filter) => (
                      <Button
                        key={`category-${filter}`}
                        variant="secondary"
                        size="sm"
                        className="flex items-center gap-1 text-xs sm:text-sm h-7 sm:h-9 px-2 sm:px-3"
                        onClick={() => toggleCategoryFilter(filter)}
                      >
                        {filter.replace("-", " ")}
                        <X className="h-3 w-3 ml-1" />
                      </Button>
                    ))}
                    {scentFilters.map((filter) => (
                      <Button
                        key={`scent-${filter}`}
                        variant="secondary"
                        size="sm"
                        className="flex items-center gap-1 text-xs sm:text-sm h-7 sm:h-9 px-2 sm:px-3"
                        onClick={() => toggleScentFilter(filter)}
                      >
                        {filter}
                        <X className="h-3 w-3 ml-1" />
                      </Button>
                    ))}
                    {priceFilters.map((filter) => (
                      <Button
                        key={`price-${filter}`}
                        variant="secondary"
                        size="sm"
                        className="flex items-center gap-1 text-xs sm:text-sm h-7 sm:h-9 px-2 sm:px-3"
                        onClick={() => togglePriceFilter(filter)}
                      >
                        {filter === "under-50"
                          ? "Under $50"
                          : filter === "50-100"
                          ? "$50 - $100"
                          : filter === "100-150"
                          ? "$100 - $150"
                          : "$150+"}
                        <X className="h-3 w-3 ml-1" />
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs sm:text-sm h-7 sm:h-9 px-2 sm:px-3"
                      onClick={clearAllFilters}
                    >
                      Clear All
                    </Button>
                  </div>
                )}

                {filteredProducts.length === 0 ? (
                  <div className="text-center py-8 sm:py-12">
                    <h3 className="text-lg font-medium mb-2">
                      No products found
                    </h3>
                    <p className="text-neutral-600 mb-4 px-4">
                      No products match your selected filters. Try adjusting
                      your filters or browse our collections.
                    </p>
                    <Button onClick={clearAllFilters}>Clear Filters</Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredProducts.map((product) => (
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
                )}

                {filteredProducts.length > 0 && (
                  <div className="flex justify-center mt-8 sm:mt-12">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 sm:h-10 sm:w-10"
                        disabled
                      >
                        <ChevronDown className="h-4 w-4 rotate-90" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 sm:h-10 sm:w-10 p-0 bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        1
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 sm:h-10 sm:w-10 p-0"
                      >
                        2
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 sm:h-10 sm:w-10 p-0"
                      >
                        3
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 sm:h-10 sm:w-10 p-0"
                      >
                        4
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 sm:h-10 sm:w-10"
                      >
                        <ChevronDown className="h-4 w-4 -rotate-90" />
                      </Button>
                    </div>
                  </div>
                )}
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
                  <Link
                    href="/shop?category=perfumes"
                    className="hover:text-white"
                  >
                    Perfumes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop?category=body-sprays"
                    className="hover:text-white"
                  >
                    Body Sprays
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop?category=gift-sets"
                    className="hover:text-white"
                  >
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

export default function ShopPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopPageContent />
    </Suspense>
  );
}
