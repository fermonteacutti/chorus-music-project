import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Guitar, Mic, Drum, Piano, Users } from "lucide-react";

const courses = [
  { id: 1, name: "Piano e Teclado", icon: Piano, description: "Aprenda do básico ao avançado com nossa metodologia exclusiva MUSIK.", duration: "Cursos de 6 a 24 meses", level: "Todos os níveis" },
  { id: 2, name: "Violão e Guitarra", icon: Guitar, description: "Desenvolva sua técnica e aprenda seus estilos musicais favoritos.", duration: "Cursos de 12 a 36 meses", level: "Iniciante a Avançado" },
  { id: 3, name: "Canto e Técnica Vocal", icon: Mic, description: "Aprimore sua voz com exercícios específicos e repertório variado.", duration: "Cursos de 6 a 24 meses", level: "Todos os níveis" },
  { id: 4, name: "Bateria e Percussão", icon: Drum, description: "Domine ritmos e desenvolva coordenação motora através da música.", duration: "Cursos de 12 a 36 meses", level: "Iniciante a Avançado" },
  { id: 5, name: "Musicalização Infantil", icon: Users, description: "Para crianças a partir de 8 meses. Desenvolvimento através da música.", duration: "Atividades semanais", level: "8 meses a 7 anos" },
  { id: 6, name: "Sopro Novo", icon: Music, description: "Formação em instrumentos de sopro: flauta, saxofone, trompete e mais.", duration: "Cursos de 12 a 36 meses", level: "Todos os níveis" }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card key={course.id} className="p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-2xl mb-3 font-sans">{course.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed font-sans">{course.description}</p>
                <div className="space-y-2 mb-6 text-sm font-sans">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duração:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nível:</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                </div>
                <Button className="w-full">Saiba Mais</Button>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
