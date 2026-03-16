# Like Minds Community Platform — CLAUDE.md

## Project Overview

Like Minds Alliance is a community platform for neurodivergent adults, founded by David Wetherelt. The platform provides science-backed resources, genetics education, peer support, and personalised tools for understanding and managing neurodivergent life.

**Two sites, one codebase:**
- **likemindsalliance.org** (`apps/alliance`) — Advocacy & credibility hub. Static/SSR content site with genetics hub, knowledge library, and scientific advisory content.
- **likemindscommunity.org** (`apps/community`) — Interactive community platform with forums, neuro profiles, burnout tracking, coaching, and AI guidance.

**Amber Trivedi** is the genetics expert and scientific advisor. All genetics content requires her review and approval via GitHub PR.

## Tech Stack

- **Framework:** Next.js 14 App Router (TypeScript)
- **Database:** Supabase (PostgreSQL + Auth + Storage + Realtime)
- **ORM:** Drizzle ORM — schema in `packages/db/src/schema.ts`
- **Styling:** Tailwind CSS + shadcn/ui components (shared via `packages/ui`)
- **Deployment:** Vercel (auto-deploy from main branch)
- **Email:** Resend + React Email
- **Payments:** Stripe
- **Analytics:** PostHog (privacy-first configuration)
- **AI (Phase 3):** Anthropic API (Claude Sonnet) + pgvector RAG

## Monorepo Structure

```
like-minds/
├── CLAUDE.md              ← You are here
├── BUILD_LOG.md           ← Session-by-session build diary
├── .claude/commands/      ← Custom slash commands
├── apps/
│   ├── alliance/          ← likemindsalliance.org (Next.js)
│   └── community/         ← likemindscommunity.org (Next.js)
├── packages/
│   ├── ui/                ← Shared shadcn/ui component library
│   ├── db/                ← Drizzle schema + migrations
│   ├── auth/              ← Supabase auth helpers
│   └── types/             ← Shared TypeScript interfaces
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DATA_GOVERNANCE.md
│   └── GENETICS_POLICY.md
└── .github/workflows/     ← CI/CD
```

## Naming Conventions

- **Components:** PascalCase in `/components` (e.g., `NeuroProfileForm.tsx`)
- **Server actions:** camelCase in `/app/actions` (e.g., `createProfile.ts`)
- **DB tables:** snake_case (e.g., `neuro_profiles`, `life_log_entries`)
- **Types:** PascalCase interfaces in `packages/types/src` (e.g., `NeuroProfile`)
- **Files:** kebab-case for non-component files (e.g., `burnout-scoring.ts`)

## Architecture Rules

1. **Always use Server Components** unless client interactivity is needed (forms, state, effects)
2. **Database access ONLY through `packages/db`** — never import Supabase client directly in components
3. **Row Level Security is ALWAYS enabled** on every Supabase table — no exceptions
4. **Sensitive data (health, genetics) requires HIPAA-aware handling** — see `docs/DATA_GOVERNANCE.md`
5. **Never commit `.env` files** — use `.env.example` with placeholders
6. **Strengths-based language only** — never pathologise neurodivergence in any user-facing content
7. **Genetics content requires Amber's approval** — see `docs/GENETICS_POLICY.md`

## Current Phase: Phase 1 (Months 1–6)

**Focus:** likemindsalliance.org static site + Circle.so community setup

**DO NOT build custom community features yet** — Circle.so handles community in Phase 1.

### Phase 1 Sprint Plan
- Sprint 1 (Wk 1–2): Project setup, component library, design tokens (navy, teal, orange)
- Sprint 2 (Wk 3–4): Homepage, About, Mission, Founder's story, navigation
- Sprint 3 (Wk 5–6): Science & Knowledge Hub shell, genetics article template (MDX)
- Sprint 4 (Wk 7–8): Email capture (Resend), newsletter signup, contact form
- Sprint 5 (Wk 9–10): SEO, Open Graph, sitemap, Vercel deployment
- Sprint 6 (Wk 11–12): PostHog analytics, Lighthouse audit, accessibility, bug fixes

### Phase 1 Success Criteria
- likemindsalliance.org live, mobile-responsive, Lighthouse > 90
- 3+ published genetics articles (Amber approved)
- Circle.so community with 50+ founding members
- 200+ email subscribers within 3 months
- CLAUDE.md and BUILD_LOG.md fully maintained

## Brand Colours (Tailwind)

- **Navy:** Primary text and headings — `navy-900` through `navy-50`
- **Teal:** CTAs and interactive elements — `teal-600` primary, `teal-500` hover
- **Orange:** Accents and highlights — `orange-500` primary

## Custom Slash Commands

- `/new-article` — Scaffold genetics/knowledge article with MDX frontmatter
- `/new-db-table` — Create Drizzle schema + RLS + types for new entity
- `/audit-rls` — Review all tables for correct RLS policies
- `/phase-checklist` — Check current phase deliverables status
- `/seed-db` — Populate dev database with realistic test data

## Session Best Practices

1. Start every session by reading this file
2. One feature per session — stay focused
3. Commit after every working feature (small, atomic commits)
4. Update BUILD_LOG.md after each session
5. Review with `git diff` before pushing to main
6. Ask David to explain any unclear requirements before implementing
