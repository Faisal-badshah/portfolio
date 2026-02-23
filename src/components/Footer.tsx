import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone, MapPin, Calendar } from "lucide-react";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container mx-auto px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="font-display text-lg font-bold">
            <span className="text-primary">{"<"}</span>Faisal<span className="text-primary">{" />"}</span>
          </Link>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            Full-Stack Developer & SaaS Architect. Building scalable platforms that generate clients.
          </p>
          <a
            href="https://calendly.com/faisalbadshah46/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg mt-4 hover:brightness-110 transition-all"
          >
            <Calendar size={14} />
            Free Consultation
          </a>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              <a href="mailto:faisalbadshah46@gmail.com" className="hover:text-primary transition-colors">
                faisalbadshah46@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              +91 7903657504
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              Bhopal, India · IST (UTC+5:30)
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Pages</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Social</h4>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-6 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Faisal Badshah. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
