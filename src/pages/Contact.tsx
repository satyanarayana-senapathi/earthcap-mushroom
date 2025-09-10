import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact EarthCap - Get Fresh Organic Mushrooms Delivered | Phone & WhatsApp</title>
        <meta name="description" content="Contact EarthCap for fresh organic Milky and Button Mushrooms. Call +91-9876543210, WhatsApp orders, or visit our farm. Fast delivery available." />
        <meta name="keywords" content="contact EarthCap, mushroom delivery, order mushrooms, EarthCap phone number, WhatsApp mushrooms, organic mushroom supplier" />
        <link rel="canonical" href="https://earthcap.com/contact" />
      </Helmet>

      <div className="min-h-screen relative">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Contact EarthCap
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Get in touch for fresh organic mushrooms delivered to your door
                </p>
              </div>
            </div>
          </section>

          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;