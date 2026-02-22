import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const teachers = [
  { id: 1, name: "Rosa Maria", instrument: "Piano, Teclado, Flauta Doce, Órgão", bio: "Fundadora da Chorus Music, desenvolveu o Método \"Musik\" para teclado adotado por diversas escolas.", initials: "RM" },
  { id: 2, name: "Tadeu Zafani", instrument: "Violão, Guitarra, Prática de Banda", bio: "Bacharel em Guitarra pela UNICAMP, Coordenador Pedagógico da Chorus desde 2008.", initials: "TZ" },
  { id: 3, name: "Bruno Sotil", instrument: "Percussão", bio: "Percussionista e produtor, cursou no Conservatório de Tatuí. Coordena o projeto \"Batuque na Vida\".", initials: "BS" },
  { id: 4, name: "Marisa Molchansky (Brisa)", instrument: "Canto", bio: "Bacharel em Música Popular pela UNICAMP, integra a coordenação pedagógica da Chorus.", initials: "MM" }
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
