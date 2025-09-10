import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Users, Award, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Leaf,
      title: "100% Organic",
      description: "No chemicals, pesticides, or artificial additives. Pure natural cultivation."
    },
    {
      icon: Users,
      title: "Family Owned",
      description: "Proudly family-operated farm with three generations of expertise."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Handpicked, graded, and packaged with utmost care for freshness."
    },
    {
      icon: Heart,
      title: "Grown with Love",
      description: "Every mushroom is nurtured with passion and sustainable practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <Badge className="mb-4 bg-accent/20 text-forest-dark">
              🌱 Our Story
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Cultivating Nature's
              <span className="block text-accent">Finest Mushrooms</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At EarthCap, we believe in the power of natural farming. Our journey began
              with a simple mission: to provide the freshest, most nutritious mushrooms
              while respecting the environment and our community.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Using sustainable farming practices passed down through generations,
              we cultivate premium Milky and Button mushrooms in controlled,
              chemical-free environments that maximize both flavor and nutrition.
            </p>
            <Button variant="primary" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-soft hover:shadow-card transition-spring group"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-spring">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-card rounded-2xl p-8 md:p-12 shadow-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">1+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Organic Certified</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Fresh Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;