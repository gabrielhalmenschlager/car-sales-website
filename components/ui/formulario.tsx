"use client";

import { useState } from "react"
import { Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function Formulario() {
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
  
      await new Promise((resolve) => setTimeout(resolve, 2000))
  
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
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
  
    const contactInfo = [
      { icon: Phone, title: "Telefone", value: "(51) 99920-0699", description: "Clique para ligar" },
      { icon: MapPin, title: "Endereço", value: "Rua São José 1432", description: "Bairro Goiás - Santa Cruz do Sul - RS" },
      { icon: Clock, title: "Horário", value: "Seg-Sex: 8:00-11:45 / 13:30-18:00", description: "Sáb: 08:30-12:00 | Dom: Fechado" },
    ]
  
    return (
        <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          {/* Título e descrição */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-500 mb-3">Entre em Contato</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Estamos aqui para ajudá-lo a encontrar o veículo perfeito. Entre em contato conosco!
            </p>
          </div>

          {/* Grid com Informações e Formulário */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informações de Contato */}
            <div className="flex flex-col justify-between space-y-6">
              {contactInfo.map((info, idx) => (
                <Card key={idx} className="bg-gray-950 border border-gray-800 hover:border-green-500 flex-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <info.icon className="h-5 w-5 text-green-500" />
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-white">{info.value}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Formulário */}
            <div className="lg:col-span-2">
              <Card className="bg-gray-950 border border-gray-800 hover:border-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <MessageSquare className="h-5 w-5 text-green-500" />
                    Envie sua Mensagem
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Seu nome"
                          className="bg-gray-900 text-gray-200"
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
                          className="bg-gray-900 text-gray-200"
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
                          placeholder="(51) 99920-0699"
                          className="bg-gray-900 text-gray-200"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Assunto</Label>
                        <Select
                          value={formData.subject}
                          onValueChange={(value) => handleInputChange("subject", value)}
                        >
                          <SelectTrigger className="bg-gray-900 text-gray-200 border-gray-800">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 text-gray-200">
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
                      <Label htmlFor="vehicleInterest">Veículo de Interesse</Label>
                      <Input
                        id="vehicleInterest"
                        value={formData.vehicleInterest}
                        onChange={(e) => handleInputChange("vehicleInterest", e.target.value)}
                        placeholder="Ex: Toyota Corolla 2022"
                        className="bg-gray-900 text-gray-200"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={5}
                        placeholder="Descreva como podemos ajudá-lo..."
                        className="bg-gray-900 text-gray-200"
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
                      <Label htmlFor="terms" className="text-gray-400 text-sm">
                        Aceito receber contato sobre produtos e serviços *
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-green-500 text-black font-bold hover:bg-green-600"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : <><Send className="h-5 w-5 mr-2" />Enviar Mensagem</>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
}
