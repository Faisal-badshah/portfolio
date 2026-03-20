import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Moon } from "lucide-react";
import { WA_URL } from "./OfferHero";

export const OfferCTA = () => (
  <section className="py-24 border-t border-border">
    <div className="container mx-auto px-6 max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Moon size={28} className="text-primary mx-auto mb-4" />
        <span className="font-mono text-sm text-primary mb-4 block">
          // Let's Build This Together
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Ready to Get Your Business{" "}
          <span className="text-gradient">Online This Eid?</span>
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Offer ends <strong className="text-foreground">March 31st</strong>.
          Only 5 spots left this month. Message me right now — it takes 2
          minutes and there's zero commitment.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={WA_URL()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-200 neon-glow-sm text-base w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} />
            WhatsApp Me Right Now
          </a>
          <a
            href="#packages"
            className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-8 py-4 rounded-lg hover:border-primary/50 transition-all duration-200 text-base w-full sm:w-auto justify-center"
          >
            View Packages <ArrowRight size={16} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <a
            href="tel:+917903657504"
            className="font-mono hover:text-primary transition-colors"
          >
            📞 +91 79036 57504
          </a>
          <span className="hidden sm:block">·</span>
          <a
            href="mailto:faisalbadshah46@gmail.com"
            className="font-mono hover:text-primary transition-colors"
          >
            ✉️ faisalbadshah46@gmail.com
          </a>
        </div>

        <p className="mt-6 font-mono text-xs text-muted-foreground">
          No commitment. No pressure. Just an honest conversation about your business.
        </p>
      </motion.div>
    </div>
  </section>
);

// ── Sticky floating WhatsApp button (mobile) ──────────────────────────────────
export const OfferWhatsAppFloat = () => (
  <a
    href={WA_URL()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-3.5 rounded-full shadow-lg hover:brightness-110 transition-all duration-200 neon-glow sm:hidden"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={20} />
    <span className="text-sm">WhatsApp</span>
  </a>
);