import {
  pgTable,
  uuid,
  text,
  timestamp,
  boolean,
  integer,
  jsonb,
  pgEnum,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";

// ============================================================
// Enums
// ============================================================

export const userRoleEnum = pgEnum("user_role", [
  "member",
  "admin",
  "moderator",
]);

export const userStatusEnum = pgEnum("user_status", [
  "active",
  "pending",
  "suspended",
]);

export const membershipTierEnum = pgEnum("membership_tier", [
  "free",
  "supporter",
  "premium",
  "scholarship",
]);

export const reviewStatusEnum = pgEnum("review_status", [
  "draft",
  "pending-review",
  "approved",
]);

export const moderationStatusEnum = pgEnum("moderation_status", [
  "published",
  "flagged",
  "removed",
  "pending",
]);

export const spaceTypeEnum = pgEnum("space_type", [
  "discussion",
  "support",
  "social",
  "learning",
  "announcements",
]);

export const spaceVisibilityEnum = pgEnum("space_visibility", [
  "public",
  "members_only",
  "private",
]);

export const postTypeEnum = pgEnum("post_type", [
  "discussion",
  "question",
  "resource",
  "announcement",
  "poll",
]);

export const postStatusEnum = pgEnum("post_status", [
  "published",
  "draft",
  "flagged",
  "removed",
]);

export const commentStatusEnum = pgEnum("comment_status", [
  "published",
  "flagged",
  "removed",
]);

export const visibilityLevelEnum = pgEnum("visibility_level", [
  "public",
  "members_only",
  "connections_only",
  "private",
]);

export const identityModeEnum = pgEnum("identity_mode", [
  "real_name",
  "pseudonym",
]);

// ============================================================
// 1. Users
// ============================================================

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    email: text("email").notNull().unique(),
    fullName: text("full_name").notNull(),
    displayName: text("display_name").notNull(),
    avatarUrl: text("avatar_url"),
    identityMode: identityModeEnum("identity_mode").default("pseudonym").notNull(),
    role: userRoleEnum("role").default("member").notNull(),
    status: userStatusEnum("status").default("pending").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("users_email_idx").on(table.email),
    index("users_status_idx").on(table.status),
  ]
);

// ============================================================
// 2. Member Profiles
// ============================================================

export const memberProfiles = pgTable(
  "member_profiles",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull()
      .unique(),
    bio: text("bio"),
    locationGeneral: text("location_general"),
    neurotype: text("neurotype"), // e.g. "ADHD", "Autistic", "AuDHD"
    diagnosisStatus: text("diagnosis_status"), // e.g. "diagnosed", "self-identified", "exploring"
    sensoryNotes: text("sensory_notes"),
    strengths: text("strengths").array(),
    challenges: text("challenges").array(),
    supportNeeds: text("support_needs").array(),
    interests: text("interests").array(),
    burnoutLevel: integer("burnout_level"), // 1-10 self-reported
    visibilityLevel: visibilityLevelEnum("visibility_level")
      .default("members_only")
      .notNull(),
    showLocation: boolean("show_location").default(true).notNull(),
    showNeurotype: boolean("show_neurotype").default(true).notNull(),
    allowPrivateMessages: boolean("allow_private_messages").default(true).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("member_profiles_user_id_idx").on(table.userId),
    index("member_profiles_neurotype_idx").on(table.neurotype),
  ]
);

// ============================================================
// 3. Community Spaces
// ============================================================

export const communitySpaces = pgTable(
  "community_spaces",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    slug: text("slug").notNull().unique(),
    description: text("description"),
    spaceType: spaceTypeEnum("space_type").default("discussion").notNull(),
    visibility: spaceVisibilityEnum("visibility").default("public").notNull(),
    icon: text("icon"),
    bannerUrl: text("banner_url"),
    createdByUserId: uuid("created_by_user_id")
      .references(() => users.id)
      .notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("community_spaces_slug_idx").on(table.slug),
    index("community_spaces_type_idx").on(table.spaceType),
  ]
);

// ============================================================
// 4. Posts
// ============================================================

export const posts = pgTable(
  "posts",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    communitySpaceId: uuid("community_space_id")
      .references(() => communitySpaces.id, { onDelete: "cascade" })
      .notNull(),
    title: text("title").notNull(),
    body: text("body").notNull(),
    postType: postTypeEnum("post_type").default("discussion").notNull(),
    status: postStatusEnum("status").default("published").notNull(),
    isPinned: boolean("is_pinned").default(false).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("posts_user_id_idx").on(table.userId),
    index("posts_community_space_id_idx").on(table.communitySpaceId),
    index("posts_status_idx").on(table.status),
    index("posts_created_at_idx").on(table.createdAt),
  ]
);

