import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const images = [
  { src: "/lovable-uploads/c30b18c4-72ef-4dd7-b2f8-d3779dfda6b7.png", alt: "EarthCap farm - organic mushroom cultivation area" },
  { src: "/lovable-uploads/695f036f-896b-4ec0-baf2-a73dd765ce89.png", alt: "Milky mushrooms - fresh harvest at EarthCap" },
  { src: "/lovable-uploads/button.jpg", alt: "Button mushrooms - premium quality from EarthCap" },
];

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>EarthCap - Fresh Milky & Button Mushrooms Delivered with Care | Organic Mushrooms</title>
        <meta name="description" content="Browse EarthCap's gallery of farm photos and our mushroom cultivation process. See fresh Milky and Button mushrooms grown organically." />
        <link rel="canonical" href="https://earthcap.in/gallery" />
      </Helmet>

      <div className="min-h-screen relative">
        <Navigation />
        <main className="pt-20">
          <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Gallery</h1>
                <p className="text-xl text-muted-foreground">Farm photos and our organic mushroom growing process</p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {images.map((img, i) => (
                  <div key={i} className="bg-card rounded-xl shadow-card overflow-hidden border">
                    <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-56 object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;


