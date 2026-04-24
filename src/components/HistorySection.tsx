import { Award, Heart, Target, Music } from "lucide-react";
import fachadaImg from "@/assets/fachada-chorus.webp";
import salaImg from "@/assets/sala-instrumentos.webp";
import luminariaImg from "@/assets/luminaria-chorus.webp";
import auditorioImg from "@/assets/auditorio-palco.webp";

export default function HistorySection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
              A História da <span className="text-primary">Chorus</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-sans">
              Aqui você encontra um espaço inspirador, seguro e personalizado para evoluir na música,
              respeitando seu ritmo, sua voz e seu momento.
            </p>

            <div className="mb-8">
              <h3 className="font-semibold text-xl mb-3 font-sans text-foreground">Nossa Essência</h3>
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">
                Ensinar música com qualidade, acolhimento e paixão, promovendo uma experiência
                acessível, significativa e transformadora — onde a música se torna ponte para o
                desenvolvimento pessoal, o bem-estar e a conexão entre as pessoas.
              </p>

              <h3 className="font-semibold text-xl mb-4 font-sans text-foreground">Nossos Valores</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 font-sans">Escuta que transforma</h4>
                    <p className="text-muted-foreground font-sans">
                      Ouvimos com presença para compreender, acolher e agir.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 font-sans">Caminho com propósito</h4>
                    <p className="text-muted-foreground font-sans">
                      Cada jornada musical tem um sentido, não só um destino.
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
                    <h4 className="font-semibold text-lg mb-1 font-sans">Excelência com afeto</h4>
                    <p className="text-muted-foreground font-sans">
                      Buscamos qualidade com cuidado e técnica com calor humano.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Music className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 font-sans">Alegria que pulsa</h4>
                    <p className="text-muted-foreground font-sans">
                      A música como fonte de prazer, liberdade e celebração.
                    </p>
                  </div>
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
