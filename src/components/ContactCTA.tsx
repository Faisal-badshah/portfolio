import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const ContactCTA = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <span className="font-mono text-sm text-primary mb-4 block">// Let's Talk</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Ready to Turn Your Website Into a <span className="text-gradient">Growth Machine</span>?
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          Book a free 30-minute call. I'll give you honest technical feedback and a realistic roadmap — no obligation.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://calendly.com/faisalbadshah46/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-4 rounded-lg hover:brightness-110 transition-all neon-glow-sm"
          >
            <Calendar size={16} /> Free Consultation
          </a>
          <a
            href="mailto:faisalbadshah46@gmail.com"
            className="inline-flex items-center gap-2 border border-primary/50 text-primary font-medium px-8 py-4 rounded-lg hover:bg-primary/10 transition-all"
          >
            Send Project Brief <ArrowRight size={16} />
          </a>
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          I respond within 24 hours.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ContactCTA;
