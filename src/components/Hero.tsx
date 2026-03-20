import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.webp";

/* ── Terminal script ─────────────────────────────────────────────────── */
type Line =
  | { type: "cmd";       text: string }
  | { type: "out";       text: string }
  | { type: "gap" }
  | { type: "highlight"; text: string }
  | { type: "link";      text: string; href: string };

const SCRIPT: Line[] = [
  { type: "cmd",       text: "whoami" },
  { type: "out",       text: "Faisal Badshah — Full-Stack Developer" },
  { type: "gap" },
  { type: "cmd",       text: "cat stack.txt" },
  { type: "out",       text: "React · Next.js · Node.js · MongoDB · PostgreSQL" },
  { type: "out",       text: "AWS · Docker · REST APIs · WebSockets" },
  { type: "gap" },
  { type: "cmd",       text: "./check-availability.sh" },
  { type: "highlight", text: "✓  Available for new projects" },
  { type: "gap" },
  { type: "cmd",       text: "ping clients --all" },
  { type: "out",       text: "Qubit IT Solutions .......... ✓ satisfied" },
  { type: "out",       text: "Touch IT Solutions .......... ✓ satisfied" },
  { type: "out",       text: "Ride Bus .................... ✓ satisfied" },
  { type: "gap" },
  { type: "cmd",       text: "cat offer.txt" },
  { type: "highlight", text: "🌙 Eid Special — websites from ₹4,999" },
  { type: "link",      text: "→  faisal.innovixdev.com/offer", href: "/offer" },
];

const CHAR_SPEED = 38;
const OUT_DELAY  = 160;
const LINE_DELAY = 280;
const GAP_DELAY  = 180;

