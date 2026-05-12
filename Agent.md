# Project: SPOGLOCK Portfolio Migration

---

## Stack

- **Frontend:** (e.g. React, JSX, Tailwind CSS, Vite, GSAP, Lucide REACT)
- **Backend:** (e.g. Node.js, Express / FastAPI / Next.js API routes)
- **Database:** (e.g. PostgreSQL via Prisma / MongoDB via Mongoose)
- **Auth:** (e.g. NextAuth, Supabase Auth, JWT)
- **Deployment:** (e.g. Vercel, Railway, Docker)

---

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Route-level components
├── hooks/          # Custom React hooks
├── services/       # API calls and external integrations
├── types/          # Shared JavaScript types/interfaces
├── utils/          # Pure helper functions
└── lib/            # Third-party library configs (db client, auth, etc.)
```

---

## Commands

```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build

# Tests
npm test              # or: npx jest / pytest / etc.

# Lint + format
npm run lint
npm run format
```

---

## Key Conventions

- [ ] State management approach: (e.g. Zustand for global, useState for local)
- [ ] Data fetching: (e.g. React Query / SWR / raw fetch)
- [ ] Form handling: (e.g. React Hook Form + Zod)
- [ ] API base URL is set via `NEXT_PUBLIC_API_URL` env var
- [ ] All API calls go through `/src/services/` — never fetch directly from components

---
