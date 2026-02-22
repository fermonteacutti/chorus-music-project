export default function Privacidade() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Política de <span className="text-primary">Privacidade</span>
        </h1>
        <div className="prose max-w-none space-y-6 text-muted-foreground font-sans">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">1. Informações que Coletamos</h2>
            <p>Coletamos informações que você nos fornece diretamente, como nome, e-mail e telefone quando você preenche nossos formulários de contato ou se inscreve em nossos cursos.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">2. Como Usamos Suas Informações</h2>
            <p>Utilizamos suas informações para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder às suas solicitações e dúvidas</li>
              <li>Fornecer informações sobre nossos cursos e serviços</li>
              <li>Melhorar nosso site e serviços</li>
              <li>Enviar comunicações relacionadas aos nossos serviços</li>
            </ul>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">3. Compartilhamento de Informações</h2>
            <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para prestar nossos serviços ou quando exigido por lei.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">4. Segurança</h2>
            <p>Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">5. Seus Direitos</h2>
            <p>Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">6. Alterações nesta Política</h2>
            <p>Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como protegemos suas informações.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">7. Contato</h2>
            <p>Se você tiver dúvidas sobre esta política de privacidade, entre em contato através dos canais disponíveis na página de contato.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
