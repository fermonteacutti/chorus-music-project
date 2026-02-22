import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function SocialProjectSection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-background/20">
            <Heart className="h-4 w-4" />
            <span className="text-sm font-medium font-sans">Música para Todos</span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Musicando
          </h2>

          <p className="text-lg text-primary-foreground/90 mb-12 leading-relaxed font-sans">
            Acreditamos que a música é um direito de todos. O Musicando é uma vivência aberta
            ao público externo que não pode pagar, oferecendo oportunidades de aprendizado
            e transformação através da arte musical.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button
                size="lg"
                variant="outline"
                className="bg-background/10 backdrop-blur-md border-background/20 text-primary-foreground hover:bg-background/20 hover:text-primary-foreground"
              >
                Saiba Mais Sobre o Projeto
              </Button>
            </Link>
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
              onClick={() => window.open(`https://wa.me/5519992138954?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre o projeto Musicando e como participar.')}`, '_blank')}
            >
              <Heart className="h-5 w-5 mr-2" />
              Quero Participar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
