import { Card } from "@/components/ui/card";
import { Music } from "lucide-react";

// Photos
import imgRosaMaria from "@/assets/profissionais/rosa-maria.webp";
import imgCeciliaCardoso from "@/assets/profissionais/cecilia-cardoso.webp";
import imgMarileneFortes from "@/assets/profissionais/marilene-fortes.webp";
import imgTadeuZafani from "@/assets/profissionais/tadeu-zafani.webp";
import imgRobertoPassos from "@/assets/profissionais/roberto-passos.webp";
import imgIedaCruz from "@/assets/profissionais/ieda-cruz.webp";
import imgMarisaMolchansky from "@/assets/profissionais/marisa-molchansky.webp";
import imgBrunoSotil from "@/assets/profissionais/bruno-sotil.webp";
import imgSarahSelles from "@/assets/profissionais/sarah-selles.webp";
import imgGeRibeiro from "@/assets/profissionais/ge-ribeiro.webp";
import imgAlineSampaio from "@/assets/profissionais/aline-sampaio.webp";
import imgJoelPinheiro from "@/assets/profissionais/joel-pinheiro.webp";
import imgPaulinhoAlmeida from "@/assets/profissionais/paulinho-almeida.webp";

interface Professional {
  id: number;
  name: string;
  instrument: string;
  bio: string;
  initials: string;
  photo?: string;
}

