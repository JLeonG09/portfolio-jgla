export type ProjectKind = "producto" | "hackathon" | "challenge";

export type CertificateKind = "programa" | "formacion" | "challenge" | "certificacion";

export const site = {
  name: "Josué León Ávalos",
  fullName: "Josué León Ávalos",
  headline: "Backend Java · Spring Boot · Productos reales & hackathons",
  shortBio:
    "Construyo APIs con Spring Boot y JPA. Combino un sistema real de taller, hackathons (Nexora, EnergiAI, LEBION) y el track Oracle Next Education (Alura).",
  location: "San José, Costa Rica",
  availability: "Abierto a remoto, híbrido o presencial · Empleo y freelance",
  languages: ["Español (nativo)", "Inglés (B1)"],
  aluraProfile: "https://app.aluracursos.com/user/josueleon-102013",
  cvPdf: "/cv-josue-leon.pdf",
  social: {
    email: "josueleon.dev.js@gmail.com",
    github: "https://github.com/JLeonG09",
    linkedin: "https://www.linkedin.com/in/josueleon09/",
  },
} as const;

export const about = {
  paragraph:
    "Josué León es un desarrollador backend enfocado en Java y Spring Boot. Completó el track ONE Tech Foundation G9 – Back End y ONE Tech Advanced, con formaciones en orientación a objetos, APIs REST, Spring Data JPA, SQL y ruta hacia OCI Foundations Associate. Combina un sistema real de taller, hackathons (Nexora en Stellar, EnergiAI, LEBION) y challenges ONE. Busca roles junior de backend donde pueda aportar en APIs, buenas prácticas y aprendizaje continuo.",
  stack: [
    "Java",
    "Spring Boot 3",
    "Spring Data JPA",
    "API REST",
    "MySQL",
    "PostgreSQL",
    "SQL",
    "Git",
    "GitHub",
    "Docker",
    "HTML/CSS/JS",
    "React (básico)",
    "OCI Foundations",
    "Stellar / Soroban (testnet)",
    "Spring AI / OpenAI (básico)",
  ],
} as const;

export type Project = {
  id: string;
  name: string;
  kind: ProjectKind;
  role: string;
  summary: string;
  highlights: string[];
  skills: string[];
  repo: string | null;
  demo: string | null;
  featured: boolean;
  /** Captura hero en `public/projects/` (1600×900). */
  cover?: string;
};

