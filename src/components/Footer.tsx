import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import logoWhite from "@/assets/logo-chorus-white.png";
import logoCaem from "@/assets/logo-caem.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logoWhite} alt="Chorus Escola de Música" className="h-12 w-auto mb-6" />
            <p className="text-background/70 text-sm mb-4">
              Ensinar música de forma lúdica, com qualidade, ajudando a realizar sonhos desde 1993.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navegação</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-background/70 hover:text-primary transition-colors text-sm">Home</Link>
              <Link to="/cursos" className="text-background/70 hover:text-primary transition-colors text-sm">Cursos</Link>
              <Link to="/professores" className="text-background/70 hover:text-primary transition-colors text-sm">Professores</Link>
              <Link to="/eventos" className="text-background/70 hover:text-primary transition-colors text-sm">Eventos</Link>
              <Link to="/blog" className="text-background/70 hover:text-primary transition-colors text-sm">Blog</Link>
              <Link to="/contato" className="text-background/70 hover:text-primary transition-colors text-sm">Contato</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="text-background/70 text-sm space-y-2">
              <p>Av. José Bonifácio, 2304</p>
              <p>Jardim Paineiras, Campinas - SP</p>
              <p className="mt-4">(19) 3255-3999</p>
              <p>(19) 99213-8954</p>
              <a
                href="mailto:chorus@chorusmusic.com.br"
                className="block hover:text-primary transition-colors"
              >
                chorus@chorusmusic.com.br
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/chorusescolademusica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/chorusescolademusica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@chorusmusic93"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Chorus Escola de Música. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/termos" className="text-background/50 hover:text-primary transition-colors">Termos de Uso</Link>
            <Link to="/privacidade" className="text-background/50 hover:text-primary transition-colors">Política de Privacidade</Link>
            <Link to="/cookies" className="text-background/50 hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
