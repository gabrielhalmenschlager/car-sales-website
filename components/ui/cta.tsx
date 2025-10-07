"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-green-600 py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Texto e Botões */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Pronto para Encontrar Seu Próximo Carro?
          </h2>
          <p className="text-black/80 mb-8 max-w-xl mx-auto lg:mx-0">
            Fale com um de nossos consultores e agende uma visita hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white font-bold shadow-md">
              <Link href="tel:51999200699">
                <span className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  (51) 99920-0699
                </span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-green-500 font-bold">
              <Link href="/contato">Enviar Mensagem</Link>
            </Button>
          </div>
        </div>

        {/* Imagem de destaque */}
        <div className="flex-1 relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
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
