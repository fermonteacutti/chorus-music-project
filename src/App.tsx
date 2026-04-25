import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Layout from "@/components/Layout";

// Rotas públicas — carregam imediatamente
import Home from "@/pages/Home";
import Cursos from "@/pages/Cursos";
import Professores from "@/pages/Professores";
import Vivencias from "@/pages/Vivencias";
import Galeria from "@/pages/Galeria";
import Contato from "@/pages/Contato";
import Termos from "@/pages/Termos";
import Privacidade from "@/pages/Privacidade";
import Cookies from "@/pages/Cookies";
import NotFound from "@/pages/NotFound";

// Blog — lazy (tem react-markdown)
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));

// Admin — lazy (tem md-editor, recharts, supabase admin)
const AdminLogin = lazy(() => import("@/pages/AdminLogin"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"));
const AdminPosts = lazy(() => import("@/pages/AdminPosts"));
const AdminPostEditor = lazy(() => import("@/pages/AdminPostEditor"));
const AdminCategories = lazy(() => import("@/pages/AdminCategories"));
const AdminTags = lazy(() => import("@/pages/AdminTags"));

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <p className="text-muted-foreground text-sm font-sans">Carregando...</p>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/cursos" element={<Cursos />} />
              <Route path="/professores" element={<Professores />} />
              <Route path="/vivencias" element={<Vivencias />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/termos" element={<Termos />} />
              <Route path="/privacidade" element={<Privacidade />} />
              <Route path="/cookies" element={<Cookies />} />
            </Route>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/posts" element={<AdminPosts />} />
            <Route path="/admin/posts/novo" element={<AdminPostEditor />} />
            <Route path="/admin/posts/:id" element={<AdminPostEditor />} />
            <Route path="/admin/categorias" element={<AdminCategories />} />
            <Route path="/admin/tags" element={<AdminTags />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
