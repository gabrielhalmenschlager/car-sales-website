import { Car, Search, Shield, Star, Users, Phone, Cog, Fuel, Paintbrush } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { SearchBar } from "@/components/ui/searchbar"
import { NavBar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"

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
        className="relative py-35"
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
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-500 mb-4">Veículos em Destaque</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nossa seleção especial de veículos, inspecionados e prontos para você.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              // Cards com fundo cinza escuro e borda verde no hover
              <Card key={car.id} className="overflow-hidden bg-gray-950 border border-gray-800 hover:border-green-500 transition-all duration-300 rounded-lg shadow-lg flex flex-col">
                <div className="relative">
                  <img
                    src={car.image || "/placeholder.svg"}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-56 object-cover"
                  />
                  {/* Badge de status com cor verde */}
                  <Badge
                    className={`absolute top-4 right-4 text-black font-semibold ${car.status === "available" ? "bg-green-500" : car.status === "reserved" ? "bg-yellow-500" : "bg-red-600"
                      }`}
                  >
                    {car.status === "available" ? "Disponível" : car.status === "reserved" ? "Reservado" : "Vendido"}
                  </Badge>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl font-bold text-white">{car.brand} {car.model}</CardTitle>
                    <CardDescription className="text-gray-400">{car.year} · {car.mileage.toLocaleString("pt-BR")} km</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    {/* Ícones e preço com destaque em verde */}
                    <div className="flex items-center justify-around text-gray-300 text-sm border-y border-gray-800 py-3 my-4">
                      <div className="flex items-center gap-2"><Cog size={16} className="text-green-500" /><span>{car.transmission}</span></div>
                      <div className="flex items-center gap-2"><Fuel size={16} className="text-green-500" /><span>{car.fuel}</span></div>
                      <div className="flex items-center gap-2"><Paintbrush size={16} className="text-green-500" /><span>{car.color}</span></div>
                    </div>
                    <div className="mt-auto">
                      <span className="text-3xl font-bold text-green-500 block mb-4">R$ {car.price.toLocaleString("pt-BR")}</span>
                      {/* Botões com o tema verde e preto */}
                      <div className="flex flex-col gap-2">
                        <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-black font-bold">Ver Detalhes</Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/veiculos">
              <Button size="lg" className="bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-bold transition-colors">
                Ver Todos os Veículos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-950/50 border-y border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Por Que Escolher a <span className="text-green-500">Santa Veículos</span>?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Compromisso com qualidade, transparência e a sua satisfação.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Shield, title: "Garantia e Confiança", description: "Todos os veículos são inspecionados e possuem garantia de procedência." },
              { icon: Star, title: "Qualidade Superior", description: "Selecionamos apenas os melhores seminovos para o nosso estoque." },
              { icon: Users, title: "Atendimento Personalizado", description: "Nossa equipe está pronta para ajudar você a fazer a melhor escolha." },
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-lg bg-gray-900 border border-gray-800 transition hover:bg-gray-800/50 hover:-translate-y-2">
                <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                  <feature.icon className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Pronto para Encontrar Seu Próximo Carro?</h2>
          <p className="text-black/80 mb-8 max-w-2xl mx-auto">
            Fale com um de nossos consultores e agende uma visita hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Botão com correção para o erro 'React.Children.only' e novo estilo */}
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white font-bold shadow-md">
              <Link href="tel:51999200699">
                <span className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  (51) 99920-0699
                </span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-green-500 font-bold">
              <Link href="/contato">
                Enviar Mensagem
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}