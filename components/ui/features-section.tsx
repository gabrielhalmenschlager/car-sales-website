"use client";

import { Shield, Star, Users } from "lucide-react"

export function FeatureSection() {
  return (
    <section className="py-24 bg-gray-950/50 border-y border-gray-800">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Por Que Escolher a <span className="text-green-500">Santa Veículos</span>?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Compromisso com qualidade, transparência e a sua satisfação.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { icon: Shield, title: "Garantia e Confiança", description: "Todos os veículos são inspecionados e possuem garantia de procedência." },
          { icon: Star, title: "Qualidade Superior", description: "Selecionamos apenas os melhores seminovos para o nosso estoque." },
          { icon: Users, title: "Atendimento Personalizado", description: "Nossa equipe está pronta para ajudar você a fazer a melhor escolha." },
        ].map((feature, index) => (
            <div
              key={index}
              className="
                text-center p-8 rounded-lg bg-gray-900 border border-gray-800
                transition transform duration-500 ease-in-out
                hover:bg-gray-800/50 hover:-translate-y-2 hover:shadow-lg
              "
            >
            <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
              <feature.icon className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
