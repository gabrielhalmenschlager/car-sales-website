import TextType from "@/components/ui/text-type";

import { SearchBar } from "@/components/ui/searchbar"
import { NavBar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { CTASection } from "@/components/ui/cta";
import { FeatureSection } from "@/components/ui/features-section"
import { FeaturedCars } from "@/components/ui/featured-car";

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
    // Fundo principal preto e texto padrão cinza claro
    <div className="min-h-screen bg-black text-gray-300">
      <NavBar />

      {/* Hero Section */}
      <section 
        className="relative py-25"
        style={{
          backgroundImage: "url(https://lh3.googleusercontent.com/p/AF1QipP4HjSL_xa0c3qZxgoO_CjNa8P6mvGVOPnRjmV7=s680-w680-h510-rw)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/70 transition-opacity duration-1000 ease-in-out"></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <TextType
              text={["Encontre o Carro dos Seus Sonhos"]}
              typingSpeed={90}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Os melhores seminovos com garantia, procedência e atendimento de confiança.
          </p>
        </div>
        <SearchBar />
        
      </section>

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