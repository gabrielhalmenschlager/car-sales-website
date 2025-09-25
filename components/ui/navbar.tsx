import * as React from "react";
import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <header className="border-b border-green-600 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo e Nome */}
            <div className="flex items-center gap-3">
              <Image 
                src="/logo-santa-veiculos.png"
                alt="Santa Veículos"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>

            {/* Navegação */}
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                href="/veiculos" 
                className="text-gray-200 hover:text-green-500 transition-colors font-medium"
              >
                Veículos
              </Link>
              <Link 
                href="/sobre" 
                className="text-gray-200 hover:text-green-500 transition-colors font-medium"
              >
                Sobre
              </Link>
              <Link 
                href="/contato" 
                className="text-gray-200 hover:text-green-500 transition-colors font-medium"
              >
                Contato
              </Link>
              <Link href="/admin">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors"
                >
                  Área Admin
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
  );
}