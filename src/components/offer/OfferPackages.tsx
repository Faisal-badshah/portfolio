import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, MessageCircle, Clock, AlertTriangle, Zap } from "lucide-react";
import { WA_URL } from "./OfferHero";

const packages = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "Landing Page",
    price: "₹4,999",
    original: "₹8,000",
    savings: "Save ₹3,001",
    delivery: "3–4 days",
    ideal: "Ideal for: Coaches, freelancers, small shops",
    featured: false,
    waMsg: "Starter Landing Page (₹4,999)",
    features: [
      { label: "1-page professional website", yes: true },
      { label: "Mobile optimised", yes: true },
      { label: "WhatsApp click-to-chat button", yes: true },
      { label: "Contact / enquiry form", yes: true },
      { label: "Google Maps embed", yes: true },
      { label: "Basic SEO setup", yes: false },
      { label: "Up to 7 pages", yes: false },
      { label: "Payment integration", yes: false },
    ],
  },
  {
    id: "business",
    name: "Business",
    subtitle: "Full Website",
    price: "₹9,999",
    original: "₹18,000",
    savings: "Save ₹8,001",
    delivery: "5–7 days",
    ideal: "Ideal for: Local businesses, clinics, institutes",
    featured: true,
    waMsg: "Business Website (₹9,999)",
    features: [
      { label: "Up to 7 pages", yes: true },
      { label: "Mobile optimised", yes: true },
      { label: "WhatsApp click-to-chat button", yes: true },
      { label: "Contact / enquiry form", yes: true },
      { label: "Google Maps embed", yes: true },
      { label: "Basic SEO setup", yes: true },
      { label: "1 free revision", yes: true },
      { label: "Payment integration", yes: false },
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    subtitle: "Online Store",
    price: "₹17,999",
    original: "₹30,000",
    savings: "Save ₹12,001",
    delivery: "10–12 days",
    ideal: "Ideal for: Clothing, food, product businesses",
    featured: false,
    waMsg: "E-Commerce Store (₹17,999)",
    features: [
      { label: "Full product catalogue", yes: true },
      { label: "Mobile optimised", yes: true },
      { label: "WhatsApp click-to-chat button", yes: true },
      { label: "Contact / enquiry form", yes: true },
      { label: "Google Maps embed", yes: true },
      { label: "Basic SEO setup", yes: true },
      { label: "Payment integration (UPI/Cards)", yes: true },
      { label: "1 free revision", yes: true },
    ],
  },
];

const OfferPackages = () => {
  const [selected, setSelected] = useState<string>("business");

  return (
    <section id="packages" className="py-20 border-t border-border scroll-mt-20">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-mono text-sm text-primary mb-2 block">
            // Eid Special Packages
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            🎁 Simple Pricing.{" "}
            <span className="text-gradient">No Hidden Costs.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Select a package below — clicking "Get Started" will open WhatsApp
            with your choice already filled in.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {packages.map((pkg, i) => {
            const isSelected = selected === pkg.id;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => setSelected(pkg.id)}
                className={`relative border rounded-xl p-7 flex flex-col cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? "border-primary/60 bg-primary/5 neon-glow-sm scale-[1.02]"
                    : pkg.featured
                    ? "border-primary/20 bg-card/50 hover:border-primary/40"
                    : "border-border bg-card/50 hover:border-border hover:brightness-105"
                }`}
              >
                {/* Most popular badge */}
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[10px] bg-primary text-primary-foreground px-3 py-1 rounded-full whitespace-nowrap">
                    ⚡ Most Popular
                  </span>
                )}

                {/* Selected indicator */}
                {isSelected && (
                  <span className="absolute -top-3 right-4 font-mono text-[10px] bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                    ✓ Selected
                  </span>
                )}

                {/* Package name */}
                <div className="mb-4">
                  <h3 className="font-display font-bold text-lg">{pkg.name}</h3>
                  <p className="font-mono text-xs text-primary mt-0.5">{pkg.subtitle}</p>
                  <p className="text-[11px] text-muted-foreground mt-1.5">{pkg.ideal}</p>
                </div>

                {/* Price */}
                <div className="mb-5 pb-5 border-b border-border">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground text-sm line-through">{pkg.original}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-mono text-primary">{pkg.savings}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock size={11} />{pkg.delivery}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 flex-1 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-2 text-sm">
                      {f.yes ? (
                        <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                      ) : (
                        <XCircle size={14} className="text-muted-foreground/30 flex-shrink-0" />
                      )}
                      <span className={f.yes ? "text-foreground" : "text-muted-foreground/40"}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={WA_URL(pkg.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`w-full text-center py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    isSelected
                      ? "bg-primary text-primary-foreground hover:brightness-110 neon-glow-sm"
                      : pkg.featured
                      ? "border border-primary/40 text-primary hover:bg-primary/10"
                      : "border border-border text-foreground hover:border-primary/40"
                  }`}
                >
                  <MessageCircle size={15} />
                  Get Started on WhatsApp
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* What's included note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <p className="text-sm text-muted-foreground">
            <Zap size={13} className="inline text-primary mr-1" />
            All packages include:{" "}
            <strong className="text-foreground">free domain setup</strong>,{" "}
            <strong className="text-foreground">hosting configuration</strong>, mobile
            optimisation, and{" "}
            <strong className="text-foreground">1 month free support</strong> after launch.
          </p>
        </motion.div>

        {/* Urgency note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-start gap-3 border border-yellow-500/20 bg-yellow-500/5 rounded-lg p-4 max-w-lg mx-auto"
        >
          <AlertTriangle size={15} className="text-yellow-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Only{" "}
            <strong className="text-foreground">5 spots available</strong> this
            month. 50% advance via UPI confirms your booking. Offer ends{" "}
            <strong className="text-foreground">March 31st</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferPackages;