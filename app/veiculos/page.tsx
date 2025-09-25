"use client"

import { useState, useMemo } from "react"
import { Car, Search, Filter, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import Link from "next/link"

// Mock data for vehicles - expanded list
const mockVehicles = [
  {
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
    images: ["/toyota-corolla-2022-silver-sedan.jpg"],
    description: "Veículo em excelente estado, revisões em dia, único dono.",
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic",
    year: 2023,
    price: 95000,
    mileage: 15000,
    color: "Azul",
    fuel: "Flex",
    transmission: "CVT",
    status: "available",
    images: ["/honda-civic-2023-blue-sedan.jpg"],
    description: "Seminovo com garantia de fábrica, baixa quilometragem.",
  },
  {
    id: 3,
    brand: "Volkswagen",
    model: "Jetta",
    year: 2021,
    price: 78000,
    mileage: 35000,
    color: "Branco",
    fuel: "Flex",
    transmission: "Automático",
    status: "reserved",
    images: ["/volkswagen-jetta-2021-white-sedan.jpg"],
    description: "Carro executivo, bem conservado, pneus novos.",
  },
  {
    id: 4,
    brand: "Chevrolet",
    model: "Onix",
    year: 2023,
    price: 65000,
    mileage: 8000,
    color: "Vermelho",
    fuel: "Flex",
    transmission: "Manual",
    status: "available",
    images: [],
    description: "Carro econômico, ideal para cidade, baixo consumo.",
  },
  {
    id: 5,
    brand: "Ford",
    model: "Ka",
    year: 2022,
    price: 55000,
    mileage: 18000,
    color: "Preto",
    fuel: "Flex",
    transmission: "Manual",
    status: "available",
    images: [],
    description: "Compacto e econômico, perfeito para o dia a dia.",
  },
  {
    id: 6,
    brand: "Hyundai",
    model: "HB20",
    year: 2023,
    price: 68000,
    mileage: 12000,
    color: "Branco",
    fuel: "Flex",
    transmission: "Automático",
    status: "available",
    images: [],
    description: "Hatch moderno com tecnologia e conforto.",
  },
]

export default function VeiculosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [brandFilter, setBrandFilter] = useState("all")
  const [yearFilter, setYearFilter] = useState("all")
  const [fuelFilter, setFuelFilter] = useState("all")
  const [transmissionFilter, setTransmissionFilter] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 150000])
  const [sortBy, setSortBy] = useState("price-asc")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)

  // Get unique values for filters
  const brands = [...new Set(mockVehicles.map((v) => v.brand))].sort()
  const years = [...new Set(mockVehicles.map((v) => v.year))].sort((a, b) => b - a)
  const fuels = [...new Set(mockVehicles.map((v) => v.fuel))].sort()
  const transmissions = [...new Set(mockVehicles.map((v) => v.transmission))].sort()

  // Filter and sort vehicles
  const filteredVehicles = useMemo(() => {
    const filtered = mockVehicles.filter((vehicle) => {
      const matchesSearch =
        vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesBrand = brandFilter === "all" || vehicle.brand === brandFilter
      const matchesYear = yearFilter === "all" || vehicle.year.toString() === yearFilter
      const matchesFuel = fuelFilter === "all" || vehicle.fuel === fuelFilter
      const matchesTransmission = transmissionFilter === "all" || vehicle.transmission === transmissionFilter
      const matchesPrice = vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1]
      const isAvailable = vehicle.status === "available"

      return (
        matchesSearch &&
        matchesBrand &&
        matchesYear &&
        matchesFuel &&
        matchesTransmission &&
        matchesPrice &&
        isAvailable
      )
    })

    // Sort vehicles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "year-desc":
          return b.year - a.year
        case "year-asc":
          return a.year - b.year
        case "mileage-asc":
          return a.mileage - b.mileage
        case "mileage-desc":
          return b.mileage - a.mileage
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, brandFilter, yearFilter, fuelFilter, transmissionFilter, priceRange, sortBy])

  const clearFilters = () => {
    setSearchTerm("")
    setBrandFilter("all")
    setYearFilter("all")
    setFuelFilter("all")
    setTransmissionFilter("all")
    setPriceRange([0, 150000])
    setSortBy("price-asc")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Santa Veículos</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/veiculos" className="text-blue-600 font-medium">
                Veículos
              </Link>
              <Link href="/sobre" className="text-gray-700 hover:text-blue-600 transition-colors">
                Sobre
              </Link>
              <Link href="/contato" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Nossos Veículos</h1>
          <p className="text-gray-600">Encontre o carro perfeito para você</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <Card className="sticky top-4">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Filtros</CardTitle>
                  <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setShowFilters(!showFilters)}>
                    <Filter className="h-4 w-4 mr-2" />
                    {showFilters ? "Ocultar" : "Mostrar"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
                {/* Search */}
                <div>
                  <Label htmlFor="search">Buscar</Label>
                  <div className="relative mt-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="search"
                      placeholder="Marca ou modelo..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <Label>Faixa de Preço</Label>
                  <div className="mt-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={150000}
                      min={0}
                      step={5000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>R$ {priceRange[0].toLocaleString("pt-BR")}</span>
                      <span>R$ {priceRange[1].toLocaleString("pt-BR")}</span>
                    </div>
                  </div>
                </div>

                {/* Brand Filter */}
                <div>
                  <Label>Marca</Label>
                  <Select value={brandFilter} onValueChange={setBrandFilter}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Todas as marcas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas as marcas</SelectItem>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Year Filter */}
                <div>
                  <Label>Ano</Label>
                  <Select value={yearFilter} onValueChange={setYearFilter}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Todos os anos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os anos</SelectItem>
                      {years.map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Fuel Filter */}
                <div>
                  <Label>Combustível</Label>
                  <Select value={fuelFilter} onValueChange={setFuelFilter}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      {fuels.map((fuel) => (
                        <SelectItem key={fuel} value={fuel}>
                          {fuel}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Transmission Filter */}
                <div>
                  <Label>Transmissão</Label>
                  <Select value={transmissionFilter} onValueChange={setTransmissionFilter}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Todas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      {transmissions.map((transmission) => (
                        <SelectItem key={transmission} value={transmission}>
                          {transmission}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
                  Limpar Filtros
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-gray-600">
                  {filteredVehicles.length} veículo{filteredVehicles.length !== 1 ? "s" : ""} encontrado
                  {filteredVehicles.length !== 1 ? "s" : ""}
                </p>
              </div>
              <div className="flex items-center gap-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-asc">Menor preço</SelectItem>
                    <SelectItem value="price-desc">Maior preço</SelectItem>
                    <SelectItem value="year-desc">Mais novo</SelectItem>
                    <SelectItem value="year-asc">Mais antigo</SelectItem>
                    <SelectItem value="mileage-asc">Menor KM</SelectItem>
                    <SelectItem value="mileage-desc">Maior KM</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results */}
            {filteredVehicles.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Car className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum veículo encontrado</h3>
                  <p className="text-gray-500 mb-4">Tente ajustar os filtros de busca</p>
                  <Button onClick={clearFilters}>Limpar Filtros</Button>
                </CardContent>
              </Card>
            ) : (
              <div
                className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}
              >
                {filteredVehicles.map((vehicle) => (
                  <Card
                    key={vehicle.id}
                    className={`overflow-hidden hover:shadow-lg transition-shadow ${viewMode === "list" ? "flex" : ""}`}
                  >
                    <div className={viewMode === "list" ? "w-48 flex-shrink-0" : ""}>
                      <img
                        src={vehicle.images[0] || "/placeholder.svg?height=200&width=300&query=car"}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        className={`object-cover ${viewMode === "list" ? "w-full h-full" : "w-full h-48"}`}
                      />
                    </div>
                    <div className={viewMode === "list" ? "flex-1" : ""}>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          {vehicle.brand} {vehicle.model} {vehicle.year}
                        </CardTitle>
                        <CardDescription>
                          {vehicle.mileage.toLocaleString("pt-BR")} km • {vehicle.color} • {vehicle.fuel} •{" "}
                          {vehicle.transmission}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-sm text-gray-600 line-clamp-2">{vehicle.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-blue-600">
                              R$ {vehicle.price.toLocaleString("pt-BR")}
                            </span>
                            <Link href={`/veiculos/${vehicle.id}`}>
                              <Button>Ver Detalhes</Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
