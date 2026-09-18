# Portafolio — Josué León

Sitio profesional (Next.js + TypeScript + Tailwind) orientado a roles **junior backend** (Java / Spring Boot), con proyectos destacados y credenciales ONE (Tier S).

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Deploy recomendado: **Vercel**

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
pnpm build
pnpm start
```

## Contenido editable

Casi todo el copy y los links viven en:

- [`src/data/portfolio.ts`](src/data/portfolio.ts)

Pendientes de Josué: [`TODOS-JOSUE.md`](TODOS-JOSUE.md)

## Certificados PDF

1. Descarga desde Alura: https://app.aluracursos.com/user/josueleon-102013  
2. Guarda con los nombres exactos de [`public/certificates/README.md`](public/certificates/README.md)  
3. Recarga el sitio: el botón **Ver PDF** se activa si el archivo existe.

Estructura:

```
public/certificates/
  programas/
  formaciones/
  cursos/
```

## Proyectos (orden por peso)

1. Voltios y Ruedas (producto)
2. EnergiAI (hackathon)
3. LEBION (hackathon Aleph)
4. Foro Hub · Literalura · Conversor (challenges ONE)

## Deploy en Vercel

1. Sube este repo a GitHub  
2. En [vercel.com](https://vercel.com) → Add New Project → importa el repo  
3. Framework: Next.js (autodetectado)  
4. (Opcional) Variable `NEXT_PUBLIC_SITE_URL` = `https://tu-dominio.com`  
5. Deploy

No hace falta crear el proyecto Vercel a mano antes de tener el código.

## Reglas de datos

- No inventar emails ni PDFs.  
- Email vacío = placeholder visible en Contacto.  
- PDF ausente = “PDF pendiente” (sin 404 falsos).
