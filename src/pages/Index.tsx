import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import ContactCTA from "@/components/ContactCTA";
import { motion } from "framer-motion";
import { ArrowRight, Star, ExternalLink, Calendar } from "lucide-react";

const featuredProjects = [
  {
    name: "Qubit IT Solutions",
    badge: "Enterprise Platform",
    result: "10+ Enterprise Clients in 2 Months",
    desc: "Custom enterprise platform that established market credibility and drove client acquisition at scale.",
    tags: ["React", "Next.js", "Node.js"],
  },
  {
    name: "Touch IT Solutions",
    badge: "International Platform",
    result: "Credible UK market presence established",
    desc: "International business platform with multi-currency payments and localized user experiences.",
    tags: ["React", "Payment Integration", "i18n"],
  },
  {
    name: "Ride Bus",
    badge: "SaaS Platform",
    result: "Fully operational SaaS serving multiple agencies",
    desc: "End-to-end SaaS platform with real-time tracking, automated scheduling, and multi-tenant architecture.",
    tags: ["Next.js", "Real-Time", "Auto-Scaling"],
    featured: true,
  },
];

const Index = () => (
  <>
    <Hero />
    <Services />

    {/* Featured Projects */}
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <span className="font-mono text-sm text-primary mb-2 block">// Featured Work</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Projects That <span className="text-gradient">Deliver Results</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-primary hover:brightness-125 transition-colors"
          >
            View All <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`border rounded-xl p-7 card-hover bg-card/50 ${
                p.featured ? "border-primary/40 neon-glow-sm" : "border-border"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                {p.featured && <Star size={14} className="text-primary" />}
                <h3 className="font-display font-semibold">{p.name}</h3>
              </div>
              <span className="font-mono text-xs text-primary block mb-3">{p.badge}</span>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <div className="flex items-center gap-2 text-sm text-secondary mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                {p.result}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-[11px] border border-border rounded-full px-2.5 py-0.5 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1 text-sm text-primary hover:brightness-125 transition-colors"
              >
                View Details <ExternalLink size={12} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA after projects */}
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
            className="inline-flex items-center gap-2 border border-primary/50 text-primary font-medium px-8 py-4 rounded-lg hover:bg-primary/10 transition-all duration-200"
          >
            <Calendar size={16} />
            Let's Build Something Like This
          </a>
        </motion.div>
      </div>
    </section>

    <div id="stack"><TechStack /></div>
    <ContactCTA />
  </>
);

export default Index;
