import { Button } from "@/components/ui/button";
import { ChevronRight, Leaf, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-primary/10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <Leaf className="h-8 w-8 text-accent float" />
      </div>
      <div className="absolute top-40 right-20 opacity-20">
        <Heart className="h-6 w-6 text-secondary float-delayed" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-25">
        <Leaf className="h-10 w-10 text-accent float-delayed" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <span className="text-2xl">🍄</span>
            <span className="text-sm font-medium text-forest-dark">
              Farm Fresh • 100% Natural • Premium Quality
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            EarthCap – Fresh Milky & Button{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Mushrooms
            </span>
            <br />
            Delivered with Care
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Premium organic Milky Mushrooms and Button Mushrooms grown naturally without chemicals. 
            Farm-to-table freshness with sustainable farming practices delivered to your doorstep.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              className="group px-8 py-4"
            >
              Shop Fresh Mushrooms
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 rounded-xl"
            >
              Learn Our Process
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-primary-foreground/80">Natural</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">5⭐</div>
              <div className="text-sm text-primary-foreground/80">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-primary-foreground/80">Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;