import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery Call", desc: "Understanding your goals in a 15–30 min chat." },
  { num: "02", title: "Technical Proposal", desc: "Architecture & approach delivered in 2–3 days." },
  { num: "03", title: "Development", desc: "Building with regular updates over 2–8 weeks." },
  { num: "04", title: "Testing & QA", desc: "Quality assurance and performance refinement." },
  { num: "05", title: "Launch & Support", desc: "Deployment and ongoing monitoring." },
];

const Process = () => (
  <section id="process" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="font-mono text-sm text-primary mb-2 block">// Workflow</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">How I Work</h2>
      </motion.div>

      <div className="relative max-w-2xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="flex gap-5"
            >
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background font-mono text-xs text-primary flex-shrink-0">
                {step.num}
              </div>
              <div className="pt-1.5">
                <h3 className="font-display font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Process;
