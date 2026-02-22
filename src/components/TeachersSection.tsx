import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const teachers = [
  { id: 1, name: "Prof. Carlos Mendes", instrument: "Piano e Teclado", bio: "Formado em música pela UNICAMP, 20 anos de experiência em ensino musical.", initials: "CM" },
  { id: 2, name: "Profa. Juliana Costa", instrument: "Violão e Guitarra", bio: "Especialista em música popular brasileira, participou de diversas gravações.", initials: "JC" },
  { id: 3, name: "Prof. Ricardo Alves", instrument: "Bateria e Percussão", bio: "Baterista profissional há 15 anos, tocou com renomados artistas nacionais.", initials: "RA" },
  { id: 4, name: "Profa. Beatriz Santos", instrument: "Canto e Técnica Vocal", bio: "Cantora lírica, formada em canto pela UNESP, professora há mais de 10 anos.", initials: "BS" }
];

export default function TeachersSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Nossos <span className="text-primary">Professores</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            Uma equipe de músicos qualificados e apaixonados pelo ensino
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teachers.map((teacher, index) => (
            <Card key={teacher.id} className="p-6 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4 mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{teacher.initials}</span>
              </div>
              <h3 className="font-semibold text-xl mb-1 font-sans">{teacher.name}</h3>
              <div className="flex items-center justify-center gap-2 text-primary text-sm mb-3">
                <Music className="h-4 w-4" />
                <span className="font-sans">{teacher.instrument}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-sans">{teacher.bio}</p>
              <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <GraduationCap className="h-4 w-4" />
                <span className="font-sans">Professor Qualificado</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/professores">
            <Button size="lg" variant="outline">Ver Todos os Professores</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
