import { Car, Search, Shield, Star, Users, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { SearchBar } from "@/components/ui/searchbar"
import { NavBar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"

// Mock data for featured cars
const featuredCars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    price: 85000,
    mileage: 25000,
    image: "/toyota-corolla-2022-silver-sedan.jpg",
    status: "available",
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic",
    year: 2023,
    price: 95000,
    mileage: 15000,
    image: "/honda-civic-2023-blue-sedan.jpg",
    status: "available",
  },
  {
    id: 3,
    brand: "Volkswagen",
    model: "Jetta",
    year: 2021,
    price: 78000,
    mileage: 35000,
    image: "/volkswagen-jetta-2021-white-sedan.jpg",
    status: "reserved",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* NavBar */}
      <NavBar/>

      {/* Hero Section */}
      <section 
        className="relative py-20"
        style={{
          backgroundImage: "url(https://lh3.googleusercontent.com/p/AF1QipP4HjSL_xa0c3qZxgoO_CjNa8P6mvGVOPnRjmV7=s680-w680-h510-rw)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        >

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Encontre o Carro dos Seus Sonhos
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Os melhores seminovos com garantia, procedência e atendimento de confiança.
          </p>
        </div>
        <SearchBar />
      </section>

      {/* Featured Cars */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-500 mb-4">Veículos em Destaque</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Confira nossa seleção especial de veículos com as melhores condições.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <Card key={car.id} className="overflow-hidden bg-[#111] border border-green-600/30 hover:border-green-500 transition">
                <div className="relative">
                  <img
                    src={car.image || "/placeholder.svg"}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-48 object-cover"
                  />
                  <Badge
                    className={`absolute top-3 right-3 text-black ${
                      car.status === "available"
                        ? "bg-green-500"
                        : car.status === "reserved"
                          ? "bg-yellow-400"
                          : "bg-red-500"
                    }`}
                  >
                    {car.status === "available" ? "Disponível" : car.status === "reserved" ? "Reservado" : "Vendido"}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    {car.brand} {car.model} {car.year}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {car.mileage.toLocaleString("pt-BR")} km rodados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-500">
                      R$ {car.price.toLocaleString("pt-BR")}
                    </span>
                    <Button size="sm" className="bg-green-500 hover:bg-green-600 text-black font-semibold">
                      Ver Detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/veiculos">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black font-semibold">
                Ver Todos os Veículos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#111] py-16 border-t border-green-600/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-500 mb-4">Por Que Escolher a Santa Veículos?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Garantia Total</h3>
              <p className="text-gray-400">Todos os veículos passam por rigorosa inspeção e vêm com garantia.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Qualidade Certificada</h3>
              <p className="text-gray-400">Veículos com procedência garantida e histórico completo.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Atendimento Especializado</h3>
              <p className="text-gray-400">Equipe pronta para ajudar você a encontrar o carro ideal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Pronto para Encontrar Seu Próximo Carro?</h2>
          <p className="text-black/80 mb-8 max-w-2xl mx-auto">
            Entre em contato e nossa equipe especializada irá ajudá-lo a encontrar o veículo perfeito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-black/90 text-green-500 font-semibold">
              <Phone className="h-5 w-5 mr-2" />
              (11) 9999-9999
            </Button>
            <Link href="/contato">
              <Button
                size="lg"
                className="bg-black hover:bg-black/90 text-green-500 border border-green-500 font-semibold"
              >
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  )
}
