"use client"

import { useState } from "react"
import { ArrowLeft, Search, Filter, Eye, MessageSquare, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

// Mock data for proposals and contacts
const mockProposals = [
  {
    id: 1,
    customerName: "João Silva",
    customerEmail: "joao@email.com",
    customerPhone: "(11) 99999-1111",
    vehicleInterest: "Toyota Corolla 2022",
    subject: "interesse-veiculo",
    message: "Tenho interesse no Toyota Corolla 2022. Gostaria de agendar uma visita para ver o veículo.",
    status: "new",
    createdAt: "2024-01-20T10:30:00",
    lastContact: null,
  },
  {
    id: 2,
    customerName: "Maria Santos",
    customerEmail: "maria@email.com",
    customerPhone: "(11) 99999-2222",
    vehicleInterest: "Honda Civic 2023",
    subject: "financiamento",
    message: "Gostaria de saber sobre as opções de financiamento para o Honda Civic 2023.",
    status: "contacted",
    createdAt: "2024-01-19T14:15:00",
    lastContact: "2024-01-19T16:30:00",
  },
  {
    id: 3,
    customerName: "Pedro Oliveira",
    customerEmail: "pedro@email.com",
    customerPhone: "(11) 99999-3333",
    vehicleInterest: "",
    subject: "troca",
    message: "Tenho um Volkswagen Gol 2018 e gostaria de fazer uma troca por um veículo mais novo.",
    status: "negotiating",
    createdAt: "2024-01-18T09:45:00",
    lastContact: "2024-01-20T11:00:00",
  },
  {
    id: 4,
    customerName: "Ana Costa",
    customerEmail: "ana@email.com",
    customerPhone: "(11) 99999-4444",
    vehicleInterest: "Chevrolet Onix 2023",
    subject: "interesse-veiculo",
    message: "Estou interessada no Chevrolet Onix 2023. Posso fazer um test drive?",
    status: "closed",
    createdAt: "2024-01-15T16:20:00",
    lastContact: "2024-01-17T10:15:00",
  },
]

export default function PropostasPage() {
  const [proposals, setProposals] = useState(mockProposals)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedProposal, setSelectedProposal] = useState<(typeof mockProposals)[0] | null>(null)
  const [responseMessage, setResponseMessage] = useState("")

  const filteredProposals = proposals.filter((proposal) => {
    const matchesSearch =
      proposal.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proposal.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proposal.vehicleInterest.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || proposal.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge className="bg-blue-500">Novo</Badge>
      case "contacted":
        return <Badge className="bg-yellow-500">Contatado</Badge>
      case "negotiating":
        return <Badge className="bg-orange-500">Negociando</Badge>
      case "closed":
        return <Badge className="bg-green-500">Fechado</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getSubjectLabel = (subject: string) => {
    switch (subject) {
      case "interesse-veiculo":
        return "Interesse em Veículo"
      case "financiamento":
        return "Financiamento"
      case "troca":
        return "Troca de Veículo"
      case "avaliacao":
        return "Avaliação"
      case "duvidas":
        return "Dúvidas Gerais"
      default:
        return "Outros"
    }
  }

  const updateProposalStatus = (id: number, newStatus: string) => {
    setProposals((prev) =>
      prev.map((proposal) =>
        proposal.id === id ? { ...proposal, status: newStatus, lastContact: new Date().toISOString() } : proposal,
      ),
    )
  }

  const handleSendResponse = () => {
    if (selectedProposal && responseMessage.trim()) {
      console.log("Sending response:", { proposalId: selectedProposal.id, message: responseMessage })
      updateProposalStatus(selectedProposal.id, "contacted")
      setResponseMessage("")
      alert("Resposta enviada com sucesso!")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/admin">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Propostas e Contatos</h1>
              <p className="text-sm text-gray-600">Gerencie leads e propostas de clientes</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total de Propostas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{proposals.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Novas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {proposals.filter((p) => p.status === "new").length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Em Negociação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">
                {proposals.filter((p) => p.status === "negotiating").length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Fechadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {proposals.filter((p) => p.status === "closed").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Gerenciar Propostas</CardTitle>
            <CardDescription>Visualize e responda às propostas dos clientes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar por cliente, email ou veículo..."
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
                  <SelectItem value="new">Novo</SelectItem>
                  <SelectItem value="contacted">Contatado</SelectItem>
                  <SelectItem value="negotiating">Negociando</SelectItem>
                  <SelectItem value="closed">Fechado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Proposals Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Assunto</TableHead>
                    <TableHead>Veículo</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProposals.map((proposal) => (
                    <TableRow key={proposal.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{proposal.customerName}</div>
                          <div className="text-sm text-gray-500">{proposal.customerEmail}</div>
                        </div>
                      </TableCell>
                      <TableCell>{getSubjectLabel(proposal.subject)}</TableCell>
                      <TableCell>
                        {proposal.vehicleInterest || <span className="text-gray-400">Não especificado</span>}
                      </TableCell>
                      <TableCell>{getStatusBadge(proposal.status)}</TableCell>
                      <TableCell>{new Date(proposal.createdAt).toLocaleDateString("pt-BR")}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="sm" onClick={() => setSelectedProposal(proposal)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Detalhes da Proposta</DialogTitle>
                                <DialogDescription>
                                  Proposta de {proposal.customerName} -{" "}
                                  {new Date(proposal.createdAt).toLocaleDateString("pt-BR")}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label className="text-sm font-medium">Cliente</Label>
                                    <p className="text-sm">{proposal.customerName}</p>
                                  </div>
                                  <div>
                                    <Label className="text-sm font-medium">Status</Label>
                                    <div className="mt-1">{getStatusBadge(proposal.status)}</div>
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label className="text-sm font-medium">E-mail</Label>
                                    <p className="text-sm">{proposal.customerEmail}</p>
                                  </div>
                                  <div>
                                    <Label className="text-sm font-medium">Telefone</Label>
                                    <p className="text-sm">{proposal.customerPhone}</p>
                                  </div>
                                </div>

                                <div>
                                  <Label className="text-sm font-medium">Assunto</Label>
                                  <p className="text-sm">{getSubjectLabel(proposal.subject)}</p>
                                </div>

                                {proposal.vehicleInterest && (
                                  <div>
                                    <Label className="text-sm font-medium">Veículo de Interesse</Label>
                                    <p className="text-sm">{proposal.vehicleInterest}</p>
                                  </div>
                                )}

                                <div>
                                  <Label className="text-sm font-medium">Mensagem</Label>
                                  <p className="text-sm bg-gray-50 p-3 rounded-lg">{proposal.message}</p>
                                </div>

                                <div>
                                  <Label htmlFor="response">Responder ao Cliente</Label>
                                  <Textarea
                                    id="response"
                                    value={responseMessage}
                                    onChange={(e) => setResponseMessage(e.target.value)}
                                    placeholder="Digite sua resposta..."
                                    rows={4}
                                    className="mt-1"
                                  />
                                </div>

                                <div className="flex gap-2">
                                  <Button onClick={handleSendResponse} className="flex-1">
                                    <Mail className="h-4 w-4 mr-2" />
                                    Enviar Resposta
                                  </Button>
                                  <Button variant="outline" asChild>
                                    <a href={`tel:${proposal.customerPhone}`}>
                                      <Phone className="h-4 w-4 mr-2" />
                                      Ligar
                                    </a>
                                  </Button>
                                </div>

                                <div className="flex gap-2">
                                  <Select
                                    value={proposal.status}
                                    onValueChange={(value) => updateProposalStatus(proposal.id, value)}
                                  >
                                    <SelectTrigger className="flex-1">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="new">Novo</SelectItem>
                                      <SelectItem value="contacted">Contatado</SelectItem>
                                      <SelectItem value="negotiating">Negociando</SelectItem>
                                      <SelectItem value="closed">Fechado</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredProposals.length === 0 && (
              <div className="text-center py-8">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma proposta encontrada</h3>
                <p className="text-gray-500">
                  {searchTerm || statusFilter !== "all"
                    ? "Tente ajustar os filtros de busca"
                    : "As propostas dos clientes aparecerão aqui"}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
