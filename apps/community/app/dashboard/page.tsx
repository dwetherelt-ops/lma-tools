import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
import { DashboardContent } from "./DashboardContent";

export const metadata = {
  title: "Dashboard — Like Minds Community",
};

export default async function DashboardPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch user record + profile
  const { data: dbUser } = await supabase
    .from("users")
    .select("id, display_name, identity_mode, status, role")
    .eq("email", user.email!)
    .single();

  // If no user record or pending status, redirect to onboarding
  if (!dbUser || dbUser.status === "pending") {
    redirect("/onboarding");
  }

  const { data: profile } = await supabase
    .from("member_profiles")
    .select("*")
    .eq("user_id", dbUser.id)
    .single();

  if (!profile) {
    redirect("/onboarding");
  }

  return (
    <DashboardContent
      displayName={dbUser.display_name}
      identityMode={dbUser.identity_mode}
      profile={profile}
    />
  );
}
