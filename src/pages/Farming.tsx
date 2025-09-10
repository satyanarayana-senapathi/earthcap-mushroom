import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Farming = () => {
  return (
    <>
      <Helmet>
        <title>EarthCap Farming Process - How We Grow Organic Mushrooms</title>
        <meta name="description" content="Discover EarthCap's sustainable farming process for growing organic Milky and Button Mushrooms. Learn about substrate preparation, incubation, fruiting, and harvesting." />
        <meta name="keywords" content="mushroom farming process, how mushrooms grow, organic mushroom cultivation, Milky Mushrooms farming, Button Mushrooms farming, EarthCap farming" />
        <link rel="canonical" href="https://earthcap.in/farming-process" />
      </Helmet>

      <div className="min-h-screen relative">
        <Navigation />

        <main className="pt-20">
          <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Farming Process</h1>
                <p className="text-xl text-muted-foreground">Sustainable, chemical-free cultivation from substrate to harvest</p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">1. Substrate Preparation</h2>
                  <p className="text-muted-foreground">We prepare nutrient-rich, pasteurized substrates tailored for Milky and Button Mushrooms using agricultural byproducts, ensuring optimal moisture and nutrition.</p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">2. Inoculation & Incubation</h2>
                  <p className="text-muted-foreground">Premium quality spawn is carefully inoculated in sterile conditions. Bags are incubated at controlled temperatures to allow strong mycelium growth.</p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">3. Fruiting</h2>
                  <p className="text-muted-foreground">Once colonized, substrates move to our fruiting rooms where humidity, airflow, and lighting are optimized to trigger healthy mushroom formation.</p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">4. Harvesting & Packing</h2>
                  <p className="text-muted-foreground">Mushrooms are harvested at peak freshness, quality-checked, and packed without preservatives for same-day delivery.</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Farming;


