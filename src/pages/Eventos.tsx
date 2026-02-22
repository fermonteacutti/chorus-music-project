import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const events = [
  { id: 1, title: "Recital de Piano - Turma Avançada", date: "25 de Março, 2024", time: "19:00", location: "Sala de Eventos Chorus", attendees: "50 pessoas", description: "Apresentação dos alunos avançados de piano, com repertório clássico e contemporâneo." },
  { id: 2, title: "Festival de Música Popular", date: "10 de Abril, 2024", time: "18:00", location: "Sala de Eventos Chorus", attendees: "100 pessoas", description: "Grande festival com apresentações de violão, guitarra e canto, celebrando a música popular brasileira." },
  { id: 3, title: "Apresentação Infantil", date: "5 de Maio, 2024", time: "15:00", location: "Sala de Eventos Chorus", attendees: "80 pessoas", description: "Recital especial dos alunos de musicalização infantil, mostrando o que aprenderam durante o semestre." },
  { id: 4, title: "Workshop de Improvisação Jazz", date: "20 de Maio, 2024", time: "14:00", location: "Sala Principal", attendees: "30 pessoas", description: "Workshop especial com músico convidado, abordando técnicas de improvisação no jazz." }
];

export default function Eventos() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Conheça Nossas <span className="text-primary">Vivências</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            Participe dos nossos recitais, apresentações e workshops musicais
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <Card key={event.id} className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0 lg:w-48">
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 flex flex-col items-center justify-center">
                    <Calendar className="h-12 w-12 text-primary mb-2" />
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">{event.date.split(" ")[0]}</p>
                      <p className="text-sm text-muted-foreground font-sans">{event.date.split(" ").slice(1).join(" ")}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-2xl mb-4 font-sans">{event.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed font-sans">{event.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-sans">Horário</p>
                        <p className="font-medium font-sans">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-sans">Local</p>
                        <p className="font-medium font-sans">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-sans">Capacidade</p>
                        <p className="font-medium font-sans">{event.attendees}</p>
                      </div>
                    </div>
                  </div>

                  <Button>Reservar Ingresso</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
