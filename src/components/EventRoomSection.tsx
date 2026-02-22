import { Button } from "@/components/ui/button";
import { Building, Piano, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import salaImg from "@/assets/sala-instrumentos.jpg";
import auditorioImg from "@/assets/auditorio-palco.jpg";
import auditorioPlateiaImg from "@/assets/auditorio-plateia.png";

export default function EventRoomSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Conheça Nosso <span className="text-primary">Espaço</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            Nossa infraestrutura completa oferece o ambiente ideal para o aprendizado musical.
            A Sala de Eventos Bebeto também está disponível para locação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg bg-background overflow-hidden">
                <img src={salaImg} alt="Sala de instrumentos" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg bg-background overflow-hidden">
                <img src={auditorioPlateiaImg} alt="Auditório plateia" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="aspect-video rounded-lg bg-background overflow-hidden">
              <img src={auditorioImg} alt="Auditório com palco" className="w-full h-full object-cover" />
            </div>
            <Link to="/galeria">
              <Button variant="outline" className="w-full">
                Ver Mais Fotos
              </Button>
            </Link>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 font-sans">Salas de Aula</h3>
                  <p className="text-muted-foreground font-sans">
                    Salas climatizadas e acusticamente tratadas para aulas individuais e em grupo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Piano className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 font-sans">Instrumentos</h3>
                  <p className="text-muted-foreground font-sans">
                    Pianos, teclados, bateria, violões e outros instrumentos de qualidade à disposição.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 font-sans">Sala de Eventos Bebeto</h3>
                  <p className="text-muted-foreground font-sans">
                    Espaço para até 100 pessoas com piano de cauda, som profissional e iluminação.
                    <span className="text-primary font-medium"> Disponível para locação.</span>
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="mt-8 w-full sm:w-auto"
              onClick={() => window.open(`https://wa.me/5519992138954?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a locação da Sala de Eventos Bebeto.')}`, '_blank')}
            >
              Consultar Disponibilidade
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
