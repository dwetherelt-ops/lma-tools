-- Like Minds — Initial MVP Schema
-- Generated from packages/db/src/schema.ts

-- ============================================================
-- Enums
-- ============================================================

CREATE TYPE "user_role" AS ENUM ('member', 'admin', 'moderator');
CREATE TYPE "user_status" AS ENUM ('active', 'pending', 'suspended');
CREATE TYPE "membership_tier" AS ENUM ('free', 'supporter', 'premium', 'scholarship');
CREATE TYPE "review_status" AS ENUM ('draft', 'pending-review', 'approved');
CREATE TYPE "moderation_status" AS ENUM ('published', 'flagged', 'removed', 'pending');
CREATE TYPE "space_type" AS ENUM ('discussion', 'support', 'social', 'learning', 'announcements');
CREATE TYPE "space_visibility" AS ENUM ('public', 'members_only', 'private');
CREATE TYPE "post_type" AS ENUM ('discussion', 'question', 'resource', 'announcement', 'poll');
CREATE TYPE "post_status" AS ENUM ('published', 'draft', 'flagged', 'removed');
CREATE TYPE "comment_status" AS ENUM ('published', 'flagged', 'removed');
CREATE TYPE "visibility_level" AS ENUM ('public', 'members_only', 'connections_only', 'private');
CREATE TYPE "identity_mode" AS ENUM ('real_name', 'pseudonym');

-- ============================================================
-- 1. Users
-- ============================================================

CREATE TABLE "users" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "email" TEXT NOT NULL UNIQUE,
  "full_name" TEXT NOT NULL,
  "display_name" TEXT NOT NULL,
  "avatar_url" TEXT,
  "identity_mode" "identity_mode" NOT NULL DEFAULT 'pseudonym',
  "role" "user_role" NOT NULL DEFAULT 'member',
  "status" "user_status" NOT NULL DEFAULT 'pending',
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX "users_email_idx" ON "users" ("email");
CREATE INDEX "users_status_idx" ON "users" ("status");

-- ============================================================
-- 2. Member Profiles
-- ============================================================

CREATE TABLE "member_profiles" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL UNIQUE REFERENCES "users" ("id") ON DELETE CASCADE,
  "bio" TEXT,
  "location_general" TEXT,
  "neurotype" TEXT,
  "diagnosis_status" TEXT,
  "sensory_notes" TEXT,
  "strengths" TEXT[],
  "challenges" TEXT[],
  "support_needs" TEXT[],
  "interests" TEXT[],
  "burnout_level" INTEGER,
  "visibility_level" "visibility_level" NOT NULL DEFAULT 'members_only',
  "show_location" BOOLEAN NOT NULL DEFAULT TRUE,
  "show_neurotype" BOOLEAN NOT NULL DEFAULT TRUE,
  "allow_private_messages" BOOLEAN NOT NULL DEFAULT TRUE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX "member_profiles_user_id_idx" ON "member_profiles" ("user_id");
CREATE INDEX "member_profiles_neurotype_idx" ON "member_profiles" ("neurotype");

-- ============================================================
-- 3. Community Spaces
-- ============================================================

CREATE TABLE "community_spaces" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "name" TEXT NOT NULL,
  "slug" TEXT NOT NULL UNIQUE,
  "description" TEXT,
  "space_type" "space_type" NOT NULL DEFAULT 'discussion',
  "visibility" "space_visibility" NOT NULL DEFAULT 'public',
  "icon" TEXT,
  "banner_url" TEXT,
  "created_by_user_id" UUID NOT NULL REFERENCES "users" ("id"),
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX "community_spaces_slug_idx" ON "community_spaces" ("slug");
CREATE INDEX "community_spaces_type_idx" ON "community_spaces" ("space_type");

-- ============================================================
-- 4. Posts
-- ============================================================

CREATE TABLE "posts" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE,
  "community_space_id" UUID NOT NULL REFERENCES "community_spaces" ("id") ON DELETE CASCADE,
  "title" TEXT NOT NULL,
  "body" TEXT NOT NULL,
  "post_type" "post_type" NOT NULL DEFAULT 'discussion',
  "status" "post_status" NOT NULL DEFAULT 'published',
  "is_pinned" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX "posts_user_id_idx" ON "posts" ("user_id");
CREATE INDEX "posts_community_space_id_idx" ON "posts" ("community_space_id");
CREATE INDEX "posts_status_idx" ON "posts" ("status");
CREATE INDEX "posts_created_at_idx" ON "posts" ("created_at");