/** Orden por seriedad / peso para reclutadores */
export const projects: Project[] = [
  {
    id: "voltios-y-ruedas",
    name: "Voltios y Ruedas",
    kind: "producto",
    role: "Full stack (foco Backend)",
    summary:
      "Sistema de gestión para el taller automotriz Voltios y Ruedas: clientes, reservas, órdenes de trabajo e inventario.",
    highlights: [
      "Backend en Java 21 / Spring Boot con JWT, roles de staff y cliente, Flyway y PostgreSQL.",
      "Proyecto full-stack real (aprendizaje + cliente familiar) con Docker Compose, Redis, notificaciones SMTP y suite de tests.",
      "Frontend en React 19 + Vite + TypeScript con paneles distintos para staff y cliente.",
    ],
    skills: [
      "Java 21",
      "Spring Boot 3",
      "JWT",
      "PostgreSQL",
      "Redis",
      "Docker",
      "React 19",
      "TypeScript",
    ],
    repo: "https://github.com/JLeonG09/Voltios-Y-Ruedas",
    demo: null,
    featured: true,
    cover: "/projects/voltios.png",
  },
  {
    id: "nexora",
    name: "Nexora",
    kind: "hackathon",
    role: "Backend · Seguridad",
    summary:
      "Panel para pagar USDC en Stellar testnet con un agente de IA que solo propone: el backend valida y un firmante aparte envía la transacción.",
    highlights: [
      "API Spring Boot (Java 21) con ocho reglas de validación, mandato, auditoría y alertas si sale un pago que el chat no hizo.",
      "Firmante separado (Node), topes on-chain y rotación de llave al reportar movimiento no reconocido.",
      "Hackathon Stellar Passport «Find Your Way»: Docker Compose, CI y panel React (Vite) con Privy.",
    ],
    skills: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Stellar",
      "Privy",
      "React",
      "TypeScript",
    ],
    repo: "https://github.com/JLeonG09/Nexora",
    demo: null,
    featured: true,
    cover: "/projects/nexora.png",
  },
  {
    id: "energiai",
    name: "EnergiAI",
    kind: "hackathon",
    role: "Backend · Infra",
    summary:
      "Plataforma que convierte datos de consumo eléctrico en categorías de eficiencia, recomendaciones y simulaciones de ahorro.",
    highlights: [
      "API REST en Spring Boot que orquesta el análisis energético e integra un modelo de ML en Python.",
      "Despliegue en producción: Docker Compose, Caddy/Nginx, CORS/HTTPS y fixes de infra en Oracle Cloud (OCI).",
      "Flujos de backend: historial de análisis, verificación de correo y hardening de secrets/env en prod.",
    ],
    skills: [
      "Java 21",
      "Spring Boot",
      "Python / ML",
      "Docker",
      "OCI",
      "MySQL",
      "Angular",
    ],
    repo: "https://github.com/No-Country-simulation/G9-LATAM-TEAM-06",
    demo: "https://www.youtube.com/watch?v=f7DShxUZmTI",
    featured: true,
    cover: "/projects/energiai.png",
  },
  {
    id: "lebion",
    name: "LEBION",
    kind: "hackathon",
    role: "Integración · Backend / Frontend",
    summary:
      "Agente local-first (hackathon Aleph/Tether) que investiga facturas PDF y estados de cuenta CSV para decidir si un pago es verificable.",
    highlights: [
      "Separa inteligencia de autoridad: QVAC interpreta documentos; TypeScript valida montos, duplicados y evidencia.",
      "Veredicto auditable: VERIFIED, DISCREPANCY, REVIEW_REQUIRED o INSUFFICIENT_EVIDENCE.",
      "Flujo end-to-end de demo: carga de casos, investigación, UI de evidencia y documentación alineada al runtime.",
    ],
    skills: [
      "TypeScript",
      "Express",
      "React",
      "QVAC (IA local)",
      "Validación determinística",
    ],
    repo: "https://github.com/JLeonG09/LEBION",
    demo: null,
    featured: true,
    cover: "/projects/lebion.png",
  },
  {
    id: "foro-hub",
    name: "Foro Hub",
    kind: "challenge",
    role: "Backend",
    summary:
      "Challenge ONE: API REST de foro con Spring Boot 3 — endpoints, modelado y buenas prácticas.",
    highlights: [
      "API REST documentada y testeable.",
      "Modelado de dominio y validación.",
      "Certificado Alura Challenge Foro Hub (03/03/2026–05/03/2026).",
    ],
    skills: ["Java", "Spring Boot", "API REST", "JPA", "Validación"],
    repo: "https://github.com/JLeonG09/ChallengeForoHub",
    demo: null,
    featured: false,
  },
  {
    id: "literalura",
    name: "Literalura",
    kind: "challenge",
    role: "Backend / integración",
    summary:
      "Challenge ONE: app Java con consumo de API externa y persistencia.",
    highlights: [
      "Integración con API externa.",
      "Persistencia y manejo de errores.",
      "Certificado Alura Challenge Literalura (25/02/2026–28/02/2026).",
    ],
    skills: ["Java", "APIs", "Persistencia", "Manejo de errores"],
    repo: "https://github.com/JLeonG09/ChallengeLiteralura",
    demo: null,
    featured: false,
  },
  {
    id: "conversor-monedas",
    name: "Conversor de Monedas",
    kind: "challenge",
    role: "Backend / consola",
    summary:
      "Challenge ONE: primer challenge sólido de Java en el track (lógica + API de tasas).",
    highlights: [
      "Lógica de conversión y consumo de API.",
      "Base del track Java ONE.",
      "Certificado Alura Challenge Conversor (06/02/2026–08/02/2026).",
    ],
    skills: ["Java", "Consumo de API", "Lógica"],
    repo: "https://github.com/JLeonG09/ChallengeConversor",
    demo: null,
    featured: false,
  },
];

export type Certificate = {
  id: string;
  title: string;
  kind: CertificateKind;
  date: string;
  /** Ruta pública relativa, ej. /certificates/programas/foo.pdf */
  pdf: string;
};

