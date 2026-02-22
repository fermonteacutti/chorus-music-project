import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Music } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "5 Benefícios da Música para o Desenvolvimento Infantil",
    excerpt: "Descubra como a música pode transformar o desenvolvimento cognitivo e emocional das crianças.",
    category: "Educação Musical",
    date: "15 de Março, 2024",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Como Escolher o Instrumento Ideal para Você",
    excerpt: "Um guia completo para ajudar você a encontrar o instrumento perfeito para iniciar sua jornada musical.",
    category: "Iniciantes",
    date: "10 de Março, 2024",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "A Importância da Prática Regular no Aprendizado Musical",
    excerpt: "Entenda por que a consistência é fundamental para o progresso no estudo de qualquer instrumento.",
    category: "Dicas",
    date: "5 de Março, 2024",
    readTime: "4 min",
  }
];

export default function BlogPreviewSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Últimas do <span className="text-primary">Blog</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            Dicas, novidades e conteúdos sobre música e educação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                <Music className="h-16 w-16 text-primary/50" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground font-sans">{post.readTime}</span>
                </div>

                <h3 className="font-semibold text-xl mb-2 font-sans">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 font-sans">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="font-sans">{post.date}</span>
                  </div>

                  <Link to={`/blog`}>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                      Ler mais
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button size="lg" variant="outline">Ver Todos os Artigos</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
