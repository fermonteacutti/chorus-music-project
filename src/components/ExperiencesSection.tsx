import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Music, Mic, Piano, Guitar } from "lucide-react";
import { Link } from "react-router-dom";

const experiences = [
  { id: 1, title: "Recitais e Apresentações", icon: Mic, description: "Momentos especiais onde nossos alunos compartilham seu progresso musical com familiares e amigos." },
  { id: 2, title: "Workshops Temáticos", icon: Music, description: "Encontros especializados para aprofundar conhecimentos em estilos musicais, técnicas e instrumentos." },
  { id: 3, title: "Grupos de Prática", icon: Users, description: "Vivências em grupo que desenvolvem a musicalidade coletiva, harmonia e ritmo em conjunto." },
  { id: 4, title: "Ensaios Abertos", icon: Piano, description: "Experiências onde o público pode acompanhar o processo criativo e a preparação musical." },
  { id: 5, title: "Jam Sessions", icon: Guitar, description: "Encontros descontraídos para improvisação e troca de experiências entre músicos." },
  { id: 6, title: "Eventos Especiais", icon: Calendar, description: "Celebrações musicais em datas comemorativas e festivais temáticos ao longo do ano." }
];

export default function ExperiencesSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Conheça Nossas <span className="text-primary">Vivências</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            Mais do que aulas, proporcionamos experiências musicais que enriquecem o aprendizado
            e criam memórias inesquecíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {experiences.map((experience) => {
            const IconComponent = experience.icon;
            return (
              <Card key={experience.id} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 font-sans">{experience.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-sans">{experience.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/vivencias">
            <Button size="lg">Saiba Mais Sobre as Vivências</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
