import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const sections = [
  {
    title: "1. Aceitação dos Termos",
    text: "Ao acessar e utilizar o site da Ecto (ecto.com.br), você concorda com estes Termos de Uso e com nossa Política de Privacidade. Se não concordar com qualquer condição, recomendamos que não utilize nossos serviços.",
  },
  {
    title: "2. Cadastro e Conta",
    text: "Para realizar compras, é necessário criar uma conta com informações verdadeiras e atualizadas. Você é responsável pela confidencialidade de sua senha e por todas as atividades realizadas em sua conta. A Ecto reserva-se o direito de suspender contas com informações falsas ou uso inadequado.",
  },
  {
    title: "3. Produtos e Preços",
    text: "Todos os preços são exibidos em Reais (R$) e podem ser alterados sem aviso prévio. As imagens dos produtos são ilustrativas e podem apresentar variações de cor dependendo da configuração do seu monitor. Nos esforçamos para manter as descrições precisas e atualizadas.",
  },
  {
    title: "4. Pagamento",
    text: "Aceitamos cartão de crédito (em até 3x sem juros), PIX e boleto bancário. Todos os pagamentos são processados por gateways certificados com criptografia SSL. A confirmação do pedido está sujeita à aprovação do pagamento.",
  },
  {
    title: "5. Entrega",
    text: "Os prazos de entrega são estimados e contados em dias úteis a partir da confirmação do pagamento. A Ecto não se responsabiliza por atrasos causados por transportadoras ou eventos de força maior. Consulte nossa Política de Entrega para mais detalhes.",
  },
  {
    title: "6. Trocas e Devoluções",
    text: "Conforme o Código de Defesa do Consumidor, você tem até 7 dias após o recebimento para solicitar devolução por arrependimento. Além disso, a Ecto oferece prazo estendido de 30 dias para trocas de tamanho. Consulte nossa página de Trocas e Devoluções para o processo completo.",
  },
  {
    title: "7. Propriedade Intelectual",
    text: "Todo o conteúdo do site — incluindo textos, imagens, logotipos, design e código — é de propriedade exclusiva da Ecto ou de seus licenciadores. É proibida a reprodução, distribuição ou modificação sem autorização prévia por escrito.",
  },
  {
    title: "8. Privacidade",
    text: "Seus dados pessoais são coletados e tratados de acordo com a LGPD (Lei Geral de Proteção de Dados). Utilizamos seus dados exclusivamente para processar pedidos, melhorar nossos serviços e enviar comunicações relevantes, quando autorizado.",
  },
  {
    title: "9. Alterações nos Termos",
    text: "A Ecto pode atualizar estes Termos de Uso a qualquer momento. As alterações entram em vigor imediatamente após a publicação no site. Recomendamos que você revise esta página periodicamente.",
  },
  {
    title: "10. Foro",
    text: "Estes Termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida no foro da comarca de São Paulo/SP.",
  },
];

const TermosUsoPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="container py-12 md:py-20 max-w-2xl">
      <h1 className="font-display text-3xl md:text-4xl font-medium mb-2">Termos de Uso</h1>
      <p className="font-body text-sm text-muted-foreground mb-10">
        Última atualização: Março de 2026.
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-lg font-medium mb-2">{s.title}</h2>
            <p className="font-body text-sm text-foreground/80 leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default TermosUsoPage;
