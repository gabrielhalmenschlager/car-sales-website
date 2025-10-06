"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/veiculos", label: "Veículos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV_HEIGHT = 80; // altura da navbar em px

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-md border-b border-green-600" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo-santa-veiculos.png"
                  alt="Santa Veículos"
                  width={180}
                  height={70}
                  style={{ width: "auto", height: "70px" }}
                  className="object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </Link>
            </div>

            {/* Navegação desktop */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-200 hover:text-green-500 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}

              <Link href="/admin">
                <Button
                  size="sm"
                  className="bg-green-500 hover:bg-green-600 text-black font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm"
                >
                  Área Admin
                </Button>
              </Link>
            </div>

            {/* Botão mobile */}
            <div className="flex md:hidden items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 text-gray-200 hover:text-green-500 transition-colors duration-300"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Navegação mobile */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md border-t border-gray-800">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-green-500 transition-colors duration-200 w-full"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link href="/admin" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-black font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm w-full"
                  >
                    Área Admin
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer para empurrar conteúdo */}
      <div style={{ height: NAV_HEIGHT }} />
    </>
  );
}
