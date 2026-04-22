import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye, PenLine, FolderOpen, Tag, Plus } from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({ total: 0, published: 0, drafts: 0, categories: 0, tags: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const [{ count: total }, { count: published }, { count: drafts }, { count: categories }, { count: tags }] =
        await Promise.all([
          supabase.from("posts").select("*", { count: "exact", head: true }),
          supabase.from("posts").select("*", { count: "exact", head: true }).eq("status", "published"),
          supabase.from("posts").select("*", { count: "exact", head: true }).eq("status", "draft"),
          supabase.from("categories").select("*", { count: "exact", head: true }),
          supabase.from("tags").select("*", { count: "exact", head: true }),
        ]);
      setStats({ total: total || 0, published: published || 0, drafts: drafts || 0, categories: categories || 0, tags: tags || 0 });
    };
    fetchStats();
  }, []);

  const cards = [
    { label: "Total de Posts", value: stats.total, icon: FileText, color: "text-blue-500" },
    { label: "Publicados", value: stats.published, icon: Eye, color: "text-green-500" },
    { label: "Rascunhos", value: stats.drafts, icon: PenLine, color: "text-yellow-500" },
    { label: "Categorias", value: stats.categories, icon: FolderOpen, color: "text-purple-500" },
    { label: "Tags", value: stats.tags, icon: Tag, color: "text-pink-500" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Visão geral do blog</p>
          </div>
          <Button asChild>
            <Link to="/admin/posts/novo"><Plus className="h-4 w-4 mr-2" /> Novo Post</Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cards.map((card) => (
            <Card key={card.label}>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-2">
                  <card.icon className={`h-5 w-5 ${card.color}`} />
                  <span className="text-3xl font-bold">{card.value}</span>
                  <span className="text-sm text-muted-foreground">{card.label}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
