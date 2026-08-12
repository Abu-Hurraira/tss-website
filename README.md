# TIME School System — Public Website

Standalone institutional website for **TIME School System Mial**.

## Architecture

```
Pages → Components → Data → Services → Server
```

No `public/` nesting under `src/` — this entire app is public-facing.

## Quick start

```bash
cp .env.example .env
npm install
npm run dev
```

- Website: http://localhost:5174/site  
- Contact API: http://127.0.0.1:3010  

Portal Login → ERP (`VITE_PORTAL_LOGIN_URL`, default `http://localhost:5173/login`).

## Navbar

Home · About · Academics · Admissions · Gallery & News · **Apply Now**

## Campus

Single campus: **TIME School System Mial**

## Docs

- `docs/PUBLIC_WEBSITE_HANDOFF.md`
- `docs/WEBSITE_STRUCTURE.md`
- `docs/EMAIL_CONFIGURATION.md`
