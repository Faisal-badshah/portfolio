import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomCursor = () => {
  const isMobile = useIsMobile();
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const pos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);

  useEffect(() => {
    if (isMobile) return;

    // Hide cursor globally via <html> style — most reliable method
    document.documentElement.style.cursor = "none";

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-clickable]"
      );
      setHovering(!!isClickable);
    };

    const down = () => setClicking(true);
    const up   = () => setClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkHover);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      cancelAnimationFrame(raf.current);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Dot + crosshair */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        {/* Center dot — white, always visible */}
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-100 ${
            clicking
              ? "w-2 h-2 bg-white opacity-100"
              : hovering
              ? "w-2.5 h-2.5 bg-white opacity-100"
              : "w-1.5 h-1.5 bg-white opacity-95"
          }`}
        />

        {/* Default crosshair */}
        {!hovering && (
          <>
            {/* Cardinal lines */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-px h-2 bg-white/70" />
            <div className="absolute left-1/2 -translate-x-1/2 top-1 w-px h-2 bg-white/70" />
            <div className="absolute top-1/2 -translate-y-1/2 -left-3 h-px w-2 bg-white/70" />
            <div className="absolute top-1/2 -translate-y-1/2 left-1 h-px w-2 bg-white/70" />
            {/* Corner bracket ticks — teal */}
            <div className="absolute -top-3.5 -left-3.5 w-2 h-px bg-primary/90" />
            <div className="absolute -top-3.5 -left-3.5 w-px h-2 bg-primary/90" />
            <div className="absolute -top-3.5 -right-3.5 w-2 h-px bg-primary/90" />
            <div className="absolute -top-3.5 -right-3.5 w-px h-2 bg-primary/90" />
            <div className="absolute -bottom-3.5 -left-3.5 w-2 h-px bg-primary/90" />
            <div className="absolute -bottom-3.5 -left-3.5 w-px h-2 bg-primary/90" />
            <div className="absolute -bottom-3.5 -right-3.5 w-2 h-px bg-primary/90" />
            <div className="absolute -bottom-3.5 -right-3.5 w-px h-2 bg-primary/90" />
          </>
        )}

        {/* Hover crosshair — teal ticks */}
        {hovering && !clicking && (
          <>
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-px h-2.5 bg-primary" />
            <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-px h-2.5 bg-primary" />
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 h-px w-2.5 bg-primary" />
            <div className="absolute top-1/2 -translate-y-1/2 left-1.5 h-px w-2.5 bg-primary" />
          </>
        )}
      </div>

      {/* Lagging outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 ${
            clicking
              ? "w-5 h-5 border-white/90 scale-75"
              : hovering
              ? "w-12 h-12 border-primary/80 neon-glow-sm"
              : "w-8 h-8 border-white/25"
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;