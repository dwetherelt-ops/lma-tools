interface Post {
  id: string;
  title: string;
  postType: string;
  isPinned: boolean;
  createdAt: string;
  authorName: string;
  commentCount: number;
}

const postTypeStyles: Record<string, string> = {
  discussion: "bg-navy-100 text-navy-700",
  question: "bg-orange-100 text-orange-800",
  resource: "bg-teal-100 text-teal-800",
  announcement: "bg-blue-100 text-blue-800",
  poll: "bg-purple-100 text-purple-800",
};

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

export function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-navy-200 bg-white p-10 text-center">
        <p className="text-sm text-navy-500">
          No posts yet. Be the first to start a conversation!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-navy-500">
        Discussions ({posts.length})
      </h2>
      {posts.map((post) => (
        <article
          key={post.id}
          className="rounded-xl border border-navy-100 bg-white p-5 transition-shadow hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                {post.isPinned && (
                  <span
                    className="text-xs text-orange-500"
                    title="Pinned"
                    aria-label="Pinned post"
                  >
                    &#x1f4cc;
                  </span>
                )}
                <h3 className="text-sm font-semibold text-navy-900 truncate">
                  {post.title}
                </h3>
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-navy-500">
                <span className="font-medium text-navy-700">
                  {post.authorName}
                </span>
                <span>{timeAgo(post.createdAt)}</span>
                <span>
                  {post.commentCount}{" "}
                  {post.commentCount === 1 ? "reply" : "replies"}
                </span>
              </div>
            </div>
            <span
              className={`shrink-0 inline-flex rounded-full px-2 py-0.5 text-xs font-medium capitalize ${
                postTypeStyles[post.postType] ?? postTypeStyles.discussion
              }`}
            >
              {post.postType}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
