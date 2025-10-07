"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      
      {/* Logo da Santa Veículos */}
      <div className="mb-8 animate-bounce">
        <Image
          src="/logo-santa-veiculos.png"
          alt="Santa Veículos"
          width={180}
          height={70}
          className="object-contain"
        />
      </div>

      {/* Texto animado */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-500 mb-6 animate-pulse">
        Carregando a Santa Veículos...
      </h1>

      {/* Barra de carregamento */}
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-green-500 animate-loading"></div>
      </div>

      {/* Custom CSS para animação da barra */}
      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
        .animate-loading {
          animation: loading 2s linear infinite;
        }
      `}</style>

    </div>
  );
}
