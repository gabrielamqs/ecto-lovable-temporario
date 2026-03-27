import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { getProductsByCategory, allProducts } from "@/data/mockData";

const categoryInfo: Record<string, { title: string; description: string }> = {
  sapatos: { title: "Sapatos", description: "Sapatos em numerações pequenas (33, 34, 35) com design sofisticado." },
  bolsas: { title: "Bolsas", description: "Bolsas proporcionais ao seu corpo — elegantes sem ser oversized." },
  cintos: { title: "Cintos", description: "Cintos ajustáveis pensados para cinturas finas." },
  bijuterias: { title: "Bijuterias", description: "Peças delicadas e elegantes para complementar seu look." },
};

const AccessoryCategoryPage = () => {
  const { sub } = useParams();
  const info = sub ? categoryInfo[sub] : null;
  const products = sub ? getProductsByCategory(sub) : allProducts.filter(p => ["sapatos", "bolsas", "cintos", "bijuterias"].includes(p.category || ""));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="container py-12 md:py-20">
        <h1 className="font-display text-3xl md:text-4xl font-medium mb-2">
          {info?.title ?? "Calçados & Acessórios"}
        </h1>
        <p className="font-body text-sm text-muted-foreground mb-10">
          {info?.description ?? "Sapatos, bolsas, cintos e bijuterias com proporções pensadas para você."}
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

export default AccessoryCategoryPage;