-- ============================================================
-- 5. Comments
-- ============================================================

CREATE TABLE "comments" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "post_id" UUID NOT NULL REFERENCES "posts" ("id") ON DELETE CASCADE,
  "user_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE,
  "parent_comment_id" UUID,
  "body" TEXT NOT NULL,
  "status" "comment_status" NOT NULL DEFAULT 'published',
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX "comments_post_id_idx" ON "comments" ("post_id");
CREATE INDEX "comments_user_id_idx" ON "comments" ("user_id");
CREATE INDEX "comments_parent_comment_id_idx" ON "comments" ("parent_comment_id");

-- ============================================================
-- Articles
-- ============================================================

CREATE TABLE "articles" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "title" TEXT NOT NULL,
  "slug" TEXT NOT NULL UNIQUE,
  "content" TEXT,
  "author" TEXT NOT NULL,
  "reviewed_by" TEXT,
  "review_status" "review_status" NOT NULL DEFAULT 'draft',
  "review_date" TIMESTAMP,
  "reading_time_minutes" INTEGER,
  "content_warning" TEXT,
  "is_genetics_content" BOOLEAN NOT NULL DEFAULT FALSE,
  "published_at" TIMESTAMP,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "article_tags" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "article_id" UUID NOT NULL REFERENCES "articles" ("id") ON DELETE CASCADE,
  "tag" TEXT NOT NULL
);

-- ============================================================
-- Life Log
-- ============================================================

CREATE TABLE "life_log_entries" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE,
  "date" TIMESTAMP NOT NULL,
  "sleep_hours" INTEGER,
  "mood_score" INTEGER,
  "energy_score" INTEGER,
  "exercise_minutes" INTEGER,
  "supplements" TEXT[],
  "notes" TEXT,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

-- ============================================================
-- Burnout Assessments
-- ============================================================

CREATE TABLE "burnout_assessments" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE,
  "total_score" INTEGER NOT NULL,
  "category_breakdown" JSONB NOT NULL,
  "risk_level" TEXT NOT NULL,
  "recommendations" JSONB,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

-- ============================================================
-- Reactions
-- ============================================================

CREATE TABLE "reactions" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "post_id" UUID NOT NULL REFERENCES "posts" ("id") ON DELETE CASCADE,
  "user_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE,
  "emoji" TEXT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

-- ============================================================
-- Groups
-- ============================================================

CREATE TABLE "groups" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "name" TEXT NOT NULL,
  "description" TEXT,
  "facilitator_id" UUID NOT NULL REFERENCES "users" ("id"),
  "max_members" INTEGER NOT NULL DEFAULT 12,
  "schedule" JSONB,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "group_members" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "group_id" UUID NOT NULL REFERENCES "groups" ("id") ON DELETE CASCADE,
  "user_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE,
  "role" TEXT NOT NULL DEFAULT 'participant',
  "joined_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

-- ============================================================
-- Coaches & Bookings
-- ============================================================

CREATE TABLE "coaches" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL UNIQUE REFERENCES "users" ("id") ON DELETE CASCADE,
  "specialisms" TEXT[],
  "bio" TEXT,
  "calendly_url" TEXT,
  "hourly_rate" INTEGER,
  "is_active" BOOLEAN NOT NULL DEFAULT TRUE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "bookings" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "coach_id" UUID NOT NULL REFERENCES "coaches" ("id") ON DELETE CASCADE,
  "user_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE,
  "scheduled_at" TIMESTAMP NOT NULL,
  "duration_minutes" INTEGER NOT NULL DEFAULT 60,
  "stripe_payment_id" TEXT,
  "status" TEXT NOT NULL DEFAULT 'confirmed',
  "notes" TEXT,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

-- ============================================================
-- Marketplace
-- ============================================================

CREATE TABLE "marketplace_items" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "name" TEXT NOT NULL,
  "description" TEXT,
  "affiliate_url" TEXT,
  "like_minds_rating" INTEGER,
  "category" TEXT,
  "is_active" BOOLEAN NOT NULL DEFAULT TRUE,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW()
);

-- ============================================================
-- Row Level Security (enable on all tables)
-- Policies will be added per-table as features are built
-- ============================================================

ALTER TABLE "users" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "member_profiles" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "community_spaces" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "posts" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "comments" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "articles" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "article_tags" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "life_log_entries" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "burnout_assessments" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "reactions" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "groups" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "group_members" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "coaches" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "bookings" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "marketplace_items" ENABLE ROW LEVEL SECURITY;
