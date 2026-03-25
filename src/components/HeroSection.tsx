import { Button } from "@/components/ui/button";
import { Music, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

import fachadaImg from "@/assets/fachada-chorus.webp";
import recepcaoImg from "@/assets/carousel-recepcao.webp";
import salaPianoImg from "@/assets/carousel-sala-piano.webp";
import salaViolaoImg from "@/assets/carousel-sala-violao.webp";
import salaBateriaImg from "@/assets/carousel-sala-bateria.webp";
import auditorioImg from "@/assets/auditorio-palco.webp";

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
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  const goTo = (index: number) => {
    setCurrent(index);
    resetTimer();
  };

  const goPrev = () => goTo((current - 1 + slides.length) % slides.length);
  const goNext = () => goTo((current + 1) % slides.length);

  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-end overflow-hidden">
      {/* Carousel track - sliding effect */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full flex-shrink-0 relative">
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      {/* Arrow controls */}
      <button
        onClick={goPrev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 w-full flex items-end justify-center">
        <div className="max-w-4xl mx-auto px-4 md:px-8 pb-12 md:pb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary border-primary border">
            <Music className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Desde 1993 em Campinas</span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            Onde a música cria{" "}
            <span className="text-accent">conexões</span>
          </h1>

          <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-6 leading-relaxed font-sans drop-shadow-md">
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
                onClick={() => goTo(index)}
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
