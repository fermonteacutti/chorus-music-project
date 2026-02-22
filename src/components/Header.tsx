import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-chorus-white.png";

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/cursos", label: "Cursos" },
    { path: "/professores", label: "Professores" },
    { path: "/eventos", label: "Eventos" },
    { path: "/vivencias", label: "Vivências" },
    { path: "/blog", label: "Blog" },
    { path: "/contato", label: "Contato" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" data-testid="link-home">
            <img src={logoWhite} alt="Chorus Escola de Música" className="h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <div className="relative">
                  <Button
                    variant="ghost"
                    className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
                    data-testid={`link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Button>
                  {isActive(item.path) && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-foreground"></div>
                  )}
                </div>
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-primary-foreground/10 bg-primary">
          <nav className="flex flex-col py-4 px-4">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10 ${
                    isActive(item.path) ? "bg-primary-foreground/20" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
