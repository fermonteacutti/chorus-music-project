import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Music, Star, Mic, Guitar } from "lucide-react";
import { Link } from "react-router-dom";
import vivenciaMusicalizacao from "@/assets/vivencia-musicalizacao.png";
import vivenciaCoral from "@/assets/vivencia-coral.png";
import vivenciaJam from "@/assets/vivencia-jam.png";
import vivenciaRodaViolao from "@/assets/vivencia-roda-violao.png";

const vivencias = [
  {
    id: 0,
    title: "Musicando",
    image: null,
    icon: Music,
    description: "A conexão entre Técnica, Emoção e Convivência. Incluído gratuitamente na sua matrícula, o Musicando fortalece seu desenvolvimento em grupo e prepara para eventos e experiências marcantes. Mais do que um curso extra, ele complementa o curso e conecta seu aprendizado individual à prática em grupo. Essa vivência coletiva foi criada para integrar o conteúdo das aulas individuais a experiências práticas em grupo, desenvolvendo habilidades que vão além da técnica.",
    quando: "Consulte a secretaria",
    duracao: "Variável",
    highlight: true,
  },
  {
    id: 1,
    title: "Saraus",
    image: null,
    icon: Mic,
    description: "Os Saraus da Chorus são encontros íntimos e acolhedores onde alunos apresentam suas performances em um ambiente descontraído e inspirador. É o momento de compartilhar a música que vem sendo construída nas aulas, celebrar conquistas e fortalecer a confiança no palco — sempre com o carinho e apoio de familiares, amigos e colegas.",
    quando: "Datas especiais ao longo do ano",
    duracao: "2 horas",
  },
  {
    id: 2,
    title: "Chorus Show",
    image: null,
    icon: Star,
    description: "O Chorus Show é o grande evento da escola — uma apresentação especial onde nossos alunos sobem ao palco para mostrar todo o seu talento e evolução. Com produção cuidadosa, iluminação e som profissional, é uma experiência inesquecível de crescimento artístico e pessoal que marca a trajetória de cada músico.",
    quando: "Semestral",
    duracao: "3 horas",
  },
  {
    id: 3,
    title: "Shows",
    image: null,
    icon: Guitar,
    description: "Os Shows da Chorus são apresentações em espaços externos e eventos da comunidade, levando a música dos nossos alunos para além dos muros da escola. Uma oportunidade única de vivenciar a experiência real de um show, desenvolvendo habilidades de performance, presença de palco e trabalho em equipe.",
    quando: "Ao longo do ano",
    duracao: "Variável",
  },
  {
    id: 4,
    title: "Musicalização Infantil",
    image: vivenciaMusicalizacao,
    description: "A musicalização infantil é uma vivência lúdica e criativa que introduz as crianças ao universo musical através de brincadeiras, jogos rítmicos e exploração de instrumentos. Desenvolvemos a percepção auditiva, coordenação motora e expressão artística dos pequenos, criando uma base sólida para o aprendizado musical futuro.",
    quando: "Sábados pela manhã",
    duracao: "1 hora",
  },
  {
    id: 5,
    title: "Coral Chorus",
    image: vivenciaCoral,
    description: "O Coral Chorus é uma experiência transformadora onde vozes se unem em harmonia. Trabalhamos técnica vocal, respiração, afinação e interpretação em um ambiente acolhedor e colaborativo. É uma oportunidade única de desenvolver habilidades musicais enquanto faz parte de um grupo que compartilha a paixão pela música.",
    quando: "Quartas-feiras à noite",
    duracao: "1h30",
  },
  {
    id: 6,
    title: "Jam Session",
    image: vivenciaJam,
    description: "As Jam Sessions da Chorus são encontros musicais onde alunos e professores se reúnem para tocar juntos de forma espontânea e criativa. É o momento perfeito para praticar improvisação, conhecer outros músicos e experimentar diferentes estilos musicais em um ambiente descontraído e inspirador.",
    quando: "Último sábado do mês",
    duracao: "2 horas",
  },
  {
    id: 7,
    title: "Roda de Violão",
    image: vivenciaRodaViolao,
    description: "A Roda de Violão é uma vivência coletiva onde os participantes tocam e cantam juntos músicas populares brasileiras e internacionais. É uma forma descontraída de praticar acordes, ritmos e repertório, além de criar laços com outros apaixonados pelo instrumento.",
    quando: "Sextas-feiras à tarde",
    duracao: "1h30",
  },
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
            {vivencias.map((vivencia) => {
              const IconComponent = (vivencia as any).icon;
              const isHighlight = (vivencia as any).highlight;

              return (
                <Card
                  key={vivencia.id}
                  className={`overflow-hidden ${isHighlight ? "border-primary border-2 shadow-lg" : ""}`}
                >
                  {vivencia.image ? (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={vivencia.image}
                        alt={vivencia.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video overflow-hidden bg-primary/5 flex items-center justify-center">
                      {IconComponent && (
                        <IconComponent className="h-24 w-24 text-primary/30" />
                      )}
                    </div>
                  )}
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      {isHighlight && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                          Curso Bônus Complementar
                        </span>
                      )}
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      {vivencia.title}
                    </h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed font-sans">
                      {vivencia.description}
                    </p>
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
                    {isHighlight && (
                      <div className="mt-6">
                        <Link to="/#musicando">
                          <Button variant="outline">Saiba mais sobre o Musicando</Button>
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6 font-sans">
              Quer participar de uma de nossas vivências?
            </p>
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  `https://wa.me/5519992138954?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre as vivências musicais da Chorus.")}`,
                  "_blank"
                )
              }
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
