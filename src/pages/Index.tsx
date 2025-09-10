import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>EarthCap - Fresh Milky & Button Mushrooms Delivered with Care | Organic Mushrooms</title>
        <meta name="description" content="EarthCap delivers premium fresh Milky Mushrooms and Button Mushrooms grown organically. Farm-to-table quality with natural farming practices. Order fresh mushrooms online." />
        <meta name="keywords" content="EarthCap, Milky Mushrooms, Button Mushrooms, Fresh Mushrooms, Organic Mushrooms, Farm Fresh, Natural Farming, Mushroom Delivery" />
        <link rel="canonical" href="https://earthcap.com/" />
      </Helmet>
      
      <div className="min-h-screen relative">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
