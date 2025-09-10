import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Fresh Milky Mushrooms",
      emoji: "🍄",
      description: "Premium white milky mushrooms with delicate flavor and meaty texture. Perfect for curries, stir-fries, and gourmet dishes.",
      price: "₹180",
      unit: "per 250g",
      features: ["Organic", "Fresh Daily", "No Chemicals"],
      rating: 4.9,
      image: "milky-mushroom"
    },
    {
      id: 2,
      name: "Button Mushrooms",
      emoji: "🍄",
      description: "Classic button mushrooms with firm texture and earthy flavor. Versatile ingredient for all your culinary needs.",
      price: "₹120",
      unit: "per 250g",
      features: ["Farm Fresh", "Premium Quality", "Natural"],
      rating: 4.8,
      image: "button-mushroom"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/20 text-forest-dark">
            🍄 Our Premium Products
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Fresh Mushroom Varieties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked, naturally grown mushrooms delivered fresh to your doorstep.
            Each variety carefully cultivated for maximum flavor and nutrition.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl shadow-card hover:shadow-glow transition-spring overflow-hidden"
            >
              {/* Product Image */}
              <div className="h-64 bg-gradient-card flex items-center justify-center relative overflow-hidden">
                <div className="text-8xl group-hover:scale-110 transition-spring float">
                  {product.emoji}
                </div>
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" className="rounded-full bg-background/50 backdrop-blur-sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature) => (
                    <Badge
                      key={feature}
                      variant="secondary"
                      className="bg-sage-green/20 text-forest-dark border-sage-green/30"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-accent">
                        {product.price}
                      </span>
                      <span className="text-sm text-muted-foreground ml-2">
                        {product.unit}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="primary" className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to={product.id === 1 ? "/products/milky-mushroom" : "/products/button-mushroom"}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8" asChild>
            <Link to="/products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;