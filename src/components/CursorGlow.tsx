"use client";

import { useEffect, useRef, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
};

/**
 * Luz / estela que sigue el cursor (solo desktop + mouse).
 * Respeta prefers-reduced-motion y no se activa en touch.
 */
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const target = useRef({ x: -999, y: -999 });
  const current = useRef({ x: -999, y: -999 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [enabled, setEnabled] = useState(false);
  const idRef = useRef(0);
  const lastSpawn = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      target.current = { x: e.clientX, y: e.clientY };

      const now = performance.now();
      if (now - lastSpawn.current > 70) {
        lastSpawn.current = now;
        const id = ++idRef.current;
        setParticles((prev) => [...prev, { id, x: e.clientX, y: e.clientY }].slice(-8));
        window.setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== id));
        }, 380);
      }
    };

    const tick = () => {
      const ease = 0.16;
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
        className="cursor-glow absolute left-0 top-0 h-40 w-40 will-change-transform"
      />
      {particles.map((p) => (
        <span
          key={p.id}
          className="cursor-trail absolute block h-1 w-1 rounded-full"
          style={{
            left: p.x,
            top: p.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
