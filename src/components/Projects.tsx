import {
  ExternalLink,
  FolderGit2,
  PlayCircle,
  Star,
  Trophy,
  Wrench,
  Zap,
} from "lucide-react";
import {
  kindLabels,
  projects,
  type Project,
  type ProjectKind,
} from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

const kindIcons: Record<ProjectKind, typeof Wrench> = {
  producto: Wrench,
  hackathon: Zap,
  challenge: Trophy,
};

function ProjectCard({
  project,
  delayMs,
}: {
  project: Project;
  delayMs: number;
}) {
  const KindIcon = kindIcons[project.kind];

  return (
    <Reveal delayMs={delayMs} className="h-full">
      <article className="group flex h-full flex-col rounded-2xl border border-card-border bg-card/90 p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_12px_40px_-20px_rgba(45,212,191,0.45)]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
            <KindIcon className="h-3 w-3" aria-hidden />
            {kindLabels[project.kind]}
          </span>
          {project.featured ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-accent-2/40 px-2.5 py-0.5 text-xs text-accent-2">
              <Star className="h-3 w-3" aria-hidden />
              Destacado
            </span>
          ) : null}
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold transition group-hover:text-accent">
          {project.name}
        </h3>
        <p className="mt-1 text-xs text-muted">{project.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-4 space-y-2 text-sm text-foreground/90">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md bg-black px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {skill}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              <FolderGit2 className="h-4 w-4" aria-hidden />
              Repo
              <ExternalLink className="h-3 w-3 opacity-70" aria-hidden />
            </a>
          ) : (
            <span className="text-sm text-danger/80">Repo: PLACEHOLDER</span>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent hover:underline"
            >
              <PlayCircle className="h-4 w-4" aria-hidden />
              Demo
            </a>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const supporting = projects.filter((p) => !p.featured);

  return (
    <section id="proyectos" className="border-b border-card-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="inline-flex items-center gap-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              <FolderGit2 className="h-6 w-6 text-accent" aria-hidden />
              Proyectos
            </h2>
            <p className="mt-3 text-muted">
              Lo que he construido hasta ahora: un sistema para un taller real,
              dos hackathons y los challenges del track ONE.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delayMs={i * 90}
            />
          ))}
        </div>

        <Reveal>
          <h3 className="mt-14 inline-flex items-center gap-2 font-display text-lg font-semibold text-foreground">
            <Trophy className="h-5 w-5 text-accent-2" aria-hidden />
            Challenges ONE
          </h3>
          <p className="mt-2 text-sm text-muted">
            Formación práctica del programa Oracle Next Education.
          </p>
        </Reveal>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {supporting.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delayMs={i * 90}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
