import { motion } from "framer-motion";
import { MessageCircle, Phone, Palette, CheckCircle, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "You message me",
    desc: "Send me a WhatsApp message. Tell me about your business — what you do, who your customers are, and what you need.",
    time: "Takes 2 minutes",
  },
  {
    icon: Phone,
    step: "02",
    title: "Free 15-min call",
    desc: "We hop on a quick call. I ask a few questions, you tell me what you want. I give you honest advice on which package fits you best.",
    time: "Same day",
  },
  {
    icon: Palette,
    step: "03",
    title: "I share a design preview",
    desc: "Before building anything, I show you a preview of the design. You can give feedback, request changes — nothing goes forward without your approval.",
    time: "Within 2 days",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "You approve, I build",
    desc: "Once you're happy with the design, I build the full website. You only pay the remaining 50% after you see and approve the final result.",
    time: "3–7 days",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Your site goes live",
    desc: "I handle domain setup, hosting, and launch. Your website is live and working. I stay available for 1 month for any questions or small changes.",
    time: "Launch day 🚀",
  },
];

const OfferProcess = () => (
  <section className="py-20 border-t border-border">
    <div className="container mx-auto px-6 max-w-3xl">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="font-mono text-sm text-primary mb-2 block">
          // How It Works
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
          Exactly What Happens{" "}
          <span className="text-gradient">After You Message Me</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-lg mx-auto">
          No surprises. No disappearing acts. Here's every step — in writing.
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-8 bottom-8 w-px bg-border hidden sm:block" />

        <div className="space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex gap-5 items-start"
            >
              {/* Icon circle */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full border border-primary/30 bg-card flex flex-col items-center justify-center neon-glow-sm">
                <s.icon size={18} className="text-primary" />
                <span className="font-mono text-[9px] text-primary/60 mt-0.5">{s.step}</span>
              </div>

              {/* Content */}
              <div className="flex-1 border border-border rounded-xl p-5 bg-card/50 card-hover">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="font-display font-semibold">{s.title}</h3>
                  <span className="font-mono text-[10px] text-primary border border-primary/20 rounded-full px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                    {s.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 border border-primary/20 bg-primary/5 rounded-xl p-5 text-center"
      >
        <p className="text-sm text-muted-foreground">
          🔒 <strong className="text-foreground">You pay 50% upfront to book your slot.</strong> The remaining 50% is only paid after you see and approve the final website. If you're not happy, we fix it before you pay the rest.
        </p>
      </motion.div>

    </div>
  </section>
);

export default OfferProcess;