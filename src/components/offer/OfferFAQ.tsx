import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "I'm not technical at all. Will I be able to manage it?",
    a: "Yes — completely. I handle everything: design, development, domain, and hosting. You give me your content (business name, photos, what you do) and I deliver a ready website. Zero technical knowledge needed from your side.",
  },
  {
    q: "What if I don't like the design?",
    a: "Before I build anything, I share a design preview with you. You can ask for changes at that stage. After final delivery, you get 1 free revision. Nothing goes live without your approval.",
  },
  {
    q: "How do I pay? Is it safe?",
    a: "50% advance via UPI to confirm your slot — this is how I know you're serious. The remaining 50% is only paid after you see and approve the final website. If you're not happy, we fix it before you pay the rest.",
  },
  {
    q: "How long will it actually take?",
    a: "Starter page: 3–4 days. Business site: 5–7 days. E-commerce: 10–12 days. I give you a delivery date in writing before starting — and I stick to it. Delays happen only if you're late providing content.",
  },
  {
    q: "What do I need to give you to get started?",
    a: "Just your business name, logo (if you have one), some photos of your work or products, and a rough idea of what you want to say. Don't worry if you don't have everything — I can help with suggestions too.",
  },
  {
    q: "Can't I just use Wix or AI to build a website for free?",
    a: "You can — but most business owners start and never finish, or end up with something that looks unprofessional. I deliver a polished, fast, mobile-optimised site in days. You focus on your business, I handle the technical work.",
  },
  {
    q: "Will my website show up on Google?",
    a: "Business and E-Commerce packages include basic SEO setup — proper page titles, meta descriptions, Google indexing, and site speed optimisation. This gives you a strong foundation. Full SEO results take a few weeks after launch.",
  },
  {
    q: "What happens after the 1 month free support ends?",
    a: "After the free month, I offer affordable maintenance at ₹999/month for small updates and support. Many clients handle their own updates after launch — I build the site to be easy to update if needed.",
  },
];

const OfferFAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-mono text-sm text-primary mb-2 block">// FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Questions You're{" "}
            <span className="text-gradient">Probably Thinking</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Everything you want to know before making a decision.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                open === i ? "border-primary/40 bg-primary/5" : "border-border bg-card/50"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-display font-semibold text-sm sm:text-base">{faq.q}</span>
                <ChevronDown
                  size={16}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OfferFAQ;