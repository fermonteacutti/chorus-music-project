import { Card } from "@/components/ui/card";
import { Music, Award } from "lucide-react";

const allTeachers = [
  { id: 1, name: "Carlos Mendes", instrument: "Piano e Teclado", bio: "Formado em música pela UNICAMP com mestrado em performance musical. Mais de 20 anos de experiência em ensino musical, desenvolveu o método MUSIK para teclado adotado por diversas escolas.", initials: "CM", specialties: ["Piano Clássico", "Teclado Popular", "Harmonia"] },
  { id: 2, name: "Juliana Costa", instrument: "Violão e Guitarra", bio: "Especialista em música popular brasileira, participou de diversas gravações com artistas renomados. Formada pela UNESP com especialização em música popular.", initials: "JC", specialties: ["MPB", "Jazz", "Blues"] },
  { id: 3, name: "Ricardo Alves", instrument: "Bateria e Percussão", bio: "Baterista profissional há 15 anos, tocou com renomados artistas nacionais e internacionais. Professor certificado pela Escola de Música de Brasília.", initials: "RA", specialties: ["Rock", "Jazz", "Música Latina"] },
  { id: 4, name: "Beatriz Santos", instrument: "Canto e Técnica Vocal", bio: "Cantora lírica formada em canto pela UNESP, professora há mais de 10 anos. Especialista em técnica vocal e repertório erudito e popular.", initials: "BS", specialties: ["Ópera", "MPB", "Técnica Vocal"] },
  { id: 5, name: "Fernando Lima", instrument: "Saxofone e Flauta", bio: "Músico profissional com formação em instrumentos de sopro pela Berklee College of Music. Experiência em orquestras e bandas de jazz.", initials: "FL", specialties: ["Jazz", "Música Clássica", "Improvisação"] },
  { id: 6, name: "Mariana Rocha", instrument: "Musicalização Infantil", bio: "Pedagoga musical especializada em educação infantil. Desenvolveu metodologia lúdica para crianças a partir de 8 meses de idade.", initials: "MR", specialties: ["Educação Infantil", "Método Orff", "Ludopedagogia"] }
];

export default function Professores() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Nossa <span className="text-primary">Equipe</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            Conheça os profissionais dedicados que tornam a Chorus uma referência em ensino musical
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTeachers.map((teacher, index) => (
            <Card key={teacher.id} className="p-8">
              <div className="text-center mb-6">
                <div className="mb-4 mx-auto h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">{teacher.initials}</span>
                </div>
                <h3 className="font-semibold text-2xl mb-2 font-sans">{teacher.name}</h3>
                <div className="flex items-center justify-center gap-2 text-primary mb-4">
                  <Music className="h-5 w-5" />
                  <span className="font-medium font-sans">{teacher.instrument}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-sans text-center">{teacher.bio}</p>
              <div className="border-t border-border/50 pt-6">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-3">
                  <Award className="h-4 w-4" />
                  <span className="font-medium font-sans">Especialidades:</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {teacher.specialties.map((specialty, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium font-sans">{specialty}</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
