import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import MilkyMushroom from "./pages/MilkyMushroom";
import ButtonMushroom from "./pages/ButtonMushroom";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Farming from "./pages/Farming";
import Blog from "./pages/Blog";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToHash from "@/components/ScrollToHash";
import Checkout from "./pages/Checkout";
import Gallery from "./pages/Gallery";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/milky-mushroom" element={<MilkyMushroom />} />
            <Route path="/products/button-mushroom" element={<ButtonMushroom />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/farming-process" element={<Farming />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
