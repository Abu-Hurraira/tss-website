# TIME School System — Public Website Handoff Script

> **Purpose:** Paste this document (or `@docs/PUBLIC_WEBSITE_HANDOFF.md`) into a new chat so the agent understands the existing ERP, brand, assets, and the **approved direction** for the public institutional website — **without re-discovering everything from scratch**.
>
> **Status:** Analysis complete. **Do not implement the public website until the gallery asset path is confirmed** (see §4).
>
> **Related chat:** [Website analysis handoff](825504cf-523c-43a2-9f5f-cce7b3fa2459)

---

## 0. Non-negotiable rules for the next agent

1. **Do not redesign or break the ERP.** Public site must coexist with authenticated app routes.
2. **Do not build a second dashboard.** Public site = university/college institutional website.
3. **Reuse TSS brand tokens** from `frontend/src/index.css` (navy + brand blue + orange accents). Evolve, don’t invent a purple SaaS theme.
4. **Use provided gallery images** when available — no random stock if real assets exist.
5. **Analysis already done** — implement from this handoff; only re-scan if files moved.

---

## 1. Existing TSS architecture (what exists today)

### Monorepo layout

| Path | Role |
|------|------|
| `d:\TSS\frontend` | React 19 + Vite 8 + TypeScript + Tailwind v4 SPA (ERP UI) |
| `d:\TSS\backend` | Next.js App Router mock API (`src/app/api/**`) + `mock-db.ts` |
| Dev ports | Frontend `5173` (proxies `/api` → `127.0.0.1:3001`) |

### Frontend stack

- **Router:** `react-router-dom` v7 — see `frontend/src/App.tsx`
- **State:** Zustand — `stores/auth-store.ts`, `stores/portal-store.ts`
- **API:** `lib/api-client.ts` (Bearer token `tss_token`)
- **Services:** `services/auth.service.ts`, `student.service.ts`, `dashboard.service.ts`, `setup.service.ts`, `wave3–wave6.service.ts`
- **Icons:** `lucide-react`
- **Utils:** `clsx` + `tailwind-merge` via `lib/utils.ts` (`cn`)
- **Motion:** `framer-motion` is installed but **barely used** in ERP (mostly CSS transitions + skeleton pulse)
- **Alias:** `@` → `frontend/src` (`vite.config.ts`)

### Current routing (ERP only)

**Public (unauthenticated):**

- `/login`
- `/forgot-password`

**Protected (`ProtectedRoute` + `AppLayout`):**

| Route | Module |
|-------|--------|
| `/` | Dashboard |
| `/admissions` | Admissions pipeline |
| `/students`, `/students/:id` | Student directory + profile |
| `/academics` | Classes / subjects / homework |
| `/attendance` | Attendance |
| `/timetable` | Timetable |
| `/exams` | Exams & results |
| `/fees` | Fees & finance |
| `/staff` | Staff & HR |
| `/communication` | Announcements / notifications |
| `/documents` | Certificates / docs |
| `/reports` | Reports |
| `/setup` | School setup |
| `/settings` | Settings + audit UI |
| `/library`, `/transport`, `/inventory` | **Placeholder “soon”** pages |

Catch-all `*` → redirect `/` (logged-in home). **There is no public marketing site yet.**

### Auth & roles

Roles (`types`): `super_admin`, `school_admin`, `principal`, `teacher`, `accountant`, `hr`, `parent`, `student`.

Permissions: `frontend/src/lib/permissions.ts`  
Role-specific nav: `components/layout/sidebar.tsx` (`getNavForRole`)  
Shell: sidebar + topbar + mobile bottom nav (`app-layout.tsx`)

### Backend / data

- In-memory mock DB: `backend/src/lib/mock-db.ts`
- School profile defaults:
  - Name: **TIME School System**
  - Motto: **Empowering Future Leaders Through Quality Education.**
  - Email: `info@timeschool.edu`
  - Phone: `+92 000 0000000`
  - Website: `https://timeschool.edu`
  - Established in mock: `2008` — **prefer logo ESTB: 2021 for public brand**
