# Like Minds Alliance — Genetics Content & Data Review Framework

## Amber Trivedi's Role

Amber Trivedi serves as the genetics expert and scientific advisor. All genetics-related content and data handling requires her review and approval.

## Content Review Workflow

1. **Draft** — David or science writer prompts Claude Code to draft article
2. **Self-review** — David checks tone, framing, strengths-based language
3. **Amber Review** — GitHub PR review on her schedule; inline comments on claims
4. **Approve & Publish** — Amber approves PR → merge → Vercel auto-deploy
5. **Update Cycle** — Quarterly review of articles >6 months old

## Article Standards

- Target reading level: Year 10 / accessible plain language
- Tone: warm, curious, strengths-based
- Always cite recent research
- Never pathologise neurodivergence
- Use standard MDX frontmatter with reviewStatus field

## Genetics Data Governance

- DTC test data (23andMe, AncestryDNA) stored in isolated Supabase schema
- Additional encryption layer beyond standard at-rest encryption
- Separate consent form required before any genetics data processing
- Data processed ONLY for member's own benefit
- No aggregate genetics analysis without IRB approval
- 7-year encrypted backup retention per GDPR
