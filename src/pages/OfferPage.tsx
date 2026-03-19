import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ExternalLink,
  Zap,
  Shield,
  Clock,
  Star,
  AlertTriangle,
  Globe,
  TrendingUp,
  Lock,
} from "lucide-react";

// ── CONFIG ────────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "917903657504";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi Faisal! I saw your offer and I'm interested in getting a website for my business."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

const CALENDLY_URL = "https://calendly.com/faisalbadshah46/30min";

// ── DATA ──────────────────────────────────────────────────────────────────────
const packages = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "Landing Page",
    price: "₹4,999",
    original: "₹8,000",
    delivery: "3–4 days",
    color: "border-border",
    featured: false,
    features: [
      { label: "1-page professional website", yes: true },
      { label: "Mobile optimised", yes: true },
      { label: "WhatsApp click button", yes: true },
      { label: "Contact / enquiry form", yes: true },
      { label: "Basic SEO setup", yes: false },
      { label: "Payment integration", yes: false },
      { label: "Up to 7 pages", yes: false },
    ],
  },
  {
    id: "business",
    name: "Business",
    subtitle: "Full Website",
    price: "₹9,999",
    original: "₹18,000",
    delivery: "5–7 days",
    color: "border-primary/50",
    featured: true,
    features: [
      { label: "Up to 7 pages", yes: true },
      { label: "Mobile optimised", yes: true },
      { label: "WhatsApp click button", yes: true },
      { label: "Contact / enquiry form", yes: true },
      { label: "Basic SEO setup", yes: true },
      { label: "Payment integration", yes: false },
      { label: "1 free revision", yes: true },
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    subtitle: "Online Store",
    price: "₹17,999",
    original: "₹30,000",
    delivery: "10–12 days",
    color: "border-border",
    featured: false,
    features: [
      { label: "Full product catalogue", yes: true },
      { label: "Mobile optimised", yes: true },
      { label: "WhatsApp click button", yes: true },
      { label: "Contact / enquiry form", yes: true },
      { label: "Basic SEO setup", yes: true },
      { label: "Payment integration", yes: true },
      { label: "1 free revision", yes: true },
    ],
  },
];

const problems = [
  {
    icon: TrendingUp,
    title: "Losing customers every day",
    desc: "People Google your business and find nothing — so they go to your competitor instead.",
  },
  {
    icon: Shield,
    title: "You look less trustworthy",
    desc: "Without a website, serious buyers assume you're small or unreliable. First impressions cost money.",
  },
  {
    icon: Lock,
    title: "Instagram can vanish anytime",
    desc: "Accounts get restricted, hacked, or banned. Your website is the only online asset you truly own.",
  },
];

const projects = [
  {
    name: "Qubit IT Solutions",
    badge: "Enterprise Platform",
    result: "10+ enterprise clients acquired in 2 months of launch",
    desc: "Custom platform that established market credibility and drove client acquisition at scale.",
    tags: ["React", "Next.js", "Node.js"],
  },
  {
    name: "Touch IT Solutions",
    badge: "International Platform",
    result: "Credible UK market presence established from day one",
    desc: "Multi-currency payments and localised experience for the UK market.",
    tags: ["React", "Payment Integration", "i18n"],
  },
  {
    name: "Ride Bus",
    badge: "SaaS Platform",
    result: "Fully operational platform serving multiple agencies",
    desc: "Real-time tracking and automated scheduling for transport agencies.",
    tags: ["Next.js", "Real-Time", "Auto-Scaling"],
    featured: true,
  },
];

const faqs = [
  {
    q: "I'm not technical at all. Will I be able to manage it?",
    a: "Yes. I handle everything — design, development, domain, and hosting setup. You just give me your content and I deliver a ready website. Zero technical work from your side.",
  },
  {
    q: "What if I don't like the design?",
    a: "You get 1 free revision after delivery. I also share a preview before the final launch so you can give feedback before anything goes live.",
  },
  {
    q: "How do I pay?",
    a: "50% advance via UPI to confirm your slot. Remaining 50% only after you approve the final website. No approval = no final payment.",
  },
  {
    q: "How long will it actually take?",
    a: "Starter page: 3–4 days. Business site: 5–7 days. I give you a delivery date in writing before starting — and I stick to it.",
  },
  {
    q: "What do I need to provide?",
    a: "Just your business name, logo (if any), a few photos, and what you want to say. I'll handle the layout, copy suggestions, and everything else.",
  },
  {
    q: "Why can't I just use Wix or WordPress myself?",
    a: "You can — but most business owners never finish or end up with something that looks amateur. I deliver a polished, fast, professional site in days so you can focus on running your business.",
  },
];

