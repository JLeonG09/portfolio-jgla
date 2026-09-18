import { BookOpen, FolderGit2, Link2 } from "lucide-react";
import { site } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-black">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © 2026 {site.fullName}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-accent"
          >
            <FolderGit2 className="h-4 w-4" aria-hidden />
            GitHub
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-accent"
          >
            <Link2 className="h-4 w-4" aria-hidden />
            LinkedIn
          </a>
          <a
            href={site.aluraProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-accent"
          >
            <BookOpen className="h-4 w-4" aria-hidden />
            Alura
          </a>
        </div>
      </div>
    </footer>
  );
}
