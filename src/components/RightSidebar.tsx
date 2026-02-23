import { useLocation, Link } from "react-router-dom";
import { Home, FolderOpen, Briefcase, Mail, User, Code2, MessageSquare, HelpCircle, BarChart3 } from "lucide-react";

const sidebarLinks = [
  { icon: Home, label: "Home", to: "/" },
  { icon: BarChart3, label: "Overview", to: "/#about" },
  { icon: User, label: "About", to: "/#about" },
  { icon: FolderOpen, label: "Projects", to: "/projects" },
  { icon: Briefcase, label: "Services", to: "/services" },
  { icon: MessageSquare, label: "Testimonials", to: "/#testimonials" },
  { icon: Code2, label: "Stack", to: "/#stack" },
  { icon: HelpCircle, label: "FAQ", to: "/#faq" },
  { icon: Mail, label: "Contact", to: "/contact" },
];

const RightSidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-0.5 bg-card/80 backdrop-blur-md border border-border rounded-l-lg py-2 px-1">
      {sidebarLinks.map((link) => {
        const isActive =
          link.to === "/"
            ? location.pathname === "/" && !location.hash
            : location.pathname.startsWith(link.to.split("#")[0]) && link.to.split("#")[0] !== "/";

        return (
          <Link
            key={link.label}
            to={link.to}
            title={link.label}
            className={`flex items-center gap-2.5 px-3 py-2 rounded text-xs transition-all duration-200 whitespace-nowrap ${
              isActive
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-primary hover:bg-primary/5"
            }`}
          >
            <link.icon size={14} className="flex-shrink-0" />
            <span className="text-[11px]">{link.label}</span>
          </Link>
        );
      })}
    </aside>
  );
};

export default RightSidebar;
