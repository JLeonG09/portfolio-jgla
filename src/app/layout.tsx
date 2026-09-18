import type { Metadata } from "next";
import { IBM_Plex_Mono, Outfit, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/data/portfolio";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = `${site.name} · Backend Java & Spring Boot`;
const description = site.shortBio;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.fullName, url: site.social.github }],
  creator: site.fullName,
  keywords: [
    "Josué León",
    "Backend",
    "Java",
    "Spring Boot",
    "Costa Rica",
    "Oracle Next Education",
    "OCI",
    "Junior Developer",
  ],
  openGraph: {
    title: `${site.name} · ${site.headline}`,
    description,
    locale: "es_CR",
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${sora.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
