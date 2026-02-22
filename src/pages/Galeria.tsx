import { Music } from "lucide-react";

export default function Galeria() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Galeria de Fotos
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
              Conheça nossa infraestrutura através das imagens do nosso espaço.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <div key={id} className="aspect-square rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                <Music className="h-16 w-16 text-primary/30" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
