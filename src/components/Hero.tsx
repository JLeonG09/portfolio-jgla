import {
  ArrowRight,
  Award,
  Download,
  FolderKanban,
  MapPin,
  Sparkles,
} from "lucide-react";
import { site } from "@/data/portfolio";
import { existsSync } from "node:fs";
import path from "node:path";

function cvExists(): boolean {
  return existsSync(path.join(process.cwd(), "public", "cv-josue-leon.pdf"));
}

export function Hero() {
  const hasCv = cvExists();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-card-border"
    >
      <div
        aria-hidden
        className="glow-orb pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="glow-orb pointer-events-none absolute -right-16 top-32 h-64 w-64 rounded-full bg-accent-2/15 blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(45,212,191,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
        }}
      />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-4 py-20 sm:px-6 sm:py-28">
        <p className="hero-enter font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            Backend Developer · {site.location}
          </span>
        </p>
        <div className="max-w-3xl space-y-5">
          <h1 className="hero-enter hero-enter-delay-1 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {site.name}
          </h1>
          <p className="hero-enter hero-enter-delay-2 inline-flex items-center gap-2 text-lg text-accent-2 sm:text-xl">
            <Sparkles className="icon-float h-5 w-5 shrink-0" aria-hidden />
            {site.headline}
          </p>
          <p className="hero-enter hero-enter-delay-3 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {site.shortBio}
          </p>
        </div>
        <div className="hero-enter hero-enter-delay-4 flex flex-wrap gap-3">
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
          >
            <FolderKanban className="h-4 w-4" aria-hidden />
            Ver proyectos
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="#credenciales"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-card-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-accent/50 hover:text-accent"
          >
            <Award className="h-4 w-4" aria-hidden />
            Credenciales
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-card-border bg-transparent px-5 py-2.5 text-sm font-medium text-muted transition hover:border-accent/40 hover:text-foreground"
          >
            Contacto
          </a>
          {hasCv ? (
            <a
              href={site.cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/40 px-5 py-2.5 text-sm font-medium text-accent transition hover:bg-accent-soft"
            >
              <Download className="h-4 w-4" aria-hidden />
              Descargar CV
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
