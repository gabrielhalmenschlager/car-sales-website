"use client"

import { useState } from "react"
import { Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"
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
import TextType from "@/components/ui/text-type"
import { CTASection } from "@/components/ui/cta"
import Formulario from "@/components/ui/formulario"

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
    <div className="min-h-screen bg-black text-gray-300">
      <NavBar />

      {/* Hero / Map Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <TextType text={["Contato"]} typingSpeed={90} pauseDuration={2000} showCursor cursorCharacter="|" />
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Fale conosco e tire suas dúvidas sobre veículos.
          </p>

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
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Seção Entre em Contato com Informações e Formulário */}
      < Formulario />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
      
    </div>
  )
}