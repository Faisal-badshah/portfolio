import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const TRAIL_LENGTH = 12; // number of trail dots

const CustomCursor = () => {
  const isMobile = useIsMobile();
  const dotRef    = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const pos      = useRef({ x: -300, y: -300 });
  const ringPos  = useRef({ x: -300, y: -300 });
  // Trail stores the last N positions
  const trail    = useRef<{ x: number; y: number }[]>(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -300, y: -300 }))
  );
  const raf = useRef<number>(0);

  useEffect(() => {
    if (isMobile) return;

    document.documentElement.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest("a, button, [role='button'], input, textarea, select, [data-clickable]")
      );
    };
    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);

    const animate = () => {
      const { x, y } = pos.current;

      // Move main dot instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }

      // Smooth lag for outer ring
      ringPos.current.x += (x - ringPos.current.x) * 0.12;
      ringPos.current.y += (y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }

      // Shift trail — push current pos to front, drop last
      trail.current = [{ x, y }, ...trail.current.slice(0, TRAIL_LENGTH - 1)];

      // Update each trail dot
      trailRefs.current.forEach((el, i) => {
        if (!el) return;
        const t = trail.current[i];
        // Each successive dot: smaller, more transparent, more lagged
        const progress = i / TRAIL_LENGTH; // 0 = closest, 1 = oldest
        const size     = Math.max(2, 9 - i * 0.6);
        const opacity  = (1 - progress) * (clicking ? 0.7 : hovering ? 0.55 : 0.45);
        el.style.transform = `translate(${t.x}px, ${t.y}px)`;
        el.style.width     = `${size}px`;
        el.style.height    = `${size}px`;
        el.style.opacity   = String(opacity);
      });

      raf.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      cancelAnimationFrame(raf.current);
    };
  }, [isMobile]);

  if (isMobile) return null;

  // Teal color matches your --primary: hsl(174 72% 50%)
  const teal = "hsl(174, 72%, 50%)";

  return (
    <>
      {/* Trail dots — rendered back to front so head is on top */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          className="fixed top-0 left-0 z-[9997] pointer-events-none rounded-full"
          style={{
            willChange: "transform",
            backgroundColor: teal,
            width: "9px",
            height: "9px",
            marginLeft: "-4.5px",
            marginTop: "-4.5px",
            // Slightly warmer/lighter color for older dots — comet glow feel
            filter: i < 3 ? "brightness(1.2)" : i > 8 ? "brightness(0.6)" : "none",
          }}
        />
      ))}

      {/* Main dot — bright teal, sharp */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          willChange: "transform",
          width:  clicking ? "10px" : hovering ? "12px" : "8px",
          height: clicking ? "10px" : hovering ? "12px" : "8px",
          marginLeft: clicking ? "-5px" : hovering ? "-6px" : "-4px",
          marginTop:  clicking ? "-5px" : hovering ? "-6px" : "-4px",
          backgroundColor: "#fff",
          transition: "width 0.15s, height 0.15s, margin 0.15s",
          boxShadow: `0 0 6px 2px ${teal}`,
        }}
      />

      {/* Lagging ring — only on hover */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          willChange: "transform",
          width:       hovering ? "44px" : "0px",
          height:      hovering ? "44px" : "0px",
          marginLeft:  hovering ? "-22px" : "0px",
          marginTop:   hovering ? "-22px" : "0px",
          border:      `1.5px solid ${teal}`,
          opacity:     hovering ? 0.6 : 0,
          transition:  "width 0.25s, height 0.25s, margin 0.25s, opacity 0.25s",
          boxShadow:   hovering ? `0 0 10px ${teal}40` : "none",
        }}
      />
    </>
  );
};

export default CustomCursor;