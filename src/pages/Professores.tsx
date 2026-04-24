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
  instruments: string[];
  bio: string;
  initials: string;
  photo?: string;
  photoPosition?: string;
}

const allProfessionals: Professional[] = [
  {
    id: 1,
    name: "Rosa Gomes",
    instruments: ["Piano", "Teclado", "Flauta Doce", "Órgão", "Sopro Novo Yamaha"],
    bio: "Fundadora da Chorus Music em 1993, formada em Piano pelo Conservatório Musical Campinas e em Licenciatura em Educação Musical pela UFSCar. Em 1995, desenvolveu o Método para Teclado \"Musik\", adotado por diversas escolas no Brasil. Divide seu tempo entre aulas, direção da escola, apresentações e monitoria do Sopro Novo Yamaha.",
    initials: "RG",
    photo: imgRosa,
    photoPosition: "object-center",
  },
  {
    id: 2,
    name: "Tadeu Zafani",
    instruments: ["Violão", "Guitarra", "Prática de Banda"],
    bio: "Bacharel em Guitarra Elétrica pela UNICAMP e mestre em Educação Musical. Compositor, arranjador e guitarrista com experiência em Pop, Rock, MPB, Jazz e Choro. Integra o corpo docente da Chorus desde 2008, onde também exerce a função de coordenador pedagógico. Lançou seu álbum autoral Entrelaços.",
    initials: "TZ",
    photo: imgTadeu,
    photoPosition: "object-[center_5%]",
  },
  {
    id: 3,
    name: "Bety Will",
    instruments: ["Piano", "Violino", "Flauta Doce", "Pedagogia Musical"],
    bio: "Iniciou seus estudos aos 6 anos no Conservatório Musical de Jundiaí e formou-se em piano pelo Conservatório Carlos Gomes. Graduada em Pedagogia, com especializações em Psicopedagogia e Neuropsicopedagogia. Premiada com a Medalha Haydn, atua na Chorus há mais de 12 anos.",
    initials: "BW",
    photo: imgBety,
    photoPosition: "object-[center_20%]",
  },
  {
    id: 4,
    name: "Cecília Cardoso",
    instruments: ["Piano", "Teclado", "Flauta Doce", "Órgão"],
    bio: "Iniciou seus estudos aos 7 anos, formando-se no Conservatório Musical Carlos Gomes. Fez curso avançado de Piano erudito com a professora Olga Levermann e Teoria e Harmonia com a professora Maria Penalva da UNICAMP. Formou-se em Órgão Eletrônico pelo Curso Yamaha.",
    initials: "CC",
    photo: imgCecilia,
    photoPosition: "object-[center_20%]",
  },
  {
    id: 5,
    name: "Marilene R. Fortes",
    instruments: ["Acordeon", "Piano", "Teclado", "Órgão"],
    bio: "Formou-se Pianista e Harmonicista no Conservatório Edy Meirelles. Fez curso de Harmonia Tradicional e Funcional pela UNICAMP e Aperfeiçoamento com Maestro Hermes Coelho. Atuou como solista de Acordeon em diversas peças e na Orquestra Filarmônica de Valinhos.",
    initials: "MF",
    photo: imgMarilene,
    photoPosition: "object-[center_20%]",
  },
  {
    id: 6,
    name: "Roberval Welsi",
    instruments: ["Piano", "Teclado", "Flauta Doce", "Órgão"],
    bio: "Formado em Piano pelo Conservatório Musical Campinas e em Licenciatura em Educação Musical pela UFSCar. Atua como Pianista e Organista em eventos e corais de igrejas em Campinas. Na Chorus, é professor de Piano, Teclado e Flauta Doce desde 2001.",
    initials: "RW",
    photo: imgRoberval,
    photoPosition: "object-[center_65%]",
  },
  {
    id: 7,
    name: "Paulinho de Almeida",
    instruments: ["Prática de Banda", "Violão", "Guitarra", "Contrabaixo", "Cavaquinho", "Viola Caipira"],
    bio: "Músico, compositor, produtor e educador. Viveu por mais de duas décadas na Alemanha, atuando como Diretor de Projetos no centro cultural Kreuzberger Musikalische Aktion, em Berlim. Lançou o CD instrumental \"Trilhas na Cidade\" com composições autorais.",
    initials: "PA",
    photo: imgPaulinho,
    photoPosition: "object-[center_55%]",
  },
  {
    id: 8,
    name: "Ieda Cruz",
    instruments: ["Canto"],
    bio: "Cantora, compositora e professora com mais de 20 anos de atuação. Possui dois álbuns autorais — \"Decote\" (2011) e \"Eletroxote e Outros Choques\" (2019). Formada em Ciências Sociais pela UNICAMP, estudou canto popular com ênfase em composição e arranjo pela Faculdade Souza Lima (Berklee – SP).",
    initials: "IC",
    photo: imgIeda,
    photoPosition: "object-[center_20%]",
  },
  {
    id: 9,
    name: "Gabriela Bueno",
    instruments: ["Canto Lírico"],
    bio: "Cantora lírica formada em Licenciatura em Educação Musical pela UFSCar, com formação em canto lírico pela EMESP Tom Jobim. Mezzo-soprano premiada em concursos nacionais. Participou de óperas e produções musicais no Brasil e na Alemanha, além de integrar o elenco de O Fantasma da Ópera em São Paulo.",
    initials: "GB",
    photo: imgGabriela,
    photoPosition: "object-[center_20%]",
  },
  {
    id: 10,
    name: "Yasmin Guidi",
    instruments: ["Canto"],
    bio: "Cantora e professora de canto formada em Música pela UNICAMP. Desenvolve uma abordagem versátil entre o canto popular e o erudito, com foco no uso consciente e saudável da voz. Explora recursos técnicos como belting e twang, priorizando o desenvolvimento individual de cada aluno.",
    initials: "YG",
    photo: imgYasmim,
    photoPosition: "object-[center_20%]",
  },
  {
    id: 11,
    name: "Kaique Ribeiro",
    instruments: ["Canto", "Violão", "Guitarra", "Musicalização Infantil"],
    bio: "Cantor, multi-instrumentista, produtor musical e educador. Em 2016, liderou uma House Band que se apresentou no Lollapalooza Brasil e na Expo Music em São Paulo. Atualmente é vocalista da banda Hasta Martes e desenvolve projeto de canto com a terceira idade.",
    initials: "KR",
    photo: imgKaique,
    photoPosition: "object-[center_20%]",
  },
  {
    id: 12,
    name: "Filipe Gonzaga",
    instruments: ["Violão", "Guitarra", "Ukulele"],
    bio: "Multi-instrumentista, produtor musical e professor com mais de 10 anos de experiência. Natural do Ceará, formou-se no Conservatório Alberto Nepomuceno e é graduado em Música com ênfase em Violão Popular pela UNICAMP. Desenvolve pesquisas voltadas ao violão brasileiro.",
    initials: "FG",
    photo: imgFilipe,
    photoPosition: "object-[center_20%]",
  },
  {
    id: 13,
    name: "Marcelo Valezi Fernandes",
    instruments: ["Saxofone", "Flauta", "Clarinete", "Composição", "Arranjo"],
    bio: "Saxofonista, flautista, clarinetista, compositor e diretor musical. Formado em Composição e Música Popular pela UNICAMP, residiu três anos na Áustria estudando na Universität für Musik und darstellende Kunst Graz. Premiado em concurso internacional de jazz na Romênia.",
    initials: "MV",
    photo: imgMarcelo,
    photoPosition: "object-[center_20%]",
  },
  {
    id: 14,
    name: "Marco Aurélio Martins",
    instruments: ["Trompete", "Prática de Banda"],
    bio: "Trompetista, educador musical, arranjador e compositor. Formado em MPB/Jazz pelo Conservatório de Tatuí. Participou de apresentações com a Big Band da EMESP na Juilliard School em Nova York e atuou em orquestras de cruzeiros internacionais.",
    initials: "MA",
    photo: imgMarco,
    photoPosition: "object-[center_20%]",
  },
  {
    id: 15,
    name: "André Oliveira",
    instruments: ["Bateria"],
    bio: "Formado em Música Popular pela UNICAMP, com passagem pela University of Cincinnati em Jazz Studies. Estudou com grandes bateristas como Edu Ribeiro, Celso de Almeida e Bob Wyatt. Gravou com Thomaz Souza, Josani Pimenta e com o grupo de samba Telecoteco.",
    initials: "AO",
    photo: imgAndre,
    photoPosition: "object-[center_20%]",
  },
  {
    id: 16,
    name: "Marcio Amaro",
    instruments: ["Bateria"],
    bio: "Baterista e educador musical com ampla experiência na cena musical brasileira e internacional. Atuou em festivais e programas de TV no Brasil e no exterior. Premiado em concursos internacionais de bateria e reconhecido por sua atuação como educador e produtor cultural.",
    initials: "MA2",
    photo: imgMarcio,
    photoPosition: "object-[center_20%]",
  },
  {
    id: 17,
    name: "Vitor Coelho (Bito)",
    instruments: ["Bateria", "Prática Rítmica"],
    bio: "Baterista e educador musical com trajetória voltada à prática rítmica e à música brasileira. Natural de Campinas, cursou MPB & Jazz pelo Conservatório de Tatuí. Participou de festivais como o Festival de Música de Ourinhos e Mostra Jazz Campinas.",
    initials: "VC",
    photo: imgBito,
    photoPosition: "object-[center_20%]",
  },
  {
    id: 18,
    name: "Murilo dos Santos Cela",
    instruments: ["Piano", "Teclado"],
    bio: "Pianista e tecladista com atuação na MPB e no jazz, com experiência em gravações e projetos musicais. Formado em Produção Cultural pelo SESC, desenvolve um trabalho que integra teoria e prática, valorizando a construção da musicalidade e da identidade no instrumento.",
    initials: "MC",
    photo: imgMurilo,
    photoPosition: "object-[center_40%]",
  },
  {
    id: 19,
    name: "Thalita Samara",
    instruments: ["Musicalização Infantil", "Canto"],
    bio: "Licenciada em Música pela UFES, especialista em Práticas Pedagógicas pelo IFES e mestra em Educação Musical pela UNICAMP. Cantora há mais de 15 anos, com participação em bandas e corais. Promove experiências musicais que contribuem para o desenvolvimento da criança desde os primeiros anos.",
    initials: "TS",
    photo: imgThalita,
    photoPosition: "object-[center_25%]",
  },
  {
    id: 20,
    name: "Giliane Souza",
    instruments: ["Musicalização Infantil", "Piano Infantil", "Musicoterapia"],
    bio: "Bacharel em Música pela UNICAMP, com pós-graduação em Musicoterapia. Especializada no ensino de crianças neurodivergentes (TEA, T21 e TDAH). Atua como voluntária em projetos sociais levando musicalização a creches públicas e ONGs de Campinas.",
    initials: "GS",
    photo: imgGiliane,
    photoPosition: "object-[center_20%]",
  },
  {
    id: 21,
    name: "Marisa",
    instruments: [],
    bio: "",
    initials: "MS",
    photo: imgMarisa,
    photoPosition: "object-[center_20%]",
  },
  {
    id: 22,
    name: "Kauê",
    instruments: [],
    bio: "",
    initials: "KA",
    photo: imgKaue,
    photoPosition: "object-[center_20%]",
  },
];

export default function Professores() {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Nossa <span className="text-primary">Equipe</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Conheça os profissionais dedicados que tornam a Chorus uma referência em ensino musical
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProfessionals.map((prof) => (
            <div
              key={prof.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Foto retangular 4:3 */}
              <div className="relative overflow-hidden bg-primary/5" style={{ aspectRatio: "4/3" }}>
                {prof.photo ? (
                  <img
                    src={prof.photo}
                    alt={prof.name}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${prof.photoPosition || "object-[center_20%]"}`}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20">
                    <span className="text-5xl font-bold text-primary/40 font-serif">{prof.initials}</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Conteúdo */}
              <div className="p-4 pt-3">
                <h3 className="font-semibold text-base text-foreground font-sans mb-2.5 leading-tight">
                  {prof.name}
                </h3>

                {prof.instruments.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {prof.instruments.map((inst) => (
                      <span
                        key={inst}
                        className="inline-block px-2.5 py-0.5 bg-primary/10 text-primary border border-primary/20 text-xs font-medium rounded-full font-sans"
                      >
                        {inst}
                      </span>
                    ))}
                  </div>
                )}

                {prof.bio && (
                  <p className="text-muted-foreground text-xs leading-relaxed font-sans">
                    {prof.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
