import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contato() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Entre em <span className="text-primary">Contato</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
            Estamos prontos para tirar suas dúvidas e ajudá-lo a começar sua jornada musical
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3 font-sans">Endereço</h3>
            <p className="text-muted-foreground font-sans">Av. José Bonifácio, 2304<br />Jardim Paineiras<br />Campinas - SP</p>
          </Card>
          <Card className="p-8 text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3 font-sans">Telefones</h3>
            <p className="text-muted-foreground font-sans">
              <a href="https://wa.me/5519992138954" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">(19) 99213-8954 (WhatsApp)</a>
              <br />(19) 3255-3999
            </p>
          </Card>
          <Card className="p-8 text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3 font-sans">Horários</h3>
            <p className="text-muted-foreground font-sans">Segunda a Sexta: 9h às 21h<br />Sábado: 9h às 17h<br />Domingo: Fechado</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8">
            <h2 className="font-serif text-3xl font-bold mb-6">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 font-sans">Nome Completo *</label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 font-sans">E-mail *</label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 font-sans">Telefone *</label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(19) 99999-9999" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 font-sans">Assunto</label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Assunto da mensagem" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 font-sans">Mensagem *</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Como podemos ajudá-lo?" rows={6} required />
              </div>
              <Button type="submit" size="lg" className="w-full">Enviar Mensagem</Button>
            </form>
          </Card>

          <div>
            <div className="aspect-square lg:aspect-auto lg:h-full rounded-lg overflow-hidden bg-background shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1234567890!2d-47.032535!3d-22.8965737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf6d97f475ef%3A0xd745c041682c8c36!2sChorus%20Escola%20de%20M%C3%BAsica!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Chorus Escola de Música"
                className="min-h-[500px] lg:min-h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
