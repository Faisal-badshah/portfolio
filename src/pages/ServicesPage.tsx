import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Monitor, Rocket, Server, Zap, Calculator, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Enterprise Web Platforms",
    desc: "Complex, scalable custom web applications. React/Next.js frontend, Node.js backend, enterprise infrastructure.",
    details: [
      "Custom architecture designed for your business needs",
      "Scalable from MVP to millions of users",
      "SEO-optimized with Core Web Vitals in green",
      "Mobile-responsive with accessibility standards",
    ],
    tags: ["React", "Next.js", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    icon: Rocket,
    title: "SaaS Product Development",
    desc: "Full-stack SaaS from concept to launch. Multi-tenant, payment integration, real-time features, auto-scaling.",
    details: [
      "Multi-tenant architecture from day one",
      "Stripe/Razorpay payment integration",
      "Real-time features with WebSockets",
      "Admin dashboard and analytics included",
    ],
    tags: ["Next.js", "Microservices", "Auto-Scaling", "Stripe"],
  },
  {
    icon: Server,
    title: "Infrastructure & DevOps",
    desc: "Enterprise-grade setup — server optimization, network config, SD-WAN, cloud infrastructure.",
    details: [
      "Cloud architecture design (AWS, GCP, Azure)",
      "CI/CD pipeline setup and automation",
      "Monitoring, logging, and alerting",
      "Network infrastructure and SD-WAN",
    ],
    tags: ["Cloud", "Docker", "Kubernetes", "DevOps"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Faster websites convert better. Core Web Vitals, database queries, rendering optimization.",
    details: [
      "Core Web Vitals audit and optimization",
      "Database query optimization and indexing",
      "CDN configuration and caching strategies",
      "Code splitting and lazy loading",
    ],
    tags: ["CDN", "Caching", "Code Splitting", "Profiling"],
  },
  {
    icon: Calculator,
    title: "Accounting-Integrated Solutions",
    desc: "ADCA-qualified developer building financial dashboards, real-time reporting, and compliance systems.",
    details: [
      "Financial dashboard development",
      "Real-time reporting and analytics",
      "Compliance and audit trail systems",
      "API integration with accounting platforms",
    ],
    tags: ["Financial APIs", "Real-Time Data", "Compliance"],
  },
];

const ServicesPage = () => (
  <div className="pt-24 pb-16">
    <div className="container mx-auto px-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <nav className="text-xs font-mono text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
          <span className="mx-2">/</span>
          <span className="text-primary">SERVICES</span>
        </nav>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">Services</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          From concept to production — I build custom platforms that drive real business results.
        </p>
      </motion.div>

      {/* Service cards */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border border-border rounded-lg p-8 card-hover"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon className="text-primary" size={24} strokeWidth={1.5} />
                </div>
              </div>

              <div className="flex-1">
                <h2 className="font-display text-xl font-semibold mb-2">{s.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>

                <ul className="space-y-2 mb-5">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                  {s.tags.map((t) => (
                    <span key={t} className="font-mono text-[11px] border border-border rounded px-2 py-0.5 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:brightness-125 transition-colors"
                >
                  Get Started <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <h2 className="font-display text-2xl font-bold mb-3">Need something custom?</h2>
        <p className="text-muted-foreground mb-6">Let's discuss your project and find the perfect solution.</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded hover:brightness-110 transition-all"
        >
          Schedule a Call <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  </div>
);

export default ServicesPage;
