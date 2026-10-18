"use client";

import { Expand, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

type ProjectCoverProps = {
  src: string;
  alt: string;
};

export function ProjectCover({ src, alt }: ProjectCoverProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
      return;
    }
    if (dialog.open) dialog.close();
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative block w-full cursor-zoom-in overflow-hidden bg-black text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
      >
        <Image
          src={src}
          alt=""
          width={1600}
          height={900}
          className="aspect-video h-auto w-full object-cover object-top"
          sizes="(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 100vw"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
        <span className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-md bg-black/70 px-2 py-1 text-[11px] font-medium text-foreground">
          <Expand className="h-3 w-3 text-accent" aria-hidden />
          Ver captura
        </span>
        <span className="sr-only">Ver captura de {alt}</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setOpen(false);
        }}
        className="project-cover-dialog w-[min(96vw,1120px)] max-w-none border-0 bg-transparent p-0 text-foreground"
      >
        <div className="flex items-center justify-between gap-3 rounded-t-xl border border-b-0 border-card-border bg-card px-3 py-2">
          <p id={titleId} className="truncate text-sm font-medium">
            {alt}
          </p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted transition hover:bg-accent-soft hover:text-accent"
            aria-label="Cerrar captura"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>
        <div className="overflow-hidden rounded-b-xl border border-card-border bg-black">
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={900}
            className="h-auto w-full"
            sizes="(min-width: 1120px) 1120px, 96vw"
            priority={open}
          />
        </div>
      </dialog>
    </>
  );
}
