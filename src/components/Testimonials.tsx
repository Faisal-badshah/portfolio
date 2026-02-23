import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Faisal built our website from scratch and it directly led to 10+ new enterprise clients in just 2 months. His understanding of our business and technical expertise is exceptional.",
    name: "Qubit IT Solutions",
    role: "Founder",
  },
  {
    quote:
      "Professional, reliable, and incredibly fast. Faisal delivered a platform that competes with the best in the UK market. Highly recommended.",
    name: "Touch IT Solutions",
    role: "Director",
  },
];

const Testimonials = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="font-mono text-sm text-primary mb-2 block">// Client Feedback</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Testimonials</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="border border-border rounded-lg p-8"
          >
            <Quote size={20} className="text-primary mb-4" />
            <p className="text-sm leading-relaxed mb-6">{t.quote}</p>
            <footer className="font-mono text-xs text-muted-foreground">
              — {t.role}, <span className="text-primary">{t.name}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
