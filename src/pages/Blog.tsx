import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    { slug: "mushroom-recipes-beginners", title: "5 Easy Mushroom Recipes for Beginners", excerpt: "Quick, delicious recipes using Milky and Button Mushrooms.", date: "2025-01-10" },
    { slug: "benefits-organic-mushrooms", title: "Health Benefits of Organic Mushrooms", excerpt: "Why Milky and Button Mushrooms deserve a place in your diet.", date: "2025-01-10" },
  ];

  return (
    <>
      <Helmet>
        <title>EarthCap Blog - Mushroom Recipes & Farming Tips</title>
        <meta name="description" content="Explore mushroom recipes, farming tips, and health benefits on the EarthCap blog. Fresh insights about Milky and Button Mushrooms." />
        <meta name="keywords" content="mushroom recipes, farming tips, organic mushrooms blog, Milky Mushrooms recipes, Button Mushrooms recipes, EarthCap blog" />
        <link rel="canonical" href="https://earthcap.in/blog" />
      </Helmet>

      <div className="min-h-screen relative">
        <Navigation />
        <main className="pt-20">
          <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">EarthCap Blog</h1>
                <p className="text-xl text-muted-foreground">Recipes, tips, and insights about Milky and Button Mushrooms</p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {posts.map((post) => (
                  <Link key={post.slug} to="#" className="block bg-card p-6 rounded-xl shadow-card hover:shadow-glow transition-spring">
                    <h2 className="text-2xl font-bold text-primary mb-2">{post.title}</h2>
                    <p className="text-muted-foreground mb-3">{post.excerpt}</p>
                    <span className="text-sm text-muted-foreground">{new Date(post.date).toDateString()}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;


