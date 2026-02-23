import { motion } from "framer-motion";
import { Globe, Rocket, Target, Zap, Calendar } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "High-Conversion Business Websites",
    desc: "Fast, mobile-optimized websites engineered to convert visitors into paying customers.",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    icon: Rocket,
    title: "Custom SaaS Platforms",
    desc: "Full-stack SaaS from concept to launch — multi-tenant, payments, real-time dashboards.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    icon: Target,
    title: "Lead-Generation Landing Pages",
    desc: "High-impact landing pages with A/B testing, analytics, and optimized conversion funnels.",
    tags: ["React", "Analytics", "SEO"],
  },
  {
    icon: Zap,
    title: "Automation & API Integrations",
    desc: "Connect your tools, automate workflows, and eliminate manual processes with custom APIs.",
    tags: ["REST APIs", "Webhooks", "Automation"],
  },
];

const Services = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="font-mono text-sm text-primary mb-2 block">// Services</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">
          What I Can <span className="text-gradient">Build For You</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="border border-border rounded-xl p-8 card-hover group bg-card/50"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:neon-glow-sm transition-all duration-300">
              <s.icon className="text-primary" size={24} strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] border border-border rounded-full px-3 py-1 text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA after services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <a
          href="https://calendly.com/faisalbadshah46/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-200 neon-glow-sm"
        >
          <Calendar size={16} />
          Book a Free Consultation
        </a>
      </motion.div>
    </div>
  </section>
);

export default Services;
