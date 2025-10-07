"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NavBar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import TextType from "@/components/ui/text-type"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/ui/cta"

export default function SobrePage() {
  const images = [
    { src: "/images/loja1.jpg", alt: "Fachada da Santa Veículos" },
    { src: "/images/estoque1.jpg", alt: "Veículos seminovos no pátio" },
    { src: "/images/venda1.jpg", alt: "Venda da loja" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % images.length), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-gray-300">
      <NavBar />

      {/* Hero */}
      <section className="container mx-auto px-6 py-28">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <TextType
              text={["Santa Veículos"]}
              typingSpeed={90}
              pauseDuration={2000}
              showCursor
              cursorCharacter="|"
            />
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Qualidade, confiança e compromisso com você desde 2020.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="bg-gray-950 py-20 border-t border-gray-800">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Imagem à esquerda */}
          <div className="flex-1 relative w-full h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/loja1.jpg"
              alt="Nossa História"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Texto à direita */}
          <div className="flex-1">
            <Card className="bg-gray-950 border border-gray-800 hover:border-green-500 shadow-lg transition-all duration-500 transform hover:scale-[1.03]">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
                  Nossa História
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Conheça mais sobre quem somos e o que nos move
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300 leading-relaxed text-justify">
                <p>
                  Constituída em <strong>março de 2020</strong>, a <strong>Santa Veículos</strong> atua no mercado de veículos seminovos da região do <strong>Vale do Rio Pardo – RS</strong>. Nosso objetivo é aliar <strong>qualidade</strong> e <strong>preços acessíveis</strong>, oferecendo a melhor experiência para nossos clientes.
                </p>
                <p>
                  Localizada em <strong>Santa Cruz do Sul</strong>, contamos com uma equipe de profissionais capacitados e comprometidos em garantir excelência no atendimento e transparência em cada negociação.
                </p>
                <p>
                  Todos os veículos comercializados são <strong>revisados</strong> e possuem <strong>garantia de 90 dias</strong> ou <strong>3.000 km</strong>, com certificação e procedência garantida.
                </p>
                <p>
                  Facilitamos a compra do seu próximo carro, aceitando <strong>veículos na troca</strong> e oferecendo <strong>financiamentos em até 60x</strong> com aprovação rápida e justa.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-green-500 text-center mb-12">Nossa Estrutura</h2>

        <div className="relative w-full md:w-4/5 mx-auto h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl border border-gray-800">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-800 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center rounded-2xl"
              />
            </div>
          ))}

          {/* Botões de navegação */}
          <button
            onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
          >
            ◀
          </button>
          <button
            onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
          >
            ▶
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`h-3 w-3 rounded-full cursor-pointer transition-all ${idx === currentIndex ? "bg-green-500 w-6" : "bg-gray-500"}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>

        <p className="text-gray-400 mt-6 text-center">
          Um espaço pensado para proporcionar conforto, confiança e a melhor experiência na hora da compra.
        </p>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-gray-950 py-20 border-t border-gray-800">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Missão", desc: "Oferecer veículos de qualidade com atendimento personalizado e as melhores condições de compra." },
            { title: "Visão", desc: "Ser referência em revenda de veículos na região, reconhecida pela confiança e satisfação dos clientes." },
            { title: "Valores", desc: "Honestidade, comprometimento, qualidade e respeito são a base de nossas relações." },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-900 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-500 mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Localização */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <Card className="bg-gray-950 border border-gray-800 hover:border-green-500 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Nossa Localização</CardTitle>
              <CardDescription className="text-gray-400">Venha nos visitar em nossa loja física</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden h-64 lg:h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789!2d-52.432123!3d-29.678123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951b1a2b3c4d5e6f%3A0x123456789abcdef!2sRua%20S%C3%A3o%20Jos%C3%A9%201432%2C%20Santa%20Cruz%20do%20Sul%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
