import { Award, Heart, Target } from "lucide-react";
import fachadaImg from "@/assets/fachada-chorus.png";
import salaImg from "@/assets/sala-instrumentos.jpg";
import luminariaImg from "@/assets/luminaria-chorus.jpg";
import auditorioImg from "@/assets/auditorio-palco.jpg";

export default function HistorySection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
              A História da <span className="text-primary">Chorus</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-sans">
              A Chorus Escola de Música está sediada em Campinas desde 1993 e tornou-se
              referência na cidade pela seriedade no ensino da música, pela qualificação
              de nossos professores e variedade de oportunidades oferecidas a nossos alunos
              para motivá-los.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 font-sans">Nossa Missão</h3>
                  <p className="text-muted-foreground font-sans">
                    Ensinar música de forma lúdica, com qualidade, ajudando a realizar sonhos.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 font-sans">Nossa Visão</h3>
                  <p className="text-muted-foreground font-sans">
                    Ser referência nacional de ensino musical.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 font-sans">Nosso Compromisso</h3>
                  <p className="text-muted-foreground font-sans">
                    Proporcionar experiências musicais transformadoras para todas as idades.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-lg bg-secondary overflow-hidden">
              <img src={fachadaImg} alt="Fachada da Chorus" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg bg-secondary overflow-hidden mt-8">
              <img src={salaImg} alt="Sala de instrumentos" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg bg-secondary overflow-hidden -mt-8">
              <img src={luminariaImg} alt="Luminária Chorus" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg bg-secondary overflow-hidden">
              <img src={auditorioImg} alt="Auditório" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
