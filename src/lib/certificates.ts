import { existsSync } from "node:fs";
import path from "node:path";

/** Comprueba si un PDF existe bajo public/ (solo en Server Components). */
export function certificateHasPdf(publicPdfPath: string): boolean {
  const relative = publicPdfPath.replace(/^\//, "");
  const filePath = path.join(process.cwd(), "public", relative);
  return existsSync(filePath);
}

export function formatDateEs(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) return isoDate;
  const date = new Date(Date.UTC(year, month - 1, day));
  return new Intl.DateTimeFormat("es-CR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
