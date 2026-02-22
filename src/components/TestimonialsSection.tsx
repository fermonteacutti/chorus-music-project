import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Mãe de aluno",
    text: "Meu filho começou há 6 meses e já vejo uma evolução incrível! Os professores são atenciosos e realmente se importam com o desenvolvimento de cada aluno.",
    rating: 5,
    initials: "MS"
  },
  {
    id: 2,
    name: "João Santos",
    role: "Aluno de Violão",
    text: "A metodologia da Chorus é excelente. Aprendi mais em 1 ano aqui do que em 3 anos em outra escola. Recomendo muito!",
    rating: 5,
    initials: "JS"
  },
  {
    id: 3,
    name: "Ana Paula",
    role: "Aluna de Piano",
    text: "Sempre quis tocar piano e finalmente realizei esse sonho! O ambiente é acolhedor e as aulas são dinâmicas. Estou muito feliz!",
    rating: 5,
    initials: "AP"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
            O Que Nossos Alunos <span className="text-primary">Dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            Histórias reais de transformação através da música
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="h-10 w-10 text-primary/20 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground italic mb-6 leading-relaxed font-sans">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold font-sans">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground font-sans">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-primary" : "w-2 bg-secondary"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
