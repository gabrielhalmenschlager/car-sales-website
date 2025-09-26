import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Car } from "lucide-react";

export function SearchBar() {
  return (
    <div className="max-w-6xl mx-auto relative z-10 -mt">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-gray-950/90 backdrop-blur-xl border border-green-600/40 shadow-2xl">
        
        {/* Marca */}
        <div className="relative">
          <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500" />
          <Input
            placeholder="Marca"
            className="pl-10 h-12 bg-black/60 text-white placeholder-gray-400 rounded-xl border border-gray-800 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          />
        </div>

        {/* Modelo */}
        <div className="relative">
          <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500" />
          <Input
            placeholder="Modelo"
            className="pl-10 h-12 bg-black/60 text-white placeholder-gray-400 rounded-xl border border-gray-800 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          />
        </div>

        {/* Ano */}
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500" />
          <Input
            placeholder="Ano"
            className="pl-10 h-12 bg-black/60 text-white placeholder-gray-400 rounded-xl border border-gray-800 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
          />
        </div>

        {/* Botão de busca */}
        <Button
          size="lg"
          className="h-12 bg-green-500 hover:bg-green-600 text-black font-bold rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition"
        >
          <Search className="h-5 w-5 mr-2" />
          Buscar
        </Button>
      </div>
    </div>
  );
}