// ── HELPERS ───────────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const WhatsAppBtn = ({
  label = "💬 Chat on WhatsApp",
  className = "",
}: {
  label?: string;
  className?: string;
}) => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-4 rounded-lg hover:brightness-110 transition-all duration-200 ${className}`}
  >
    <MessageCircle size={18} />
    {label}
  </a>
);

// ── PAGE ──────────────────────────────────────────────────────────────────────
const OfferPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* subtle grid bg */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-primary border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <Zap size={12} />
              Limited spots available this month
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Your Business Deserves a Website{" "}
            <span className="text-gradient">That Actually Works</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I build fast, professional websites for local businesses across India.
            Starting at <strong className="text-foreground">₹4,999</strong>. Done in{" "}
            <strong className="text-foreground">5 days</strong>. No technical knowledge
            needed from your side — I handle everything.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <WhatsAppBtn label="💬 Chat on WhatsApp" />
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-7 py-4 rounded-lg hover:border-primary/50 transition-all duration-200"
            >
              See My Work <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.p
            {...fadeUp(0.4)}
            className="mt-6 font-mono text-xs text-muted-foreground"
          >
            📍 Bhopal, India &nbsp;·&nbsp; ⭐ 4 Projects Delivered &nbsp;·&nbsp; 🕐
            Replies within 2 hours
          </motion.p>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="font-mono text-sm text-primary mb-2 block">
              // The Real Cost of Not Having a Website
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Still Running Your Business{" "}
              <span className="text-gradient">Only on Instagram?</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp(i * 0.1)}
                className="border border-border rounded-xl p-7 bg-card/50 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <p.icon size={20} className="text-destructive" />
                </div>
                <h3 className="font-display font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp(0.3)}
            className="text-center border border-primary/20 rounded-xl p-8 bg-primary/5"
          >
            <Globe size={28} className="text-primary mx-auto mb-3" />
            <p className="text-lg font-medium">
              A website isn't an expense.
            </p>
            <p className="text-muted-foreground mt-1">
              It's the one thing that works for your business 24/7 — even while you sleep.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="font-mono text-sm text-primary mb-2 block">
              // Packages
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Simple Pricing.{" "}
              <span className="text-gradient">No Hidden Costs.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                {...fadeUp(i * 0.1)}
                className={`relative border rounded-xl p-7 bg-card/50 flex flex-col ${pkg.color} ${
                  pkg.featured ? "neon-glow-sm" : ""
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[11px] bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="mb-5">
                  <h3 className="font-display font-bold text-lg">{pkg.name}</h3>
                  <p className="font-mono text-xs text-primary mt-0.5">{pkg.subtitle}</p>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground text-sm line-through">
                      {pkg.original}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1.5 text-xs text-muted-foreground">
                    <Clock size={12} />
                    Delivery in {pkg.delivery}
                  </div>
                </div>

                <ul className="space-y-2.5 flex-1 mb-7">
                  {pkg.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-2 text-sm">
                      {f.yes ? (
                        <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
                      ) : (
                        <XCircle size={15} className="text-muted-foreground/40 flex-shrink-0" />
                      )}
                      <span className={f.yes ? "text-foreground" : "text-muted-foreground/50"}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    pkg.featured
                      ? "bg-primary text-primary-foreground hover:brightness-110"
                      : "border border-border hover:border-primary/50 text-foreground"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp(0.4)} className="text-center text-sm text-muted-foreground">
            ⚡ All packages include free domain setup, mobile optimisation, and{" "}
            <strong className="text-foreground">1 month free support</strong> after launch.
          </motion.p>

          <motion.div
            {...fadeUp(0.5)}
            className="mt-6 flex items-start gap-3 border border-yellow-500/20 bg-yellow-500/5 rounded-lg p-4 max-w-lg mx-auto"
          >
            <AlertTriangle size={16} className="text-yellow-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Only <strong className="text-foreground">5 spots available</strong> this month.
              50% advance via UPI to confirm your booking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="font-mono text-sm text-primary mb-2 block">
              // Real Work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Real Work.{" "}
              <span className="text-gradient">Real Results.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                {...fadeUp(i * 0.1)}
                className={`border rounded-xl p-7 bg-card/50 card-hover flex flex-col ${
                  p.featured ? "border-primary/40 neon-glow-sm" : "border-border"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {p.featured && <Star size={13} className="text-primary" />}
                  <h3 className="font-display font-semibold">{p.name}</h3>
                </div>
                <span className="font-mono text-xs text-primary block mb-3">{p.badge}</span>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {p.desc}
                </p>
                <div className="flex items-center gap-2 text-sm text-secondary mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                  {p.result}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] border border-border rounded-full px-2.5 py-0.5 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.4)} className="mt-10 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-primary hover:brightness-125 transition-colors"
            >
              View all projects <ExternalLink size={13} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            {...fadeUp()}
            className="border border-border rounded-xl p-10 bg-card/50 text-center"
          >
            <span className="font-mono text-sm text-primary mb-4 block">// About Me</span>
            <h2 className="font-display text-2xl font-bold mb-6">
              Hi, I'm Faisal 👋
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a full-stack developer based in Bhopal. I've built platforms for businesses
              in India and the UK — from simple landing pages to full SaaS products.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I want to help local businesses get online without paying agency prices. You get
              the same quality — without the big agency bill. I respond fast, communicate
              clearly, and won't disappear after taking your money.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-mono text-muted-foreground">
              <span>📍 Bhopal, India</span>
              <span>⭐ 4 Projects Delivered</span>
              <span>🕐 Replies within 2 hours</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <span className="font-mono text-sm text-primary mb-2 block">// FAQ</span>
            <h2 className="font-display text-3xl font-bold">
              Questions You're{" "}
              <span className="text-gradient">Probably Thinking</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                className="border border-border rounded-xl p-6 bg-card/50"
              >
                <h3 className="font-display font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <motion.div {...fadeUp()}>
            <span className="font-mono text-sm text-primary mb-4 block">
              // Let's Get Started
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Your{" "}
              <span className="text-gradient">Business Online?</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Only 5 spots available this month. Takes 2 minutes to get started — just tell me
              about your business and I'll tell you exactly what you need.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <WhatsAppBtn label="💬 WhatsApp Me Right Now" />
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-7 py-4 rounded-lg hover:border-primary/50 transition-all duration-200"
              >
                Book a Free Call <ArrowRight size={16} />
              </a>
            </div>

            <p className="font-mono text-xs text-muted-foreground">
              No commitment. No pressure. Just an honest conversation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OfferPage;