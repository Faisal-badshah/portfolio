import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

interface TechLayer {
  label: string;
  items: string[];
}

interface Project {
  name: string;
  badge: string;
  category: string;
  featured?: boolean;
  challenge: string;
  solution: string;
  results: string[];
  tech: TechLayer[];
  timeline: string;
}

const projects: Project[] = [
  {
    name: "Qubit IT Solutions",
    badge: "Enterprise Platform · Live",
    category: "B2B Infrastructure & SaaS",
    challenge:
      "Qubit IT needed a strong web presence to showcase enterprise infrastructure services and close deals.",
    solution:
      "Built a conversion-focused website with 10+ service categories, SEO optimization, and mobile-responsive design.",
    results: [
      "10+ Enterprise Clients in 2 Months",
      "Primary sales tool for the company",
      "Increased enterprise buyer confidence",
    ],
    tech: [
      { label: "Frontend", items: ["React / Next.js", "Responsive Design", "SEO"] },
      { label: "Backend", items: ["Node.js", "Database Optimization", "Performance API"] },
      { label: "Deploy", items: ["Cloud Infra", "CDN"] },
    ],
    timeline: "Completed 2024",
  },
  {
    name: "Touch IT Solutions",
    badge: "International Platform · Live",
    category: "B2B IT Services (UK)",
    challenge:
      "UK-based IT services company needing a credible presence in the competitive UK enterprise market.",
    solution:
      "Built an enterprise website localized for UK audiences with payment systems and compliance setup.",
    results: [
      "Established credible UK market presence",
      "Competing for enterprise contracts",
      "International client capability proven",
    ],
    tech: [
      { label: "Frontend", items: ["React / Next.js", "Mobile-First", "Int'l SEO"] },
      { label: "Features", items: ["Payment Integration", "Multi-Language", "Compliance"] },
      { label: "Infra", items: ["Global CDN", "UK Data Residency"] },
    ],
    timeline: "Completed 2024",
  },
  {
    name: "Ride Bus",
    badge: "SaaS Platform · Live & Scaling",
    category: "Transportation SaaS",
    featured: true,
    challenge:
      "Bus agencies needed a modern booking platform with real-time seat management, payments, and GPS tracking.",
    solution:
      "Built a complete full-stack SaaS from the ground up — real-time booking, dynamic pricing, admin dashboard, and multi-location support.",
    results: [
      "Fully operational SaaS serving multiple agencies",
      "Real-time concurrent user handling",
      "Recurring revenue model in production",
      "Scalable infrastructure supporting growth",
    ],
    tech: [
      { label: "Frontend", items: ["React / Next.js", "Real-Time UI", "Mobile-Responsive"] },
      { label: "Backend", items: ["Node.js / Express", "Payment API", "GPS Tracking"] },
      { label: "Infra", items: ["Auto-Scaling", "Redis Caching", "99.9% Uptime"] },
      { label: "Features", items: ["Dynamic Pricing", "Admin Dashboard", "Analytics"] },
    ],
    timeline: "Ongoing development & scaling",
  },
];

const TechTree = ({ layers }: { layers: TechLayer[] }) => (
  <div className="font-mono text-xs mt-5 space-y-2">
    {layers.map((layer) => (
      <div key={layer.label}>
        <span className="text-primary">{layer.label}</span>
        {layer.items.map((item, i) => (
          <div key={i} className="text-muted-foreground ml-3">
            {i === layer.items.length - 1 ? "└─" : "├─"} {item}
          </div>
        ))}
      </div>
    ))}
  </div>
);

const Projects = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="font-mono text-sm text-primary mb-2 block">// Featured Work</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Projects</h2>
      </motion.div>

      <div className="space-y-10">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`border rounded-lg p-8 card-hover ${
              p.featured
                ? "border-primary/40 glow-primary"
                : "border-border"
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  {p.featured && <Star size={16} className="text-accent" />}
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                </div>
                <span className="font-mono text-xs text-primary">{p.badge}</span>
              </div>
              <span className="text-xs border border-border rounded px-3 py-1 text-muted-foreground">
                {p.category}
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="text-primary font-mono text-xs mr-2">challenge:</span>
                  {p.challenge}
                </p>
                <p className="text-sm mb-5">
                  <span className="text-primary font-mono text-xs mr-2">solution:</span>
                  {p.solution}
                </p>

                <div className="space-y-2">
                  {p.results.map((r) => (
                    <div key={r} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      {r}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <TechTree layers={p.tech} />
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                  <span className="font-mono text-xs text-muted-foreground">{p.timeline}</span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:brightness-125 transition-colors"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
