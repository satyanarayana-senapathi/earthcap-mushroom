import { Button } from "@/components/ui/button";
import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Farming Process", href: "#process" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/lovable-uploads/c30b18c4-72ef-4dd7-b2f8-d3779dfda6b7.png"
                alt="EarthCap Logo"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="text-2xl font-bold">EarthCap</h3>
                <p className="text-primary-foreground/80">Fresh Mushrooms</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-md">
              Premium organic mushrooms grown with love and delivered fresh to your doorstep. 
              Experience the difference of naturally cultivated, chemical-free mushrooms.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">Organic Farm, Green Valley, Karnataka</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">hello@earthcap.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-forest-dark transition-smooth"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <Button 
              variant="outline" 
              className="w-full border-accent text-accent hover:bg-accent hover:text-forest-dark"
              onClick={() => window.open("https://wa.me/919876543210", "_blank")}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="bg-primary-foreground/5 rounded-2xl p-8 text-center">
            <h4 className="text-xl font-semibold mb-2">Stay Fresh with EarthCap</h4>
            <p className="text-primary-foreground/80 mb-6">
              Get updates on fresh harvests, special offers, and mushroom care tips!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground border-0 focus:ring-2 focus:ring-accent"
              />
              <Button variant="hero" className="px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 EarthCap Mushrooms. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-primary-foreground/70 text-sm mt-2 md:mt-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-accent" />
              <span>for mushroom lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;