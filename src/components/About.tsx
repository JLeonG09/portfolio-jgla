import { Code2, Languages, MapPinned, Server } from "lucide-react";
import { about, site } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="sobre-mi" className="border-b border-card-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="inline-flex items-center gap-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            <Server className="h-6 w-6 text-accent" aria-hidden />
            Sobre mí
          </h2>
        </Reveal>
        <Reveal delayMs={80}>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
            {about.paragraph}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li className="flex items-start gap-2">
              <MapPinned className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              {site.availability}
            </li>
            <li className="flex items-start gap-2">
              <Languages className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              Idiomas: {site.languages.join(" · ")}
            </li>
          </ul>
        </Reveal>
        <Reveal delayMs={140}>
          <div className="mt-8">
            <h3 className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              <Code2 className="h-3.5 w-3.5" aria-hidden />
              Stack
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-card-border bg-card px-3 py-1 text-sm text-foreground transition hover:border-accent/50 hover:text-accent"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
