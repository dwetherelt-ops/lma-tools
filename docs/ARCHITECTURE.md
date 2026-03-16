# Like Minds Alliance — Architecture Overview

## Two Sites, One Platform

- **likemindsalliance.org** (apps/alliance) — Advocacy & credibility hub. Static/SSR Next.js site with genetics hub, knowledge library, and scientific advisory content.
- **likemindscommunity.org** (apps/community) — Interactive community platform. Next.js + Supabase with forums, profiles, assessments, and coaching.

## 10-Layer Architecture

| Layer | Feature | Phase |
|-------|---------|-------|
| L1 | Structured Community Forums | Phase 2 |
| L2 | Neuro Profile | Phase 2 |
| L3 | Life Map Tracker | Phase 2 |
| L4 | Burnout Index | Phase 2 |
| L5 | Genetics & Biology Hub | Phase 1 (content) + Phase 2 (interactive) |
| L6 | Knowledge Library | Phase 2 |
| L7 | Peer Learning Groups | Phase 2 |
| L8 | Coaching Ecosystem | Phase 2 |
| L9 | Curated Marketplace | Phase 2 |
| L10 | AI Guidance System | Phase 3 |

## Tech Stack

- **Framework:** Next.js 14 App Router (TypeScript)
- **Database:** Supabase (PostgreSQL + Auth + Storage + Realtime)
- **ORM:** Drizzle ORM
- **Styling:** Tailwind CSS + shadcn/ui
- **Deployment:** Vercel
- **Email:** Resend + React Email
- **Payments:** Stripe
- **AI:** Anthropic API (Claude Sonnet) — Phase 3
- **Analytics:** PostHog
