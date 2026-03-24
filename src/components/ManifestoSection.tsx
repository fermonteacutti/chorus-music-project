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
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-sans">
              A música é linguagem universal — mas aqui, ela é também caminho pessoal.
              Na Chorus, cada voz importa. Cada nota encontra espaço. Cada aluno é mais
              do que aluno: é artista em formação. Acreditamos que ensinar música é ensinar
              a escutar — a si, ao outro, ao mundo. Por isso, construímos um ambiente onde
              afeto e excelência caminham juntos.
            </p>
          </div>

          <Quote className="absolute -bottom-4 -right-4 h-12 w-12 text-primary/20 rotate-180" />
        </div>
      </div>
    </section>
  );
}