- Campuses: Main Campus (Lahore, Main Boulevard), North Campus (Islamabad, Sector F-8)
- Grades: ~7–11; departments: Sciences, Languages, Mathematics, Administration
- Leadership placeholders: Principal Ayesha Khan, Admin Dr. Tariq Mahmood

---

## 2. Design system & brand language (ERP)

### Source of truth

`frontend/src/index.css` (`@theme` + `html.dark`)

### Colors (light)

| Token | Hex | Use |
|-------|-----|-----|
| navy / ink | `#082B4C` | Text, headers |
| brand | `#0C558F` | Primary actions, links |
| brand-hover | `#094474` | Hover |
| brand-muted / soft | `#E8F1F8` / `#F4F8FC` | Soft fills |
| canvas | `#F7FAFF` | Page background |
| surface | `#FFFFFF` | Cards |
| border | `#DCE6F2` | Borders |
| accent-orange | `#F97316` | Highlights (aligns with logo sun ~`#F39200`) |
| accent-purple | `#7C3AED` | KPI variety only — **do not dominate public site** |
| success / warning / danger | green / amber / red | Status only |

Dark mode: class `html.dark`, storage key `tss_theme` (`lib/theme.ts`). Public site should be **light-first institutional**; optional dark later.

### Typography

- Primary: **Plus Jakarta Sans** (loaded in `index.html`)
- Also loaded: Noto Naskh Arabic, Noto Nastaliq Urdu (Hadees / bilingual)
- Public site may add a **display serif** for cinematic headlines while keeping Jakarta for UI — still TSS family, not Inter/Roboto.

### Radii & surfaces

- Card radius: `12px` (`--radius-card`)
- Control radius: `10px` (`--radius-control`)
- Cards: soft navy-tinted shadow, border, white surface
- Personality: **formal modern academic / corporate education ERP** — clean, restrained, trustworthy — **not playful kids’ site**

### Reusable UI primitives

| Component | Path |
|-----------|------|
| Button | `components/ui/button.tsx` — primary / secondary / ghost / danger / success |
| Card / TableCard | `components/ui/card.tsx` |
| Input | `components/ui/input.tsx` |
| Modal | `components/ui/modal.tsx` |
| Badge | `components/ui/badge.tsx` |
| PageHeader, Skeleton, EmptyState | `components/ui/page-header.tsx` |
| List helpers / StatusPill | `components/ui/list.tsx` |
| StatCard | `components/ui/stat-card.tsx` (**ERP metrics — avoid on public marketing pages**) |

### Layout patterns

- ERP: sidebar + topbar + content canvas
- Login: split brand panel + form (already more “institutional” than dashboard)
- Responsive: mobile drawer sidebar + bottom priority nav
- Tables: list pages with StatusPill, View links, footers

### Animations today

Mostly `transition-all`, hover lifts on some dashboard links, skeleton `animate-pulse`. Framer Motion available for public site cinematic reveals.

---

## 3. ERP modules → institution meaning (for public content mapping)

| ERP module | Real-world meaning | Public website use |
|------------|--------------------|--------------------|
| Dashboard | Ops overview | Not public |
| Admissions | Application pipeline | Admissions + Apply form + FAQ |
| Students | SIS records | Not public (privacy) |
| Academics | Classes, subjects, homework | Academics / Programs / Departments |
| Attendance | Daily marking | Parent info mention only |
| Timetable | Schedules | Student life / “school day” blurbs |
| Exams | Exams & published results | Results policy / exam calendar (no private marks) |
| Fees | Challans / payments | Fee policy placeholders, scholarships CTA |
| Staff & HR | Staff directory | Faculty / leadership (curated public bios) |
| Communication | Announcements | News / Events / Announcements |
| Documents | Certificates | Downloads / forms |
| Reports | Analytics | Not public |
| Settings / Audit | Admin | Not public |
| Setup | Campuses, years, classes | About / Campuses / Academics facts |
| Library / Transport / Inventory | Placeholders | Facilities mentions when ready |

---

## 4. Image assets inventory (CRITICAL)

### Found in workspace (2026-08-13 scan)

