import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type ProductKey = "milky" | "button" | "mixed";

const PRODUCT_MAP: Record<ProductKey, { label: string; price: string }> = {
  milky: { label: "Milky Mushrooms", price: "₹300/kg" },
  button: { label: "Button Mushrooms", price: "₹250/kg" },
  mixed: { label: "Mixed (Milky + Button)", price: "—" },
};

const useQuery = () => new URLSearchParams(useLocation().search);

const Checkout = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const initialProduct = (query.get("product") as ProductKey) || "mixed";

  const [form, setForm] = useState({
    product: initialProduct,
    quantity: "1 kg",
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "Cash on Delivery",
  });

  const productInfo = useMemo(() => PRODUCT_MAP[form.product as ProductKey], [form.product]);

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`COD Order - ${PRODUCT_MAP[form.product as ProductKey].label} (${form.quantity})`);
    const lines = [
      `New COD Order - EarthCap` ,
      `Product: ${PRODUCT_MAP[form.product as ProductKey].label}`,
      `Quantity: ${form.quantity}`,
      `Price (ref): ${productInfo.price}`,
      "",
      "Customer Details:",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : undefined,
      `Address: ${form.address}`,
      "",
      `Notes: ${form.notes}`,
      "",
      "Payment Method: Cash on Delivery",
    ].filter(Boolean) as string[];

    const message = encodeURIComponent(lines.join("\n"));

    // Send WhatsApp message to EarthCap number
    const whatsappNumber = "919494525944"; // +91 94945 25944
    const waUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(waUrl, "_blank");

    // Fallback: also open email draft
    const body = message;
    setTimeout(() => {
      window.location.href = `mailto:mushrooms@earthcap.in?subject=${subject}&body=${body}`;
    }, 300);
  };

  return (
    <>
      <Helmet>
        <title>Checkout - Cash on Delivery | EarthCap Mushrooms</title>
        <meta name="description" content="Place a Cash on Delivery order for EarthCap Milky or Button Mushrooms. Enter your address and contact details to receive fresh mushrooms." />
        <link rel="canonical" href="https://earthcap.in/checkout" />
      </Helmet>

      <div className="min-h-screen relative">
        <Navigation />

        <main className="pt-20">
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-card p-8">
                <h1 className="text-3xl font-bold text-primary mb-6">Checkout (COD)</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Product</label>
                      <select
                        name="product"
                        value={form.product}
                        onChange={update}
                        className="w-full rounded-md border px-3 py-2 bg-background"
                      >
                        <option value="milky">Milky Mushrooms</option>
                        <option value="button">Button Mushrooms</option>
                        <option value="mixed">Mixed (Milky + Button)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Quantity</label>
                      <Input name="quantity" value={form.quantity} onChange={update} placeholder="e.g., 1 kg" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input name="name" value={form.name} onChange={update} placeholder="Your full name" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone</label>
                      <Input name="phone" value={form.phone} onChange={update} placeholder="+91 9XXXXXXXXX" required />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email (optional)</label>
                    <Input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Delivery Address</label>
                    <Textarea name="address" value={form.address} onChange={update} placeholder="House/Flat, Street, Area, City, Pincode" rows={4} required />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Notes</label>
                    <Input name="notes" value={form.notes} onChange={update} placeholder="Any delivery instructions" />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-sm text-muted-foreground">
                      <div>Selected: <span className="font-medium text-foreground">{PRODUCT_MAP[form.product as ProductKey].label}</span></div>
                      <div>Reference Price: {productInfo.price}</div>
                    </div>
                    <div className="flex gap-3">
                      <Button type="button" variant="outline" onClick={() => navigate(-1)}>Back</Button>
                      <Button type="submit">Place COD Order</Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Checkout;


