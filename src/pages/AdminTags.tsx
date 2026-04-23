import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { slugify } from "@/lib/slugify";
import { Plus, X } from "lucide-react";

interface TagItem { id: string; name: string; slug: string; }

const AdminTags = () => {
  const [tags, setTags] = useState<TagItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const { toast } = useToast();

  const fetchTags = async () => {
    setLoading(true);
    const { data } = await supabase.from("tags").select("id, name, slug").order("name");
    setTags(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchTags(); }, []);

  const handleCreate = async () => {
    if (!name.trim()) { toast({ title: "Nome é obrigatório", variant: "destructive" }); return; }
    const { error } = await supabase.from("tags").insert({ name: name.trim(), slug: slugify(name) });
    if (error) toast({ title: "Erro ao criar tag", description: error.message.includes("duplicate") ? "Já existe uma tag com este nome." : error.message, variant: "destructive" });
    else { toast({ title: "Tag criada!" }); setName(""); fetchTags(); }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("tags").delete().eq("id", id);
    if (error) toast({ title: "Erro ao excluir tag", variant: "destructive" });
    else { toast({ title: "Tag excluída!" }); fetchTags(); }
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-2xl font-bold">Tags</h1>
          <p className="text-muted-foreground">Gerencie as tags dos posts</p>
        </div>
        <Card>
          <CardHeader><CardTitle className="text-lg">Nova Tag</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-1 space-y-2">
                <Label>Nome</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleCreate(); } }} placeholder="Ex: Piano" />
              </div>
              <div className="flex items-end">
                <Button onClick={handleCreate}><Plus className="h-4 w-4 mr-2" /> Criar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-lg">Tags Existentes</CardTitle></CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-4"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" /></div>
            ) : tags.length === 0 ? (
              <p className="text-center py-4 text-muted-foreground">Nenhuma tag cadastrada.</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag.id} variant="secondary" className="text-sm py-1.5 px-3 gap-2">
                    {tag.name}
                    <button onClick={() => handleDelete(tag.id)} className="hover:text-destructive transition-colors"><X className="h-3 w-3" /></button>
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminTags;
