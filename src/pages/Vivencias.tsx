import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Music } from "lucide-react";

const vivencias = [
  { id: 1, title: "Musicalização Infantil", description: "A musicalização infantil é uma vivência lúdica e criativa que introduz as crianças ao universo musical através de brincadeiras, jogos rítmicos e exploração de instrumentos. Desenvolvemos a percepção auditiva, coordenação motora e expressão artística dos pequenos, criando uma base sólida para o aprendizado musical futuro.", quando: "Sábados pela manhã", duracao: "1 hora" },
  { id: 2, title: "Coral Chorus", description: "O Coral Chorus é uma experiência transformadora onde vozes se unem em harmonia. Trabalhamos técnica vocal, respiração, afinação e interpretação em um ambiente acolhedor e colaborativo. É uma oportunidade única de desenvolver habilidades musicais enquanto faz parte de um grupo que compartilha a paixão pela música.", quando: "Quartas-feiras à noite", duracao: "1h30" },
  { id: 3, title: "Jam Session", description: "As Jam Sessions da Chorus são encontros musicais onde alunos e professores se reúnem para tocar juntos de forma espontânea e criativa. É o momento perfeito para praticar improvisação, conhecer outros músicos e experimentar diferentes estilos musicais em um ambiente descontraído e inspirador.", quando: "Último sábado do mês", duracao: "2 horas" },
  { id: 4, title: "Roda de Violão", description: "A Roda de Violão é uma vivência coletiva onde os participantes tocam e cantam juntos músicas populares brasileiras e internacionais. É uma forma descontraída de praticar acordes, ritmos e repertório, além de criar laços com outros apaixonados pelo instrumento.", quando: "Sextas-feiras à tarde", duracao: "1h30" }
];

export default function Vivencias() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Nossas Vivências
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
              Experiências musicais únicas que vão além das aulas tradicionais.
              Participe de momentos especiais de aprendizado, troca e conexão através da música.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="space-y-16">
            {vivencias.map((vivencia) => (
              <Card key={vivencia.id} className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <Music className="h-20 w-20 text-primary/40" />
                </div>
                <CardContent className="p-8 lg:p-12">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">{vivencia.title}</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed font-sans">{vivencia.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium font-sans">{vivencia.quando}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-medium font-sans">Duração: {vivencia.duracao}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6 font-sans">Quer participar de uma de nossas vivências?</p>
            <Button
              size="lg"
              onClick={() => window.open(`https://wa.me/5519992138954?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as vivências musicais da Chorus.')}`, '_blank')}
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
