"use client"

import { useState } from "react"
import { ArrowLeft, TrendingUp, TrendingDown, Car, Users, DollarSign, Download, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import Link from "next/link"

// Mock data for analytics
const salesData = [
  { month: "Jan", vendas: 12, receita: 980000 },
  { month: "Fev", vendas: 15, receita: 1200000 },
  { month: "Mar", vendas: 18, receita: 1450000 },
  { month: "Abr", vendas: 22, receita: 1800000 },
  { month: "Mai", vendas: 19, receita: 1550000 },
  { month: "Jun", vendas: 25, receita: 2100000 },
]

const brandData = [
  { name: "Toyota", value: 35, color: "#3B82F6" },
  { name: "Honda", value: 25, color: "#10B981" },
  { name: "Volkswagen", value: 20, color: "#F59E0B" },
  { name: "Chevrolet", value: 15, color: "#EF4444" },
  { name: "Outros", value: 5, color: "#8B5CF6" },
]

const topVehicles = [
  { id: 1, brand: "Toyota", model: "Corolla", year: 2022, views: 1250, leads: 45, sales: 8 },
  { id: 2, brand: "Honda", model: "Civic", year: 2023, views: 980, leads: 38, sales: 6 },
  { id: 3, brand: "Volkswagen", model: "Jetta", year: 2021, views: 750, leads: 28, sales: 5 },
  { id: 4, brand: "Chevrolet", model: "Onix", year: 2023, views: 650, leads: 22, sales: 4 },
  { id: 5, brand: "Ford", model: "Ka", year: 2022, views: 520, leads: 18, sales: 3 },
]

const recentSales = [
  {
    id: 1,
    vehicle: "Toyota Corolla 2022",
    customer: "João Silva",
    price: 85000,
    date: "2024-01-20",
    status: "completed",
  },
  {
    id: 2,
    vehicle: "Honda Civic 2023",
    customer: "Maria Santos",
    price: 95000,
    date: "2024-01-19",
    status: "completed",
  },
  {
    id: 3,
    vehicle: "Volkswagen Jetta 2021",
    customer: "Pedro Oliveira",
    price: 78000,
    date: "2024-01-18",
    status: "pending",
  },
  {
    id: 4,
    vehicle: "Chevrolet Onix 2023",
    customer: "Ana Costa",
    price: 65000,
    date: "2024-01-17",
    status: "completed",
  },
]

export default function RelatoriosPage() {
  const [timeFilter, setTimeFilter] = useState("6months")

  const totalSales = salesData.reduce((sum, item) => sum + item.vendas, 0)
  const totalRevenue = salesData.reduce((sum, item) => sum + item.receita, 0)
  const avgTicket = totalRevenue / totalSales
  const totalViews = topVehicles.reduce((sum, item) => sum + item.views, 0)
  const totalLeads = topVehicles.reduce((sum, item) => sum + item.leads, 0)
  const conversionRate = (totalSales / totalLeads) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Relatórios e Analytics</h1>
                <p className="text-sm text-gray-600">Acompanhe o desempenho do seu negócio</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Select value={timeFilter} onValueChange={setTimeFilter}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1month">Último mês</SelectItem>
                  <SelectItem value="3months">Últimos 3 meses</SelectItem>
                  <SelectItem value="6months">Últimos 6 meses</SelectItem>
                  <SelectItem value="1year">Último ano</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Vendas</CardTitle>
              <Car className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalSales}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1 text-green-500" />
                +12% em relação ao período anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {(totalRevenue / 1000000).toFixed(1)}M</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1 text-green-500" />
                +18% em relação ao período anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ {Math.round(avgTicket / 1000)}k</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1 text-green-500" />
                +5% em relação ao período anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{conversionRate.toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">
                <TrendingDown className="inline h-3 w-3 mr-1 text-red-500" />
                -2% em relação ao período anterior
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Sales Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Vendas por Mês</CardTitle>
              <CardDescription>Evolução das vendas nos últimos 6 meses</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="vendas" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Revenue Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Receita por Mês</CardTitle>
              <CardDescription>Evolução da receita nos últimos 6 meses</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`R$ ${(Number(value) / 1000000).toFixed(1)}M`, "Receita"]} />
                  <Line type="monotone" dataKey="receita" stroke="#10B981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Distribuição por Marca</CardTitle>
              <CardDescription>Participação das marcas nas vendas</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={brandData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {brandData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, "Participação"]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {brandData.map((brand, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: brand.color }}></div>
                      <span className="text-sm">{brand.name}</span>
                    </div>
                    <span className="text-sm font-medium">{brand.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Vehicles */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Veículos Mais Procurados</CardTitle>
              <CardDescription>Ranking por visualizações e leads gerados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topVehicles.map((vehicle, index) => (
                  <div key={vehicle.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-600">#{index + 1}</span>
                      </div>
                      <div>
                        <div className="font-medium">
                          {vehicle.brand} {vehicle.model} {vehicle.year}
                        </div>
                        <div className="text-sm text-gray-500">
                          {vehicle.views} visualizações • {vehicle.leads} leads
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600">{vehicle.sales} vendas</div>
                      <div className="text-sm text-gray-500">
                        {((vehicle.sales / vehicle.leads) * 100).toFixed(1)}% conversão
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Sales */}
        <Card>
          <CardHeader>
            <CardTitle>Vendas Recentes</CardTitle>
            <CardDescription>Últimas transações realizadas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Veículo</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentSales.map((sale) => (
                    <TableRow key={sale.id}>
                      <TableCell className="font-medium">{sale.vehicle}</TableCell>
                      <TableCell>{sale.customer}</TableCell>
                      <TableCell>R$ {sale.price.toLocaleString("pt-BR")}</TableCell>
                      <TableCell>{new Date(sale.date).toLocaleDateString("pt-BR")}</TableCell>
                      <TableCell>
                        {sale.status === "completed" ? (
                          <Badge className="bg-green-500">Concluída</Badge>
                        ) : (
                          <Badge className="bg-yellow-500">Pendente</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Estoque Atual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Total de veículos:</span>
                  <span className="font-bold">47</span>
                </div>
                <div className="flex justify-between">
                  <span>Disponíveis:</span>
                  <span className="font-bold text-green-600">32</span>
                </div>
                <div className="flex justify-between">
                  <span>Reservados:</span>
                  <span className="font-bold text-yellow-600">8</span>
                </div>
                <div className="flex justify-between">
                  <span>Vendidos este mês:</span>
                  <span className="font-bold text-blue-600">7</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Leads e Propostas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Total de leads:</span>
                  <span className="font-bold">{totalLeads}</span>
                </div>
                <div className="flex justify-between">
                  <span>Novos esta semana:</span>
                  <span className="font-bold text-blue-600">12</span>
                </div>
                <div className="flex justify-between">
                  <span>Em negociação:</span>
                  <span className="font-bold text-orange-600">8</span>
                </div>
                <div className="flex justify-between">
                  <span>Fechados:</span>
                  <span className="font-bold text-green-600">25</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Metas do Mês</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Vendas (25 meta):</span>
                    <span className="font-bold">18/25</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "72%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Receita (R$ 2M meta):</span>
                    <span className="font-bold">R$ 1.4M</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Leads (150 meta):</span>
                    <span className="font-bold">128/150</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
