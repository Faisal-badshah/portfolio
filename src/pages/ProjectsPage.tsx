import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Star, Search, LayoutGrid, List, Filter } from "lucide-react";

interface TechLayer {
  label: string;
  items: string[];
}

interface Project {
  id: number;
  name: string;
  badge: string;
  category: string;
  featured?: boolean;
  challenge: string;
  solution: string;
  results: string[];
  tech: TechLayer[];
  allTags: string[];
  timeline: string;
  year: number;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Qubit IT Solutions",
    badge: "Enterprise Platform · Live",
    category: "B2B Infrastructure & SaaS",
    challenge: "Qubit IT needed a strong web presence to showcase enterprise infrastructure services and close deals.",
    solution: "Built a conversion-focused website with 10+ service categories, SEO optimization, and mobile-responsive design.",
    results: ["10+ Enterprise Clients in 2 Months", "Primary sales tool for the company", "Increased enterprise buyer confidence"],
    tech: [
      { label: "Frontend", items: ["React / Next.js", "Responsive Design", "SEO"] },
      { label: "Backend", items: ["Node.js", "Database Optimization", "Performance API"] },
      { label: "Deploy", items: ["Cloud Infra", "CDN"] },
    ],
    allTags: ["React", "Next.js", "Node.js", "SEO", "CDN"],
    timeline: "Completed 2024",
    year: 2024,
  },
  {
    id: 2,
    name: "Touch IT Solutions",
    badge: "International Platform · Live",
    category: "B2B IT Services (UK)",
    challenge: "UK-based IT services company needing a credible presence in the competitive UK enterprise market.",
    solution: "Built an enterprise website localized for UK audiences with payment systems and compliance setup.",
    results: ["Established credible UK market presence", "Competing for enterprise contracts", "International client capability proven"],
    tech: [
      { label: "Frontend", items: ["React / Next.js", "Mobile-First", "Int'l SEO"] },
      { label: "Features", items: ["Payment Integration", "Multi-Language", "Compliance"] },
      { label: "Infra", items: ["Global CDN", "UK Data Residency"] },
    ],
    allTags: ["React", "Next.js", "Payment", "i18n", "Compliance"],
    timeline: "Completed 2024",
    year: 2024,
  },
  {
    id: 3,
    name: "Ride Bus",
    badge: "SaaS Platform · Live & Scaling",
    category: "Transportation SaaS",
    featured: true,
    challenge: "Bus agencies needed a modern booking platform with real-time seat management, payments, and GPS tracking.",
    solution: "Built a complete full-stack SaaS from the ground up — real-time booking, dynamic pricing, admin dashboard, and multi-location support.",
    results: ["Fully operational SaaS serving multiple agencies", "Real-time concurrent user handling", "Recurring revenue model in production", "Scalable infrastructure supporting growth"],
    tech: [
      { label: "Frontend", items: ["React / Next.js", "Real-Time UI", "Mobile-Responsive"] },
      { label: "Backend", items: ["Node.js / Express", "Payment API", "GPS Tracking"] },
      { label: "Infra", items: ["Auto-Scaling", "Redis Caching", "99.9% Uptime"] },
      { label: "Features", items: ["Dynamic Pricing", "Admin Dashboard", "Analytics"] },
    ],
    allTags: ["React", "Next.js", "Node.js", "Redis", "Auto-Scaling", "SaaS"],
    timeline: "Ongoing development & scaling",
    year: 2024,
  },
];

const allTags = Array.from(new Set(projects.flatMap((p) => p.allTags)));
const categories = Array.from(new Set(projects.map((p) => p.category)));

type ViewMode = "grid" | "list";

const ProjectsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.category.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedTag && !p.allTags.includes(selectedTag)) return false;
      if (selectedCategory && p.category !== selectedCategory) return false;
      return true;
    });
  }, [search, selectedTag, selectedCategory]);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <nav className="text-xs font-mono text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">PROJECTS</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">Projects</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A collection of platforms I've built from scratch. Each one was a step in my journey, and every one taught me something new.
          </p>
        </motion.div>

        {/* Terminal-style controls bar (zalt.me inspired) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-lg overflow-hidden mb-10"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
            <span className="w-3 h-3 rounded-full bg-destructive/70" />
            <span className="w-3 h-3 rounded-full bg-accent/70" />
            <span className="w-3 h-3 rounded-full bg-secondary/70" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">project-explorer</span>
          </div>

          <div className="p-5">
            <div className="flex flex-col lg:flex-row gap-5">
              {/* View Controls */}
              <div className="flex-shrink-0">
                <fieldset className="border border-border rounded px-4 py-3">
                  <legend className="text-xs text-muted-foreground px-1">View Controls</legend>
                  <div className="flex flex-wrap gap-4">
                    <div>
                      <span className="font-mono text-xs text-primary block mb-2">VIEW MODE</span>
                      <div className="flex border border-border rounded overflow-hidden">
                        <button
                          onClick={() => setViewMode("grid")}
                          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs transition-colors ${
                            viewMode === "grid" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <LayoutGrid size={12} /> Grid
                        </button>
                        <button
                          onClick={() => setViewMode("list")}
                          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs transition-colors ${
                            viewMode === "list" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <List size={12} /> List
                        </button>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              {/* Filters */}
              <div className="flex-1">
                <fieldset className="border border-border rounded px-4 py-3">
                  <legend className="text-xs text-muted-foreground px-1">Filters</legend>
                  <div className="flex flex-wrap gap-4">
                    <div>
                      <span className="font-mono text-xs text-primary block mb-2">SELECT STACK</span>
                      <select
                        value={selectedTag || ""}
                        onChange={(e) => setSelectedTag(e.target.value || null)}
                        className="bg-background border border-border rounded px-3 py-1.5 text-xs text-foreground min-w-[120px]"
                      >
                        <option value="">All</option>
                        {allTags.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-primary block mb-2">FILTER BY TYPE</span>
                      <select
                        value={selectedCategory || ""}
                        onChange={(e) => setSelectedCategory(e.target.value || null)}
                        className="bg-background border border-border rounded px-3 py-1.5 text-xs text-foreground min-w-[120px]"
                      >
                        <option value="">All</option>
                        {categories.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

            {/* Search */}
            <div className="mt-4 flex items-center gap-3 border border-border rounded px-4 py-2.5">
              <Search size={14} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none flex-1"
              />
              <span className="font-mono text-xs text-muted-foreground">{filtered.length} projects</span>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((p, i) => (
              <ProjectListItem key={p.id} project={p} index={i} />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <Filter size={32} className="mx-auto mb-4 opacity-40" />
            <p className="font-mono text-sm">No projects match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ project: p, index }: { project: Project; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className={`group border rounded-lg overflow-hidden card-hover ${
      p.featured ? "border-primary/40 glow-primary" : "border-border"
    }`}
  >
    {/* Top colored bar */}
    <div className={`h-1 ${p.featured ? "bg-primary" : "bg-border"}`} />
    
    <div className="p-6">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {p.featured && <Star size={14} className="text-accent" />}
          <span className="font-mono text-xs text-muted-foreground">#{String(p.id).padStart(2, "0")}</span>
        </div>
        <span className="text-[10px] font-mono border border-border rounded px-2 py-0.5 text-primary">
          {p.year}
        </span>
      </div>

      <h3 className="font-display text-lg font-semibold mb-1">{p.name}</h3>
      <span className="font-mono text-xs text-primary block mb-3">{p.badge}</span>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{p.solution}</p>

      <div className="flex items-center gap-2 text-sm mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
        <span className="text-sm">{p.results[0]}</span>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {p.allTags.slice(0, 4).map((t) => (
          <span key={t} className="font-mono text-[10px] border border-border rounded px-2 py-0.5 text-muted-foreground">
            {t}
          </span>
        ))}
        {p.allTags.length > 4 && (
          <span className="font-mono text-[10px] text-muted-foreground">+{p.allTags.length - 4}</span>
        )}
      </div>

      <a
        href="#"
        className="inline-flex items-center gap-1 text-sm text-primary hover:brightness-125 transition-colors"
      >
        View Project <ExternalLink size={12} />
      </a>
    </div>
  </motion.article>
);

const ProjectListItem = ({ project: p, index }: { project: Project; index: number }) => (
  <motion.article
    initial={{ opacity: 0, x: -16 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: index * 0.08 }}
    className={`border rounded-lg p-6 card-hover ${
      p.featured ? "border-primary/40 glow-primary" : "border-border"
    }`}
  >
    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
      <div className="flex items-center gap-3 lg:w-8">
        {p.featured ? <Star size={14} className="text-accent" /> : <span className="font-mono text-xs text-muted-foreground">#{String(p.id).padStart(2, "0")}</span>}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-display font-semibold">{p.name}</h3>
          <span className="font-mono text-xs text-primary">{p.badge}</span>
        </div>
        <p className="text-sm text-muted-foreground truncate">{p.solution}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 lg:justify-end">
        {p.allTags.slice(0, 3).map((t) => (
          <span key={t} className="font-mono text-[10px] border border-border rounded px-2 py-0.5 text-muted-foreground">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 lg:flex-shrink-0">
        <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
        <a href="#" className="text-sm text-primary hover:brightness-125 transition-colors flex items-center gap-1">
          View <ExternalLink size={12} />
        </a>
      </div>
    </div>
  </motion.article>
);

export default ProjectsPage;
