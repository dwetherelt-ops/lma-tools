-- Like Minds — Pseudonymous Identity Support
-- Adds identity_mode to users, privacy booleans to member_profiles

-- 1. Create identity_mode enum
CREATE TYPE "identity_mode" AS ENUM ('real_name', 'pseudonym');

-- 2. Add identity_mode to users (default pseudonym — privacy-first)
ALTER TABLE "users"
  ADD COLUMN "identity_mode" "identity_mode" NOT NULL DEFAULT 'pseudonym';

-- 3. Add granular privacy controls to member_profiles
ALTER TABLE "member_profiles"
  ADD COLUMN "show_location" BOOLEAN NOT NULL DEFAULT TRUE,
  ADD COLUMN "show_neurotype" BOOLEAN NOT NULL DEFAULT TRUE,
  ADD COLUMN "allow_private_messages" BOOLEAN NOT NULL DEFAULT TRUE;