const allProfessionals: Professional[] = [
  {
    id: 1,
    name: "Rosa Maria",
    instrument: "Piano, Teclado, Flauta Doce, Órgão, Sopro Novo Yamaha",
    bio: "Formada em Piano pelo Conservatório Musical Campinas e Licenciatura em Educação Musical pela UFSCar. Fundadora da Chorus Music em 1993, desenvolveu o Método para Teclado \"Musik\", adotado por diversas escolas no Brasil. Divide seu tempo entre aulas, direção da escola, apresentações e monitoria do Sopro Novo Yamaha.",
    initials: "RM",
    photo: imgRosaMaria,
  },
  {
    id: 2,
    name: "Cecilia Cardoso",
    instrument: "Piano, Teclado, Flauta Doce, Órgão",
    bio: "Formada no Curso Profissionalizante e Técnico Musical pelo Conservatório Carlos Gomes. Fez curso avançado de Piano erudito com a professora Olga Levermann e formou-se em Órgão Eletrônico pelo Curso Yamaha. Toca profissionalmente em eventos e ministra aulas na Chorus desde 2000.",
    initials: "CC",
    photo: imgCeciliaCardoso,
  },
  {
    id: 3,
    name: "Marilene R. Fortes",
    instrument: "Acordeon, Piano, Teclado, Órgão",
    bio: "Formou-se Pianista e Harmonicista (Acordeon) no Conservatório Edy Meirelles. Fez curso de Harmonia Tradicional e Funcional pela UNICAMP. Atuou como solista de Acordeon em diversas peças e na Orquestra Filarmônica de Valinhos. Na Chorus, ministra aulas de Acordeon, Piano, Teclado e Órgão.",
    initials: "MF",
    photo: imgMarileneFortes,
  },
  {
    id: 4,
    name: "Tadeu Zafani",
    instrument: "Violão, Guitarra, Prática de Banda",
    bio: "Bacharel em Guitarra Elétrica pela UNICAMP com Mestrado em Educação Musical. Compositor, arranjador, guitarrista e violonista com experiência em Pop, Rock, MPB, Jazz e Choro. Ministra aulas na Chorus desde 2008 e exerce a função de Coordenador Pedagógico.",
    initials: "TZ",
    photo: imgTadeuZafani,
  },
  {
    id: 5,
    name: "Roberto Passos",
    instrument: "Violão, Viola Caipira, Cavaquinho, Guitarra, Contrabaixo",
    bio: "Estudou Violão Clássico com o Prof. Milton Nunes do Conservatório Carlos Gomes e cursou Música Popular na UNICAMP. Ganhou seu 1º concurso de violão com apenas 8 anos. Leciona cordas na Chorus há mais de 20 anos, além de atuar como guitarrista em bandas e músico de estúdio.",
    initials: "RP",
    photo: imgRobertoPassos,
  },
  {
    id: 6,
    name: "Ieda Cruz",
    instrument: "Canto e Violão",
    bio: "Compositora, cantora e violonista. Formada em Ciências Sociais pela UNICAMP, estudou Canto Popular na Faculdade Souza Lima. Lançou os CDs autorais \"Decote\" e \"Eletroxote e Outros Choques\", apresentando-se em diversas unidades do SESC e casas de shows.",
    initials: "IC",
    photo: imgIedaCruz,
  },
  {
    id: 7,
    name: "Marisa Molchansky (Brisa)",
    instrument: "Canto",
    bio: "Bacharel em Música Popular pela UNICAMP, atua profissionalmente desde 2000 como professora de canto. Lançou o CD autoral \"Brisa\" com distribuição pelo selo Fonomatic. Na Chorus, ministra aulas de canto e integra a equipe de coordenação pedagógica.",
    initials: "MM",
    photo: imgMarisaMolchansky,
  },
  {
    id: 8,
    name: "Bruno Sotil",
    instrument: "Percussão",
    bio: "Percussionista, arranjador e produtor, cursou Percussão MPB-Jazz no Conservatório de Tatuí. Fundou os grupos \"Mandorová\" e \"Casa Caiada\", com quem fez turnês internacionais. Na Chorus, é professor de Percussão e coordena o projeto \"Batuque na Vida\".",
    initials: "BS",
    photo: imgBrunoSotil,
  },
  {
    id: 9,
    name: "Sarah Selles",
    instrument: "Flauta Transversal",
    bio: "Bacharel em Flauta Transversal pela Faculdade Mozarteum de São Paulo. Atua como recitalista, solista e regente, tendo participado como convidada da Orquestra Sinfônica da UNICAMP e Orquestra Sinfônica Municipal de Campinas. Coordena e rege a Orquestra de Flautas da UNICAMP.",
    initials: "SS",
    photo: imgSarahSelles,
  },
  {
    id: 10,
    name: "Gê Ribeiro",
    instrument: "Trompete e Flugelhorn",
    bio: "Bacharel em trompete pela FA.M.O.S.P., fez performance na Alemanha como solista. Participou de gravações com Airto Moreira, atuou na Orquestra da Hebe Camargo e em musicais como \"Pernas pro Ar\" com Claudia Raia. Atuante na cena musical de Campinas.",
    initials: "GR",
    photo: imgGeRibeiro,
  },
  {
    id: 13,
    name: "Aline Cristine Sampaio",
    instrument: "Canto, Musicoterapia",
    bio: "Natural de Tatuí/SP, formada em Musicoterapia pela Faculdade de Artes do Paraná e Bacharelado em Canto Lírico. Possui extenso repertório de MPB e Internacional com grande versatilidade vocal. Atua também como Musicoterapeuta em Educação Especial e Gerontologia.",
    initials: "AS",
    photo: imgAlineSampaio,
  },
  {
    id: 14,
    name: "Joel Pinheiro",
    instrument: "Canto, Vocal Coaching",
    bio: "Iniciou estudos de música aos dez anos. Vencedor de concurso de MPB em Campinas com composição autoral. Vocal Coach e Fonoaudiólogo formado pela USP/Bauru, especializando em voz pelo CECEV. Selecionado em duas edições para o Festival Internacional de Inverno de Campos do Jordão.",
    initials: "JP",
    photo: imgJoelPinheiro,
  },
  {
    id: 15,
    name: "Paulinho de Almeida",
    instrument: "Contrabaixo, Guitarra, Violão, Viola Caipira, Cavaquinho",
    bio: "Multi-instrumentista, compositor e produtor, radicado na Alemanha por 24 anos. Foi Diretor de Projetos no Instituto de Artes KREUZBERGER MUSIKALISCHE AKTION em Berlim. Apresentou-se em 14 países e lançou o CD instrumental \"Trilhas na Cidade\" em 2014.",
    initials: "PA",
    photo: imgPaulinhoAlmeida,
  },
  {
    id: 11,
    name: "Júlia Oliveira",
    instrument: "Musicalização Infantil e Canto",
    bio: "",
    initials: "JO",
  },
  {
    id: 12,
    name: "Roberval Welsi",
    instrument: "Piano, Teclado, Flauta Doce, Órgão",
    bio: "",
    initials: "RW",
  },
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
          {allProfessionals.map((prof) => (
            <Card key={prof.id} className="p-8">
              <div className="text-center mb-6">
                <div className="mb-4 mx-auto h-32 w-32 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                  {prof.photo ? (
                    <img
                      src={prof.photo}
                      alt={prof.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-3xl font-bold text-primary">{prof.initials}</span>
                  )}
                </div>
                <h3 className="font-semibold text-2xl mb-2 font-sans">{prof.name}</h3>
                <div className="flex items-center justify-center gap-2 text-primary mb-4">
                  <Music className="h-5 w-5" />
                  <span className="font-medium font-sans text-sm">{prof.instrument}</span>
                </div>
              </div>
              {prof.bio && (
                <p className="text-muted-foreground text-sm leading-relaxed font-sans text-center">
                  {prof.bio}
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
