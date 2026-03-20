import { Outlet, useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ConstellationBackground from "./ConstellationBackground";
import CustomCursor from "./CustomCursor";

const EidSideTab = () => (
  <Link
    to="/offer"
    aria-label="View Eid Special Offer"
    className="fixed right-0 top-1/2 -translate-y-1/2 z-50 group"
  >
    <motion.div
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center gap-1.5 bg-primary text-primary-foreground px-2.5 py-5 rounded-l-xl cursor-pointer neon-glow hover:px-4 transition-all duration-300"
      style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
    >
      {/* Pulse ring */}
      <span className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-primary animate-ping opacity-75" />
      <span className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-primary" />

      {/* Content */}
      <span className="text-base leading-none">🌙</span>
      <span
        className="font-display font-bold text-[11px] uppercase tracking-widest"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
      >
        Eid Offer
      </span>
      <span
        className="font-mono text-[9px] opacity-75"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
      >
        from ₹4,999
      </span>
    </motion.div>
  </Link>
);

const Layout = () => {
  const location = useLocation();
  const isOfferPage = location.pathname === "/offer";

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <CustomCursor />
      <ConstellationBackground />
      <Navbar />

      {/* Eid side tab — hidden on the offer page itself */}
      {!isOfferPage && <EidSideTab />}

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;