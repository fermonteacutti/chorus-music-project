import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Music, Star, Mic, Guitar, Users, Trophy } from "lucide-react";
import vivenciaMusicando from "@/assets/vivencia-musicando.webp";
import vivenciaSaraus from "@/assets/vivencia-saraus.webp";
import vivenciaChorusShow from "@/assets/vivencia-chorus-show.webp";
import vivenciaFestivalChorus from "@/assets/vivencia-festival-chorus.webp";
import vivenciaMusicalizacao from "@/assets/vivencia-musicalizacao.png";
import vivenciaCoral from "@/assets/vivencia-coral.png";
import vivenciaJam from "@/assets/vivencia-jam.png";
import vivenciaRodaViolao from "@/assets/vivencia-roda-violao.png";

const vivencias = [
  {
    id: 0,
    title: "Musicando",
    image: vivenciaMusicando,
    icon: Music,
    tag: "Incluso na Matrícula",
    description: "Conexão entre Experiência, Emoção e Convivência.\n\nSem nenhum custo adicional, o Musicando complementa o aprendizado de forma lúdica, fortalece seu desenvolvimento em grupo e prepara para eventos e experiências marcantes.\n\nO Musicando é mais do que um curso extra — ele complementa e conecta seu aprendizado individual à prática em grupo, desenvolvendo habilidades que vão além da técnica.\n\nParticipar do Musicando ajuda você a:\n• Desenvolver percepção musical, escuta ativa e ritmo em conjunto;\n• Aprender a se conectar com outros músicos, como em uma banda ou grupo instrumental;\n• Superar o medo de errar e ganhar confiança ao tocar com outras pessoas;\n• Fortalecer vínculos sociais e emocionais através da música.",
    quando: "Consulte a secretaria",
    duracao: "Variável",
    highlight: true,
  },
  {
    id: 1,
    title: "Saraus",
    image: vivenciaSaraus,
    icon: Mic,
    description: "Apresentações individuais ou com formações variadas que acontecem em nossa sala própria de eventos (Sala Bebeto von Buettner) com som e iluminação profissionais, em duas temporadas anuais no final de cada semestre.\n\nAlém de compartilhar o aprendizado com familiares e amigos, os Saraus também preparam o aluno para outros formatos de apresentações em espaços maiores.",
    quando: "Final de cada semestre",
    duracao: "2 horas",
  },
  {
    id: 2,
    title: "Chorus Show",
    image: vivenciaChorusShow,
    icon: Star,
    description: "Apresentação com formação de bandas que acontece no final de cada semestre em espaços externos para shows e música ao vivo.\n\nUma experiência real de palco que desenvolve presença cênica, trabalho em equipe e confiança musical.",
    quando: "Semestral",
    duracao: "3 horas",
  },
  {
    id: 3,
    title: "Festival Chorus",
    image: vivenciaFestivalChorus,
    icon: Trophy,
    description: "Apresentação com formação de bandas em teatros, com produção profissional que leva a música dos nossos alunos para além dos muros da escola.\n\nUma oportunidade única de vivenciar a experiência real de um show, desenvolvendo habilidades de performance, presença de palco e trabalho em equipe.",
    quando: "Anual",
    duracao: "Variável",
  },
  {
    id: 4,
    title: "Musicalização Infantil",
    image: vivenciaMusicalizacao,
    icon: Users,
    description: "A música tem presença muito forte na infância, acompanhando todo o desenvolvimento cognitivo e emocional das crianças. Na Musicalização, o contato com um educador musical enriquece esse processo.\n\nO foco não é o aprendizado de um instrumento específico, mas a própria criança e sua relação com a música — desenvolvendo percepção auditiva, coordenação motora, vocabulário e expressividade.",
    quando: "Consulte a secretaria",
    duracao: "1 hora",
  },
  {
    id: 5,
    title: "Coral Chorus Cantante",
    image: vivenciaCoral,
    icon: Mic,
    description: "O canto traz muitos benefícios: fortalece os músculos da garganta, pulmões e diafragma, melhora a respiração e libera endorfina — o hormônio do prazer e bem-estar.\n\nAlém disso, o canto coral promove uma interação social positiva que auxilia no alívio das tensões do dia a dia. O repertório é variado e busca atender os mais diversos gostos e estilos.",
    quando: "Consulte a secretaria",
    duracao: "1h30",
  },
  {
    id: 6,
    title: "Jam Session",
    image: vivenciaJam,
    icon: Guitar,
    description: "As Jam Sessions da Chorus são encontros musicais onde alunos e professores se reúnem para tocar juntos de forma espontânea e criativa.\n\nÉ o momento perfeito para praticar improvisação, conhecer outros músicos e experimentar diferentes estilos musicais em um ambiente descontraído e inspirador.",
    quando: "Último sábado do mês",
    duracao: "2 horas",
  },
  {
    id: 7,
    title: "Roda de Violão",
    image: vivenciaRodaViolao,
    icon: Guitar,
    description: "A Roda de Violão é uma vivência coletiva onde os participantes tocam e cantam juntos músicas populares brasileiras e internacionais.\n\nUma forma descontraída de praticar acordes, ritmos e repertório, além de criar laços com outros apaixonados pelo instrumento.",
    quando: "Sextas-feiras à tarde",
    duracao: "1h30",
  },
];

export default function Vivencias() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Nossas Vivências
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
              A Chorus oferece diversidade de vivências de acordo com o nível de cada aluno,
              com uma finalidade muito mais ampla do que apenas "mostrar o que foi aprendido".
              Essas vivências são ferramentas fundamentais no processo de formação artística,
              pessoal e profissional — um espaço de prática real de performance.
            </p>
          </div>
        </div>
      </section>

      {/* Texto introdutório */}
      <section className="py-12 bg-background border-b border-border/30">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <p className="text-muted-foreground leading-relaxed font-sans text-center">
            Diferente da sala de aula, o palco traz desafios como superar o nervosismo, melhorar a
            concentração e a interação com o público. Esses desafios ajudam o aluno a desenvolver
            segurança e presença cênica, aprender a comunicar emoções e construir uma identidade
            musical própria. Ter um evento como objetivo dá sentido ao estudo diário, estimulando
            disciplina, organização e comprometimento.
          </p>
        </div>
      </section>

      {/* Lista de vivências */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="space-y-12">
            {vivencias.map((vivencia) => {
              const IconComponent = vivencia.icon;
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
                    <div className="h-32 overflow-hidden bg-primary/5 flex items-center justify-center">
                      <IconComponent className="h-16 w-16 text-primary/20" />
                    </div>
                  )}

                  <CardContent className="p-8 lg:p-12">
                    {isHighlight && (
                      <div className="mb-4">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                          {(vivencia as any).tag}
                        </span>
                      </div>
                    )}

                    <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      {vivencia.title}
                    </h2>

                    <div className="text-muted-foreground mb-8 leading-relaxed font-sans space-y-3">
                      {vivencia.description.split('\n\n').map((paragraph, i) => {
                        if (paragraph.startsWith('•')) {
                          return (
                            <ul key={i} className="space-y-1 pl-4">
                              {paragraph.split('\n').map((line, j) => (
                                <li key={j} className="flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{line.replace('• ', '')}</span>
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return <p key={i}>{paragraph}</p>;
                      })}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium font-sans text-sm">{vivencia.quando}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-medium font-sans text-sm">Duração: {vivencia.duracao}</span>
                      </div>
                    </div>
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
