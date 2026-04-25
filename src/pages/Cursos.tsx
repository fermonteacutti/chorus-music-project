useSEO({
  title: "Cursos de Música em Campinas | Chorus Escola de Música",
  description: "Piano, violão, guitarra, canto, bateria, musicalização infantil e mais. Metodologia personalizada para todas as idades. Conheça os cursos da Chorus.",
  canonical: "https://chorus-music-project.pages.dev/cursos",
});
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Guitar, Mic, Drum, Piano, Users, BookOpen, Calendar, Video, Home, Shuffle, Wind, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const courseGroups = [
  {
    group: "Cordas",
    icon: Guitar,
    courses: ["Violão Popular e Clássico", "Guitarra", "Ukulele", "Cavaquinho", "Contrabaixo", "Viola Caipira", "Violino"],
    description: "Os instrumentos de cordas são considerados uma boa porta de entrada para o universo da música por serem acessíveis, versáteis e populares entre iniciantes e músicos mais experientes.",
  },
  {
    group: "Teclas",
    icon: Piano,
    courses: ["Piano Clássico e Popular", "Teclado", "Órgão", "Acordeon"],
    description: "Por permitirem trabalhar melodia, harmonia e ritmo ao mesmo tempo, oferecem uma base excelente e uma visão ampla da música. O curso de Teclado possui um método próprio — o MUSIK, desenvolvido pela diretora Rosa Gomes.",
  },
  {
    group: "Sopros",
    icon: Wind,
    courses: ["Flauta Transversal", "Flauta Doce", "Saxofone", "Trompete", "Trombone", "Clarinete"],
    description: "Presentes no pop, no jazz, gospel e diversos estilos, os instrumentos de sopros são marcantes e permitem ao estudante desenvolver identidade própria e se destacar musicalmente.",
  },
  {
    group: "Percussão",
    icon: Drum,
    courses: ["Bateria", "Percussão"],
    description: "O aprendizado de instrumentos de percussão é uma experiência dinâmica e envolvente, centrada no desenvolvimento do ritmo — um dos pilares da música. A percussão está presente em praticamente todos os estilos musicais.",
  },
  {
    group: "Canto",
    icon: Mic,
    courses: ["Canto Popular", "Canto Lírico", "Coral Chorus Cantante"],
    description: "O canto fortalece os músculos da garganta, pulmões e diafragma, melhora a respiração e libera endorfina. O canto coral promove interação social positiva que auxilia no alívio das tensões do dia a dia.",
  },
  {
    group: "Infância e Educação",
    icon: Users,
    courses: ["Musicalização Infantil", "Musicoterapia"],
    description: "A música tem presença muito forte na infância, acompanhando todo o desenvolvimento cognitivo e emocional das crianças. Nossa abordagem é personalizada para cada faixa etária e necessidade.",
  },
  {
    group: "Formação e Prática",
    icon: Star,
    courses: ["Prática de Banda", "Pré-Vestibular de Música"],
    description: "Essencial para quem deseja se apresentar ao vivo ou ingressar em cursos superiores de música. A Prática de Banda proporciona uma experiência real e colaborativa, aproximando o aluno do que acontece em shows, ensaios e gravações.",
  },
];

