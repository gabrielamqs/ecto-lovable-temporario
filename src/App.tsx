import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import RoupasPage from "./pages/RoupasPage.tsx";
import GuiaTamanhosPage from "./pages/GuiaTamanhosPage.tsx";
import NovidadesPage from "./pages/NovidadesPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produto/:id" element={<ProductPage />} />
          <Route path="/roupas" element={<RoupasPage />} />
          <Route path="/atendimento/guia-tamanhos" element={<GuiaTamanhosPage />} />
          <Route path="/novidades" element={<NovidadesPage />} />
          <Route path="/novidades/:sub" element={<NovidadesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
