import { BookOpen, FolderGit2, Link2, Mail, MessageCircle } from "lucide-react";
import { site } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const email = site.social.email.trim();

  return (
    <section id="contacto" className="border-b border-card-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="inline-flex items-center gap-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            <MessageCircle className="h-6 w-6 text-accent" aria-hidden />
            Contacto
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            ¿Tienes una vacante junior de backend o un proyecto? Escribime por
            LinkedIn o GitHub
            {email ? ", o por correo" : ""}.
          </p>
        </Reveal>

        <Reveal delayMs={100}>
          <ul className="mt-8 space-y-4 text-sm">
            {email ? (
              <li className="flex flex-wrap items-center gap-2">
                <Mail className="h-4 w-4 text-accent" aria-hidden />
                <span className="text-muted">Email:</span>
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-accent hover:underline"
                >
                  {email}
                </a>
              </li>
            ) : null}
            <li className="flex flex-wrap items-center gap-2">
              <FolderGit2 className="h-4 w-4 text-accent" aria-hidden />
              <span className="text-muted">GitHub:</span>
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:underline"
              >
                {site.social.github.replace("https://", "")}
              </a>
            </li>
            <li className="flex flex-wrap items-center gap-2">
              <Link2 className="h-4 w-4 text-accent" aria-hidden />
              <span className="text-muted">LinkedIn:</span>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:underline"
              >
                linkedin.com/in/josueleon09
              </a>
            </li>
            <li className="flex flex-wrap items-center gap-2">
              <BookOpen className="h-4 w-4 text-accent" aria-hidden />
              <span className="text-muted">Alura:</span>
              <a
                href={site.aluraProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:underline"
              >
                Perfil público
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
