import { motion } from "framer-motion";
import { TrendingDown, ShieldAlert, Smartphone } from "lucide-react";
import { WA_URL } from "./OfferHero";
import { MessageCircle } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "You're losing customers every day",
    desc: "When someone hears about your business, the first thing they do is Google it. If they find nothing — they move on to your competitor who has a website.",
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    icon: ShieldAlert,
    title: "No website = less trust",
    desc: "Serious buyers — especially older customers and corporate clients — judge your credibility by your online presence. A professional website signals you're the real deal.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Smartphone,
    title: "Instagram is rented land",
    desc: "Accounts get restricted, hacked, or banned without warning. Your website is the only online asset that is 100% yours — no algorithm, no platform risk.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const OfferProblems = () => (
  <section className="py-20 border-t border-border">
    <div className="container mx-auto px-6 max-w-5xl">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="font-mono text-sm text-primary mb-2 block">
          // Why This Matters
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
          Running Your Business Only{" "}
          <span className="text-gradient">on Instagram?</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm">
          You're working hard — but without a website, you're leaving money on the table every single day.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6 mb-14">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border border-border rounded-xl p-7 bg-card/50 card-hover"
          >
            <div className={`w-10 h-10 rounded-lg ${p.bg} flex items-center justify-center mb-4`}>
              <p.icon size={20} className={p.color} />
            </div>
            <h3 className="font-display font-semibold mb-2 text-base">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Contrast block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-4"
      >
        {/* Without */}
        <div className="border border-destructive/20 bg-destructive/5 rounded-xl p-6">
          <p className="font-mono text-xs text-destructive mb-4 uppercase tracking-wider">Without a website</p>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {[
              "Customer Googles you → finds nothing → leaves",
              "Can't share a professional link anywhere",
              "Lose trust before the conversation starts",
              "100% dependent on Instagram's algorithm",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="text-destructive mt-0.5 flex-shrink-0">✗</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* With */}
        <div className="border border-primary/20 bg-primary/5 rounded-xl p-6">
          <p className="font-mono text-xs text-primary mb-4 uppercase tracking-wider">With your new website</p>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {[
              "Customer Googles you → finds you → contacts you",
              "One link to share everywhere — WhatsApp, Instagram, visiting card",
              "Instant credibility with new customers",
              "Your business works for you 24/7, even when you're asleep",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Micro CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <a
          href={WA_URL()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-lg hover:brightness-110 transition-all duration-200 text-sm"
        >
          <MessageCircle size={16} />
          I want a website — let's talk
        </a>
      </motion.div>

    </div>
  </section>
);

export default OfferProblems;