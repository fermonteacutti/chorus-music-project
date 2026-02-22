import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PostFormProps {
  post: any;
  categories: any[];
  onSave: (data: any) => void;
  onCancel: () => void;
  saving: boolean;
}

export default function PostForm({ post, categories, onSave, onCancel, saving }: PostFormProps) {
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
            <Label>Conteúdo (Markdown)</Label>
            <Tabs defaultValue="editor" className="mt-2">
              <TabsList>
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="editor">
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={14}
                  required
                  className="font-mono text-sm"
                  placeholder="Escreva seu conteúdo em Markdown..."
                />
              </TabsContent>
              <TabsContent value="preview">
                <div className="min-h-[350px] rounded-md border border-input bg-background p-4 prose prose-sm max-w-none font-sans">
                  {content ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                  ) : (
                    <p className="text-muted-foreground italic">Nada para visualizar ainda...</p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
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
