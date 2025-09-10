import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Home Chef",
      rating: 5,
      text: "EarthCap mushrooms are incredibly fresh! The milky mushrooms have such a perfect texture for my curries. My family loves them!",
      image: "👩‍🍳"
    },
    {
      name: "Rajesh Kumar",
      role: "Restaurant Owner",
      rating: 5,
      text: "We've been sourcing from EarthCap for 6 months. Consistent quality, always fresh, and great customer service. Highly recommended!",
      image: "👨‍🍳"
    },
    {
      name: "Anita Patel",
      role: "Health Enthusiast",
      rating: 5,
      text: "Finally found organic mushrooms that are truly chemical-free! The button mushrooms are perfect for my healthy meal preps.",
      image: "🧘‍♀️"
    },
    {
      name: "Chef Mohan",
      role: "Professional Chef",
      rating: 5,
      text: "Superior quality mushrooms with excellent shelf life. EarthCap has become my go-to supplier for premium ingredients.",
      image: "👨‍🍳"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/20 text-forest-dark">
            ⭐ Customer Love
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers
            have to say about EarthCap mushrooms.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-glow transition-spring group relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-smooth">
                <Quote className="h-12 w-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-card px-8 py-6 rounded-2xl shadow-soft">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">4.9⭐</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;