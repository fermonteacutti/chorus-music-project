import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import fachadaChorus from "@/assets/fachada-chorus.webp";
import auditorioPalco from "@/assets/auditorio-palco.webp";
import auditorioPlateiaImg from "@/assets/auditorio-plateia.webp";
import auditorioPlateia2 from "@/assets/auditorio-plateia-2.webp";
import carouselRecepcao from "@/assets/carousel-recepcao.webp";
import carouselSalaBateria from "@/assets/carousel-sala-bateria.webp";
import carouselSalaPiano from "@/assets/carousel-sala-piano.webp";
import carouselSalaViolao from "@/assets/carousel-sala-violao.webp";
import salaInstrumentos from "@/assets/sala-instrumentos.webp";
import luminariaChorus from "@/assets/luminaria-chorus.webp";
import sala2Piano from "@/assets/sala-2-piano.webp";
import sala10Microfone from "@/assets/sala-10-microfone.webp";
import sala2PianoTeclado from "@/assets/sala-2-piano-teclado.webp";
import sala6Teclado from "@/assets/sala-6-teclado.webp";
import sala6ViolaoGuitarra from "@/assets/sala-6-violao-guitarra.webp";
import sala1AcordeonTeclado from "@/assets/sala-1-acordeon-teclado.webp";
import sala8Teclado from "@/assets/sala-8-teclado.webp";
import sala1TecladoPiano from "@/assets/sala-1-teclado-piano.webp";
import recepcao2 from "@/assets/recepcao-2.webp";
import musicalizacao from "@/assets/musicalizacao.webp";

const photos = [
  { src: fachadaChorus, alt: "Fachada da Chorus Escola de Música", label: "Fachada" },
  { src: carouselRecepcao, alt: "Recepção da escola", label: "Recepção" },
  { src: recepcao2, alt: "Recepção com logo Chorus", label: "Recepção" },
  { src: auditorioPalco, alt: "Auditório - Palco", label: "Auditório" },
  { src: musicalizacao, alt: "Sala de Musicalização Infantil", label: "Musicalização" },
  { src: sala1AcordeonTeclado, alt: "Sala 1 - Acordeom e Teclado", label: "Sala de Aula" },
  { src: sala1TecladoPiano, alt: "Sala 1 - Teclado e Piano", label: "Sala de Aula" },
  { src: sala2Piano, alt: "Sala 2 - Piano", label: "Piano" },
  { src: sala2PianoTeclado, alt: "Sala 2 - Piano e Teclado", label: "Piano" },
  { src: carouselSalaPiano, alt: "Sala de Piano", label: "Piano" },
  { src: sala6ViolaoGuitarra, alt: "Sala 6 - Violão e Guitarra", label: "Violão" },
  { src: carouselSalaViolao, alt: "Sala de Violão", label: "Violão" },
  { src: sala6Teclado, alt: "Sala 6 - Teclado", label: "Teclado" },
  { src: sala8Teclado, alt: "Sala 8 - Teclado", label: "Teclado" },
  { src: sala10Microfone, alt: "Sala 10 - Canto e Microfone", label: "Canto" },
  { src: carouselSalaBateria, alt: "Sala de Bateria", label: "Bateria" },
  { src: salaInstrumentos, alt: "Sala de Instrumentos", label: "Instrumentos" },
  { src: luminariaChorus, alt: "Detalhe da luminária Chorus", label: "Ambiente" },
];

export default function Galeria() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Galeria de Fotos
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
              Conheça nossa infraestrutura através das imagens do nosso espaço.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="break-inside-avoid cursor-pointer group overflow-hidden rounded-lg"
                onClick={() => setSelected(i)}
              >
                <div className="relative">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-end">
                    <span className="text-primary-foreground font-sans text-sm font-medium px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {photo.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-4xl p-2 bg-background border-none">
          {selected !== null && (
            <img
              src={photos[selected].src}
              alt={photos[selected].alt}
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
