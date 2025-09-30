import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NavBar() {
  return (
    <header className="border-b border-green-600 bg-black/95 backdrop-blur-md shadow-md transition-all duration-500 ease-in-out sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/logo-santa-veiculos.png"
                alt="Santa Veículos"
                width={180}
                height={180}
                className="object-contain transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </Link>
          </div>

          {/* Navegação */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: "Veículos", href: "/veiculos" },
              { label: "Sobre", href: "/sobre" },
              { label: "Contato", href: "/contato" },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-gray-200 hover:text-green-500 transition-colors duration-300 ease-in-out font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Botão Admin */}
            <Link href="/admin">
              <Button
                size="sm"
                className="bg-green-500 hover:bg-green-600 text-black font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm"
              >
                Área Admin
              </Button>
            </Link>
          </nav>

          {/* Mobile menu placeholder */}
          <div className="md:hidden">
            {/* Aqui você pode adicionar um ícone de menu hambúrguer futuramente */}
          </div>

        </div>
      </div>
    </header>
  );
}
