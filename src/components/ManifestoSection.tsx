import { Quote } from "lucide-react";

export default function ManifestoSection() {
  return (
    <section className="py-20 md:py-32 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Nosso <span className="text-primary">Manifesto</span>
          </h2>
        </div>

        <div className="relative">
          <Quote className="absolute -top-4 -left-4 h-12 w-12 text-primary/20" />

          <div className="bg-background rounded-xl p-8 md:p-12 shadow-sm border border-primary/10">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-sans">
              Acreditamos que a música transforma vidas. Ela desenvolve a sensibilidade,
              a disciplina, a criatividade e a capacidade de expressão. Mais do que ensinar
              técnicas, cultivamos a paixão pela arte musical.
            </p>

            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-sans">
              Na Chorus, cada aluno é único. Respeitamos os diferentes ritmos de aprendizado
              e celebramos as conquistas de cada um. Nosso compromisso é criar um ambiente
              acolhedor onde todos possam descobrir e desenvolver seu potencial musical.
            </p>

            <p className="text-lg md:text-xl text-foreground leading-relaxed font-sans">
              A música não conhece barreiras. Por isso, trabalhamos para que ela seja
              acessível a todos, independente de idade, condição social ou experiência prévia.
              Juntos, construímos uma comunidade onde a música é o elo que nos une.
            </p>
          </div>

          <Quote className="absolute -bottom-4 -right-4 h-12 w-12 text-primary/20 rotate-180" />
        </div>
      </div>
    </section>
  );
}
