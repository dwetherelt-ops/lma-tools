# Like Minds Alliance — Data Governance Policy

## Data Classification

| Type | Examples | Access Level |
|------|----------|-------------|
| Standard Personal | Name, email, bio | Member + admins (audit logged) |
| Sensitive Health | Burnout scores, life log, neuro profile, medication | Member only; no staff access without consent |
| Genetics Data | DTC results, polygenic scores, variants | Member only; Amber reviews framework only; never in aggregate without IRB |
| Community Content | Forum posts, group discussions | Community-visible per privacy settings |
| Research Data | Anonymised aggregate trends | Scientific advisory board only |

## GDPR Compliance

- **Right to access:** /member-data-export command generates full data export
- **Right to erasure:** /member-data-delete command hard-deletes PII; anonymises aggregate contributions
- **Consent management:** Timestamped, explicit opt-in stored in members.consent_records (JSONB)
- **Data minimisation:** Never store data without documented platform purpose
- **Third-party sharing:** Prohibited by architecture — no external analytics receiving PII
- **Genetics-specific:** Separate consent form; data processed only for member benefit unless IRB-approved research opted into

## Supabase RLS Standard

Every table MUST have Row Level Security enabled. Standard pattern:

```sql
CREATE POLICY "Members can read own data"
  ON [table] FOR SELECT
  USING (auth.uid() = member_id);

CREATE POLICY "Members can insert own data"
  ON [table] FOR INSERT
  WITH CHECK (auth.uid() = member_id);
```

Genetics data has additional restriction:
```sql
CREATE POLICY "Genetics data - member only, no staff access"
  ON genetics_uploads FOR ALL
  USING (auth.uid() = member_id AND is_genetics_consent_active(member_id) = true);
```
