import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { LogOut, Plus, Edit, Trash2, ArrowLeft } from "lucide-react";
import type { Session } from "@supabase/supabase-js";
import logoIcon from "@/assets/logo-chorus-icon.png";

export default function AdminDashboard() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
      if (!session) navigate("/admin/login");
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (!session) navigate("/admin/login");
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const { data: posts = [] } = useQuery({
    queryKey: ["admin-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*, categories(name)")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: !!session,
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await supabase.from("categories").select("*").order("name");
      if (error) throw error;
      return data;
    },
    enabled: !!session,
  });

  const savePost = useMutation({
    mutationFn: async (post: any) => {
      const slug = post.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      const payload = { ...post, slug };

      if (editingPost?.id) {
        const { error } = await supabase.from("posts").update(payload).eq("id", editingPost.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("posts").insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
      setShowForm(false);
      setEditingPost(null);
      toast({ title: editingPost?.id ? "Post atualizado!" : "Post criado!" });
    },
    onError: (err: any) => {
      toast({ title: "Erro", description: err.message, variant: "destructive" });
    },
  });

  const deletePost = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("posts").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
      toast({ title: "Post excluído!" });
    },
  });

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Carregando...</div>;
  if (!session) return null;

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="Chorus" className="h-8 w-8" />
            <h1 className="font-serif text-xl font-bold">Painel Admin</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4 mr-1" /> Site
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10">
              <LogOut className="h-4 w-4 mr-1" /> Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {!showForm ? (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl font-bold">Posts do Blog</h2>
              <Button onClick={() => { setEditingPost(null); setShowForm(true); }}>
                <Plus className="h-4 w-4 mr-2" /> Novo Post
              </Button>
            </div>

            <div className="space-y-4">
              {posts.map((post: any) => (
                <Card key={post.id} className="p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold font-sans">{post.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${post.published ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"}`}>
                        {post.published ? "Publicado" : "Rascunho"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-sans">
                      {post.categories?.name} · {post.author_name} · {new Date(post.created_at).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" onClick={() => { setEditingPost(post); setShowForm(true); }}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => { if (confirm("Excluir este post?")) deletePost.mutate(post.id); }}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </Card>
              ))}

              {posts.length === 0 && (
                <div className="text-center py-12 text-muted-foreground font-sans">
                  Nenhum post ainda. Crie o primeiro!
                </div>
              )}
            </div>
          </>
        ) : (
          <PostForm
            post={editingPost}
            categories={categories}
            onSave={(data: any) => savePost.mutate(data)}
            onCancel={() => { setShowForm(false); setEditingPost(null); }}
            saving={savePost.isPending}
          />
        )}
      </div>
    </div>
  );
}

function PostForm({ post, categories, onSave, onCancel, saving }: any) {
  const [title, setTitle] = useState(post?.title || "");
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [content, setContent] = useState(post?.content || "");
  const [categoryId, setCategoryId] = useState(post?.category_id || "");
  const [authorName, setAuthorName] = useState(post?.author_name || "");
  const [readTime, setReadTime] = useState(post?.read_time || 5);
  const [published, setPublished] = useState(post?.published || false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      title,
      excerpt,
      content,
      category_id: categoryId || null,
      author_name: authorName,
      read_time: readTime,
      published,
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-serif text-2xl font-bold">{post?.id ? "Editar Post" : "Novo Post"}</h2>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Título</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="author">Autor</Label>
              <Input id="author" value={authorName} onChange={(e) => setAuthorName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="category">Categoria</Label>
              <select
                id="category"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">Sem categoria</option>
                {categories.map((cat: any) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="readTime">Tempo de leitura (min)</Label>
              <Input id="readTime" type="number" value={readTime} onChange={(e) => setReadTime(Number(e.target.value))} min={1} />
            </div>
          </div>
          <div>
            <Label htmlFor="excerpt">Resumo</Label>
            <Textarea id="excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2} required />
          </div>
          <div>
            <Label htmlFor="content">Conteúdo (Markdown)</Label>
            <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={12} required className="font-mono text-sm" />
          </div>
          <div className="flex items-center gap-2">
            <Switch checked={published} onCheckedChange={setPublished} />
            <Label>Publicado</Label>
          </div>
          <div className="flex gap-3 pt-4">
            <Button type="submit" disabled={saving}>{saving ? "Salvando..." : "Salvar"}</Button>
            <Button type="button" variant="outline" onClick={onCancel}>Cancelar</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
