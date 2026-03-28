import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { allProducts } from "@/data/mockData";

const clothingCategories = ["vestidos", "blusas-camisas", "calcas-jeans", "saias-shorts", "casacos-jaquetas", "conjuntos"];

const RoupasPage = () => {
  const clothingProducts = allProducts.filter((p) => clothingCategories.includes(p.category || ""));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="container py-12 md:py-20">
        <h1 className="font-display text-3xl md:text-4xl font-medium mb-2">Roupas</h1>
        <p className="font-body text-sm text-muted-foreground mb-10">
          Peças com modelagem exclusiva para tamanhos PP, 32 e 34.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {clothingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RoupasPage;
