import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";

const staticPosts: Record<string, any> = {
  "1": { id: "1", title: "5 Benefícios da Música para o Desenvolvimento Infantil", excerpt: "Descubra como a música pode transformar o desenvolvimento cognitivo e emocional das crianças.", content: "<p>A música tem um papel fundamental no desenvolvimento infantil. Estudos mostram que crianças expostas à educação musical apresentam melhor desempenho em diversas áreas.</p><h2>1. Desenvolvimento Cognitivo</h2><p>A prática musical estimula áreas do cérebro relacionadas à memória, atenção e raciocínio lógico.</p><h2>2. Coordenação Motora</h2><p>Tocar um instrumento exige coordenação entre mãos, olhos e ouvidos, desenvolvendo a motricidade fina.</p><h2>3. Expressão Emocional</h2><p>A música oferece um canal seguro para as crianças expressarem seus sentimentos.</p><h2>4. Socialização</h2><p>Atividades musicais em grupo ensinam cooperação, respeito e trabalho em equipe.</p><h2>5. Disciplina</h2><p>O estudo regular de um instrumento desenvolve hábitos de disciplina e perseverança.</p>", category: { name: "Educação Musical" }, authorName: "Prof. Carlos Mendes", readTime: 5, createdAt: "2024-03-15" },
  "2": { id: "2", title: "Como Escolher o Instrumento Ideal para Você", excerpt: "Um guia completo para ajudar você a encontrar o instrumento perfeito.", content: "<p>Escolher o instrumento certo é uma das decisões mais importantes para quem está começando na música.</p><h2>Considere seu gosto musical</h2><p>Pense nos estilos musicais que mais te atraem.</p><h2>Avalie o investimento</h2><p>Alguns instrumentos exigem mais investimento inicial que outros.</p>", category: { name: "Iniciantes" }, authorName: "Profa. Juliana Costa", readTime: 7, createdAt: "2024-03-10" },
  "3": { id: "3", title: "A Importância da Prática Regular no Aprendizado Musical", excerpt: "Entenda por que a consistência é fundamental.", content: "<p>A prática regular é o segredo para o progresso no estudo musical.</p><h2>Qualidade vs Quantidade</h2><p>30 minutos focados valem mais que 2 horas distraídas.</p>", category: { name: "Dicas" }, authorName: "Prof. Ricardo Alves", readTime: 4, createdAt: "2024-03-05" },
};

export default function BlogPost() {
  const { id } = useParams();
  const post = id ? staticPosts[id] : null;

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

  return (
    <article className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <Link to="/blog">
          <Button variant="ghost" className="mb-8"><ArrowLeft className="h-4 w-4 mr-2" />Voltar para o Blog</Button>
        </Link>

        <header className="mb-12">
          {post.category && <Badge className="mb-4">{post.category.name}</Badge>}
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-8 font-sans">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-sans">
            <div className="flex items-center gap-2"><User className="h-4 w-4" /><span>{post.authorName}</span></div>
            <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>{new Date(post.createdAt).toLocaleDateString('pt-BR')}</span></div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>{post.readTime} min de leitura</span></div>
          </div>
        </header>

        <div className="aspect-video bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg mb-12 flex items-center justify-center">
          <span className="text-6xl text-primary/50">♪</span>
        </div>

        <div className="prose prose-lg max-w-none mb-12 font-sans" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="border-t pt-8">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary text-xl">
              {post.authorName.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
            </div>
            <div>
              <p className="font-semibold text-lg font-sans">{post.authorName}</p>
              <p className="text-sm text-muted-foreground font-sans">Professor da Chorus Escola de Música</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
