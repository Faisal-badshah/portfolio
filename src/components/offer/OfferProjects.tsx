import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Qubit IT Solutions",
    badge: "Enterprise Platform",
    result: "10+ enterprise clients acquired in 2 months of launch",
    desc: "Custom platform that established market credibility and drove client acquisition at scale.",
    tags: ["React", "Next.js", "Node.js"],
    featured: false,
  },
  {
    name: "Touch IT Solutions",
    badge: "International Platform",
    result: "Credible UK market presence established from day one",
    desc: "Multi-currency payments and localised experience for the UK market.",
    tags: ["React", "Payment Integration", "i18n"],
    featured: true,
  },
  {
    name: "Ride Bus",
    badge: "SaaS Platform",
    result: "Fully operational platform serving multiple agencies",
    desc: "Real-time tracking and automated scheduling for transport agencies.",
    tags: ["Next.js", "Real-Time", "Auto-Scaling"],
    featured: false,
  },
];

const OfferProjects = () => (
  <section className="py-20 border-t border-border">
    <div className="container mx-auto px-6 max-w-5xl">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="font-mono text-sm text-primary mb-2 block">
          // Real Work
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
          Real Projects.{" "}
          <span className="text-gradient">Real Results.</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-lg mx-auto">
          I've built for businesses in India and the UK. Here's what I've delivered.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`border rounded-xl p-7 bg-card/50 card-hover flex flex-col ${
              p.featured ? "border-primary/40 neon-glow-sm" : "border-border"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              {p.featured && <Star size={13} className="text-primary" />}
              <h3 className="font-display font-semibold">{p.name}</h3>
            </div>
            <span className="font-mono text-xs text-primary block mb-3">{p.badge}</span>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.desc}</p>
            <div className="flex items-center gap-2 text-sm text-secondary mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
              {p.result}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-[11px] border border-border rounded-full px-2.5 py-0.5 text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-primary hover:brightness-125 transition-colors"
        >
          View full portfolio <ExternalLink size={13} />
        </Link>
      </motion.div>

    </div>
  </section>
);

export default OfferProjects;