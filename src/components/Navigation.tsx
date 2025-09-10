import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", type: "link" },
    { name: "About", href: "/about", type: "link" },
    { name: "Products", href: "/products", type: "link" },
    { name: "Gallery", href: "/gallery", type: "link" },
    { name: "Farming", href: "/farming-process", type: "link" },
    { name: "Blog", href: "/blog", type: "link" },
    { name: "Reviews", href: "#testimonials", type: "scroll" },
    { name: "Contact", href: "/contact", type: "link" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        window.location.href = `/${href}`;
        setIsMobileMenuOpen(false);
        return;
      }
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-forest-dark/95 backdrop-blur-md shadow-card"
          : "bg-forest-dark/80"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/c30b18c4-72ef-4dd7-b2f8-d3779dfda6b7.png"
              alt="EarthCap Mushrooms logo - organic mushroom brand"
              className="h-12 w-12 rounded-full"
              loading="lazy"
            />
            <div>
              <h1 className="text-xl font-bold text-white">EarthCap</h1>
              <p className="text-sm text-golden-bright">Fresh Mushrooms</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === "link" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="relative text-white hover:text-golden-bright transition-smooth font-medium px-3 py-2 rounded-md hover:bg-white/10 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-golden-bright transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-white hover:text-golden-bright transition-smooth font-medium px-3 py-2 rounded-md hover:bg-white/10 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-golden-bright transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            ))}
            <Button variant="primary" size="sm" asChild>
              <Link to="/checkout">Shop Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-golden-bright transition-smooth"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.type === "link" ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-white hover:text-golden-bright transition-smooth font-medium px-3 py-2 rounded-md hover:bg-white/10"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-white hover:text-golden-bright transition-smooth font-medium px-3 py-2 rounded-md hover:bg-white/10"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <Button variant="primary" size="sm" className="self-start" asChild>
                <Link to="/products">Shop Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;