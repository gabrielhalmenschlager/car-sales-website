"use client"

import { useState } from "react"
import { Car, Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { NavBar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
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

    // Simulando envio de dados
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
    {
      icon: Phone,
      title: "Telefone",
      value: "(51) 99920-0699",
      description: "Clique para ligar",
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Rua São José 1432",
      description: "Bairro Goiás - Santa Cruz do Sul - RS",
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg-Sex: 8:00-11:45 / 13:30-18:00",
      description: "Sáb: 08:30-12:00 | Dom: Fechado",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-gray-300">
      <NavBar />

      {/* Header */}
      <section className="py-24 text-center">
        <p className="text-5xl md:text-6xl font-bold text-white mb-4">Entre em Contato</p>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Estamos aqui para ajudá-lo a encontrar o veículo perfeito. Entre em contato conosco!
        </p>
      </section>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-24 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Informações de Contato */}
        <div className="space-y-6 lg:space-y-10 flex flex-col justify-between">
          {contactInfo.map((info, idx) => (
            <Card key={idx} className="bg-gray-950 border border-gray-800 hover:border-green-500 flex-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <info.icon className="h-5 w-5 text-green-500" />
                  <p>{info.title}</p>
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
                <p>Envie sua Mensagem</p>
              </CardTitle>
              <CardDescription className="text-gray-400">
                <p>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nome e Email */}
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

                {/* Telefone e Assunto */}
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

                {/* Veículo de Interesse */}
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

                {/* Mensagem */}
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

                {/* Checkbox de termos */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                    required
                  />
                  <Label htmlFor="terms" className="text-gray-400 text-sm">
                    <p>Aceito receber contato sobre produtos e serviços *</p>
                  </Label>
                </div>

                {/* Botão enviar */}
                <Button
                  type="submit"
                  className="w-full bg-green-500 text-black font-bold hover:bg-green-600"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : <><Send className="h-5 w-5 mr-2" /><p>Enviar Mensagem</p></>}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 mt-12 lg:mt-2 mb-24">
        <Card className="bg-gray-950 border border-gray-800 hover:border-green-500">
          <CardHeader>
            <CardTitle className="text-white">Nossa Localização</CardTitle>
            <CardDescription className="text-gray-400">
              Venha nos visitar em nossa loja física
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg overflow-hidden h-64 lg:h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789!2d-52.432123!3d-29.678123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951b1a2b3c4d5e6f%3A0x123456789abcdef!2sRua%20S%C3%A3o%20Jos%C3%A9%201432%2C%20Santa%20Cruz%20do%20Sul%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>

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