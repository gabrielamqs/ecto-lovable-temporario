import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="font-display text-6xl font-semibold mb-4">404</h1>
          <p className="font-body text-lg text-muted-foreground mb-2">Página não encontrada</p>
          <p className="font-body text-sm text-muted-foreground mb-8">A página que você está procurando não existe ou foi removida.</p>
          <Link to="/" className="btn-cta inline-block">Voltar ao início</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
