"use client"

import { useState, useEffect } from "react"
import { Users, CheckCircle, Car, CreditCard } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NavBar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import TextType from "@/components/ui/text-type"
import Image from "next/image"

export default function SobrePage() {
  // Lista de imagens da galeria
  const images = [
    { src: "/images/loja1.jpg", alt: "Fachada da Santa Veículos" },
    { src: "/images/estoque1.jpg", alt: "Veículos seminovos no pátio" },
    { src: "/images/venda1.jpg", alt: "Venda da loja" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Troca automática das imagens a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="min-h-screen bg-black text-gray-300">
      <NavBar />

      {/* Hero Section */}
      <section className="py-24 text-center container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          <TextType
            text={["Sobre a Santa Veículos"]}
            typingSpeed={90}
            pauseDuration={2000}
            showCursor
            cursorCharacter="|"
          />
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Qualidade, confiança e compromisso com você desde 2020.
        </p>
      </section>

      {/* Sobre a Empresa */}
      <section className="py-12 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-6 max-w-5xl">
          <Card className="bg-black border border-gray-800 hover:border-green-500 transition-all">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-green-500">
                Nossa História
              </CardTitle>
              <CardDescription className="text-gray-400">
                Conheça mais sobre quem somos e o que nos move
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Constituída em <strong>março de 2020</strong>, a <strong>Santa Veículos</strong> atua no mercado de veículos
                seminovos da região do <strong>Vale do Rio Pardo – RS</strong>. Nosso objetivo é aliar
                <strong> qualidade</strong> e <strong>preços acessíveis</strong>, oferecendo a melhor experiência para nossos clientes.
              </p>
              <p>
                Localizada em <strong>Santa Cruz do Sul</strong>, contamos com uma equipe de profissionais capacitados
                e comprometidos em garantir excelência no atendimento e transparência em cada negociação.
              </p>
              <p>
                Todos os veículos comercializados pela Santa Veículos são <strong>revisados</strong> e possuem
                <strong> garantia de 90 dias</strong> ou <strong>3.000 km</strong>, com certificação e garantia de procedência.
              </p>
              <p>
                Para facilitar a compra do seu próximo carro, aceitamos <strong>veículos na troca</strong> com avaliação justa
                e oferecemos <strong>financiamentos em até 60x</strong> através das melhores instituições bancárias,
                sempre mediante aprovação de crédito.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Galeria / Carrossel */}
      <section className="py-20 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl font-bold text-green-500 mb-10">Nossa Estrutura</h2>
          <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-lg border border-gray-800">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center rounded-2xl"
                />
              </div>
            ))}
          </div>
          <p className="text-gray-400 mt-6">
            Um espaço pensado para proporcionar conforto, confiança e uma excelente experiência na hora da compra.
          </p>
        </div>
      </section>

      {/* Valores e Diferenciais */}
      <section className="py-20 container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-500 mb-4">Por Que Escolher a Santa Veículos?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trabalhamos com transparência, confiança e o compromisso de entregar sempre o melhor negócio para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-gray-950 border border-gray-800 hover:border-green-500 transition-all">
            <CardHeader>
              <Car className="h-10 w-10 text-green-500 mb-3" />
              <CardTitle className="text-white">Veículos Revisados</CardTitle>
              <CardDescription className="text-gray-400">
                Todos os veículos passam por inspeção completa e possuem garantia.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-950 border border-gray-800 hover:border-green-500 transition-all">
            <CardHeader>
              <CheckCircle className="h-10 w-10 text-green-500 mb-3" />
              <CardTitle className="text-white">Procedência Garantida</CardTitle>
              <CardDescription className="text-gray-400">
                Garantimos a origem e documentação de todos os veículos comercializados.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-950 border border-gray-800 hover:border-green-500 transition-all">
            <CardHeader>
              <Users className="h-10 w-10 text-green-500 mb-3" />
              <CardTitle className="text-white">Atendimento de Excelência</CardTitle>
              <CardDescription className="text-gray-400">
                Equipe treinada e pronta para entender suas necessidades e ajudar na escolha ideal.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gray-950 border border-gray-800 hover:border-green-500 transition-all">
            <CardHeader>
              <CreditCard className="h-10 w-10 text-green-500 mb-3" />
              <CardTitle className="text-white">Facilidade no Financiamento</CardTitle>
              <CardDescription className="text-gray-400">
                Parceria com os principais bancos, com planos em até 60x e aprovação rápida.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-gray-950 py-20 border-t border-gray-800">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-green-500 mb-4">Missão</h3>
            <p className="text-gray-400">
              Oferecer veículos de qualidade com transparência, atendimento personalizado e as melhores condições de compra.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-green-500 mb-4">Visão</h3>
            <p className="text-gray-400">
              Ser referência em revenda de veículos na região, reconhecida pela confiança e satisfação dos clientes.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-green-500 mb-4">Valores</h3>
            <p className="text-gray-400">
              Honestidade, comprometimento, qualidade e respeito são a base de todas as nossas relações.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
