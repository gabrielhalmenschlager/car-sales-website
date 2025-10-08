"use client";

import { Cog, Fuel, Paintbrush } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

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


export function FeaturedCars() {
  return (
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
            <Card
              key={car.id}
              className="
          overflow-hidden bg-gray-950 border border-gray-800 
          rounded-lg shadow-lg flex flex-col
          transform transition-transform duration-500 ease-in-out
          hover:-translate-y-2 hover:scale-105 hover:border-green-500
        "
            >
              <div className="relative">
                <img
                  src={car.image || "/placeholder.svg"}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-56 object-cover"
                />
                {/* Badge de status com cor verde */}
                <Badge
                  className={`
              absolute top-4 right-4 text-black font-semibold
              transition-colors duration-500 ease-in-out
              ${car.status === "available" ? "bg-green-500" : car.status === "reserved" ? "bg-yellow-500" : "bg-red-600"}
            `}
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
                      <Button
                        size="lg"
                        className="
                    w-full bg-green-500 text-black font-bold
                    transition-all duration-300 ease-in-out
                    hover:bg-green-600 hover:scale-105 hover:shadow-md
                  "
                      >
                        Ver Detalhes
                      </Button>
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
  );
}
