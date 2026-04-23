import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { slugify } from "@/lib/slugify";
import { convertToWebp } from "@/lib/convertToWebp";
import { ArrowLeft, Save, Eye, Upload, X, CalendarIcon, Clock, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import MDEditor from "@uiw/react-md-editor";

interface Category { id: string; name: string; }
interface TagItem { id: string; name: string; slug: string; }

const AdminPostEditor = () => {
  const { id } = useParams();
  const isEditing = id && id !== "novo";
  const navigate = useNavigate();
  const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [status, setStatus] = useState("draft");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [allTags, setAllTags] = useState<TagItem[]>([]);
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);
  const [scheduledAt, setScheduledAt] = useState<Date | undefined>(undefined);
  const [scheduledTime, setScheduledTime] = useState("09:00");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [slugManual, setSlugManual] = useState(false);
  const [newTagName, setNewTagName] = useState("");

  useEffect(() => { fetchCategories(); fetchTags(); if (isEditing) fetchPost(); }, [id]);
  useEffect(() => { if (!slugManual && !isEditing) setSlug(slugify(title)); }, [title, slugManual, isEditing]);

  const fetchCategories = async () => {
    const { data } = await supabase.from("categories").select("id, name").order("name");
    setCategories(data || []);
  };

  const fetchTags = async () => {
    const { data } = await supabase.from("tags").select("id, name, slug").order("name");
    setAllTags(data || []);
  };

  const fetchPost = async () => {
    const { data: post } = await supabase.from("posts").select("*").eq("id", id!).single();
    if (post) {
      setTitle(post.title); setSlug(post.slug); setExcerpt(post.excerpt || "");
      setContent(post.content || ""); setCategoryId(post.category_id || "");
      setStatus(post.status || "draft"); setCoverImageUrl(post.cover_image || "");
      if (post.scheduled_at) {
        const d = new Date(post.scheduled_at);
        setScheduledAt(d); setScheduledTime(format(d, "HH:mm"));
      }
      setSlugManual(true);
    }
    const { data: postTags } = await supabase.from("post_tags").select("tag_id").eq("post_id", id!);
    if (postTags) setSelectedTagIds(postTags.map((pt: any) => pt.tag_id));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const webpFile = await convertToWebp(file);
      const filePath = `covers/${Date.now()}.webp`;
      const { error } = await supabase.storage.from("blog-images").upload(filePath, webpFile);
      if (error) toast({ title: "Erro ao enviar imagem", description: error.message, variant: "destructive" });
      else {
        const { data } = supabase.storage.from("blog-images").getPublicUrl(filePath);
        setCoverImageUrl(data.publicUrl);
        toast({ title: "Imagem convertida para WebP e enviada!" });
      }
    } catch (err: any) {
      toast({ title: "Erro ao converter imagem", description: err.message, variant: "destructive" });
    }
    setUploading(false);
  };

  const handleCreateTag = async () => {
    if (!newTagName.trim()) return;
    const { data, error } = await supabase.from("tags").insert({ name: newTagName.trim(), slug: slugify(newTagName) }).select("id, name, slug").single();
    if (error) toast({ title: "Erro ao criar tag", description: error.message.includes("duplicate") ? "Tag já existe." : error.message, variant: "destructive" });
    else if (data) {
      setAllTags((prev) => [...prev, data].sort((a, b) => a.name.localeCompare(b.name)));
      setSelectedTagIds((prev) => [...prev, data.id]);
      setNewTagName("");
      toast({ title: "Tag criada!" });
    }
  };

  const toggleTag = (tagId: string) => {
    setSelectedTagIds((prev) => prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]);
  };

  const handleSave = async (saveStatus?: string) => {
    if (!title.trim() || !slug.trim()) {
      toast({ title: "Título e slug são obrigatórios", variant: "destructive" });
      return;
    }
    setSaving(true);
    const finalStatus = saveStatus || status;

    let scheduledDateTime: string | null = null;
    if (finalStatus === "scheduled" && scheduledAt) {
      const [hours, minutes] = scheduledTime.split(":").map(Number);
      const dt = new Date(scheduledAt);
      dt.setHours(hours, minutes, 0, 0);
      scheduledDateTime = dt.toISOString();
    }

    const postData = {
      title: title.trim(), slug: slug.trim(), excerpt: excerpt.trim() || null,
      content: content || null, category_id: categoryId || null,
      status: finalStatus, cover_image: coverImageUrl || null,
      published: finalStatus === "published",
      published_at: finalStatus === "published" ? new Date().toISOString() : null,
      scheduled_at: scheduledDateTime,
    };

    let postId = id;
    if (isEditing) {
      const { error } = await supabase.from("posts").update(postData).eq("id", id!);
      if (error) { toast({ title: "Erro ao atualizar", description: error.message, variant: "destructive" }); setSaving(false); return; }
    } else {
      const { data, error } = await supabase.from("posts").insert(postData).select("id").single();
      if (error) {
        toast({ title: "Erro ao criar post", description: error.message.includes("duplicate") ? "Slug já existe." : error.message, variant: "destructive" });
        setSaving(false); return;
      }
      postId = data.id;
    }

    await supabase.from("post_tags").delete().eq("post_id", postId!);
    if (selectedTagIds.length > 0) {
      await supabase.from("post_tags").insert(selectedTagIds.map((tagId) => ({ post_id: postId!, tag_id: tagId })));
    }

    toast({ title: finalStatus === "published" ? "Post publicado!" : finalStatus === "scheduled" ? "Post agendado!" : "Rascunho salvo!" });
    setSaving(false);
    navigate("/admin/posts");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/admin/posts")}><ArrowLeft className="h-4 w-4" /></Button>
            <h1 className="text-2xl font-bold">{isEditing ? "Editar Post" : "Novo Post"}</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => handleSave("draft")} disabled={saving}>
              <Save className="h-4 w-4 mr-2" /> Salvar Rascunho
            </Button>
            {scheduledAt && (
              <Button variant="secondary" onClick={() => handleSave("scheduled")} disabled={saving}>
                <Clock className="h-4 w-4 mr-2" /> Agendar
              </Button>
            )}
            <Button onClick={() => handleSave("published")} disabled={saving}>
              <Eye className="h-4 w-4 mr-2" /> Publicar
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Conteúdo principal */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label>Título</Label>
                  <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título do post" className="text-lg" />
                </div>
                <div className="space-y-2">
                  <Label>Slug (URL)</Label>
                  <Input value={slug} onChange={(e) => { setSlug(e.target.value); setSlugManual(true); }} placeholder="titulo-do-post" />
                </div>
                <div className="space-y-2">
                  <Label>Resumo</Label>
                  <Textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Breve descrição do post..." rows={3} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg">Conteúdo (Markdown)</CardTitle></CardHeader>
              <CardContent>
                <div data-color-mode="light">
                  <MDEditor value={content} onChange={(val) => setContent(val || "")} height={400} preview="edit" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="text-lg">Imagem de Capa</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {coverImageUrl && (
                  <div className="relative">
                    <img src={coverImageUrl} alt="Capa" className="w-full h-40 object-cover rounded-lg" />
                    <Button variant="destructive" size="icon" className="absolute top-2 right-2 h-6 w-6" onClick={() => setCoverImageUrl("")}>
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                )}
                <Label htmlFor="cover-upload" className="cursor-pointer">
                  <div className="flex items-center gap-2 px-4 py-2 border border-dashed border-border rounded-lg hover:bg-muted transition-colors text-sm text-muted-foreground justify-center">
                    <Upload className="h-4 w-4" />
                    {uploading ? "Enviando..." : "Enviar imagem"}
                  </div>
                </Label>
                <input id="cover-upload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg">Categoria</CardTitle></CardHeader>
              <CardContent>
                <Select value={categoryId} onValueChange={setCategoryId}>
                  <SelectTrigger><SelectValue placeholder="Selecione..." /></SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg">Agendar Publicação</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !scheduledAt && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {scheduledAt ? format(scheduledAt, "dd/MM/yyyy", { locale: ptBR }) : "Selecionar data"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={scheduledAt} onSelect={setScheduledAt}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus className="p-3 pointer-events-auto" />
                  </PopoverContent>
                </Popover>
                {scheduledAt && (
                  <div className="flex items-center gap-2">
                    <Label className="whitespace-nowrap">Horário:</Label>
                    <Input type="time" value={scheduledTime} onChange={(e) => setScheduledTime(e.target.value)} />
                    <Button variant="ghost" size="icon" onClick={() => { setScheduledAt(undefined); setScheduledTime("09:00"); }}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg">Tags</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <Input value={newTagName} onChange={(e) => setNewTagName(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleCreateTag(); } }}
                    placeholder="Nova tag..." className="text-sm" />
                  <Button size="sm" onClick={handleCreateTag} disabled={!newTagName.trim()}><Plus className="h-4 w-4" /></Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <Badge key={tag.id} variant={selectedTagIds.includes(tag.id) ? "default" : "outline"}
                      className="cursor-pointer" onClick={() => toggleTag(tag.id)}>
                      {tag.name}
                    </Badge>
                  ))}
                  {allTags.length === 0 && <p className="text-sm text-muted-foreground">Nenhuma tag criada.</p>}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPostEditor;
