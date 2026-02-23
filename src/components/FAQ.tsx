import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How long does a platform take?",
    a: "Typically 2–8 weeks depending on complexity. A marketing site could be 2 weeks; a full SaaS platform 6–8 weeks. I provide a realistic timeline upfront.",
  },
  {
    q: "Do you handle infrastructure and deployment?",
    a: "Yes. I set up cloud infrastructure, CI/CD pipelines, domain configuration, and monitoring. Everything needed for production.",
  },
  {
    q: "Can you work with my existing platform?",
    a: "Absolutely. I can audit, optimize, or extend existing codebases. I'll assess the current state and propose the most efficient path forward.",
  },
  {
    q: "Do you provide ongoing support and maintenance?",
    a: "Yes. I offer retainer-based support for bug fixes, updates, feature additions, and performance monitoring after launch.",
  },
  {
    q: "Can you build for international markets?",
    a: "Yes. I currently serve clients in India and the UK, with experience in multi-language, localization, and international compliance.",
  },
  {
    q: "What are typical project costs?",
    a: "Costs vary by scope. I provide a detailed quote after the discovery call so you know exactly what you're investing in.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="font-mono text-sm text-primary mb-2 block">// Common Questions</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold">FAQ</h2>
      </motion.div>

      <div className="max-w-2xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-lg px-6 data-[state=open]:glow-border"
            >
              <AccordionTrigger className="text-sm font-medium hover:text-primary py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
