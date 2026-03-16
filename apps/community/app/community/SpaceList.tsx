import Link from "next/link";

interface Space {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  space_type: string;
  visibility: string;
  icon: string | null;
}

export function SpaceList({ spaces }: { spaces: Space[] }) {
  if (spaces.length === 0) {
    return (
      <div className="mt-12 text-center">
        <p className="text-sm text-navy-500">
          No spaces yet. Check back soon — we&apos;re setting things up.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {spaces.map((space) => (
        <Link
          key={space.id}
          href={`/community/${space.slug}`}
          className="group rounded-2xl border border-navy-100 bg-white p-6 transition-shadow hover:shadow-lg"
        >
          <div className="flex items-start gap-3">
            {space.icon && (
              <span className="text-2xl" role="img" aria-hidden="true">
                {space.icon}
              </span>
            )}
            <div className="min-w-0 flex-1">
              <h2 className="text-base font-semibold text-navy-900 group-hover:text-teal-600 transition-colors">
                {space.name}
              </h2>
              {space.description && (
                <p className="mt-1.5 text-sm leading-6 text-navy-600 line-clamp-2">
                  {space.description}
                </p>
              )}
              <div className="mt-3 flex items-center gap-2">
                <span className="inline-flex rounded-full bg-navy-100 px-2 py-0.5 text-xs font-medium text-navy-700 capitalize">
                  {space.space_type}
                </span>
                {space.visibility === "members_only" && (
                  <span className="inline-flex rounded-full bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700">
                    Members only
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
