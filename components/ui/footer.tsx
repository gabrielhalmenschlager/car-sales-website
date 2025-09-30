import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-green-600/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo + descrição */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-santa-veiculos.png"
                alt="Santa Veículos"
                width={160}
                height={160}
                className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
            <p className="text-gray-400 transition-colors duration-300 ease-in-out hover:text-green-500">
              Sua revenda de confiança há mais de 10 anos no mercado.
            </p>

            {/* Redes sociais */}
            <div className="flex gap-4 mt-4">
              {[{
                href: "https://api.whatsapp.com/send?phone=5551999200699",
                icon: FaWhatsapp
              }, {
                href: "https://www.instagram.com/santaveiculosoficial/",
                icon: FaInstagram
              }, {
                href: "https://www.facebook.com/santaveiculosrs/",
                icon: FaFacebook
              }].map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="text-gray-400 hover:text-green-500 transition-colors duration-300 ease-in-out transform hover:scale-110"
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { label: "Veículos", href: "/veiculos" },
                { label: "Sobre Nós", href: "/sobre" },
                { label: "Contato", href: "/contato" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-green-500 transition-colors duration-300 ease-in-out"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-2">
              <li className="transition-colors duration-300 hover:text-green-500">(51) 99920-0699</li>
              <li className="transition-colors duration-300 hover:text-green-500">
                Rua São José 1432 - Bairro Goiás - Santa Cruz do Sul - RS
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Horário</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Segunda a Sexta: 8:00h às 11:45 - 13:30h às 18:00</li>
              <li>Sábado: 08:30h às 12:00h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-600/30 mt-8 pt-8 text-center">
          <p className="transition-colors duration-300 ease-in-out hover:text-green-500">
            &copy; 2024 Santa Veículos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
