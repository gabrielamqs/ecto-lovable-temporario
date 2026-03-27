import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import RoupasPage from "./pages/RoupasPage";
import CategoryPage from "./pages/CategoryPage";
import GuiaTamanhosPage from "./pages/GuiaTamanhosPage";
import NovidadesPage from "./pages/NovidadesPage";
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
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produto/:id" element={<ProductPage />} />
            <Route path="/roupas" element={<RoupasPage />} />
            <Route path="/roupas/:sub" element={<CategoryPage />} />
            <Route path="/atendimento/guia-tamanhos" element={<GuiaTamanhosPage />} />
            <Route path="/novidades" element={<NovidadesPage />} />
            <Route path="/novidades/:sub" element={<NovidadesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
