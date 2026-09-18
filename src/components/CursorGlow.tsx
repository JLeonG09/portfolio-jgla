"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Halo muy difuminado que sigue el cursor (solo desktop + mouse).
 * Sin estela de partículas — solo luz suave.
 */
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    target.current = { x: window.innerWidth / 2, y: window.innerHeight / 3 };
    current.current = { ...target.current };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      target.current = { x: e.clientX, y: e.clientY };
      const glow = glowRef.current;
      if (glow) glow.style.opacity = "1";
    };

    const tick = () => {
      const ease = 0.08;
      current.current.x += (target.current.x - current.current.x) * ease;
      current.current.y += (target.current.y - current.current.y) * ease;

      const glow = glowRef.current;
      if (glow) {
        glow.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] hidden overflow-hidden md:block"
    >
      <div
        ref={glowRef}
        className="cursor-glow absolute left-0 top-0 h-[28rem] w-[28rem] will-change-transform"
        style={{ opacity: 0 }}
      />
    </div>
  );
}
