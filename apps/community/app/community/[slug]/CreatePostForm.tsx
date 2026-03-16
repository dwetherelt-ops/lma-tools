"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createPost } from "../../actions/community";

const postTypes = [
  { value: "discussion", label: "Discussion" },
  { value: "question", label: "Question" },
  { value: "resource", label: "Resource" },
];

export function CreatePostForm({
  spaceId,
  spaceSlug,
}: {
  spaceId: string;
  spaceSlug: string;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postType, setPostType] = useState("discussion");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const result = await createPost({
      communitySpaceId: spaceId,
      title,
      body,
      postType,
    });

    if (result.error) {
      setError(result.error);
      setSubmitting(false);
      return;
    }

    // Reset form and refresh the page to show the new post
    setTitle("");
    setBody("");
    setPostType("discussion");
    setIsOpen(false);
    setSubmitting(false);
    router.refresh();
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-xl border-2 border-dashed border-navy-200 bg-white px-6 py-4 text-sm font-medium text-navy-600 transition-colors hover:border-teal-400 hover:text-teal-600 w-full text-left"
      >
        + Start a new conversation&hellip;
      </button>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm"
    >
      <h2 className="text-base font-semibold text-navy-900">New post</h2>

      <div className="mt-4 space-y-4">
        {/* Post type */}
        <div className="flex gap-2">
          {postTypes.map((pt) => (
            <button
              key={pt.value}
              type="button"
              onClick={() => setPostType(pt.value)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                postType === pt.value
                  ? "bg-teal-600 text-white"
                  : "bg-navy-100 text-navy-600 hover:bg-navy-200"
              }`}
            >
              {pt.label}
            </button>
          ))}
        </div>

        {/* Title */}
        <div className="space-y-1.5">
          <label htmlFor="post-title" className="text-sm font-medium text-navy-900">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            id="post-title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's on your mind?"
            className="flex h-10 w-full rounded-md border border-navy-200 bg-white px-3 py-2 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
          />
        </div>

        {/* Body */}
        <div className="space-y-1.5">
          <label htmlFor="post-body" className="text-sm font-medium text-navy-900">
            Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="post-body"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Share your thoughts, ask a question, or post a resource..."
            rows={4}
            className="flex w-full rounded-md border border-navy-200 bg-white px-3 py-2 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
          />
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              setError(null);
            }}
            className="text-sm font-medium text-navy-500 hover:text-navy-700 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting || !title.trim() || !body.trim()}
            className="rounded-md bg-teal-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Posting..." : "Post"}
          </button>
        </div>
      </div>
    </form>
  );
}
