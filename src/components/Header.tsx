import { Mail, FolderKanban, Award, GraduationCap } from "lucide-react";
import { site } from "@/data/portfolio";

const links = [
  { href: "#proyectos", label: "Proyectos", Icon: FolderKanban },
  { href: "#credenciales", label: "Credenciales", Icon: Award },
  { href: "#formacion", label: "Formación", Icon: GraduationCap },
  { href: "#contacto", label: "Contacto", Icon: Mail },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border/80 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#inicio"
          className="group font-display text-sm font-semibold tracking-wide text-foreground"
        >
          <span className="text-accent transition group-hover:text-accent-2">
            {"</>"}
          </span>{" "}
          {site.name}
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-0.5 sm:flex">
          {links.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <Icon className="h-3.5 w-3.5 opacity-70" aria-hidden />
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="inline-flex items-center gap-1.5 rounded-md bg-accent/15 px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/25 sm:hidden"
        >
          <Mail className="h-3.5 w-3.5" aria-hidden />
          Contacto
        </a>
      </div>
    </header>
  );
}
