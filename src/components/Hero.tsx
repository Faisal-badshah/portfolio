import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const codeLines = [
  { key: "class", text: "class", val: " Developer {" },
  { key: "name", text: "  name", val: ' = "Faisal Badshah";' },
  { key: "role", text: "  role", val: ' = "Full-Stack Architect";' },
  { key: "stack", text: "  stack", val: " = [React, Node, Next.js];" },
  { key: "clients", text: "  clients", val: ' = "10+ Enterprise";' },
  { key: "motto", text: "  motto", val: ' = "Build. Ship. Scale.";' },
  { key: "close", text: "}", val: "" },
];

const Hero = () => (
  <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
    {/* Grid pattern overlay */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block font-mono text-sm text-primary mb-4 tracking-wider">
            // I Help Businesses Grow Online
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Turn Your Website Into a{" "}
            <span className="text-gradient">Client-Generating Machine</span>
          </h1>

          <div className="w-16 h-0.5 bg-primary/50 mb-6" />

          <p className="font-display text-2xl sm:text-3xl font-semibold mb-1">
            Faisal Badshah
          </p>
          <p className="text-base text-muted-foreground mb-3">
            <span className="text-primary">Full-Stack Developer</span> (MERN & Next.js) | SaaS & Automation Specialist
          </p>
          <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I build fast, scalable web platforms that help businesses attract, convert, and retain customers.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://calendly.com/faisalbadshah46/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-7 py-3.5 rounded-lg hover:brightness-110 transition-all duration-200 neon-glow-sm"
            >
              <Calendar size={16} />
              Free Consultation
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-primary/50 text-primary font-medium px-7 py-3.5 rounded-lg hover:bg-primary/10 transition-all duration-200"
            >
              View Portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        {/* Right – Photo + Code Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/60 scale-105 animate-pulse-glow" />
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/40 relative z-10 neon-glow">
              <img
                src={profilePhoto}
                alt="Faisal Badshah - Full-Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating code block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-8 -left-12 sm:-left-20 bg-card/95 backdrop-blur-md border border-border rounded-lg p-4 z-20 neon-glow-sm"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-secondary/70" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground">developer.ts</span>
              </div>
              <div className="font-mono text-[11px] sm:text-xs leading-relaxed">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={line.key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <span className="text-secondary">{line.text}</span>
                    <span className="text-muted-foreground">{line.val}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating dots */}
            <motion.div
              className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-primary/40"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <motion.div
              className="absolute -bottom-2 -left-6 w-2 h-2 rounded-full bg-secondary/40"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
