import { getSpaces } from "../actions/community";
import { SpaceList } from "./SpaceList";

export const metadata = {
  title: "Community Spaces — Like Minds",
  description: "Browse discussion spaces and connect with other neurodivergent adults.",
};

export default async function CommunityPage() {
  const { spaces, error } = await getSpaces();

  return (
    <div className="min-h-screen bg-navy-50/30">
      <header className="bg-white border-b border-navy-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/dashboard" className="text-lg font-bold text-navy-900">
            Like Minds<span className="text-teal-600"> Community</span>
          </a>
          <a
            href="/dashboard"
            className="text-sm font-medium text-navy-500 hover:text-navy-700 transition-colors"
          >
            Dashboard
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold tracking-tight text-navy-900">
            Community Spaces
          </h1>
          <p className="mt-2 text-sm leading-6 text-navy-600">
            Find your people. Each space is a focused area for discussion, support, and sharing.
          </p>
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-700">
              Something went wrong loading spaces. Please try again later.
            </p>
          </div>
        )}

        <SpaceList spaces={spaces} />
      </main>
    </div>
  );
}
