import { RotateCcw, Package, Clock, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const steps = [
  { icon: Package, title: "1. Solicite a troca", desc: "Acesse Meus Pedidos ou entre em contato conosco informando o número do pedido e o motivo da troca." },
  { icon: Clock, title: "2. Aguarde a aprovação", desc: "Analisaremos sua solicitação em até 24 horas e enviaremos as instruções de envio por e-mail." },
  { icon: RotateCcw, title: "3. Envie o produto", desc: "Embale o produto com cuidado na embalagem original e poste nos Correios com o código de postagem que enviaremos." },
  { icon: CheckCircle, title: "4. Receba o novo", desc: "Assim que recebermos o produto, enviaremos o novo tamanho ou processaremos o reembolso em até 5 dias úteis." },
];

const TrocasPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="container py-12 md:py-20 max-w-2xl">
      <h1 className="font-display text-3xl md:text-4xl font-medium mb-2">Trocas & Devoluções</h1>
      <p className="font-body text-sm text-muted-foreground mb-10">
        Queremos que você fique 100% satisfeita. Se o tamanho não ficou perfeito, a troca é por nossa conta.
      </p>

      <div className="space-y-6 mb-12">
        {steps.map((step) => (
          <div key={step.title} className="flex gap-4 items-start">
            <div className="w-10 h-10 flex items-center justify-center border border-border shrink-0">
              <step.icon className="w-4 h-4 text-muted-foreground" />
            </div>
            <div>
              <p className="font-body text-sm font-medium">{step.title}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border border-border p-6 bg-surface-elevated">
        <h2 className="font-display text-xl font-medium mb-4">Política de Trocas</h2>
        <ul className="space-y-2">
          {[
            "Prazo de 30 dias corridos a partir do recebimento",
            "Produto deve estar com etiquetas e sem uso",
            "Frete de troca gratuito para todo o Brasil",
            "Reembolso processado em até 5 dias úteis após recebimento",
            "Troca por outro tamanho sujeita à disponibilidade",
            "Acessórios e bijuterias: troca apenas por defeito de fabricação",
          ].map((item, i) => (
            <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-foreground mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
    <Footer />
  </div>
);

export default TrocasPage;
