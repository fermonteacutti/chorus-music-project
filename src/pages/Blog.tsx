import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Music } from "lucide-react";
import { Link } from "react-router-dom";

const staticPosts = [
  { id: "1", title: "5 Benefícios da Música para o Desenvolvimento Infantil", excerpt: "Descubra como a música pode transformar o desenvolvimento cognitivo e emocional das crianças.", category: "Educação Musical", authorName: "Prof. Carlos Mendes", readTime: 5, createdAt: "2024-03-15" },
  { id: "2", title: "Como Escolher o Instrumento Ideal para Você", excerpt: "Um guia completo para ajudar você a encontrar o instrumento perfeito para iniciar sua jornada musical.", category: "Iniciantes", authorName: "Profa. Juliana Costa", readTime: 7, createdAt: "2024-03-10" },
  { id: "3", title: "A Importância da Prática Regular no Aprendizado Musical", excerpt: "Entenda por que a consistência é fundamental para o progresso no estudo de qualquer instrumento.", category: "Dicas", authorName: "Prof. Ricardo Alves", readTime: 4, createdAt: "2024-03-05" },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = [...new Set(staticPosts.map(p => p.category))];
  const filteredPosts = selectedCategory ? staticPosts.filter(p => p.category === selectedCategory) : staticPosts;

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Blog <span className="text-primary">Chorus</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            Dicas, novidades e conteúdos exclusivos sobre música e educação musical
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant={selectedCategory === null ? "default" : "outline"} onClick={() => setSelectedCategory(null)} className="rounded-full">Todas</Button>
            {categories.map((cat) => (
              <Button key={cat} variant={selectedCategory === cat ? "default" : "outline"} onClick={() => setSelectedCategory(cat)} className="rounded-full">{cat}</Button>
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <Music className="h-20 w-20 text-primary/30 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 font-sans">Nenhum post encontrado</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={post.id} className="overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <Music className="h-16 w-16 text-primary/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground font-sans">{post.readTime} min</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2 line-clamp-2 font-sans">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 font-sans">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-sans">{new Date(post.createdAt).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                        Ler mais <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 font-sans">Por {post.authorName}</p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
