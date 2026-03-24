import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Guitar, Mic, Drum, Piano, Users, BookOpen } from "lucide-react";
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
      </div>
    </div>
  );
}
