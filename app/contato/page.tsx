"use client"

import type React from "react"

import { useState } from "react"
import { Car, Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    vehicleInterest: "",
    message: "",
    acceptTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Contact form submitted:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      vehicleInterest: "",
      message: "",
      acceptTerms: false,
    })

    setIsSubmitting(false)
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
              <Link href="/veiculos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Veículos
              </Link>
              <Link href="/sobre" className="text-gray-700 hover:text-blue-600 transition-colors">
                Sobre
              </Link>
              <Link href="/contato" className="text-blue-600 font-medium">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aqui para ajudá-lo a encontrar o veículo perfeito. Entre em contato conosco!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  Telefone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">(11) 9999-9999</p>
                <p className="text-sm text-gray-600">Segunda a Sexta: 8h às 18h</p>
                <p className="text-sm text-gray-600">Sábado: 8h às 16h</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  E-mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">contato@autovendas.com</p>
                <p className="text-sm text-gray-600">Respondemos em até 24h</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">Rua das Flores, 123</p>
                <p className="text-gray-600">Vila Madalena - São Paulo, SP</p>
                <p className="text-gray-600">CEP: 05435-000</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="font-medium">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-medium">8h às 16h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-medium text-red-600">Fechado</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  Envie sua Mensagem
                </CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Assunto</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="interesse-veiculo">Interesse em Veículo</SelectItem>
                          <SelectItem value="financiamento">Financiamento</SelectItem>
                          <SelectItem value="troca">Troca de Veículo</SelectItem>
                          <SelectItem value="avaliacao">Avaliação</SelectItem>
                          <SelectItem value="duvidas">Dúvidas Gerais</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="vehicleInterest">Veículo de Interesse (opcional)</Label>
                    <Input
                      id="vehicleInterest"
                      value={formData.vehicleInterest}
                      onChange={(e) => handleInputChange("vehicleInterest", e.target.value)}
                      placeholder="Ex: Toyota Corolla 2022"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Descreva como podemos ajudá-lo..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                      required
                    />
                    <Label htmlFor="terms" className="text-sm">
                      Aceito receber contato da AutoVendas sobre produtos e serviços *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Nossa Localização</CardTitle>
              <CardDescription>Venha nos visitar em nossa loja física</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Mapa interativo seria carregado aqui</p>
                  <p className="text-sm">Rua das Flores, 123 - Vila Madalena, São Paulo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
