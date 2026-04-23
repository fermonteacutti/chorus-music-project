import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogPost() {
  const { id: slug } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*, categories(name)")
        .eq("slug", slug!)
        .eq("published", true)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <p className="text-muted-foreground font-sans">Carregando...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
          <p className="text-muted-foreground mb-8 font-sans">O post que você está procurando não existe ou foi removido.</p>
          <Link to="/blog"><Button><ArrowLeft className="h-4 w-4 mr-2" />Voltar para o Blog</Button></Link>
        </div>
      </div>
    );
  }

  const authorName = post.author_name || "Chorus Escola de Música";
  const authorInitials = authorName.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase();

  return (
    <article className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <Link to="/blog">
          <Button variant="ghost" className="mb-8"><ArrowLeft className="h-4 w-4 mr-2" />Voltar para o Blog</Button>
        </Link>

        <header className="mb-12">
          {post.categories?.name && <Badge className="mb-4">{post.categories.name}</Badge>}
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-8 font-sans">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-sans">
            <div className="flex items-center gap-2"><User className="h-4 w-4" /><span>{authorName}</span></div>
            <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>{new Date(post.created_at).toLocaleDateString("pt-BR")}</span></div>
            {post.read_time && (
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>{post.read_time} min de leitura</span></div>
            )}
          </div>
          {post.cover_image && (
            <div className="mt-8 rounded-lg overflow-hidden">
              <img src={post.cover_image} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none mb-12 font-sans">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content || ""}</ReactMarkdown>
        </div>

        <div className="border-t pt-8">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary text-xl">
              {authorInitials}
            </div>
            <div>
              <p className="font-semibold text-lg font-sans">{authorName}</p>
              <p className="text-sm text-muted-foreground font-sans">Professor da Chorus Escola de Música</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
