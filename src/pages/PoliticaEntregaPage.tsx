import { Truck, MapPin, Clock, CreditCard } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PoliticaEntregaPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="container py-12 md:py-20 max-w-2xl">
      <h1 className="font-display text-3xl md:text-4xl font-medium mb-2">Política de Entrega</h1>
      <p className="font-body text-sm text-muted-foreground mb-10">
        Confira as condições de envio e prazos para receber suas peças Ecto.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {[
          { icon: Truck, title: "Frete Grátis", desc: "Para compras acima de R$ 299 em todo o Brasil" },
          { icon: Clock, title: "Prazo de Entrega", desc: "3 a 10 dias úteis após a confirmação do pagamento" },
          { icon: MapPin, title: "Abrangência", desc: "Enviamos para todos os estados do Brasil via Correios e transportadoras" },
          { icon: CreditCard, title: "Rastreamento", desc: "Código de rastreio enviado por e-mail em até 48h após o despacho" },
        ].map((item) => (
          <div key={item.title} className="border border-border p-5">
            <item.icon className="w-5 h-5 text-muted-foreground mb-3" />
            <p className="font-body text-sm font-medium mb-1">{item.title}</p>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6 font-body text-sm text-foreground/80 leading-relaxed">
        <div>
          <h2 className="font-display text-xl font-medium text-foreground mb-3">Prazos por Região</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border text-sm">
              <thead>
                <tr className="bg-surface-elevated">
                  <th className="text-left px-4 py-3 font-medium border-b border-border">Região</th>
                  <th className="text-left px-4 py-3 font-medium border-b border-border">Prazo Estimado</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { region: "Sudeste (SP, RJ, MG, ES)", days: "3 a 5 dias úteis" },
                  { region: "Sul (PR, SC, RS)", days: "4 a 6 dias úteis" },
                  { region: "Centro-Oeste (GO, MT, MS, DF)", days: "5 a 7 dias úteis" },
                  { region: "Nordeste", days: "6 a 9 dias úteis" },
                  { region: "Norte", days: "7 a 10 dias úteis" },
                ].map((row) => (
                  <tr key={row.region} className="border-b border-border last:border-b-0">
                    <td className="px-4 py-3">{row.region}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-medium text-foreground mb-3">Informações Importantes</h2>
          <ul className="space-y-2">
            {[
              "Os prazos são contados em dias úteis a partir da confirmação do pagamento.",
              "Pedidos feitos após as 14h serão processados no próximo dia útil.",
              "Em períodos promocionais, o prazo de despacho pode ser estendido em até 2 dias úteis.",
              "Caso ninguém esteja no endereço para receber, os Correios farão até 3 tentativas de entrega.",
              "O frete é calculado com base no CEP de destino e exibido no checkout antes da finalização.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-foreground mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default PoliticaEntregaPage;
