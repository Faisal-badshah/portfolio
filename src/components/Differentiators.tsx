import { motion } from "framer-motion";
import { Code2, TrendingUp, Globe } from "lucide-react";

const items = [
  {
    icon: Code2,
    title: "Built From Zero",
    desc: "Every project is custom architecture — no templates, no shortcuts. Clean code, scalable systems.",
  },
  {
    icon: TrendingUp,
    title: "Client Acquisition Proof",
    desc: "10+ enterprise clients acquired in 2 months through a single platform I built.",
  },
  {
    icon: Globe,
    title: "Global Scale Ready",
    desc: "Serving UK clients today, scaling to Japan, Italy & Europe. Multi-timezone, multi-language.",
  },
];

const Differentiators = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group border border-border rounded-lg p-8 card-hover"
          >
            <item.icon className="text-primary mb-5" size={28} strokeWidth={1.5} />
            <h3 className="font-display text-lg font-semibold mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentiators;
