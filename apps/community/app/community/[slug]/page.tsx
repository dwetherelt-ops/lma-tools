import { notFound } from "next/navigation";
import { getSpaceBySlug } from "../../actions/community";
import { PostList } from "./PostList";
import { CreatePostForm } from "./CreatePostForm";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const { space } = await getSpaceBySlug(params.slug);
  if (!space) return { title: "Space not found" };
  return {
    title: `${space.name} — Like Minds Community`,
    description: space.description,
  };
}

export default async function SpacePage({ params }: Props) {
  const { space, posts, error } = await getSpaceBySlug(params.slug);

  if (!space) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-navy-50/30">
      <header className="bg-white border-b border-navy-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/dashboard" className="text-lg font-bold text-navy-900">
            Like Minds<span className="text-teal-600"> Community</span>
          </a>
          <a
            href="/community"
            className="text-sm font-medium text-navy-500 hover:text-navy-700 transition-colors"
          >
            All Spaces
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Space header */}
        <div className="flex items-start gap-4">
          {space.icon && (
            <span className="text-4xl" role="img" aria-hidden="true">
              {space.icon}
            </span>
          )}
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-navy-900">
              {space.name}
            </h1>
            {space.description && (
              <p className="mt-1 text-sm leading-6 text-navy-600">
                {space.description}
              </p>
            )}
            <div className="mt-2 flex items-center gap-2">
              <span className="inline-flex rounded-full bg-navy-100 px-2.5 py-0.5 text-xs font-medium text-navy-700 capitalize">
                {space.space_type}
              </span>
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Create post form */}
        <div className="mt-8">
          <CreatePostForm spaceId={space.id} spaceSlug={space.slug} />
        </div>

        {/* Post list */}
        <div className="mt-8">
          <PostList posts={posts} />
        </div>
      </main>
    </div>
  );
}