| File | Role |
|------|------|
| `frontend/public/logo.png` | **Official circular logo** — navy ring, orange sun, TSS, book, ESTB: 2021. Use header/footer/favicon/OG. |
| `frontend/public/favicon.png`, `favicon-32.png`, `apple-touch-icon.png` | Favicons |
| `frontend/public/certificate-template.png` | Formal certificate visual — optional Downloads/Achievements |
| `frontend/src/assets/hero.png` | Small abstract stacked-platform graphic (dark + purple glow). **Supporting motif only.** Do **not** drive a purple neon theme. |

### Gallery folder — NOT FOUND

User stated a **Gallery** image folder was prepared. A full workspace scan did **not** find:

- `gallery/`, `images/`, `media/`, `website/`, or a folder of campus/event photos beyond the files above.

**Before implementing Gallery / cinematic campus sections, the next agent MUST ask the user for the exact path** (e.g. `d:\TSS\frontend\public\gallery\`) or have them drop images into:

```text
frontend/public/website/gallery/
  campus/
  events/
  academics/
  sports/
  community/
```

Then categorize each file by content (campus exterior, classroom, lab, assembly, sports, ceremony, etc.).

---

## 5. What we are building (and what we are not)

### Build: public institutional website

Think: university / large school marketing site — About, Admissions, Academics, Campus life, News, Gallery, Contact, Apply.

### Do NOT build

- Another ERP dashboard
- Admin tables as the homepage
- Rainbow KPI card grids as marketing UI
- Generic Bootstrap/SaaS template look
- Overwriting `/login` ERP auth (link to it instead)

### Coexistence plan (recommended)

Keep one Vite app; split route trees:

```text
Public layout (no AppLayout sidebar):
  /site          or  /  (marketing home)   ← choose one strategy below
  /about
  /academics-info  (avoid clash with ERP /academics)
  /admissions-info OR nest under /site/*
  /apply
  /campus-life
  /news
  /gallery
  /contact
  /careers (optional)

Auth:
  /login
  /forgot-password

Protected ERP (unchanged):
  /app/*   OR keep current paths behind ProtectedRoute
```

**Recommended routing strategy (least breakage):**

1. Mount public pages under **`/site/*`** first (safe), with `/site` as marketing home.
2. Optionally later make `/` marketing and move ERP dashboard to `/app` — **only with explicit user approval** (bigger change).

**Interim simpler approach (also fine):**

- Public routes: `/`, `/about`, `/admissions`, … as **unauthenticated**
- Move ERP dashboard from `/` to `/dashboard` (or `/app`) and update nav/`getHomePath`

Ask user which coexistence strategy they prefer before coding.

---

## 6. Recommended information architecture

### Primary nav (public)

1. Home  
2. About  
3. Academics  
4. Admissions  
5. Campus Life  
6. News & Events  
7. Gallery  
8. Contact  

**Header CTAs:** Apply Now (primary orange/brand) · Portal Login → `/login`

### Footer

Logo, motto, campuses, quick links, contact, © year, social placeholders.

### Pages & purpose

| Page | Sections |
|------|----------|
| **Home** | Cinematic hero (logo + brand headline + 1 sentence + CTAs); Why TSS (3–4 pillars); Programs snapshot; Campuses; News teaser; Gallery strip; Admissions CTA band; Contact strip |
| **About** | Story (ESTB 2021), mission/vision, leadership message, values, achievements |
| **Academics** | Curriculum overview, departments, grade pathways, labs/facilities learning |
| **Admissions** | Steps timeline, requirements, dates, fees overview (labeled sample), FAQ, link to Apply |
| **Apply** | Inquiry/application form (mock submit OK; structure for future admissions API) |
| **Campus Life** | Facilities, clubs, sports, day-in-the-life; Lahore vs Islamabad flavor |
| **News & Events** | List + detail template; filters |
| **Gallery** | Category filters + lightbox using **real assets** |
| **Contact** | Form, campus cards, map placeholder, hours |
| **Optional** | Careers, Downloads, Scholarships, Policies |

### Homepage section order (approved direction)

1. Hero (brand-first, full-bleed atmosphere, no overlay chip spam)  
2. Trust / why TSS  
3. Academics snapshot  
4. Campuses  
5. Student life / gallery preview  
6. News  
7. Admissions CTA  
8. Contact / visit  

### Design direction

- Modern, premium, institutional, slightly cinematic, fast, accessible  
- Navy + white + soft blue canvas + **orange** CTAs from logo  
- Motion: hero stagger, scroll reveal, sticky header compress, card hover — respect `prefers-reduced-motion`  
- Avoid: purple-neon from `hero.png`, dashboard KPI walls, card overload, generic templates  

### Suggested public components (new folder)

```text
frontend/src/components/public/
  PublicHeader.tsx
  PublicFooter.tsx
  PublicLayout.tsx
  Hero.tsx
  SectionHeading.tsx
  ProgramCard.tsx
  CampusCard.tsx
  NewsCard.tsx
  GalleryGrid.tsx
  ApplyForm.tsx
  ContactForm.tsx
  FaqAccordion.tsx
```

Pages: `frontend/src/pages/public/*.tsx`  
Content constants: `frontend/src/content/school.ts` (name, motto, campuses, departments — sourced from mock profile)

---

## 7. Files the next agent should open first

```text
frontend/src/App.tsx
frontend/src/index.css
frontend/src/main.tsx
frontend/index.html
frontend/vite.config.ts
frontend/src/components/layout/sidebar.tsx
frontend/src/components/layout/app-layout.tsx
frontend/src/components/auth/protected-route.tsx
frontend/src/lib/permissions.ts
frontend/src/lib/theme.ts
frontend/src/pages/login-page.tsx
backend/src/lib/mock-db.ts          # school profile + campuses
frontend/public/logo.png
frontend/src/assets/hero.png
docs/PUBLIC_WEBSITE_HANDOFF.md      # this file
```

---

## 8. Implementation checklist (for after approval)

- [ ] Confirm gallery image folder path with user; copy into `frontend/public/website/gallery/`
- [ ] Confirm route coexistence strategy (`/site/*` vs move ERP `/` → `/dashboard`)
- [ ] Add `PublicLayout` + public routes **without** removing ERP routes
- [ ] Build Home → About → Academics → Admissions → Apply → Campus Life → News → Gallery → Contact
- [ ] Wire Portal Login to existing `/login`
- [ ] Optional: mock POST apply → future `/api/admissions`
- [ ] SEO titles/meta; OG image from logo
- [ ] Mobile nav + accessibility + reduced motion
- [ ] Do **not** change ERP module business logic

---

## 9. Prompt to paste into a new chat

```text
Read @docs/PUBLIC_WEBSITE_HANDOFF.md fully before coding.

You are continuing TIME School System (TSS). Analysis is already done.
Build the PUBLIC institutional website per that handoff.

Rules:
- Do not redesign/break the ERP dashboard or modules.
- Public site must feel like a premium school/university website, not an admin UI.
- Reuse brand tokens from frontend/src/index.css (navy #082B4C, brand #0C558F, orange accent).
- Use frontend/public/logo.png as primary brand mark.
- Do not let frontend/src/assets/hero.png force a purple neon theme.
- Before Gallery implementation, confirm where my gallery images are (they were not in the repo during analysis). If I provide a path, use those real images only.
- Ask me to confirm routing coexistence: (A) public under /site/* or (B) public at / and ERP at /dashboard.
- Then implement PublicLayout + pages + motion per the handoff checklist.
```

---

## 10. Open questions for the user (resolve before / during build)

1. **Where is the Gallery folder?** Absolute path or please add under `frontend/public/website/gallery/`.
2. **Routing:** Keep ERP at `/` and put marketing under `/site`, or make marketing `/` and move ERP home?
3. **Apply form:** front-end mock only, or wire to existing admissions API?
4. **Display font:** add a serif display face, or stay Plus Jakarta only?
5. **Established year:** logo **2021** vs mock-db **2008** — confirm public copy uses **2021**.

---

*Generated from workspace inspection. No public website UI was implemented in the analysis pass.*
