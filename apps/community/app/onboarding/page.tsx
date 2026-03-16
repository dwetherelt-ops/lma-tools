import { redirect } from "next/navigation";
import { checkOnboardingStatus } from "../actions/onboarding";
import { OnboardingWizard } from "./OnboardingWizard";

export const metadata = {
  title: "Set Up Your Profile — Like Minds Community",
};

export default async function OnboardingPage() {
  const { needsOnboarding, user } = await checkOnboardingStatus();

  if (!user) {
    redirect("/login");
  }

  if (!needsOnboarding) {
    redirect("/dashboard");
  }

  return <OnboardingWizard userEmail={user.email!} />;
}
