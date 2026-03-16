// ============================================================
// Like Minds — Shared Type Definitions
// ============================================================

// --- Enums ---

export type UserRole = "member" | "admin" | "moderator";
export type UserStatus = "active" | "pending" | "suspended";
export type MembershipTier = "free" | "supporter" | "premium" | "scholarship";
export type ReviewStatus = "draft" | "pending-review" | "approved";
export type ModerationStatus = "published" | "flagged" | "removed" | "pending";
export type SpaceType = "discussion" | "support" | "social" | "learning" | "announcements";
export type SpaceVisibility = "public" | "members_only" | "private";
export type PostType = "discussion" | "question" | "resource" | "announcement" | "poll";
export type PostStatus = "published" | "draft" | "flagged" | "removed";
export type CommentStatus = "published" | "flagged" | "removed";
export type VisibilityLevel = "public" | "members_only" | "connections_only" | "private";
export type BurnoutRiskLevel = "low" | "moderate" | "high" | "critical";
export type IdentityMode = "real_name" | "pseudonym";

// --- 1. Users ---

export interface User {
  id: string;
  email: string; // private — never exposed in community-facing views
  fullName: string; // private — internal/admin only
  displayName: string; // public-facing identity
  avatarUrl: string | null;
  identityMode: IdentityMode;
  role: UserRole;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
}

// --- 2. Member Profiles ---

export interface MemberProfile {
  id: string;
  userId: string;
  bio: string | null;
  locationGeneral: string | null;
  neurotype: string | null;
  diagnosisStatus: string | null;
  sensoryNotes: string | null;
  strengths: string[] | null;
  challenges: string[] | null;
  supportNeeds: string[] | null;
  interests: string[] | null;
  burnoutLevel: number | null;
  visibilityLevel: VisibilityLevel;
  showLocation: boolean;
  showNeurotype: boolean;
  allowPrivateMessages: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// --- 3. Community Spaces ---

export interface CommunitySpace {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  spaceType: SpaceType;
  visibility: SpaceVisibility;
  icon: string | null;
  bannerUrl: string | null;
  createdByUserId: string;
  createdAt: Date;
  updatedAt: Date;
}

// --- 4. Posts ---

export interface Post {
  id: string;
  userId: string;
  communitySpaceId: string;
  title: string;
  body: string;
  postType: PostType;
  status: PostStatus;
  isPinned: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// --- 5. Comments ---

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  parentCommentId: string | null;
  body: string;
  status: CommentStatus;
  createdAt: Date;
  updatedAt: Date;
}

// --- Articles ---

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  author: string;
  reviewedBy: string | null;
  reviewStatus: ReviewStatus;
  reviewDate: Date | null;
  readingTimeMinutes: number | null;
  contentWarning: string | null;
  isGeneticsContent: boolean;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

// --- Life Map ---

export interface LifeLogEntry {
  id: string;
  userId: string;
  date: Date;
  sleepHours: number | null;
  moodScore: number | null;
  energyScore: number | null;
  exerciseMinutes: number | null;
  supplements: string[] | null;
  notes: string | null;
  createdAt: Date;
}

// --- Burnout Assessment ---

export interface BurnoutAssessment {
  id: string;
  userId: string;
  totalScore: number;
  categoryBreakdown: BurnoutCategory[];
  riskLevel: BurnoutRiskLevel;
  recommendations: string[] | null;
  createdAt: Date;
}

export interface BurnoutCategory {
  name: string;
  score: number;
  maxScore: number;
}

// --- Sensory Preferences (JSONB sub-type) ---

export interface SensoryPreferences {
  lightSensitivity: number; // 1-5
  soundSensitivity: number;
  textureSensitivity: number;
  notes: string | null;
}

// --- GDPR Consent ---

export interface ConsentRecord {
  type: string;
  consentedAt: string; // ISO timestamp
  version: string;
}
