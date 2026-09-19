import {
  Award,
  BadgeCheck,
  Calendar,
  ExternalLink,
  FileText,
} from "lucide-react";
import { certificates, kindLabels, site } from "@/data/portfolio";
import { certificateHasPdf, formatDateEs } from "@/lib/certificates";
import { Reveal } from "@/components/Reveal";

export function Credentials() {
  return (
    <section id="credenciales" className="border-b border-card-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="inline-flex items-center gap-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                <Award className="h-6 w-6 text-accent" aria-hidden />
                Credenciales
              </h2>
              <p className="mt-3 max-w-xl text-muted">
                Programas, formaciones prioritarias y challenges ONE con mayor
                peso para roles de backend.
              </p>
            </div>
            <a
              href={site.aluraProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              Perfil Alura
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => {
            const hasPdf = certificateHasPdf(cert.pdf);
            return (
              <Reveal key={cert.id} delayMs={(i % 3) * 70}>
                <li className="flex h-full flex-col rounded-xl border border-card-border bg-card p-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent/40">
                  <div className="flex items-start justify-between gap-2">
                    <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-accent">
                      {kindLabels[cert.kind]}
                    </span>
                    <span
                      aria-hidden
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-card-border bg-black text-accent"
                    >
                      <BadgeCheck className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold leading-snug text-foreground">
                    {cert.title}
                  </h3>
                  <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                    <Calendar className="h-3 w-3" aria-hidden />
                    {formatDateEs(cert.date)}
                  </p>
                  <div className="mt-auto pt-4">
                    {hasPdf ? (
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md bg-accent/15 px-3 py-1.5 text-xs font-semibold text-accent transition hover:bg-accent/25"
                      >
                        <FileText className="h-3.5 w-3.5" aria-hidden />
                        Ver PDF
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-card-border px-3 py-1.5 text-xs text-muted">
                        <FileText className="h-3.5 w-3.5 opacity-60" aria-hidden />
                        PDF pendiente
                      </span>
                    )}
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
