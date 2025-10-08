"use client";

import TextType from "@/components/ui/text-type";
import { SearchBar } from "@/components/ui/searchbar"

export function HeroSection() {
    return (
        <section
            className="relative py-25"
            style={{
                backgroundImage: "url(https://lh3.googleusercontent.com/p/AF1QipP4HjSL_xa0c3qZxgoO_CjNa8P6mvGVOPnRjmV7=s680-w680-h510-rw)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* Overlay escuro */}
            <div className="absolute inset-0 bg-black/70 transition-opacity duration-1000 ease-in-out"></div>

            <div className="relative container mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    <TextType
                        text={["Encontre o Carro dos Seus Sonhos"]}
                        typingSpeed={90}
                        pauseDuration={2000}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Os melhores seminovos com garantia, procedência e atendimento de confiança.
                </p>
            </div>

            { /* SearchBar */}
            <SearchBar />

        </section>
    );
}
