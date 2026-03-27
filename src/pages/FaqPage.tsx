import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Quais tamanhos a Ecto oferece?", a: "Trabalhamos exclusivamente com tamanhos PP, 32 e 34 em roupas, e 33, 34 e 35 em calçados. Nossa modelagem é desenvolvida especificamente para corpos magros e de estrutura pequena." },
  { q: "Como sei qual é o meu tamanho?", a: "Utilize nosso Guia de Tamanhos com tabela de medidas detalhada, ou experimente o FitCheck na página de cada produto — basta inserir suas medidas e receber a recomendação de tamanho ideal." },
  { q: "Posso trocar se o tamanho não servir?", a: "Sim! Você tem 30 dias para solicitar a troca gratuitamente. Basta acessar Meus Pedidos ou entrar em contato com nosso atendimento." },
  { q: "Qual o prazo de entrega?", a: "O prazo varia de 3 a 10 dias úteis, dependendo da sua localização. Compras acima de R$ 299 possuem frete grátis para todo o Brasil." },
  { q: "Vocês têm loja física?", a: "No momento operamos exclusivamente online, o que nos permite oferecer preços mais acessíveis e atender todo o Brasil." },
  { q: "Como funciona o pagamento?", a: "Aceitamos cartão de crédito (em até 3x sem juros), PIX e boleto bancário. Todos os pagamentos são processados com criptografia SSL." },
  { q: "O que é o Ecto Fit?", a: "Ecto Fit é a nossa modelagem exclusiva para calças e jeans, desenvolvida com proporções específicas para cintura, quadril e comprimento de pernas mais longas e finas." },
  { q: "Como cuido das peças?", a: "Cada produto acompanha instruções de lavagem na etiqueta. De modo geral, recomendamos lavagem à mão ou ciclo delicado para preservar a modelagem e o tecido." },
];

const FaqPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="container py-12 md:py-20 max-w-2xl">
      <h1 className="font-display text-3xl md:text-4xl font-medium mb-2">Perguntas Frequentes</h1>
      <p className="font-body text-sm text-muted-foreground mb-10">
        Tire suas dúvidas sobre produtos, entregas e trocas.
      </p>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="font-body text-sm text-left">{faq.q}</AccordionTrigger>
            <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
    <Footer />
  </div>
);

export default FaqPage;
