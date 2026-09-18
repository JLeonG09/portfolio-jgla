import { BookOpen, CheckCircle2, GraduationCap } from "lucide-react";
import { education, oneFormationNotes } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function Education() {
  return (
    <section id="formacion" className="border-b border-card-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="inline-flex items-center gap-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            <GraduationCap className="h-6 w-6 text-accent" aria-hidden />
            Formación
          </h2>
        </Reveal>

        <ul className="mt-8 space-y-5">
          {education.map((item, i) => (
            <Reveal key={`${item.title}-${item.institution}`} delayMs={i * 80}>
              <li className="rounded-xl border border-card-border bg-card/80 px-4 py-4 transition hover:border-accent/35">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs text-accent">
                    {item.dateLabel}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
                <p className="mt-1 text-sm text-foreground/80">{item.detail}</p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <h3 className="mt-10 inline-flex items-center gap-2 font-display text-lg font-semibold">
            <BookOpen className="h-5 w-5 text-accent-2" aria-hidden />
            Programas y formaciones ONE
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {oneFormationNotes.map((note) => (
              <li key={note} className="flex items-start gap-2">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden
                />
                {note}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
