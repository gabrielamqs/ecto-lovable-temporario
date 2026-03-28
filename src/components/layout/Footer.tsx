import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div className="col-span-2 md:col-span-1">
          <h3 className="font-display text-2xl font-semibold mb-4">ECTO</h3>
          <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
            Moda feminina pensada para quem veste PP e 32/34. Caimento perfeito, sem ajustes.
          </p>
        </div>
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4">Institucional</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Sobre Nós", href: "/atendimento/sobre" },
              { label: "FAQ", href: "/atendimento/faq" },
              { label: "Fale Conosco", href: "/atendimento/contato" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4">Categorias</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Vestidos", href: "/roupas/vestidos" },
              { label: "Blusas", href: "/roupas/blusas-camisas" },
              { label: "Calças Ecto Fit", href: "/roupas/calcas-jeans" },
              { label: "Acessórios", href: "/calcados-acessorios" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4">Políticas</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Política de Entrega", href: "/politica-entrega" },
              { label: "Trocas e Devoluções", href: "/atendimento/trocas-devolucoes" },
              { label: "Termos de Uso", href: "/termos-de-uso" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
        <p className="font-body text-xs text-primary-foreground/40">
          © 2026 Ecto. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
