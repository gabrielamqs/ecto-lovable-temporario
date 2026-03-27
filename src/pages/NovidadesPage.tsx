import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { mockProducts } from "@/data/mockData";

const subPageInfo: Record<string, { title: string; description: string }> = {
  lancamentos: {
    title: "Lançamentos",
    description: "As peças mais recentes da Ecto, pensadas para o seu corpo.",
  },
  "outono-inverno": {
    title: "Coleção Outono/Inverno",
    description: "Peças sofisticadas e aconchegantes para os dias mais frios.",
  },
  "mais-vendidos": {
    title: "Mais Vendidos",
    description: "Os favoritos das nossas clientes — aprovados por quem veste PP, 32 e 34.",
  },
};

const NovidadesPage = () => {
  const { sub } = useParams();
  const info = sub ? subPageInfo[sub] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="container py-12 md:py-20">
        <h1 className="font-display text-3xl md:text-4xl font-medium mb-2">
          {info?.title ?? "Novidades"}
        </h1>
        <p className="font-body text-sm text-muted-foreground mb-10">
          {info?.description ?? "Descubra as últimas novidades da Ecto."}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NovidadesPage;
