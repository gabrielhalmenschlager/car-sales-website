"use client"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import {
  ArrowLeft,
  Car,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Palette,
  Phone,
  Mail,
  MapPin,
  Heart,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useParams } from "next/navigation"

// Mock data - in a real app, this would come from an API
const mockVehicle = {
  id: 1,
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  price: 85000,
  mileage: 25000,
  color: "Prata",
  fuel: "Flex",
  transmission: "Automático",
  status: "available",
  images: ["/toyota-corolla-2022-silver-sedan.jpg", "/toyota-corolla-interior.png", "/toyota-corolla-engine.png"],
  description:
    "Veículo em excelente estado de conservação, com revisões sempre em dia e único dono. Possui todos os opcionais de série, incluindo ar condicionado, direção hidráulica, vidros elétricos, travas elétricas e sistema de som completo.",
  features: [
    "Ar condicionado",
    "Direção hidráulica",
    "Vidros elétricos",
    "Travas elétricas",
    "Sistema de som",
    "Airbags frontais",
    "ABS",
    "Controle de estabilidade",
  ],
  specifications: {
    doors: 4,
    seats: 5,
    engine: "1.8 16V",
    power: "144 cv",
    torque: "17,5 kgfm",
    consumption: "12,2 km/l",
  },
  createdAt: "2024-01-15",
}

export default function VehicleDetailsPage() {
  const params = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showContactForm, setShowContactForm] = useState(false)

  // In a real app, you would fetch the vehicle data based on the ID
  const vehicle = mockVehicle

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">AutoVendas</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/veiculos">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Vehicle Title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {vehicle.brand} {vehicle.model} {vehicle.year}
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {vehicle.year}
                </span>
                <span className="flex items-center gap-1">
                  <Gauge className="h-4 w-4" />
                  {vehicle.mileage.toLocaleString("pt-BR")} km
                </span>
                <span className="flex items-center gap-1">
                  <Fuel className="h-4 w-4" />
                  {vehicle.fuel}
                </span>
                <span className="flex items-center gap-1">
                  <Settings className="h-4 w-4" />
                  {vehicle.transmission}
                </span>
                <span className="flex items-center gap-1">
                  <Palette className="h-4 w-4" />
                  {vehicle.color}
                </span>
              </div>
            </div>

            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={vehicle.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${vehicle.brand} ${vehicle.model} - Imagem ${currentImageIndex + 1}`}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button variant="secondary" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="secondary" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {vehicle.images.length > 1 && (
                  <div className="flex gap-2 p-4">
                    {vehicle.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-20 h-16 rounded-lg overflow-hidden border-2 ${
                          currentImageIndex === index ? "border-blue-600" : "border-gray-200"
                        }`}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Descrição</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{vehicle.description}</p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Equipamentos e Opcionais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Especificações Técnicas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <Label className="text-sm text-gray-600">Portas</Label>
                    <p className="font-medium">{vehicle.specifications.doors}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600">Lugares</Label>
                    <p className="font-medium">{vehicle.specifications.seats}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600">Motor</Label>
                    <p className="font-medium">{vehicle.specifications.engine}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600">Potência</Label>
                    <p className="font-medium">{vehicle.specifications.power}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600">Torque</Label>
                    <p className="font-medium">{vehicle.specifications.torque}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600">Consumo</Label>
                    <p className="font-medium">{vehicle.specifications.consumption}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price and Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  <span className="text-3xl font-bold text-blue-600">R$ {vehicle.price.toLocaleString("pt-BR")}</span>
                </CardTitle>
                <CardDescription className="text-center">
                  <Badge className="bg-green-500">Disponível</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  <Phone className="h-5 w-5 mr-2" />
                  (11) 9999-9999
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="lg">
                  <Mail className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </Button>
                <Separator />
                <div className="text-center text-sm text-gray-600">
                  <p className="flex items-center justify-center gap-1">
                    <MapPin className="h-4 w-4" />
                    São Paulo, SP
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Informações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Marca:</span>
                  <span className="font-medium">{vehicle.brand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Modelo:</span>
                  <span className="font-medium">{vehicle.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ano:</span>
                  <span className="font-medium">{vehicle.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quilometragem:</span>
                  <span className="font-medium">{vehicle.mileage.toLocaleString("pt-BR")} km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Combustível:</span>
                  <span className="font-medium">{vehicle.fuel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transmissão:</span>
                  <span className="font-medium">{vehicle.transmission}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cor:</span>
                  <span className="font-medium">{vehicle.color}</span>
                </div>
              </CardContent>
            </Card>

            {/* Safety */}
            <Card>
              <CardHeader>
                <CardTitle>Garantia e Segurança</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Garantia de 3 meses</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Procedência garantida</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Revisões em dia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Documentação ok</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
