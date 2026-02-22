export default function Cookies() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Política de <span className="text-primary">Cookies</span>
        </h1>
        <div className="prose max-w-none space-y-6 text-muted-foreground font-sans">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">1. O que são Cookies</h2>
            <p>Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita nosso site. Eles nos ajudam a melhorar sua experiência de navegação.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">2. Como Usamos Cookies</h2>
            <p>Utilizamos cookies para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lembrar suas preferências e configurações</li>
              <li>Entender como você usa nosso site</li>
              <li>Melhorar a funcionalidade do site</li>
              <li>Fornecer conteúdo relevante</li>
            </ul>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">3. Tipos de Cookies que Usamos</h2>
            <div className="space-y-4">
              <div><h3 className="font-semibold text-foreground mb-2">Cookies Essenciais</h3><p>Necessários para o funcionamento básico do site. Não podem ser desativados.</p></div>
              <div><h3 className="font-semibold text-foreground mb-2">Cookies de Preferências</h3><p>Permitem que o site lembre suas escolhas e preferências.</p></div>
              <div><h3 className="font-semibold text-foreground mb-2">Cookies Analíticos</h3><p>Ajudam-nos a entender como os visitantes interagem com o site.</p></div>
            </div>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">4. Gerenciamento de Cookies</h2>
            <p>Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já estão em seu dispositivo e pode configurar a maioria dos navegadores para impedir que sejam colocados.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">5. Cookies de Terceiros</h2>
            <p>Alguns cookies podem ser colocados por serviços de terceiros que aparecem em nosso site, como Google Maps e Analytics.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">6. Alterações nesta Política</h2>
            <p>Podemos atualizar esta política de cookies periodicamente para refletir mudanças em nossas práticas ou por outras razões operacionais, legais ou regulatórias.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">7. Mais Informações</h2>
            <p>Se você tiver dúvidas sobre nossa política de cookies, entre em contato conosco através dos canais disponíveis na página de contato.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
