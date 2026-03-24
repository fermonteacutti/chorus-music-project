import { Button } from "@/components/ui/button";
import { Music, Calendar } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

import fachadaImg from "@/assets/fachada-chorus.png";
import recepcaoImg from "@/assets/carousel-recepcao.png";
import salaPianoImg from "@/assets/carousel-sala-piano.png";
import salaViolaoImg from "@/assets/carousel-sala-violao.png";
import salaBateriaImg from "@/assets/carousel-sala-bateria.png";
import auditorioImg from "@/assets/auditorio-palco.jpg";

const slides = [
  { src: fachadaImg, alt: "Fachada da Chorus Escola de Música" },
  { src: recepcaoImg, alt: "Recepção da escola" },
  { src: salaPianoImg, alt: "Sala de piano" },
  { src: salaViolaoImg, alt: "Sala de violão" },
  { src: salaBateriaImg, alt: "Sala de bateria e ensaio" },
  { src: auditorioImg, alt: "Auditório com palco" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 600);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Carousel background images */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            index === current && !isTransitioning ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/70" />

      {/* Content */}
      <div className="relative z-10 w-full flex items-end justify-center">
        <div className="max-w-4xl mx-auto px-4 md:px-8 pb-12 md:pb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary border-primary border">
            <Music className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Desde 1993 em Campinas</span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Onde a música cria{" "}
            <span className="text-accent">conexões</span>
          </h1>

          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-6 leading-relaxed font-sans">
            Aqui você encontra um espaço seguro, inspirador e personalizado para evoluir na música:
            respeitando seu ritmo, sua voz e seu momento.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              data-testid="button-conhecer"
              onClick={() => window.location.href = '/cursos'}
            >
              Conheça Nossos Cursos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:text-white"
              data-testid="button-agendar"
              onClick={() => window.open(`https://wa.me/5519992138954?text=${encodeURIComponent('Olá! Gostaria de agendar uma aula experimental.')}`, '_blank')}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Agende uma Aula Experimental
            </Button>
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => { setCurrent(index); setIsTransitioning(false); }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? "w-8 bg-primary" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
