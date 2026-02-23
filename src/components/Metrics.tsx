import { motion } from "framer-motion";

const stats = [
  { value: "3", label: "Enterprise Platforms Built" },
  { value: "10+", label: "Enterprise Clients Acquired" },
  { value: "6+", label: "Months Backend Expertise" },
  { value: "4", label: "Countries Served" },
  { value: "ADCA", label: "Qualified Accountant" },
];

const Metrics = () => (
  <section className="py-24 border-y border-border">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-center"
          >
            <span className="font-display text-3xl sm:text-4xl font-bold text-primary block mb-2">
              {s.value}
            </span>
            <span className="text-sm text-muted-foreground">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Metrics;
