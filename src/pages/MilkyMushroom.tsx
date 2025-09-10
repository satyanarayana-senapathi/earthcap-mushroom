import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Leaf, Award, Truck, Shield } from "lucide-react";

const MilkyMushroom = () => {
  return (
    <>
      <Helmet>
        <title>Premium Organic Milky Mushrooms - Fresh & Natural | EarthCap</title>
        <meta name="description" content="Buy premium organic Milky Mushrooms from EarthCap. Fresh, tender texture, mild flavor. Perfect for soups, stir-fries. ₹300/kg with free delivery over ₹500." />
        <meta name="keywords" content="Milky Mushrooms, organic Milky Mushrooms, buy Milky Mushrooms online, EarthCap Milky Mushrooms, fresh mushrooms delivery" />
        <link rel="canonical" href="https://earthcap.in/products/milky-mushroom" />
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
                    <img 
                      src="/lovable-uploads/695f036f-896b-4ec0-baf2-a73dd765ce89.png" 
                      alt="Fresh organic Milky Mushrooms from EarthCap - premium quality white mushrooms"
                      className="w-full h-64 object-contain rounded-lg"
                      loading="lazy"
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
                      Premium Milky Mushrooms
                    </h1>
                    
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-muted-foreground ml-2">(4.9/5 from 150+ reviews)</span>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6">
                      Our premium organic Milky Mushrooms are known for their tender texture, 
                      mild delicate flavor, and exceptional nutritional value. Grown naturally 
                      without any chemicals or pesticides, these white beauties are perfect for 
                      gourmet cooking, soups, and stir-fries.
                    </p>
                    
                    <div className="text-3xl font-bold text-primary mb-6">
                      ₹300/kg
                      <span className="text-sm font-normal text-muted-foreground ml-2">
                        Free delivery on orders over ₹500
                      </span>
                    </div>
                    
                    <div className="flex gap-4 mb-6">
                      <Button size="lg" className="flex-1" asChild>
                        <a href="/checkout?product=milky">
                          <ShoppingCart className="w-5 h-5 mr-2" />
                          Add to Cart
                        </a>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <a href="/checkout?product=milky">Buy Now</a>
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
                  About Our Milky Mushrooms
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Nutritional Benefits</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>High in protein and essential amino acids</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Rich in vitamins B2, B3, and D</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Low in calories and fat-free</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Contains potassium and selenium</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Natural source of antioxidants</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Best Uses</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Perfect for mushroom soups and broths</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Excellent in stir-fries and curries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Great for grilling and roasting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Ideal for pasta and rice dishes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Can be used fresh or dried</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Storage & Preparation */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-primary mb-12">
                  Storage & Preparation Tips
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Storage</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Store in refrigerator at 2-4°C</li>
                      <li>• Keep in original packaging or paper bag</li>
                      <li>• Use within 3-5 days for best freshness</li>
                      <li>• Do not wash until ready to use</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Preparation</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Gently clean with damp cloth</li>
                      <li>• Trim stem ends if needed</li>
                      <li>• Slice or use whole as desired</li>
                      <li>• Cook lightly to retain nutrients</li>
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

export default MilkyMushroom;