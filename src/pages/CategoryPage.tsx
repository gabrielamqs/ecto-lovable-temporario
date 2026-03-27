import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { getProductsByCategory, allProducts } from "@/data/mockData";

const categoryInfo: Record<string, { title: string; description: string }> = {
  vestidos: { title: "Vestidos", description: "Vestidos curtos e longos com modelagem perfeita para o seu corpo." },
  "blusas-camisas": { title: "Blusas & Camisas", description: "Peças versáteis que vestem sem folgas, do casual ao sofisticado." },
  "calcas-jeans": { title: "Calças & Jeans", description: "Calças com a modelagem Ecto Fit — caimento perfeito na cintura e no quadril." },
  "saias-shorts": { title: "Saias & Shorts", description: "Saias e shorts com comprimento e cintura proporcionais ao seu corpo." },
  "casacos-jaquetas": { title: "Casacos & Jaquetas", description: "Peças de inverno que não ficam sobrando nos ombros." },
  conjuntos: { title: "Conjuntos", description: "Looks completos com proporções pensadas para tamanhos PP, 32 e 34." },
};

const CategoryPage = () => {
  const { sub } = useParams();
  const info = sub ? categoryInfo[sub] : null;
  const products = sub ? getProductsByCategory(sub) : allProducts;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="container py-12 md:py-20">
        <h1 className="font-display text-3xl md:text-4xl font-medium mb-2">
          {info?.title ?? "Roupas"}
        </h1>
        <p className="font-body text-sm text-muted-foreground mb-10">
          {info?.description ?? "Peças com modelagem exclusiva para tamanhos PP, 32 e 34."}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full font-body text-sm text-muted-foreground text-center py-12">
              Em breve novos produtos nesta categoria.
            </p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CategoryPage;