/* ── Terminal — types once, stays ───────────────────────────────────── */
const Terminal = () => {
  const [rendered, setRendered] = useState<{ line: Line; typed: string }[]>([]);
  const [cursor,   setCursor]   = useState(true);
  const [done,     setDone]     = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Scroll inside terminal box only
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [rendered]);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    const run = async () => {
      await sleep(600); // initial pause before starting

      for (let i = 0; i < SCRIPT.length; i++) {
        if (cancelled) return;
        const line = SCRIPT[i];

        if (line.type === "gap") {
          setRendered((p) => [...p, { line, typed: "" }]);
          await sleep(GAP_DELAY);
          continue;
        }

        if (
          line.type === "out" ||
          line.type === "highlight" ||
          line.type === "link"
        ) {
          await sleep(OUT_DELAY);
          setRendered((p) => [...p, { line, typed: line.text }]);
          await sleep(LINE_DELAY);
          continue;
        }

        // cmd — type char by char
        setRendered((p) => [...p, { line, typed: "" }]);
        for (let c = 1; c <= line.text.length; c++) {
          if (cancelled) return;
          await sleep(CHAR_SPEED);
          setRendered((p) => {
            const next = [...p];
            next[next.length - 1] = { line, typed: line.text.slice(0, c) };
            return next;
          });
        }
        await sleep(OUT_DELAY);
      }

      // Done — stop blinking cursor
      if (!cancelled) setDone(true);
    };

    run();
    const blink = setInterval(() => setCursor((c) => !c), 530);
    return () => { cancelled = true; clearInterval(blink); };
  }, []);

  return (
    <div className="w-full max-w-lg rounded-xl border border-primary/20 bg-card/90 backdrop-blur-md overflow-hidden neon-glow-sm">
      {/* Title bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-destructive/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-secondary/70" />
        </div>
        <div className="flex items-center gap-2 ml-1">
          <span className="font-mono text-[11px] text-muted-foreground">
            faisal@innovixdev ~ %
          </span>
        </div>
      </div>

      {/* Body */}
      <div
        ref={bodyRef}
        className="p-5 font-mono text-[12px] sm:text-[13px] leading-relaxed overflow-y-auto"
        style={{
          height: "340px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {rendered.map((r, i) => {
          const { line, typed } = r;
          const isLast = i === rendered.length - 1;

          if (line.type === "gap")
            return <div key={i} className="h-2" />;

          if (line.type === "cmd")
            return (
              <div key={i} className="flex items-center gap-2 min-h-[1.5em]">
                <span className="text-primary select-none flex-shrink-0">❯</span>
                <span className="text-foreground">{typed}</span>
                {/* Blinking cursor only on last line and only while not done */}
                {isLast && !done && (
                  <span
                    className="inline-block w-[7px] h-[13px] bg-primary ml-0.5 flex-shrink-0"
                    style={{ opacity: cursor ? 1 : 0, transition: "opacity 0.1s" }}
                  />
                )}
              </div>
            );

          if (line.type === "highlight")
            return (
              <div key={i} className="text-primary font-semibold pl-4 min-h-[1.5em]">
                {typed}
              </div>
            );

          if (line.type === "link")
            return (
              <div key={i} className="pl-4 min-h-[1.5em]">
                <Link
                  to={(line as { type: "link"; text: string; href: string }).href}
                  className="text-secondary underline underline-offset-2 hover:brightness-125 transition-colors"
                >
                  {typed}
                </Link>
              </div>
            );

          return (
            <div key={i} className="text-muted-foreground pl-4 min-h-[1.5em]">
              {typed}
            </div>
          );
        })}

        {/* Steady cursor after done */}
        {done && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-primary select-none">❯</span>
            <span
              className="inline-block w-[7px] h-[13px] bg-primary"
              style={{ opacity: cursor ? 1 : 0, transition: "opacity 0.1s" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Flip card (mobile) ──────────────────────────────────────────────── */
const codeLines = [
  { key: "class",   text: "class",     val: " Developer {"               },
  { key: "name",    text: "  name",    val: ' = "Faisal Badshah";'       },
  { key: "role",    text: "  role",    val: ' = "Full-Stack Architect";'  },
  { key: "stack",   text: "  stack",   val: " = [React, Node, Next.js];" },
  { key: "clients", text: "  clients", val: ' = "10+ Enterprise";'       },
  { key: "motto",   text: "  motto",   val: ' = "Build. Ship. Scale.";'  },
  { key: "close",   text: "}",         val: ""                           },
];

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setFlipped((f) => !f), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative w-72 h-72 cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d", width: "100%", height: "100%" }}
      >
        {/* Front — Photo */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden border-2 border-primary/40 neon-glow"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-primary/60 scale-105 animate-pulse-glow z-10 pointer-events-none" />
          <img
            src={profilePhoto}
            alt="Faisal Badshah"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-5 left-0 right-0 flex justify-center z-20">
            <span className="font-mono text-[9px] text-primary/60 bg-background/60 backdrop-blur-sm px-2 py-0.5 rounded-full">
              tap to flip
            </span>
          </div>
        </div>

        {/* Back — Code */}
        <div
          className="absolute inset-0 rounded-2xl bg-card/98 backdrop-blur-md border border-primary/30 neon-glow-sm flex flex-col justify-center p-5"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex items-center gap-1.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-secondary/70" />
            <span className="ml-2 font-mono text-[10px] text-muted-foreground">developer.ts</span>
          </div>
          <div className="font-mono text-[12px] leading-relaxed">
            {codeLines.map((line) => (
              <div key={line.key}>
                <span className="text-secondary">{line.text}</span>
                <span className="text-muted-foreground">{line.val}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <span className="font-mono text-[9px] text-primary/60 bg-background/60 backdrop-blur-sm px-2 py-0.5 rounded-full">
              tap to flip
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ── Hero ────────────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
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

        {/* ── Left ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col"
        >
          <span className="inline-block font-mono text-sm text-primary mb-6 tracking-wider">
            // I Help Businesses Grow Online
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            Turn Your Website Into a{" "}
            <span className="text-gradient">Client-Generating Machine</span>
          </h1>

          <div className="w-16 h-0.5 bg-primary/50 mb-6" />

          {/* Photo + name row */}
          <div className="flex items-center gap-4 mb-4">
            {/* Circular photo */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full border-2 border-primary/60 scale-110 animate-pulse-glow pointer-events-none" />
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/40 neon-glow-sm relative z-10">
                <img
                  src={profilePhoto}
                  alt="Faisal Badshah"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name + role */}
            <div>
              <p className="font-display text-xl sm:text-2xl font-semibold leading-tight">
                Faisal Badshah
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">
                <span className="text-primary">Full-Stack Developer</span>{" "}
                (MERN & Next.js) | SaaS & Automation
              </p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I build fast, scalable web platforms that help businesses attract,
            convert, and retain customers.
          </p>

          <div className="flex flex-wrap gap-4">
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

        {/* ── Right ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          {/* Mobile: flip card */}
          <div className="block lg:hidden">
            <FlipCard />
          </div>

          {/* Desktop: terminal */}
          <div className="hidden lg:block w-full">
            <Terminal />
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Hero;