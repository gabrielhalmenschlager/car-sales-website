"use client"

import { useState } from "react"
import { Car, Plus, Search, Filter, Edit, Trash2, Eye, MessageSquare, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { NavBar } from "@/components/ui/navbar"

// Mock data for vehicles
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
    createdAt: "2024-01-15",
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
    createdAt: "2024-01-20",
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
    createdAt: "2024-01-10",
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
    status: "sold",
    images: [],
    createdAt: "2024-01-25",
  },
]

export default function AdminDashboard() {
  const [vehicles, setVehicles] = useState(mockVehicles)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || vehicle.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-500">Disponível</Badge>
      case "reserved":
        return <Badge className="bg-yellow-500">Reservado</Badge>
      case "sold":
        return <Badge className="bg-red-500">Vendido</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const handleDelete = (id: number) => {
    if (confirm("Tem certeza que deseja excluir este veículo?")) {
      setVehicles(vehicles.filter((v) => v.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* NavBar */}
      <NavBar/>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total de Veículos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{vehicles.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Disponíveis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {vehicles.filter((v) => v.status === "available").length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Reservados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {vehicles.filter((v) => v.status === "reserved").length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Vendidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {vehicles.filter((v) => v.status === "sold").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Gerenciar Veículos</CardTitle>
            <CardDescription>Visualize e gerencie todos os veículos cadastrados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar por marca ou modelo..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filtrar por status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os Status</SelectItem>
                  <SelectItem value="available">Disponível</SelectItem>
                  <SelectItem value="reserved">Reservado</SelectItem>
                  <SelectItem value="sold">Vendido</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Vehicles Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Veículo</TableHead>
                    <TableHead>Ano</TableHead>
                    <TableHead>Preço</TableHead>
                    <TableHead>KM</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Cadastrado</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVehicles.map((vehicle) => (
                    <TableRow key={vehicle.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            {vehicle.images.length > 0 ? (
                              <img
                                src={vehicle.images[0] || "/placeholder.svg"}
                                alt={`${vehicle.brand} ${vehicle.model}`}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            ) : (
                              <Car className="h-6 w-6 text-gray-400" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium">
                              {vehicle.brand} {vehicle.model}
                            </div>
                            <div className="text-sm text-gray-500">
                              {vehicle.color} • {vehicle.fuel} • {vehicle.transmission}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{vehicle.year}</TableCell>
                      <TableCell>R$ {vehicle.price.toLocaleString("pt-BR")}</TableCell>
                      <TableCell>{vehicle.mileage.toLocaleString("pt-BR")} km</TableCell>
                      <TableCell>{getStatusBadge(vehicle.status)}</TableCell>
                      <TableCell>{new Date(vehicle.createdAt).toLocaleDateString("pt-BR")}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Link href={`/admin/veiculo/${vehicle.id}/editar`}>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button variant="ghost" size="sm" onClick={() => handleDelete(vehicle.id)}>
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredVehicles.length === 0 && (
              <div className="text-center py-8">
                <Car className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum veículo encontrado</h3>
                <p className="text-gray-500 mb-4">
                  {searchTerm || statusFilter !== "all"
                    ? "Tente ajustar os filtros de busca"
                    : "Comece cadastrando seu primeiro veículo"}
                </p>
                <Link href="/admin/veiculo/novo">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Cadastrar Veículo
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
