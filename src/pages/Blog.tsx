import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*, categories(name)")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const categories = [...new Set(posts.map((p: any) => p.categories?.name).filter(Boolean))];
  const filteredPosts = selectedCategory
    ? posts.filter((p: any) => p.categories?.name === selectedCategory)
    : posts;

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

        {categories.length > 0 && (
          <div className="mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button variant={selectedCategory === null ? "default" : "outline"} onClick={() => setSelectedCategory(null)} className="rounded-full">Todas</Button>
              {categories.map((cat) => (
                <Button key={cat} variant={selectedCategory === cat ? "default" : "outline"} onClick={() => setSelectedCategory(cat as string)} className="rounded-full">{cat}</Button>
              ))}
            </div>
          </div>
        )}

        {isLoading ? (
          <div className="text-center py-20 text-muted-foreground font-sans">Carregando posts...</div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <Music className="h-20 w-20 text-primary/30 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 font-sans">Nenhum post encontrado</h3>
            <p className="text-muted-foreground font-sans">Em breve teremos novos conteúdos!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post: any) => (
              <Card key={post.id} className="overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <Music className="h-16 w-16 text-primary/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {post.categories?.name && <Badge variant="secondary" className="text-xs">{post.categories.name}</Badge>}
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground font-sans">{post.read_time} min</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2 line-clamp-2 font-sans">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 font-sans">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-sans">{new Date(post.created_at).toLocaleDateString("pt-BR")}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                        Ler mais <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 font-sans">Por {post.author_name}</p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
