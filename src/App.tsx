import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import RoupasPage from "./pages/RoupasPage";
import CategoryPage from "./pages/CategoryPage";
import AccessoryCategoryPage from "./pages/AccessoryCategoryPage";
import GuiaTamanhosPage from "./pages/GuiaTamanhosPage";
import NovidadesPage from "./pages/NovidadesPage";
import FaqPage from "./pages/FaqPage";
import ContatoPage from "./pages/ContatoPage";
import TrocasPage from "./pages/TrocasPage";
import SobreNosPage from "./pages/SobreNosPage";
import ContaPage from "./pages/ContaPage";
import PoliticaEntregaPage from "./pages/PoliticaEntregaPage";
import TermosUsoPage from "./pages/TermosUsoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <CartDrawer />
          <WhatsAppButton />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produto/:id" element={<ProductPage />} />
            <Route path="/roupas" element={<RoupasPage />} />
            <Route path="/roupas/:sub" element={<CategoryPage />} />
            <Route path="/calcados-acessorios" element={<AccessoryCategoryPage />} />
            <Route path="/calcados-acessorios/:sub" element={<AccessoryCategoryPage />} />
            <Route path="/atendimento/guia-tamanhos" element={<GuiaTamanhosPage />} />
            <Route path="/atendimento/faq" element={<FaqPage />} />
            <Route path="/atendimento/contato" element={<ContatoPage />} />
            <Route path="/atendimento/trocas-devolucoes" element={<TrocasPage />} />
            <Route path="/atendimento/sobre" element={<SobreNosPage />} />
            <Route path="/conta" element={<ContaPage />} />
            <Route path="/conta/:sub" element={<ContaPage />} />
            <Route path="/novidades" element={<NovidadesPage />} />
            <Route path="/novidades/:sub" element={<NovidadesPage />} />
            <Route path="/politica-entrega" element={<PoliticaEntregaPage />} />
            <Route path="/termos-de-uso" element={<TermosUsoPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
