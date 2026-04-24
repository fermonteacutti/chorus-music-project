import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import { Link } from "react-router-dom";
import imgRosa from "@/assets/professores/rosa.webp";
import imgTadeu from "@/assets/professores/tadeu-1.webp";
import imgPaulinho from "@/assets/professores/paulinho.webp";
import imgIeda from "@/assets/professores/ieda.webp";

const teachers = [
  {
    id: 1,
    name: "Rosa Gomes",
    instrument: "Piano • Teclado • Flauta Doce • Órgão",
    bio: "Fundadora da Chorus em 1993 e criadora do Método MUSIK para teclado, adotado por diversas escolas no Brasil.",
    photo: imgRosa,
    photoPosition: "object-center",
  },
  {
    id: 2,
    name: "Tadeu Zafani",
    instrument: "Violão • Guitarra • Prática de Banda",
    bio: "Bacharel e mestre em Educação Musical pela UNICAMP. Coordenador Pedagógico da Chorus desde 2008.",
    photo: imgTadeu,
    photoPosition: "object-[center_5%]",
  },
  {
    id: 3,
    name: "Paulinho de Almeida",
    instrument: "Violão • Guitarra • Contrabaixo • Prática de Banda",
    bio: "Músico e educador com mais de duas décadas de atuação na Alemanha. Compositor e produtor musical.",
    photo: imgPaulinho,
    photoPosition: "object-[center_45%]",
  },
  {
    id: 4,
    name: "Ieda Cruz",
    instrument: "Canto",
    bio: "Cantora, compositora e professora com mais de 20 anos de atuação. Dois álbuns autorais lançados.",
    photo: imgIeda,
    photoPosition: "object-[center_20%]",
  },
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
          {teachers.map((teacher) => (
            <Card
              key={teacher.id}
              className="overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="aspect-video overflow-hidden bg-primary/5">
                <img
                  src={teacher.photo}
                  alt={teacher.name}
                  className={`w-full h-full object-cover ${teacher.photoPosition}`}
                  loading="lazy"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="font-semibold text-lg mb-1 font-sans">{teacher.name}</h3>
                <div className="flex items-center justify-center gap-1.5 text-primary text-xs mb-3">
                  <Music className="h-3.5 w-3.5" />
                  <span className="font-sans">{teacher.instrument}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                  {teacher.bio}
                </p>
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
