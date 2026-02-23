import { motion } from "framer-motion";

const categories = [
  {
    label: "Frontend",
    techs: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Express"],
  },
  {
    label: "Database",
    techs: ["MongoDB", "PostgreSQL"],
  },
  {
    label: "DevOps & Tools",
    techs: ["Vercel", "AWS", "Git", "Docker"],
  },
];

const TechStack = () => (
  <section id="stack" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <span className="font-mono text-sm text-primary mb-2 block">// Tech Arsenal</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
          The Stack I Use to Build <span className="text-gradient">Scalable Systems</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Modern technologies chosen for performance, scalability, and reliability.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.1 }}
            className="border border-border rounded-xl p-6 bg-card/50"
          >
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-5 font-medium">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.techs.map((tech, ti) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: ci * 0.1 + ti * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground font-medium cursor-default transition-all duration-200 hover:border-primary/50 hover:text-primary hover:neon-glow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scrolling marquee */}
      <div className="mt-16 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...categories.flatMap(c => c.techs), ...categories.flatMap(c => c.techs)].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono text-xs text-muted-foreground/40"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default TechStack;
