import { Button } from "@/components/ui/button";
import { Music, Calendar } from "lucide-react";
import fachadaImg from "@/assets/fachada-chorus.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-foreground">
      <img src={fachadaImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-foreground/80" />
      <div className="absolute inset-0 z-10 w-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary border-primary border">
            <Music className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Desde 1993 em Campinas</span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-background mb-4 leading-tight">
            Ensino de música de forma lúdica,{" "}
            <span className="text-accent">com qualidade</span>,<br />
            ajudando a realizar sonhos
          </h1>

          <p className="text-base md:text-lg text-background/90 max-w-2xl mx-auto mb-6 leading-relaxed font-sans">
            Desde 1993, a Chorus é referência em Campinas pela seriedade no ensino da música,
            qualificação dos professores e variedade de oportunidades para nossos alunos.
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
              className="w-full sm:w-auto bg-background/10 backdrop-blur-md border-background/30 text-background hover:bg-background/20 hover:text-background"
              data-testid="button-agendar"
              onClick={() => window.open(`https://wa.me/5519992138954?text=${encodeURIComponent('Olá! Gostaria de agendar uma aula experimental.')}`, '_blank')}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Agende uma Aula Experimental
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