export default function Cursos() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Nossos <span className="text-primary">Cursos</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            Nossa metodologia é personalizada e adaptada aos objetivos de cada aluno — seja profissional,
            hobby, lazer, terapia ou realização de um sonho. Consideramos faixa etária, estilo musical
            e tempo disponível. Cada aluno é único.
          </p>
        </div>

        {/* MUSIK — Destaque */}
        <Card className="p-8 md:p-12 mb-16 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <BookOpen className="h-10 w-10 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">MUSIK</h2>
                <Badge variant="secondary" className="text-sm">Método Exclusivo</Badge>
              </div>
              <p className="text-xl text-primary font-medium mb-4 font-sans">Método Para Teclado</p>
              <p className="text-muted-foreground leading-relaxed mb-4 font-sans max-w-3xl">
                Desenvolvido para se tocar em pouco tempo, o MUSIK oferece um repertório que vai da
                música popular brasileira a clássicos nacionais e internacionais, atendendo a todas
                as faixas etárias e gostos musicais.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 font-sans max-w-3xl">
                O método, adotado em todo o Brasil, é dividido em 4 estágios com teoria e prática
                integradas em linguagem simples e objetiva. Desenvolvido pela diretora Rosa Gomes
                em parceria com a educadora musical pianista Suzel Mega de Oliveira.
              </p>
              <Button asChild>
                <a href="https://wa.me/5519992138954?text=Olá! Gostaria de saber mais sobre o método MUSIK." target="_blank" rel="noopener noreferrer">
                  Saiba Mais Sobre o MUSIK
                </a>
              </Button>
            </div>
          </div>
        </Card>

        {/* Texto metodologia */}
        <div className="mb-12 p-6 rounded-2xl bg-secondary/50 border border-border/30">
          <p className="text-muted-foreground leading-relaxed font-sans text-center max-w-4xl mx-auto">
            Nossa equipe de profissionais com formação acadêmica e ótima qualificação adota uma metodologia
            personalizada para cada aluno. Temos opções flexíveis de tempo de aula dentro de uma estrutura
            moderna, com instrumentos e equipamentos de alta qualidade. Os alunos têm a opção de participar
            de apresentações diversificadas em nossa sala de eventos própria com som e iluminação profissionais,
            além de eventos externos. Oferecemos também cursos bilíngues em Português/Inglês, Português/Alemão
            ou Português/Francês.
          </p>
        </div>

        {/* Grade de cursos por grupo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {courseGroups.map((group) => {
            const Icon = group.icon;
            return (
              <Card key={group.group} className="p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-5">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3 font-sans text-foreground">{group.group}</h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {group.courses.map((c) => (
                    <span key={c} className="inline-block px-2.5 py-0.5 bg-primary/10 text-primary border border-primary/20 text-xs font-medium rounded-full font-sans">
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans">{group.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Modalidades */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Nossas <span className="text-primary">Modalidades</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
              Escolha a modalidade que melhor se adapta ao seu estilo de vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">Chorus BASE</h3>
                  <Badge variant="secondary" className="text-xs mt-1">Mais Popular</Badge>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Duas aulas semanais para desenvolver todo o seu potencial musical. Na aula individual,
                atendimento personalizado com atenção exclusiva do professor para técnica, domínio do
                instrumento e repertório. Na aula em grupo, você aprimora os elementos da música e
                interage com outros instrumentistas.
              </p>
            </Card>

            <Card className="p-8 border-primary/20 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Shuffle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Chorus FLEX</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Você marca sua aula no dia e horário mais conveniente para a sua agenda. Ideal para
                quem tem mudanças constantes de agenda, viaja com frequência ou de última hora.
              </p>
            </Card>

            <Card className="p-8 border-primary/20 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Home className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Chorus VIP</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Aulas em domicílio, individuais ou em dupla, com dia e hora marcada para facilitar
                a sua agenda e reduzir seus deslocamentos. Atendemos em Campinas e região.
                Chorus VIP é o padrão de qualidade da Chorus entregue no seu endereço.
              </p>
            </Card>

            <Card className="p-8 border-primary/20 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Video className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Chorus On-line</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Aulas de música online ao vivo com professor e aluno conectados por videoconferência.
                Temos ainda a modalidade MIX com possibilidade de 3 aulas online e 1 presencial.
                Qualidade Chorus onde você estiver.
              </p>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <a href="https://wa.me/5519992138954?text=Olá! Gostaria de saber mais sobre as modalidades de aula." target="_blank" rel="noopener noreferrer">
                Agende uma Entrevista
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
