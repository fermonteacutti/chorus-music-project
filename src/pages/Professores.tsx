import { Card } from "@/components/ui/card";
import { Music } from "lucide-react";

import imgRosa from "@/assets/professores/rosa.webp";
import imgCecilia from "@/assets/professores/cecilia-2025.webp";
import imgMarilene from "@/assets/professores/marilene.webp";
import imgTadeu from "@/assets/professores/tadeu-1.webp";
import imgRoberval from "@/assets/professores/roberval.webp";
import imgIeda from "@/assets/professores/ieda.webp";
import imgMarisa from "@/assets/professores/marisa.webp";
import imgPaulinho from "@/assets/professores/paulinho.webp";
import imgAndre from "@/assets/professores/andre.webp";
import imgBety from "@/assets/professores/bety-2025.webp";
import imgBito from "@/assets/professores/bito-1.webp";
import imgFilipe from "@/assets/professores/filipe-2025.webp";
import imgGabriela from "@/assets/professores/gabriela.webp";
import imgGiliane from "@/assets/professores/giliane.webp";
import imgKaique from "@/assets/professores/kaique.webp";
import imgKaue from "@/assets/professores/kaue.webp";
import imgMarcelo from "@/assets/professores/marcelo-valesi.webp";
import imgMarcio from "@/assets/professores/marcio-2.webp";
import imgMarco from "@/assets/professores/marco-aurelio-1.webp";
import imgMurilo from "@/assets/professores/murilo.webp";
import imgThalita from "@/assets/professores/thalita.webp";
import imgYasmim from "@/assets/professores/yasmim-1.webp";

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
    name: "Rosa Gomes",
    instrument: "Piano • Teclado • Flauta Doce • Órgão • Sopro Novo Yamaha",
    bio: "Formada em Piano pelo Conservatório Musical Campinas e em Licenciatura e Educação Musical pela UFSCar. Fundou a Chorus Music em 1993, onde atua como diretora e professora. Em 1995, desenvolveu junto com a professora Suzel Mega de Oliveira o Método para Teclado \"Musik\", adotado por diversas escolas no Brasil. Divide seu tempo entre aulas, direção da escola, apresentações e monitoria do Sopro Novo Yamaha.",
    initials: "RG",
    photo: imgRosa,
  },
  {
    id: 2,
    name: "Tadeu Zafani",
    instrument: "Violão • Guitarra • Prática de Banda",
    bio: "Bacharel em Guitarra Elétrica pelo curso de Música Popular da UNICAMP e mestre em Educação Musical. Compositor, arranjador e guitarrista com experiência em Pop, Rock, MPB, Jazz e Choro. Integra o corpo docente da Chorus desde 2008, onde também exerce a função de coordenador pedagógico. Lançou seu primeiro álbum autoral, Entrelaços.",
    initials: "TZ",
    photo: imgTadeu,
  },
  {
    id: 3,
    name: "Bety Will",
    instrument: "Piano • Violino • Flauta Doce • Pedagogia Musical",
    bio: "Professora com sólida formação e ampla experiência artística e educacional. Iniciou seus estudos aos 6 anos no Conservatório Musical de Jundiaí e formou-se em piano pelo Conservatório Carlos Gomes. Graduada em Pedagogia, com especializações em Psicopedagogia e Neuropsicopedagogia. Premiada com a Medalha Haydn, atua na Chorus há mais de 12 anos.",
    initials: "BW",
    photo: imgBety,
  },
  {
    id: 4,
    name: "Cecília Cardoso",
    instrument: "Piano • Teclado • Flauta Doce • Órgão",
    bio: "Iniciou seus estudos de música aos 7 anos, formando-se no Curso Profissionalizante e Técnico Musical do Conservatório Musical Carlos Gomes. Fez curso avançado de Piano erudito com a professora Olga Levermann e em Teoria e Harmonia com a professora Maria Penalva da UNICAMP. Formou-se em Órgão Eletrônico pelo Curso Yamaha.",
    initials: "CC",
    photo: imgCecilia,
  },
  {
    id: 5,
    name: "Marilene R. Fortes",
    instrument: "Acordeon • Piano • Teclado • Órgão",
    bio: "Formou-se Pianista e Harmonicista (Acordeon) no Conservatório Edy Meirelles. Fez curso de Harmonia Tradicional e Funcional pela UNICAMP e Aperfeiçoamento com Maestro Hermes Coelho. Atuou como solista de Acordeon em diversas peças e na Orquestra Filarmônica de Valinhos.",
    initials: "MF",
    photo: imgMarilene,
  },
  {
    id: 6,
    name: "Roberval Welsi",
    instrument: "Piano • Teclado • Flauta Doce • Órgão",
    bio: "Formado em Piano pelo Conservatório Musical Campinas e em Licenciatura e Educação Musical pela UFSCar. Atua como Pianista e Organista em eventos e corais de igrejas em Campinas. É também professor de Música no Ensino Infantil e Fundamental. Na Chorus, é professor de Piano, Teclado e Flauta Doce desde 2001.",
    initials: "RW",
    photo: imgRoberval,
  },
  {
    id: 7,
    name: "Paulinho de Almeida",
    instrument: "Prática de Banda • Violão • Guitarra • Contrabaixo • Cavaquinho • Viola Caipira",
    bio: "Músico, compositor, produtor e educador. Construiu parte de sua carreira na Alemanha, onde viveu por mais de duas décadas, apresentando-se em países da Europa e atuando como Diretor de Projetos no centro cultural Kreuzberger Musikalische Aktion, em Berlim. Lançou o CD instrumental \"Trilhas na Cidade\" com composições autorais.",
    initials: "PA",
    photo: imgPaulinho,
  },
  {
    id: 8,
    name: "Ieda Cruz",
    instrument: "Canto",
    bio: "Cantora, compositora e professora com mais de 20 anos de atuação. Possui dois álbuns autorais lançados — \"Decote\" (2011) e \"Eletroxote e Outros Choques\" (2019). Formada em Ciências Sociais pela UNICAMP, estudou canto popular com ênfase em composição e arranjo pela Faculdade Souza Lima (Berklee – São Paulo).",
    initials: "IC",
    photo: imgIeda,
  },
  {
    id: 9,
    name: "Gabriela Bueno",
    instrument: "Canto Lírico",
    bio: "Cantora lírica formada em Licenciatura em Educação Musical pela UFSCar, com formação complementar em canto lírico pela EMESP Tom Jobim. Mezzo-soprano premiada em importantes concursos nacionais. Participou de diversas óperas e produções musicais no Brasil e na Alemanha, além de integrar o elenco do musical O Fantasma da Ópera em São Paulo.",
    initials: "GB",
    photo: imgGabriela,
  },
  {
    id: 10,
    name: "Yasmin Guidi",
    instrument: "Canto",
    bio: "Cantora e professora de canto formada em Música pela UNICAMP. Desenvolve uma abordagem versátil que transita entre o canto popular e o erudito, com foco no uso consciente e saudável da voz. Em suas aulas, prioriza o desenvolvimento individual de cada aluno, explorando recursos técnicos como belting e twang.",
    initials: "YG",
    photo: imgYasmim,
  },
  {
    id: 11,
    name: "Kaique Ribeiro",
    instrument: "Canto • Violão • Guitarra • Musicalização Infantil",
    bio: "Cantor, multi-instrumentista, produtor musical e educador. Integrou bandas autorais de rock e em 2016 atuou como instrutor de bandas, liderando uma House Band que se apresentou no Lollapalooza Brasil e na Expo Music em São Paulo. Atualmente é vocalista da banda Hasta Martes.",
    initials: "KR",
    photo: imgKaique,
  },
  {
    id: 12,
    name: "Filipe Gonzaga",
    instrument: "Violão • Guitarra • Ukulele",
    bio: "Multi-instrumentista, produtor musical e professor com mais de 10 anos de experiência no ensino de música. Natural do Ceará, formou-se no Conservatório Alberto Nepomuceno e é graduado em Música com ênfase em Violão Popular pela UNICAMP. Desenvolve pesquisas voltadas ao violão brasileiro.",
    initials: "FG",
    photo: imgFilipe,
  },
  {
    id: 13,
    name: "Marcelo Valezi Fernandes",
    instrument: "Saxofone • Flauta • Clarinete • Composição • Arranjo",
    bio: "Saxofonista, flautista, clarinetista, compositor, arranjador e diretor musical. Formado em Composição e Música Popular pela UNICAMP, residiu três anos na Áustria onde estudou na Universität für Musik und darstellende Kunst Graz. Premiado em concurso internacional de jazz na Romênia.",
    initials: "MV",
    photo: imgMarcelo,
  },
  {
    id: 14,
    name: "Marco Aurélio Martins",
    instrument: "Trompete • Prática de Banda",
    bio: "Trompetista, educador musical, arranjador e compositor com atuação na música instrumental brasileira. Formado em MPB/Jazz pelo Conservatório de Tatuí. Participou de apresentações com a Big Band da EMESP na Juilliard School em Nova York e atuou em orquestras de cruzeiros.",
    initials: "MA",
    photo: imgMarco,
  },
  {
    id: 15,
    name: "André Oliveira",
    instrument: "Bateria",
    bio: "Formado em Música Popular pela UNICAMP, com passagem pela University of Cincinnati em Jazz Studies. Estudou com grandes bateristas como Edu Ribeiro, Celso de Almeida e Bob Wyatt. Gravou com Thomaz Souza, Josani Pimenta e com o grupo de samba Telecoteco. Participa da cena musical de Campinas e região.",
    initials: "AO",
    photo: imgAndre,
  },
  {
    id: 16,
    name: "Marcio Amaro",
    instrument: "Bateria",
    bio: "Baterista e educador musical com ampla experiência na cena musical brasileira e internacional. Atuou em festivais e programas de TV no Brasil e no exterior, dividindo palco com grandes artistas. Premiado em concursos internacionais de bateria e reconhecido por sua atuação como educador e produtor cultural.",
    initials: "MA",
    photo: imgMarcio,
  },
  {
    id: 17,
    name: "Vitor Coelho (Bito)",
    instrument: "Bateria • Prática Rítmica",
    bio: "Baterista e educador musical com trajetória voltada à prática rítmica e à música brasileira. Natural de Campinas, aprofundou seus estudos no espaço cultural Tugudum e cursou MPB & Jazz pelo Conservatório de Tatuí. Participou de festivais como o Festival de Música de Ourinhos e Mostra Jazz Campinas.",
    initials: "VC",
    photo: imgBito,
  },
  {
    id: 18,
    name: "Murilo dos Santos Cela",
    instrument: "Piano • Teclado",
    bio: "Pianista e tecladista com atuação na MPB e no jazz, com experiência em gravações e projetos musicais. Formado em Produção Cultural pelo SESC, desenvolve um trabalho que integra teoria e prática, valorizando a construção da musicalidade e da identidade no instrumento.",
    initials: "MC",
    photo: imgMurilo,
  },
  {
    id: 19,
    name: "Thalita Samara",
    instrument: "Musicalização Infantil • Canto",
    bio: "Licenciada em Música pela UFES, especialista em Práticas Pedagógicas pelo IFES e mestra em Educação Musical pela UNICAMP. Cantora há mais de 15 anos, com participação em bandas e corais. Trabalha com musicalização infantil e canto, promovendo experiências musicais que contribuem para o desenvolvimento da criança desde os primeiros anos.",
    initials: "TS",
    photo: imgThalita,
  },
  {
    id: 20,
    name: "Giliane Souza",
    instrument: "Musicalização Infantil • Piano Infantil • Musicoterapia",
    bio: "Bacharel em Música pela UNICAMP, com pós-graduação em Musicoterapia. Iniciou seus estudos musicais aos 4 anos e possui especializações voltadas ao ensino de crianças neurodivergentes (TEA, T21 e TDAH). Atua como voluntária em projetos sociais levando musicalização a creches públicas e ONGs de Campinas.",
    initials: "GS",
    photo: imgGiliane,
  },
  {
    id: 21,
    name: "Marisa",
    instrument: "",
    bio: "",
    initials: "MS",
    photo: imgMarisa,
  },
  {
    id: 22,
    name: "Kauê",
    instrument: "",
    bio: "",
    initials: "KA",
    photo: imgKaue,
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
            <Card
              key={prof.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Foto com contorno criativo */}
              <div className="relative bg-gradient-to-br from-primary/5 to-primary/20 p-6 flex flex-col items-center">
                <div className="relative">
                  {/* Círculo decorativo externo */}
                  <div className="absolute inset-0 rounded-full border-4 border-primary/20 scale-110" />
                  {/* Círculo decorativo com traço */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 scale-125 animate-[spin_20s_linear_infinite]" />
                  {/* Foto */}
                  <div className="relative h-36 w-36 rounded-full overflow-hidden ring-4 ring-primary/30 ring-offset-2 ring-offset-background">
                    {prof.photo ? (
                      <img
                        src={prof.photo}
                        alt={prof.name}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full w-full bg-primary/10 flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary">{prof.initials}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <h3 className="font-semibold text-xl font-sans text-foreground">{prof.name}</h3>
                  {prof.instrument && (
                    <div className="flex items-center justify-center gap-1.5 mt-2 flex-wrap">
                      <Music className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="font-medium font-sans text-sm text-primary">{prof.instrument}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bio */}
              {prof.bio && (
                <div className="px-6 py-5">
                  <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                    {prof.bio}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
