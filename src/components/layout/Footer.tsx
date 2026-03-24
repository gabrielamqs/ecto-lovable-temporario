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
            {["Sobre Nós", "FAQ", "Trocas & Devoluções", "Fale Conosco"].map((item) => (
              <li key={item}>
                <Link to="#" className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4">Categorias</h4>
          <ul className="space-y-2.5">
            {["Vestidos", "Blusas", "Calças Ecto Fit", "Acessórios"].map((item) => (
              <li key={item}>
                <Link to="#" className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-4">Conta</h4>
          <ul className="space-y-2.5">
            {["Meus Pedidos", "Lista de Desejos", "Meus Dados"].map((item) => (
              <li key={item}>
                <Link to="#" className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {item}
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
