import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomCursor = () => {
  const isMobile = useIsMobile();
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    if (isMobile) return;

    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest("a, button, [role='button'], input, textarea, select, [data-clickable]");
      setHovering(!!isClickable);
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkHover);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      // Smooth follow for ring
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.body.style.cursor = "";
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
      {/* Crosshair dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ${
            clicking
              ? "w-1.5 h-1.5 bg-primary opacity-100"
              : hovering
              ? "w-2 h-2 bg-primary opacity-90"
              : "w-1 h-1 bg-primary opacity-80"
          }`}
        />
        {/* Crosshair lines */}
        {!hovering && (
          <>
            <div className="absolute left-1/2 -translate-x-1/2 -top-2.5 w-px h-1.5 bg-primary/60" />
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-px h-1.5 bg-primary/60" />
            <div className="absolute top-1/2 -translate-y-1/2 -left-2.5 h-px w-1.5 bg-primary/60" />
            <div className="absolute top-1/2 -translate-y-1/2 -right-0.5 h-px w-1.5 bg-primary/60" />
          </>
        )}
      </div>

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ${
            clicking
              ? "w-6 h-6 border-primary/80 neon-glow-sm scale-75"
              : hovering
              ? "w-10 h-10 border-primary/60 neon-glow-sm"
              : "w-7 h-7 border-primary/20"
          }`}
        />
      </div>

      <style>{`
        *, *::before, *::after { cursor: none !important; }
      `}</style>
    </>
  );
};

export default CustomCursor;
