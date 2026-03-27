import { User, Package, Heart, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const menuItems = [
  { icon: User, label: "Login / Cadastro", href: "/conta/login", desc: "Acesse sua conta ou crie uma nova" },
  { icon: Package, label: "Meus Pedidos", href: "/conta/pedidos", desc: "Acompanhe o status das suas compras" },
  { icon: Heart, label: "Lista de Desejos", href: "/conta/desejos", desc: "Peças que você salvou para depois" },
  { icon: Settings, label: "Meus Dados", href: "/conta/dados", desc: "Atualize suas informações pessoais" },
];

const ContaPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="container py-12 md:py-20 max-w-lg">
      <h1 className="font-display text-3xl md:text-4xl font-medium mb-2">Minha Conta</h1>
      <p className="font-body text-sm text-muted-foreground mb-10">
        Gerencie seus pedidos, dados e lista de desejos.
      </p>

      <div className="space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className="flex items-center gap-4 border border-border p-4 hover:bg-surface-elevated transition-colors"
          >
            <item.icon className="w-5 h-5 text-muted-foreground shrink-0" />
            <div>
              <p className="font-body text-sm font-medium">{item.label}</p>
              <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default ContaPage;
