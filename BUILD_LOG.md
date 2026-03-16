# Like Minds Alliance — Build Log

## Session 1 — 13 March 2026

**Focus:** Initial monorepo scaffold and project structure

### What was built
- Turborepo monorepo with two Next.js 14 apps (alliance on :3000, community on :3001)
- Four shared packages: ui (shadcn/ui components), db (Drizzle ORM schema), auth (Supabase helpers), types (shared interfaces)
- Complete Drizzle schema covering all 10 platform layers (members, neuro_profiles, life_log_entries, burnout_assessments, articles, forum_channels, posts, reactions, groups, coaches, bookings, marketplace_items)
- Tailwind CSS configured with Like Minds brand colours (navy, teal, orange)
- shadcn/ui Button component with brand-aligned variants
- Custom slash commands: /new-article, /new-db-table, /audit-rls, /phase-checklist, /seed-db
- Documentation: ARCHITECTURE.md, DATA_GOVERNANCE.md, GENETICS_POLICY.md
- Master CLAUDE.md with full project context

### Decisions made
- Using npm workspaces (not pnpm/yarn) for simplicity
- Drizzle ORM over Prisma (lighter weight, better Claude Code generation)
- Alliance app on port 3000, Community on port 3001
- All brand colours defined as full Tailwind scales for flexibility
- Schema designed upfront covering Phase 2+ tables — migrations will add RLS policies when Supabase is connected

### What comes next
- Connect to GitHub (create org + repo, initial commit)
- Register domains and create Vercel/Supabase accounts
- Begin Sprint 1: homepage and brand system for likemindsalliance.org
