import { Car, Search, Shield, Star, Users, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { SearchBar } from "@/components/ui/searchbar"
import { NavBar } from "@/components/ui/navbar"

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
    <div className="min-h-screen bg-background">
      {/* NavBar */}
      <NavBar/>

      {/* Hero Section */}
      <section 
        className="relative py-20"
        style={{
          backgroundImage: "url(https://lh3.googleusercontent.com/p/AF1QipP4HjSL_xa0c3qZxgoO_CjNa8P6mvGVOPnRjmV7=s680-w680-h510-rw)", // use url('caminho')
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        >

        {/* Overlay escuro para melhor contraste */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Encontre o Carro dos Seus Sonhos
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto text-pretty">
            Oferecemos os melhores veículos seminovos com garantia, procedência e o melhor atendimento da região.
          </p>
        </div>
        <SearchBar />
      </section>

      {/* Featured Cars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Veículos em Destaque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Confira nossa seleção especial de veículos com as melhores condições e preços.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={car.image || "/placeholder.svg"}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-48 object-cover"
                  />
                  <Badge
                    className={`absolute top-3 right-3 ${
                      car.status === "available"
                        ? "bg-green-500"
                        : car.status === "reserved"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                  >
                    {car.status === "available" ? "Disponível" : car.status === "reserved" ? "Reservado" : "Vendido"}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {car.brand} {car.model} {car.year}
                  </CardTitle>
                  <CardDescription>{car.mileage.toLocaleString("pt-BR")} km rodados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">R$ {car.price.toLocaleString("pt-BR")}</span>
                    <Button size="sm">Ver Detalhes</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/veiculos">
              <Button size="lg" variant="outline">
                Ver Todos os Veículos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por Que Escolher a AutoVendas?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Garantia Total</h3>
              <p className="text-gray-600">
                Todos os nossos veículos passam por rigorosa inspeção e vêm com garantia completa.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Certificada</h3>
              <p className="text-gray-600">Veículos selecionados com procedência garantida e histórico completo.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento Especializado</h3>
              <p className="text-gray-600">Nossa equipe está pronta para ajudar você a encontrar o carro ideal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para Encontrar Seu Próximo Carro?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e nossa equipe especializada irá ajudá-lo a encontrar o veículo perfeito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="h-5 w-5 mr-2" />
              (11) 9999-9999
            </Button>
            <Link href="/contato">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Car className="h-6 w-6" />
                <span className="text-xl font-bold">AutoVendas</span>
              </div>
              <p className="text-gray-400">Sua revenda de confiança há mais de 10 anos no mercado.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/veiculos" className="hover:text-white">
                    Veículos
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="hover:text-white">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="hover:text-white">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>(11) 9999-9999</li>
                <li>contato@autovendas.com</li>
                <li>Rua das Flores, 123 - São Paulo</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Horário de Funcionamento</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Segunda a Sexta: 8h às 18h</li>
                <li>Sábado: 8h às 16h</li>
                <li>Domingo: Fechado</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoVendas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
