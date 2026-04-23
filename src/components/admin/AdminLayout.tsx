import { useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, FileText, FolderOpen, Tag, LogOut, ArrowLeft } from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Posts", href: "/admin/posts", icon: FileText },
  { label: "Categorias", href: "/admin/categorias", icon: FolderOpen },
  { label: "Tags", href: "/admin/tags", icon: Tag },
];

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && !user) navigate("/admin/login");
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 lg:px-6 h-16">
          <div className="flex items-center gap-4">
            <Link to="/admin" className="font-bold text-lg text-primary">Chorus Music</Link>
            <span className="text-sm font-medium text-muted-foreground hidden sm:inline">Painel Admin</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Ver Site</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">Sair</span>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex">
        <aside className="hidden md:flex w-60 flex-col bg-background border-r border-border min-h-[calc(100vh-4rem)] sticky top-16">
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href ||
                (item.href !== "/admin" && location.pathname.startsWith(item.href));
              return (
                <Link key={item.href} to={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
          <div className="flex justify-around py-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href ||
                (item.href !== "/admin" && location.pathname.startsWith(item.href));
              return (
                <Link key={item.href} to={item.href}
                  className={`flex flex-col items-center gap-1 px-3 py-1.5 text-xs ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
        <main className="flex-1 p-4 lg:p-8 pb-20 md:pb-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
