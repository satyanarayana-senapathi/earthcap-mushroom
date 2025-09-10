import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🍄",
      description: "Thank you for reaching out. We'll get back to you soon!"
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 94945 25944",
      action: "tel:+919494525944"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat with us",
      action: "https://wa.me/919494525944"
    },
    {
      icon: Mail,
      title: "Email",
      value: "mushrooms@earthcap.in",
      action: "mailto:mushrooms@earthcap.in"
    },
    {
      icon: MapPin,
      title: "Visit Farm",
      value: "Katravulaplli,Peddapuram,Andhra Pradesh-533437",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/20 text-forest-dark">
            📞 Get in Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our mushrooms? Want to place a bulk order?
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">
              Reach Out to EarthCap
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-center space-x-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-spring group"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-spring">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Quick WhatsApp CTA */}
            <div className="bg-gradient-card p-6 rounded-xl border border-accent/20">
              <h4 className="font-semibold text-primary mb-2">Quick Order</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Need mushrooms urgently? WhatsApp us for instant response!
              </p>
              <Button 
                variant="primary" 
                className="w-full"
                onClick={() => window.open("https://wa.me/919494525944", "_blank")}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Now
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-card">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone *
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email *
                </label>
                <Input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="rounded-lg"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your mushroom needs..."
                  rows={5}
                  required
                  className="rounded-lg resize-none"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;