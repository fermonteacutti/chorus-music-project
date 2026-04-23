import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export default function BlogPreviewSection() {
  const { data: posts = [] } = useQuery({
    queryKey: ["blog-preview"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*, categories(name)")
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(3);
      if (error) throw error;
      return data;
    },
  });

  if (posts.length === 0) return null;

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
          {posts.map((post: any) => (
            <Card key={post.id} className="overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              {post.cover_image ? (
                <div className="aspect-video overflow-hidden">
                  <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <Music className="h-16 w-16 text-primary/50" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {post.categories?.name && (
                    <Badge variant="secondary" className="text-xs">{post.categories.name}</Badge>
                  )}
                  {post.read_time && (
                    <>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground font-sans">{post.read_time} min</span>
                    </>
                  )}
                </div>
                <h3 className="font-semibold text-xl mb-2 line-clamp-2 font-sans">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 font-sans">{post.excerpt}</p>
                <div className="flex items-center justify-between">
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
