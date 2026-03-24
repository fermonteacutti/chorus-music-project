import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Guitar, Mic, Drum, Piano, Users, BookOpen, Calendar, Video, Home, Shuffle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const courses = [
  { id: 1, name: "Piano e Teclado", icon: Piano, description: "Aprenda do básico ao avançado com nossa metodologia exclusiva MUSIK." },
  { id: 2, name: "Violão e Guitarra", icon: Guitar, description: "Desenvolva sua técnica e aprenda seus estilos musicais favoritos." },
  { id: 3, name: "Canto e Técnica Vocal", icon: Mic, description: "Aprimore sua voz com exercícios específicos e repertório variado." },
  { id: 4, name: "Bateria e Percussão", icon: Drum, description: "Domine ritmos e desenvolva coordenação motora através da música." },
  { id: 5, name: "Musicalização Infantil", icon: Users, description: "Para crianças a partir de 8 meses. Desenvolvimento através da música." },
  { id: 6, name: "Sopro Novo", icon: Music, description: "Formação em instrumentos de sopro: flauta, saxofone, trompete e mais." }
];

export default function Cursos() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Nossos <span className="text-primary">Cursos</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            Oferecemos uma ampla variedade de cursos para todas as idades e níveis de experiência
          </p>
        </div>

        {/* MUSIK - Destaque */}
        <Card className="p-8 md:p-12 mb-16 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <BookOpen className="h-10 w-10 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  MUSIK
                </h2>
                <Badge variant="secondary" className="text-sm">Método Exclusivo</Badge>
              </div>
              <p className="text-xl text-primary font-medium mb-4 font-sans">
                Método Para Teclado
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 font-sans max-w-3xl">
                Desenvolvido para quem deseja tocar em pouco tempo, o MUSIK oferece um repertório 
                que vai da música popular brasileira a clássicos internacionais, atendendo a todas 
                as faixas etárias e gostos musicais.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 font-sans max-w-3xl">
                O método é dividido em 4 estágios — Básico, Intermediário, Avançado e Aperfeiçoamento — 
                com teoria e prática integradas em linguagem simples e objetiva. Adotado por escolas 
                no Brasil e nos Estados Unidos.
              </p>
              <Button>Saiba Mais Sobre o MUSIK</Button>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <Card key={course.id} className="p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-2xl mb-3 font-sans">{course.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed font-sans">{course.description}</p>
                <Button className="w-full">Saiba Mais</Button>
              </Card>
            );
          })}
        </div>

        {/* Modalidades */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Nossas <span className="text-primary">Modalidades</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
              Escolha a modalidade que melhor se adapta ao seu estilo de vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chorus BASE */}
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
                Duas aulas semanais: uma individual e personalizada para técnica e repertório, 
                e outra em grupo para aprofundar os elementos da música e interagir com outros instrumentistas.
              </p>
            </Card>

            {/* Chorus FLEX */}
            <Card className="p-8 border-primary/20 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Shuffle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Chorus FLEX</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Marque sua aula no dia e horário mais conveniente para a sua agenda. 
                Ideal para quem tem mudanças constantes, viaja com frequência ou de última hora.
              </p>
            </Card>

            {/* Chorus VIP */}
            <Card className="p-8 border-primary/20 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Home className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Chorus VIP</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Aulas em domicílio, individuais ou em dupla, com dia e hora marcada. 
                O padrão de qualidade Chorus entregue no seu endereço em Campinas e região.
              </p>
            </Card>

            {/* Chorus On-line */}
            <Card className="p-8 border-primary/20 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Video className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Chorus On-line</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Aulas de música online ao vivo, com professor e aluno conectados por videoconferência. 
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
