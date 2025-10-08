"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function CTASection() {
  return (
<section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-500 py-24">
      {/* Textura de fundo sutil */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

      <div className="container relative z-10 mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Texto e Botões */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight drop-shadow-sm">
            Pronto para Encontrar <br className="hidden sm:block" />
            <span className="text-white">Seu Próximo Carro?</span>
          </h2>
          <p className="text-black/80 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
            Fale com um de nossos consultores e agende uma visita hoje mesmo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-black hover:bg-gray-800 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="tel:51999200699" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                (51) 99920-0699
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-green-400 font-bold shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Link href="/contato">Enviar Mensagem</Link>
            </Button>
          </div>
        </div>

        {/* Imagem de destaque */}
        <div className="flex-1 relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-black/10 hover:scale-[1.02] transition-transform duration-500">
          <Image
            src="/images/loja1.jpg"
            alt="Agende sua visita"
            fill
            className="object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}