// ============================================================
// 5. Comments
// ============================================================

export const comments = pgTable(
  "comments",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    postId: uuid("post_id")
      .references(() => posts.id, { onDelete: "cascade" })
      .notNull(),
    userId: uuid("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    parentCommentId: uuid("parent_comment_id"), // nullable — for threaded replies
    body: text("body").notNull(),
    status: commentStatusEnum("status").default("published").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("comments_post_id_idx").on(table.postId),
    index("comments_user_id_idx").on(table.userId),
    index("comments_parent_comment_id_idx").on(table.parentCommentId),
  ]
);

// ============================================================
// Articles (Genetics Hub + Knowledge Library)
// ============================================================

export const articles = pgTable("articles", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content"), // MDX source
  author: text("author").notNull(),
  reviewedBy: text("reviewed_by"),
  reviewStatus: reviewStatusEnum("review_status").default("draft").notNull(),
  reviewDate: timestamp("review_date"),
  readingTimeMinutes: integer("reading_time_minutes"),
  contentWarning: text("content_warning"),
  isGeneticsContent: boolean("is_genetics_content").default(false).notNull(),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const articleTags = pgTable("article_tags", {
  id: uuid("id").primaryKey().defaultRandom(),
  articleId: uuid("article_id")
    .references(() => articles.id, { onDelete: "cascade" })
    .notNull(),
  tag: text("tag").notNull(),
});

// ============================================================
// Life Map Tracker
// ============================================================

export const lifeLogEntries = pgTable("life_log_entries", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  date: timestamp("date").notNull(),
  sleepHours: integer("sleep_hours"),
  moodScore: integer("mood_score"), // 1-10
  energyScore: integer("energy_score"), // 1-10
  exerciseMinutes: integer("exercise_minutes"),
  supplements: text("supplements").array(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ============================================================
// Burnout Index
// ============================================================

export const burnoutAssessments = pgTable("burnout_assessments", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  totalScore: integer("total_score").notNull(),
  categoryBreakdown: jsonb("category_breakdown").notNull(),
  riskLevel: text("risk_level").notNull(), // low, moderate, high, critical
  recommendations: jsonb("recommendations"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ============================================================
// Reactions
// ============================================================

export const reactions = pgTable("reactions", {
  id: uuid("id").primaryKey().defaultRandom(),
  postId: uuid("post_id")
    .references(() => posts.id, { onDelete: "cascade" })
    .notNull(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  emoji: text("emoji").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ============================================================
// Peer Learning Groups
// ============================================================

export const groups = pgTable("groups", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description"),
  facilitatorId: uuid("facilitator_id")
    .references(() => users.id)
    .notNull(),
  maxMembers: integer("max_members").default(12).notNull(),
  schedule: jsonb("schedule"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const groupMembers = pgTable("group_members", {
  id: uuid("id").primaryKey().defaultRandom(),
  groupId: uuid("group_id")
    .references(() => groups.id, { onDelete: "cascade" })
    .notNull(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  role: text("role").default("participant").notNull(),
  joinedAt: timestamp("joined_at").defaultNow().notNull(),
});

// ============================================================
// Coaching Ecosystem
// ============================================================

export const coaches = pgTable("coaches", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull()
    .unique(),
  specialisms: text("specialisms").array(),
  bio: text("bio"),
  calendlyUrl: text("calendly_url"),
  hourlyRate: integer("hourly_rate"), // in cents
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const bookings = pgTable("bookings", {
  id: uuid("id").primaryKey().defaultRandom(),
  coachId: uuid("coach_id")
    .references(() => coaches.id, { onDelete: "cascade" })
    .notNull(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  scheduledAt: timestamp("scheduled_at").notNull(),
  durationMinutes: integer("duration_minutes").default(60).notNull(),
  stripePaymentId: text("stripe_payment_id"),
  status: text("status").default("confirmed").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ============================================================
// Curated Marketplace
// ============================================================

export const marketplaceItems = pgTable("marketplace_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description"),
  affiliateUrl: text("affiliate_url"),
  likeMIndsRating: integer("like_minds_rating"), // 1-5
  category: text("category"),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
