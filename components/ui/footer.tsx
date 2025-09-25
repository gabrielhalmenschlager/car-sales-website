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
                className="object-contain"
              />
            </div>
            <p className="text-gray-400">
              Sua revenda de confiança há mais de 10 anos no mercado.
            </p>

            {/* Redes sociais */}
            <div className="flex gap-4 mt-4">
              <Link href="https://wa.me/5551999200699" target="_blank" className="hover:text-green-500">
                <FaWhatsapp className="w-6 h-6" />
              </Link>
              <Link href="https://instagram.com/seuusuario" target="_blank" className="hover:text-green-500">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link href="https://facebook.com/seuusuario" target="_blank" className="hover:text-green-500">
                <FaFacebook className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/veiculos" className="hover:text-green-500">Veículos</Link></li>
              <li><Link href="/sobre" className="hover:text-green-500">Sobre Nós</Link></li>
              <li><Link href="/contato" className="hover:text-green-500">Contato</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-2">
              <li>(51) 99920-0699</li>
              <li>Rua São José 1432 - Bairro Goiás - Santa Cruz do Sul - RS</li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Horário</h3>
            <ul className="space-y-2">
              <li>Segunda a Sexta: 8:00h às 11:45 - 13:30h às 18:00</li>
              <li>Sábado: 08:30h às 12:00h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-600/30 mt-8 pt-8 text-center">
          <p>&copy; 2024 Santa Veículos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