export const certificates: Certificate[] = [
  {
    id: "one-tech-foundation-backend",
    title: "ONE Tech Foundation G9 - Back End",
    kind: "programa",
    date: "2026-03-05",
    pdf: "/certificates/programas/one-tech-foundation-backend.pdf",
  },
  {
    id: "one-tech-advanced",
    title: "ONE Tech Advanced",
    kind: "programa",
    date: "2026-06-18",
    pdf: "/certificates/programas/one-tech-advanced.pdf",
  },
  {
    id: "oci-foundations-associate",
    title: "Oracle Cloud Infrastructure Foundations Associate",
    kind: "certificacion",
    date: "2026-06-18",
    pdf: "/certificates/formaciones/oci-foundations-associate.pdf",
  },
  {
    id: "java-y-spring-boot",
    title: "Java y Spring Boot",
    kind: "formacion",
    date: "2026-03-03",
    pdf: "/certificates/formaciones/java-y-spring-boot.pdf",
  },
  {
    id: "java-y-spring-framework-g9",
    title: "Java y Spring Framework G9 - ONE",
    kind: "formacion",
    date: "2026-03-05",
    pdf: "/certificates/formaciones/java-y-spring-framework-g9.pdf",
  },
  {
    id: "java-web-spring-boot",
    title: "Java Web: crea aplicaciones utilizando Spring Boot",
    kind: "formacion",
    date: "2026-02-25",
    pdf: "/certificates/formaciones/java-web-spring-boot.pdf",
  },
  {
    id: "java-oo",
    title: "Java Orientado a Objetos G9 - ONE",
    kind: "formacion",
    date: "2026-02-08",
    pdf: "/certificates/formaciones/java-oo.pdf",
  },
  {
    id: "ia-y-java-g9",
    title: "Inteligencia Artificial y Java G9 - ONE",
    kind: "formacion",
    date: "2026-03-05",
    pdf: "/certificates/formaciones/ia-y-java-g9.pdf",
  },
  {
    id: "oci-foundations-ruta",
    title: "Ruta hacia la certificación OCI Foundations Associate",
    kind: "formacion",
    date: "2026-04-16",
    pdf: "/certificates/formaciones/oci-foundations-ruta.pdf",
  },
  {
    id: "oci-foundations-ruta-one",
    title: "Ruta hacia la certificación OCI Foundations Associate - ONE",
    kind: "formacion",
    date: "2026-06-18",
    pdf: "/certificates/formaciones/oci-foundations-ruta-one.pdf",
  },
  {
    id: "challenge-foro-hub",
    title: "Challenge Foro Hub",
    kind: "challenge",
    date: "2026-03-05",
    pdf: "/certificates/cursos/challenge-foro-hub.pdf",
  },
  {
    id: "challenge-literalura",
    title: "Challenge Literalura",
    kind: "challenge",
    date: "2026-02-28",
    pdf: "/certificates/cursos/challenge-literalura.pdf",
  },
  {
    id: "challenge-conversor-monedas",
    title: "Challenge Conversor de Monedas",
    kind: "challenge",
    date: "2026-02-08",
    pdf: "/certificates/cursos/challenge-conversor-monedas.pdf",
  },
];

export type EducationItem = {
  title: string;
  institution: string;
  detail: string;
  dateLabel: string;
};

export const education: EducationItem[] = [
  {
    title: "Ingeniería en Sistemas",
    institution: "Universidad Internacional San Isidro Labrador (UISIL)",
    detail: "En curso (~63%)",
    dateLabel: "En curso",
  },
  {
    title: "Bachillerato en Educación Media",
    institution: "Colegio Nocturno de Desamparados",
    detail: "Educación secundaria",
    dateLabel: "Dic 2024",
  },
];

/** Formación ONE (texto; sin grid de PDFs) */
export const oneFormationNotes = [
  "ONE Tech Foundation G9 – Back End (Mar 2026)",
  "ONE Tech Advanced (Jun 2026)",
  "Principiante en Programación G9 - ONE (11/09/2025)",
  "Lógica de programación con JavaScript (03/08/2025)",
  "Emprendimiento, Agilidad y Protagonismo Profesional G9 - ONE",
] as const;

export const kindLabels: Record<ProjectKind | CertificateKind, string> = {
  producto: "Producto",
  hackathon: "Hackathon",
  challenge: "Challenge ONE",
  programa: "Programa",
  formacion: "Formación",
  certificacion: "Certificación",
};
