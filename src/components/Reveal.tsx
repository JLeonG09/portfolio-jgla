"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

function isInOrPastView(node: HTMLElement): boolean {
  const rect = node.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  // Visible, parcialmente visible, o ya pasó hacia arriba (scroll rápido)
  return rect.top < vh * 0.92 && rect.bottom > 0;
}

/**
 * Reveal al scrollear. Tolerante a scroll rápido: si el bloque
 * ya está en vista o se saltó, se muestra igual.
 */
export function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const node = ref.current;
    if (!node) return;

    if (reduce) {
      setArmed(true);
      setVisible(true);
      return;
    }

    setArmed(true);

    const show = () => setVisible(true);

    // Si al montar ya está en pantalla (o el scroll lo dejó atrás), mostrar ya
    if (isInOrPastView(node)) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            show();
            observer.disconnect();
            return;
          }
          // Scroll muy rápido: el bloque ya quedó arriba sin “intersectar”
          if (entry.boundingClientRect.top < 0) {
            show();
            observer.disconnect();
          }
        }
      },
      {
        threshold: [0, 0.05, 0.15],
        // Ampliar zona de detección para no fallar con rueda/trackpad rápidos
        rootMargin: "80px 0px 80px 0px",
      },
    );

    observer.observe(node);

    // Re-chequeo en scroll/resize por si el IO se salta el frame
    const onScrollCheck = () => {
      if (isInOrPastView(node)) {
        show();
        observer.disconnect();
        window.removeEventListener("scroll", onScrollCheck);
        window.removeEventListener("resize", onScrollCheck);
      }
    };
    window.addEventListener("scroll", onScrollCheck, { passive: true });
    window.addEventListener("resize", onScrollCheck);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScrollCheck);
      window.removeEventListener("resize", onScrollCheck);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${armed ? "reveal-armed" : ""} ${visible ? "reveal-visible" : ""} ${className}`}
      style={
        visible && delayMs ? { transitionDelay: `${delayMs}ms` } : undefined
      }
    >
      {children}
    </div>
  );
}
