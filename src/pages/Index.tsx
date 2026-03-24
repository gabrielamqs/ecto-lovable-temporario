import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { mockProducts } from "@/data/mockData";
import heroImage from "@/assets/hero-model.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative">
        <div className="grid md:grid-cols-2 min-h-[70vh] md:min-h-[85vh]">
          <div className="flex items-center justify-center p-8 md:p-16 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-md"
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Coleção Outono/Inverno 2026
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6">
                Feito para o<br />seu corpo
              </h1>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm">
                Roupas desenhadas com modelagem exclusiva para tamanhos PP, 32 e 34. 
                Caimento perfeito, sem ajustes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/roupas" className="btn-cta inline-flex items-center justify-center gap-2">
                  Explorar coleção
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/atendimento/guia-tamanhos" className="btn-outline-elegant inline-flex items-center justify-center">
                  Guia de tamanhos
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="relative order-1 md:order-2 min-h-[50vh] md:min-h-full">
            <img
              src={heroImage}
              alt="Modelo vestindo macacão da coleção Ecto"
              className="w-full h-full object-cover object-top"
              width={800}
              height={1100}
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="section-title">Categorias</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { label: "Vestidos", href: "/roupas/vestidos" },
            { label: "Calças Ecto Fit", href: "/roupas/calcas-jeans" },
            { label: "Blusas & Camisas", href: "/roupas/blusas-camisas" },
            { label: "Acessórios", href: "/calcados-acessorios" },
          ].map((cat) => (
            <Link
              key={cat.label}
              to={cat.href}
              className="group relative bg-surface-elevated aspect-[4/5] flex items-end p-5 overflow-hidden hover:shadow-md transition-shadow"
            >
              <span className="font-display text-lg md:text-xl font-medium group-hover:underline underline-offset-4">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container pb-16 md:pb-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="section-title">Novidades</h2>
          <Link to="/novidades" className="nav-link flex items-center gap-1">
            Ver tudo <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-surface py-12 border-y border-border">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { title: "Modelagem Exclusiva", desc: "Para tamanhos PP, 32 e 34" },
            { title: "FitCheck", desc: "Descubra seu tamanho ideal" },
            { title: "Frete Grátis", desc: "Acima de R$ 299" },
            { title: "Troca Fácil", desc: "30 dias para trocar" },
          ].map((item) => (
            <div key={item.title}>
              <p className="font-body text-xs tracking-[0.15em] uppercase font-medium mb-1">{item.title}</p>
              <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
