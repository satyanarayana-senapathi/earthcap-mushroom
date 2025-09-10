import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Leaf, Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About EarthCap - Our Story of Growing Premium Organic Mushrooms</title>
        <meta name="description" content="Learn about EarthCap's journey in growing premium Milky Mushrooms and Button Mushrooms using sustainable, organic farming practices. Our commitment to quality and nature." />
        <meta name="keywords" content="EarthCap story, organic mushroom farming, sustainable agriculture, Milky Mushrooms, Button Mushrooms, farm to table" />
        <link rel="canonical" href="https://earthcap.in/about" />
      </Helmet>

      <div className="min-h-screen relative">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Our Story at EarthCap
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Growing premium organic mushrooms with passion, care, and sustainable farming practices
                </p>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-6">From Seed to Harvest</h2>
                    <p className="text-muted-foreground mb-4">
                      EarthCap began as a small family farm with a simple mission: to grow the freshest, 
                      most nutritious mushrooms using completely natural methods. Our journey started when 
                      we discovered the incredible potential of Milky Mushrooms and Button Mushrooms grown 
                      without any chemicals or artificial additives.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Today, EarthCap has become a trusted name in organic mushroom farming, delivering 
                      farm-fresh quality directly to your table. Every mushroom we grow represents our 
                      commitment to sustainable agriculture and healthy living.
                    </p>
                    <p className="text-muted-foreground">
                      We believe that the best mushrooms come from the earth, nurtured by time, care, 
                      and respect for natural growing cycles.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                    <img 
                      src="/lovable-uploads/c30b18c4-72ef-4dd7-b2f8-d3779dfda6b7.png" 
                      alt="EarthCap organic mushroom farming - sustainable agriculture practices"
                      className="w-full h-64 object-contain rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Core Values</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
                    <p className="text-muted-foreground">No chemicals, pesticides, or artificial additives in our growing process</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Farm Fresh</h3>
                    <p className="text-muted-foreground">Harvested daily and delivered at peak freshness and nutrition</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                    <p className="text-muted-foreground">Hand-selected mushrooms meeting our highest standards</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                    <p className="text-muted-foreground">Dedicated to providing exceptional service and satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-primary mb-8">Our Mission</h2>
                <p className="text-xl text-muted-foreground mb-6">
                  To revolutionize how people experience mushrooms by providing the freshest, 
                  most nutritious organic Milky Mushrooms and Button Mushrooms while promoting 
                  sustainable farming practices that respect our earth.
                </p>
                <p className="text-lg text-muted-foreground">
                  Every EarthCap mushroom is a testament to our dedication to quality, 
                  sustainability, and the belief that nature knows best.
                </p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;