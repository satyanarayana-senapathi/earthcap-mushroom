import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Leaf, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Premium Organic Mushrooms - Milky & Button Mushrooms | EarthCap</title>
        <meta name="description" content="Shop EarthCap's premium organic Milky Mushrooms and Button Mushrooms. Fresh, nutritious, and sustainably grown. Free delivery on orders over $25." />
        <meta name="keywords" content="buy mushrooms online, Milky Mushrooms, Button Mushrooms, organic mushrooms, fresh mushrooms, EarthCap products" />
        <link rel="canonical" href="https://earthcap.com/products" />
      </Helmet>

      <div className="min-h-screen relative">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Premium Organic Mushrooms
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fresh Milky Mushrooms and Button Mushrooms grown with care and delivered to your door
                </p>
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Milky Mushrooms */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-primary/10">
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">🍄</div>
                      <h2 className="text-3xl font-bold text-primary mb-2">Milky Mushrooms</h2>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">(4.9/5)</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 text-center">
                      Premium white Milky Mushrooms known for their tender texture and mild, delicate flavor. 
                      Perfect for soups, stir-fries, and gourmet cooking.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex flex-wrap gap-2 justify-center">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          <Leaf className="w-3 h-3 mr-1" />
                          100% Organic
                        </Badge>
                        <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                          <Award className="w-3 h-3 mr-1" />
                          Premium Grade
                        </Badge>
                        <Badge variant="outline">Fresh Daily</Badge>
                        <Badge variant="outline">High Protein</Badge>
                      </div>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-primary mb-2">₹180/kg</div>
                      <p className="text-sm text-muted-foreground">Free delivery on orders over ₹500</p>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button asChild className="flex-1">
                        <Link to="/products/milky-mushroom">
                          View Details
                        </Link>
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Button Mushrooms */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-primary/10">
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">🍄</div>
                      <h2 className="text-3xl font-bold text-primary mb-2">Button Mushrooms</h2>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">(4.8/5)</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 text-center">
                      Classic white Button Mushrooms with firm texture and earthy flavor. 
                      Versatile for all cooking styles from pizza toppings to pasta dishes.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex flex-wrap gap-2 justify-center">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          <Leaf className="w-3 h-3 mr-1" />
                          100% Organic
                        </Badge>
                        <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                          <Award className="w-3 h-3 mr-1" />
                          Premium Grade
                        </Badge>
                        <Badge variant="outline">Fresh Daily</Badge>
                        <Badge variant="outline">Low Calorie</Badge>
                      </div>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-primary mb-2">₹150/kg</div>
                      <p className="text-sm text-muted-foreground">Free delivery on orders over ₹500</p>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button asChild className="flex-1">
                        <Link to="/products/button-mushroom">
                          View Details
                        </Link>
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Our Mushrooms */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-primary mb-12">Why Choose EarthCap Mushrooms?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Certified Organic</h3>
                    <p className="text-muted-foreground">Grown without chemicals, pesticides, or synthetic fertilizers</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                    <p className="text-muted-foreground">Hand-picked and quality-checked for freshness and nutrition</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingCart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                    <p className="text-muted-foreground">Fresh from farm to your door within 24 hours</p>
                  </div>
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

export default Products;