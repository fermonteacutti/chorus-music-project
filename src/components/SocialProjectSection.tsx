import { Button } from "@/components/ui/button";
import { Music, Users, Mic2, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Music,
    text: "Desenvolver percepção musical, escuta ativa e ritmo em conjunto",
  },
  {
    icon: Users,
    text: "Aprender a se conectar com outros músicos, como em uma banda ou grupo instrumental",
  },
  {
    icon: Star,
    text: "Superar o medo de errar e ganhar confiança ao tocar com outras pessoas",
  },
  {
    icon: Heart,
    text: "Fortalecer vínculos sociais e emocionais através da música",
  },
];

export default function SocialProjectSection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-background/20">
            <Mic2 className="h-4 w-4" />
            <span className="text-sm font-medium font-sans">Curso Bônus Complementar</span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Musicando
          </h2>

          <p className="text-xl text-primary-foreground/95 mb-6 font-medium font-sans">
            A conexão entre Técnica, Emoção e Convivência
          </p>

          <p className="text-lg text-primary-foreground/85 mb-4 leading-relaxed font-sans">
            Incluído gratuitamente na sua matrícula, o Musicando fortalece seu desenvolvimento
            em grupo e prepara para eventos e experiências marcantes.
          </p>

          <p className="text-base text-primary-foreground/80 mb-10 leading-relaxed font-sans max-w-3xl mx-auto">
            Essa vivência coletiva foi criada para integrar o conteúdo das aulas individuais
            à experiências práticas em grupo, desenvolvendo habilidades que vão além da técnica.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-background/10 backdrop-blur-sm border border-background/15"
              >
                <benefit.icon className="h-5 w-5 mt-0.5 shrink-0 text-primary-foreground/90" />
                <span className="text-sm text-primary-foreground/90 font-sans">{benefit.text}</span>
              </div>
            ))}
          </div>

          <p className="text-base text-primary-foreground/80 mb-10 leading-relaxed font-sans max-w-3xl mx-auto">
            Além disso, o Musicando prepara você para os eventos e apresentações da escola,
            como sarais e shows especiais — momentos marcantes de crescimento artístico e pessoal.
            A participação é gratuita e altamente recomendada para que você viva a música
            de forma completa: técnica, emocional e coletiva.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vivencias">
              <Button
                size="lg"
                variant="outline"
                className="bg-background/10 backdrop-blur-md border-background/20 text-primary-foreground hover:bg-background/20 hover:text-primary-foreground"
              >
                Saiba Mais
              </Button>
            </Link>
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
              onClick={() => window.open(`https://wa.me/5519992138954?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre o Musicando.')}`, '_blank')}
            >
              <Music className="h-5 w-5 mr-2" />
              Quero Participar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
