import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mailto fallback
    const subject = encodeURIComponent(`Project Inquiry: ${form.type || "General"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.type}\n\n${form.message}`);
    window.location.href = `mailto:faisalbadshah46@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening email client", description: "Your project brief is ready to send." });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <nav className="text-xs font-mono text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">HOME</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">CONTACT</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary mb-4">Get In Touch</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'll give you honest technical feedback and a realistic timeline. No obligation, no pressure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="font-display text-lg font-semibold mb-5">Contact Details</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-primary mt-0.5" />
                  <div>
                    <span className="text-sm block">Email</span>
                    <a href="mailto:faisalbadshah46@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      faisalbadshah46@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-primary mt-0.5" />
                  <div>
                    <span className="text-sm block">Phone</span>
                    <span className="text-sm text-muted-foreground">+91 7903657504</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-0.5" />
                  <div>
                    <span className="text-sm block">Location</span>
                    <span className="text-sm text-muted-foreground">Bhopal, India · Serving globally</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={16} className="text-primary mt-0.5" />
                  <div>
                    <span className="text-sm block">Timezone</span>
                    <span className="text-sm text-muted-foreground">IST (UTC+5:30)</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-5">
              <h3 className="font-mono text-xs text-primary mb-3">RESPONSE GUARANTEE</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I respond within 24 hours. Available for retainers, project-based work, and team augmentation.
              </p>
            </div>

            <div className="border border-border rounded-lg p-5">
              <h3 className="font-mono text-xs text-primary mb-3">MARKETS SERVED</h3>
              <div className="flex flex-wrap gap-2">
                {["India", "UK", "Italy", "Japan"].map((m) => (
                  <span key={m} className="text-xs border border-border rounded px-3 py-1 text-muted-foreground">{m}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-destructive/70" />
                <span className="w-3 h-3 rounded-full bg-accent/70" />
                <span className="w-3 h-3 rounded-full bg-secondary/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">send-brief.ts</span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label className="font-mono text-xs text-primary block mb-2">NAME</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-primary block mb-2">EMAIL</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-primary block mb-2">PROJECT TYPE</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a type</option>
                    <option value="Enterprise Web Platform">Enterprise Web Platform</option>
                    <option value="SaaS Development">SaaS Development</option>
                    <option value="Infrastructure & DevOps">Infrastructure & DevOps</option>
                    <option value="Performance Optimization">Performance Optimization</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs text-primary block mb-2">PROJECT BRIEF</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium py-3 rounded hover:brightness-110 transition-all"
                >
                  <Send size={16} /> Send Project Brief
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
