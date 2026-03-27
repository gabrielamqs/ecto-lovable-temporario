import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingBag, Truck, RotateCcw, Star } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SizeSelector from "@/components/product/SizeSelector";
import FitCheck from "@/components/product/FitCheck";
import ReviewCard from "@/components/product/ReviewCard";
import { allProducts, getReviewsForProduct } from "@/data/mockData";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const ProductPage = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === id) || allProducts[0];
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addItem } = useCart();

  const reviews = getReviewsForProduct(product.id);
  const avgRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  const sizes = [
    { label: "PP", available: product.sizes.includes("PP") },
    { label: "32", available: product.sizes.includes("32") },
    { label: "34", available: product.sizes.includes("34") },
    { label: "36", available: false },
  ];

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem(product, selectedSize);
    toast.success(`${product.name} (${selectedSize}) adicionado à sacola`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-6 md:py-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          <div>
            <div className="bg-surface-elevated aspect-[3/4] overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" width={600} height={800} />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Ecto</p>
              <h1 className="font-display text-2xl md:text-3xl font-medium">{product.name}</h1>
              {reviews.length > 0 && (
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < Math.round(avgRating) ? "fill-gold text-gold" : "text-border"}`} />
                    ))}
                  </div>
                  <span className="font-body text-xs text-muted-foreground">({reviews.length} avaliações)</span>
                </div>
              )}
            </div>

            <SizeSelector sizes={sizes} selected={selectedSize} onSelect={setSelectedSize} />

            {/* Guia de Medidas link */}
            <Link to="/atendimento/guia-tamanhos" className="font-body text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors -mt-2">
              Ver guia de medidas
            </Link>

            <FitCheck />

            <div className="border-t border-border pt-4">
              <div className="flex items-baseline gap-3">
                {product.originalPrice && (
                  <span className="font-body text-sm text-muted-foreground line-through">R$ {product.originalPrice.toFixed(2)}</span>
                )}
                <span className="font-display text-2xl font-semibold">R$ {product.price.toFixed(2)}</span>
              </div>
              <p className="font-body text-xs text-muted-foreground mt-1">ou 3x de R$ {(product.price / 3).toFixed(2)} sem juros</p>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className="btn-cta w-full flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ShoppingBag className="w-4 h-4" />
              {selectedSize ? "Adicionar à sacola" : "Selecione um tamanho"}
            </button>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-muted-foreground" />
                <span className="font-body text-xs text-muted-foreground">Frete grátis acima de R$ 299</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-muted-foreground" />
                <span className="font-body text-xs text-muted-foreground">30 dias para troca</span>
              </div>
            </div>
          </div>
        </div>

        {reviews.length > 0 && (
          <section className="mt-16 md:mt-24 max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="section-title text-2xl">Avaliações</h2>
              <span className="font-body text-sm text-muted-foreground">{reviews.length} reviews</span>
            </div>
            <div>
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
