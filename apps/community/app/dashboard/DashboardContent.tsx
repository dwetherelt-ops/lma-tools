"use client";

import { useRouter } from "next/navigation";
import { signOut } from "../actions/auth";

interface DashboardContentProps {
  displayName: string;
  identityMode: string;
  profile: {
    neurotype: string | null;
    interests: string[] | null;
    burnout_level: number | null;
    visibility_level: string;
    show_neurotype: boolean;
    show_location: boolean;
    allow_private_messages: boolean;
  };
}

const quickLinks = [
  {
    title: "Community Spaces",
    description: "Join discussions, ask questions, and connect with others.",
    href: "/community",
    colour: "border-teal-200 bg-teal-50/50",
  },
  {
    title: "Knowledge Library",
    description: "Articles, guides, and research on neurodivergent life.",
    href: "https://likemindsalliance.org/knowledge",
    colour: "border-orange-200 bg-orange-50/50",
  },
  {
    title: "Peer Community",
    description: "Find your people — by neurotype, interest, or location.",
    href: "#",
    colour: "border-navy-200 bg-navy-50/50",
  },
];

export function DashboardContent({
  displayName,
  identityMode,
  profile,
}: DashboardContentProps) {
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-navy-50/30">
      {/* Top bar */}
      <header className="bg-white border-b border-navy-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <span className="text-lg font-bold text-navy-900">
            Like Minds<span className="text-teal-600"> Community</span>
          </span>
          <button
            onClick={handleSignOut}
            className="text-sm font-medium text-navy-500 hover:text-navy-700 transition-colors"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Welcome */}
        <h1 className="text-2xl font-bold tracking-tight text-navy-900">
          Welcome back, {displayName}
        </h1>
        <p className="mt-1 text-sm text-navy-500">
          Here&apos;s your community at a glance.
        </p>

        {/* Profile summary card */}
        <div className="mt-8 rounded-2xl border border-navy-100 bg-white p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-navy-500">
            Your Profile
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div>
              <p className="text-xs text-navy-400">Identity</p>
              <p className="mt-1 text-sm font-medium text-navy-900 capitalize">
                {identityMode === "pseudonym" ? "Pseudonym" : "Real name"}
              </p>
            </div>
            <div>
              <p className="text-xs text-navy-400">Neurotype</p>
              <p className="mt-1 text-sm font-medium text-navy-900">
                {profile.neurotype || "Not set"}
              </p>
            </div>
            <div>
              <p className="text-xs text-navy-400">Burnout level</p>
              <p className="mt-1 text-sm font-medium text-navy-900">
                {profile.burnout_level
                  ? `${profile.burnout_level}/10`
                  : "Not set"}
              </p>
            </div>
            <div>
              <p className="text-xs text-navy-400">Visibility</p>
              <p className="mt-1 text-sm font-medium text-navy-900 capitalize">
                {profile.visibility_level.replace("_", " ")}
              </p>
            </div>
          </div>
          {profile.interests && profile.interests.length > 0 && (
            <div className="mt-4">
              <p className="text-xs text-navy-400">Interests</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {profile.interests.map((interest: string) => (
                  <span
                    key={interest}
                    className="inline-flex rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-800"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick links */}
        <h2 className="mt-10 text-lg font-semibold text-navy-900">Explore</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {quickLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className={`group rounded-2xl border p-6 transition-shadow hover:shadow-lg ${link.colour}`}
            >
              <h3 className="text-sm font-semibold text-navy-900 group-hover:text-teal-600 transition-colors">
                {link.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-navy-600">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
