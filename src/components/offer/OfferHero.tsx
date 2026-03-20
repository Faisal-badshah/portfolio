import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Moon } from "lucide-react";

const WHATSAPP_NUMBER = "917903657504";
const DEADLINE = new Date("2026-03-31T23:59:59+05:30");

const WHATSAPP_URL = (pkg?: string) => {
  const msg = pkg
    ? `Hi Faisal! 🌙 Eid Mubarak! I'm interested in the ${pkg} and would love to get started.`
    : `Hi Faisal! 🌙 Eid Mubarak! I saw your Eid special offer and I'm interested in getting a website for my business.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

export const WA_URL = WHATSAPP_URL;

function useCountdown() {
  const calc = () => {
    const diff = DEADLINE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, over: true };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins: Math.floor((diff % 3600000) / 60000),
      secs: Math.floor((diff % 60000) / 1000),
      over: false,
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

const Pad = (n: number) => String(n).padStart(2, "0");

const Block = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-card border border-primary/30 rounded-xl px-4 py-3 min-w-[64px] text-center neon-glow-sm">
      <span className="font-display text-3xl font-bold text-primary tabular-nums">
        {Pad(value)}
      </span>
    </div>
    <span className="font-mono text-[10px] text-muted-foreground mt-1.5 uppercase tracking-widest">
      {label}
    </span>
  </div>
);

const OfferHero = () => {
  const t = useCountdown();

  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        {/* Eid badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs text-primary border border-primary/30 rounded-full px-4 py-1.5 mb-6 bg-primary/5">
            <Moon size={12} />
            🌙 Eid Mubarak — Special Offer Active
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
        >
          Give Your Business the{" "}
          <span className="text-gradient">Online Presence</span> It Deserves
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          This Eid, I'm building professional websites for local businesses at
          special prices. Starting at{" "}
          <strong className="text-foreground">₹4,999</strong>. Delivered in{" "}
          <strong className="text-foreground">5 days</strong>. You handle your
          business — I handle everything else.
        </motion.p>

        {/* Countdown */}
        {!t.over && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10"
          >
            <p className="font-mono text-xs text-muted-foreground mb-4 uppercase tracking-widest">
              ⏳ Offer ends in
            </p>
            <div className="flex items-start justify-center gap-3">
              <Block value={t.days} label="Days" />
              <span className="font-display text-2xl font-bold text-primary/50 mt-3">:</span>
              <Block value={t.hours} label="Hours" />
              <span className="font-display text-2xl font-bold text-primary/50 mt-3">:</span>
              <Block value={t.mins} label="Mins" />
              <span className="font-display text-2xl font-bold text-primary/50 mt-3">:</span>
              <Block value={t.secs} label="Secs" />
            </div>
          </motion.div>
        )}

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WHATSAPP_URL()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-200 neon-glow-sm text-base"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
          <a
            href="#packages"
            className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-8 py-4 rounded-lg hover:border-primary/50 transition-all duration-200 text-base"
          >
            See Packages <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 font-mono text-xs text-muted-foreground"
        >
          <span>📍 Bhopal, India</span>
          <span>⭐ 4 Projects Delivered</span>
          <span>🕐 Replies within 2 hours</span>
          <span>🔒 50% advance only</span>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferHero;