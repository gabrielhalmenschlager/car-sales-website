
import { NavBar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { CTASection } from "@/components/ui/cta";
import { FeatureSection } from "@/components/ui/features-section"
import { FeaturedCars } from "@/components/ui/featured-car";
import { HeroSection } from "@/components/ui/hero-section";

// Mock data (sem alterações)
const featuredCars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla XEi",
    year: 2022,
    price: 135000,
    mileage: 25000,
    image: "/toyota-corolla-2022-silver-sedan.jpg",
    status: "available",
    transmission: "Automático",
    fuel: "Flex",
    color: "Prata",
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic Touring",
    year: 2023,
    price: 160000,
    mileage: 15000,
    image: "/honda-civic-2023-blue-sedan.jpg",
    status: "available",
    transmission: "Automático",
    fuel: "Gasolina",
    color: "Azul",
  },
  {
    id: 3,
    brand: "Volkswagen",
    model: "Jetta GLI",
    year: 2021,
    price: 182000,
    mileage: 35000,
    image: "/volkswagen-jetta-2021-white-sedan.jpg",
    status: "reserved",
    transmission: "Automático",
    fuel: "Gasolina",
    color: "Branco",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-gray-300">      
      { /* NavBar */ }
      <NavBar />

      {/* Hero Section */}
      < HeroSection />

      {/* Featured Cars */}
      < FeaturedCars/>

      {/* Feature Section */}
      <FeatureSection/>

      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}