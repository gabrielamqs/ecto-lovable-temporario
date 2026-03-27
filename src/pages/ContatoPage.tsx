import { useState } from "react";
import { Mail, MessageCircle, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";

const ContatoPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Retornaremos em até 24h.");
    setName(""); setEmail(""); setSubject(""); setMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="container py-12 md:py-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-3xl md:text-4xl font-medium mb-2">Fale Conosco</h1>
          <p className="font-body text-sm text-muted-foreground mb-10">
            Estamos aqui para ajudar. Envie sua mensagem e retornaremos o mais breve possível.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Mail, title: "E-mail", desc: "contato@ecto.com.br" },
              { icon: MessageCircle, title: "WhatsApp", desc: "(11) 99999-9999" },
              { icon: Clock, title: "Horário", desc: "Seg-Sex, 9h às 18h" },
            ].map((item) => (
              <div key={item.title} className="border border-border p-4">
                <item.icon className="w-4 h-4 text-muted-foreground mb-2" />
                <p className="font-body text-sm font-medium">{item.title}</p>
                <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-body text-xs text-muted-foreground block mb-1">Nome</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full h-10 px-3 bg-surface border border-input font-body text-sm focus:outline-none focus:border-foreground transition-colors" />
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground block mb-1">E-mail</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full h-10 px-3 bg-surface border border-input font-body text-sm focus:outline-none focus:border-foreground transition-colors" />
              </div>
            </div>
            <div>
              <label className="font-body text-xs text-muted-foreground block mb-1">Assunto</label>
              <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required className="w-full h-10 px-3 bg-surface border border-input font-body text-sm focus:outline-none focus:border-foreground transition-colors" />
            </div>
            <div>
              <label className="font-body text-xs text-muted-foreground block mb-1">Mensagem</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className="w-full px-3 py-2 bg-surface border border-input font-body text-sm focus:outline-none focus:border-foreground transition-colors resize-none" />
            </div>
            <button type="submit" className="btn-cta">Enviar mensagem</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContatoPage;
