export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationData: NavItem[] = [
  {
    label: "Novidades",
    href: "/novidades",
    children: [
      { label: "Lançamentos", href: "/novidades/lancamentos" },
      { label: "Coleção Outono/Inverno", href: "/novidades/outono-inverno" },
      { label: "Mais Vendidos", href: "/novidades/mais-vendidos" },
    ],
  },
  {
    label: "Roupas",
    href: "/roupas",
    children: [
      { label: "Vestidos (Curtos/Longos)", href: "/roupas/vestidos" },
      { label: "Blusas & Camisas", href: "/roupas/blusas-camisas" },
      { label: "Calças & Jeans (Ecto Fit)", href: "/roupas/calcas-jeans" },
      { label: "Saias & Shorts", href: "/roupas/saias-shorts" },
      { label: "Casacos & Jaquetas", href: "/roupas/casacos-jaquetas" },
      { label: "Conjuntos", href: "/roupas/conjuntos" },
    ],
  },
  {
    label: "Calçados & Acessórios",
    href: "/calcados-acessorios",
    children: [
      { label: "Sapatos (Pequenos)", href: "/calcados-acessorios/sapatos" },
      { label: "Bolsas", href: "/calcados-acessorios/bolsas" },
      { label: "Cintos (Ajustáveis)", href: "/calcados-acessorios/cintos" },
      { label: "Bijuterias", href: "/calcados-acessorios/bijuterias" },
    ],
  },
  {
    label: "Atendimento",
    href: "/atendimento",
    children: [
      { label: "Guia de Tamanhos (PP, 32, 34)", href: "/atendimento/guia-tamanhos" },
      { label: "FAQ", href: "/atendimento/faq" },
      { label: "Fale Conosco", href: "/atendimento/contato" },
      { label: "Trocas & Devoluções", href: "/atendimento/trocas-devolucoes" },
      { label: "Sobre Nós", href: "/atendimento/sobre" },
    ],
  },
  {
    label: "Minha Conta",
    href: "/conta",
    children: [
      { label: "Login/Cadastro", href: "/conta/login" },
      { label: "Meus Pedidos", href: "/conta/pedidos" },
      { label: "Lista de Desejos", href: "/conta/desejos" },
      { label: "Meus Dados", href: "/conta/dados" },
    ],
  },
];
