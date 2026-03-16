"use server";

import { createClient } from "../../lib/supabase/server";

/**
 * Get the current authenticated user, or null if not signed in.
 */
export async function getCurrentUser() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

/**
 * Sign out the current user.
 */
export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
}
