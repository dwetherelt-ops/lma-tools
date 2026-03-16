"use server";

import { createClient } from "../../lib/supabase/server";

// Types for the onboarding form data
export interface OnboardingData {
  // Step 2: Identity & basic profile
  displayName: string;
  identityMode: string; // "real_name" | "pseudonym"
  bio: string;
  locationGeneral: string;
  // Step 3: Neuro profile
  neurotype: string;
  diagnosisStatus: string;
  burnoutLevel: number;
  // Step 4: Personal patterns
  strengths: string[];
  challenges: string[];
  supportNeeds: string[];
  interests: string[];
  sensoryNotes: string;
  // Step 5: Privacy
  visibilityLevel: string;
  showLocation: boolean;
  showNeurotype: boolean;
  allowPrivateMessages: boolean;
}

/**
 * Check if the current user has completed onboarding.
 * Returns { needsOnboarding: true } if the user has no profile yet.
 */
export async function checkOnboardingStatus() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { needsOnboarding: false, user: null };
  }

  // Check if user record exists and has a profile
  const { data: dbUser } = await supabase
    .from("users")
    .select("id, status, display_name")
    .eq("email", user.email!)
    .single();

  if (!dbUser) {
    return { needsOnboarding: true, user };
  }

  // Check if profile exists
  const { data: profile } = await supabase
    .from("member_profiles")
    .select("id")
    .eq("user_id", dbUser.id)
    .single();

  return {
    needsOnboarding: !profile || dbUser.status === "pending",
    user,
    dbUser,
  };
}

/**
 * Complete the onboarding process:
 * 1. Create or update the users record
 * 2. Create the member_profiles record
 * 3. Set user status to active
 */
export async function completeOnboarding(data: OnboardingData) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !user.email) {
    return { error: "Not authenticated" };
  }

  // 1. Upsert user record
  const { data: dbUser, error: userError } = await supabase
    .from("users")
    .upsert(
      {
        email: user.email,
        full_name: user.user_metadata?.full_name || data.displayName,
        display_name: data.displayName,
        identity_mode: data.identityMode || "pseudonym",
        status: "active",
        role: "member",
      },
      { onConflict: "email" }
    )
    .select("id")
    .single();

  if (userError || !dbUser) {
    return { error: userError?.message || "Failed to create user record" };
  }

  // 2. Upsert member profile
  const { error: profileError } = await supabase
    .from("member_profiles")
    .upsert(
      {
        user_id: dbUser.id,
        bio: data.bio || null,
        location_general: data.locationGeneral || null,
        neurotype: data.neurotype || null,
        diagnosis_status: data.diagnosisStatus || null,
        sensory_notes: data.sensoryNotes || null,
        strengths: data.strengths.length > 0 ? data.strengths : null,
        challenges: data.challenges.length > 0 ? data.challenges : null,
        support_needs: data.supportNeeds.length > 0 ? data.supportNeeds : null,
        interests: data.interests.length > 0 ? data.interests : null,
        burnout_level: data.burnoutLevel || null,
        visibility_level: data.visibilityLevel || "members_only",
        show_location: data.showLocation,
        show_neurotype: data.showNeurotype,
        allow_private_messages: data.allowPrivateMessages,
      },
      { onConflict: "user_id" }
    );

  if (profileError) {
    return { error: profileError.message };
  }

  return { success: true };
}
