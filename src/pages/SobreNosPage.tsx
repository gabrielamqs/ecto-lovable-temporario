import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SobreNosPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="container py-12 md:py-20 max-w-2xl">
      <h1 className="font-display text-3xl md:text-4xl font-medium mb-2">Sobre Nós</h1>
      <p className="font-body text-sm text-muted-foreground mb-10">
        Conheça a história por trás da Ecto.
      </p>

      <div className="space-y-8 font-body text-sm text-foreground/80 leading-relaxed">
        <p>
          A Ecto nasceu de uma frustração real: a dificuldade de encontrar roupas que 
          realmente vestissem bem em corpos magros e de estrutura pequena. Cansadas de 
          ajustar na costureira cada peça comprada, decidimos criar uma marca que resolvesse 
          esse problema de vez.
        </p>

        <div>
          <h2 className="font-display text-xl font-medium text-foreground mb-3">Nossa Missão</h2>
          <p>
            Oferecer moda adulta, sofisticada e acessível com modelagem exclusiva para 
            tamanhos PP, 32 e 34. Acreditamos que todas as mulheres merecem roupas com 
            caimento perfeito — sem precisar de ajustes.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-medium text-foreground mb-3">O que nos diferencia</h2>
          <ul className="space-y-2">
            {[
              "Modelagem desenvolvida exclusivamente para biotipos ectomorfos",
              "FitCheck: tecnologia que recomenda o tamanho ideal com base nas suas medidas",
              "Tecidos selecionados que valorizam silhuetas mais finas",
              "Comprimentos e proporções pensados para diferentes alturas",
              "Atendimento especializado que entende seu corpo",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-foreground mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-medium text-foreground mb-3">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Inclusão real", desc: "Moda para corpos frequentemente ignorados pela indústria." },
              { title: "Qualidade", desc: "Tecidos premium e acabamento impecável em cada peça." },
              { title: "Sustentabilidade", desc: "Produção consciente, sem excessos. Feito para durar." },
            ].map((v) => (
              <div key={v.title} className="border border-border p-4">
                <p className="font-body text-sm font-medium text-foreground mb-1">{v.title}</p>
                <p className="text-muted-foreground text-xs">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default SobreNosPage;
