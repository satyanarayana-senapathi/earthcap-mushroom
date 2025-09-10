import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Leaf, Award, Truck, Shield } from "lucide-react";

const ButtonMushroom = () => {
  return (
    <>
      <Helmet>
        <title>Premium Organic Button Mushrooms - Fresh & Versatile | EarthCap</title>
        <meta name="description" content="Buy premium organic Button Mushrooms from EarthCap. Classic white mushrooms with firm texture, earthy flavor. ₹150/kg with free delivery over ₹500." />
        <meta name="keywords" content="Button Mushrooms, organic Button Mushrooms, buy Button Mushrooms online, EarthCap Button Mushrooms, white mushrooms delivery" />
        <link rel="canonical" href="https://earthcap.com/products/button-mushroom" />
      </Helmet>

      <div className="min-h-screen relative">
        <Navigation />
        
        <main className="pt-20">
          {/* Product Hero */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                    <div className="text-8xl mb-4">🍄</div>
                    <img 
                      src="/lovable-uploads/695f036f-896b-4ec0-baf2-a73dd765ce89.png" 
                      alt="Fresh organic Button Mushrooms from EarthCap - classic white mushrooms"
                      className="w-full h-64 object-contain rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        <Leaf className="w-3 h-3 mr-1" />
                        100% Organic
                      </Badge>
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                        Fresh Daily
                      </Badge>
                    </div>
                    
                    <h1 className="text-4xl font-bold text-primary mb-4">
                      Premium Button Mushrooms
                    </h1>
                    
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-muted-foreground ml-2">(4.8/5 from 200+ reviews)</span>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6">
                      Our classic organic Button Mushrooms feature a firm texture and rich, 
                      earthy flavor that makes them incredibly versatile for all cooking styles. 
                      From pizza toppings to pasta dishes, these white beauties are a kitchen staple 
                      grown without any chemicals or pesticides.
                    </p>
                    
                    <div className="text-3xl font-bold text-primary mb-6">
                      ₹150/kg
                      <span className="text-sm font-normal text-muted-foreground ml-2">
                        Free delivery on orders over ₹500
                      </span>
                    </div>
                    
                    <div className="flex gap-4 mb-6">
                      <Button size="lg" className="flex-1">
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="lg">
                        Buy Now
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-primary" />
                        <span>Same-day delivery</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        <span>Quality guarantee</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Product Details */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-primary mb-12">
                  About Our Button Mushrooms
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Nutritional Benefits</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Excellent source of protein and fiber</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Rich in B vitamins, especially B12</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Very low in calories and sodium</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Contains copper and selenium</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Natural source of ergothioneine</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Best Uses</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Perfect pizza and pasta toppings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Excellent in omelets and scrambles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Great for sautéing and frying</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Ideal for salads and appetizers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Excellent for stuffing recipes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recipe Ideas */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-primary mb-12">
                  Popular Recipe Ideas
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Stuffed Mushrooms</h3>
                    <p className="text-muted-foreground text-sm">
                      Remove stems, stuff caps with breadcrumbs, herbs, and cheese. Bake until golden.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Mushroom Risotto</h3>
                    <p className="text-muted-foreground text-sm">
                      Sauté sliced mushrooms and fold into creamy Arborio rice with parmesan.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Garlic Mushrooms</h3>
                    <p className="text-muted-foreground text-sm">
                      Quick sauté with garlic, butter, and fresh herbs. Perfect side dish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Storage & Preparation */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-primary mb-12">
                  Storage & Preparation Tips
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Storage</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Refrigerate in original packaging</li>
                      <li>• Keep in vegetable crisper drawer</li>
                      <li>• Use within 5-7 days for best quality</li>
                      <li>• Don't store in plastic bags</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Preparation</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Wipe clean with paper towel</li>
                      <li>• Trim stems if desired</li>
                      <li>• Slice, quarter, or use whole</li>
                      <li>• Don't overcook to maintain texture</li>
                    </ul>
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

export default ButtonMushroom;