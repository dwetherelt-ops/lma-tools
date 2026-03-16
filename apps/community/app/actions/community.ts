"use server";

import { createClient } from "../../lib/supabase/server";

/**
 * Fetch all community spaces visible to the current user.
 */
export async function getSpaces() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("community_spaces")
    .select("id, name, slug, description, space_type, visibility, icon, banner_url")
    .in("visibility", ["public", "members_only"])
    .order("created_at", { ascending: true });

  if (error) {
    return { spaces: [], error: error.message };
  }

  return { spaces: data ?? [] };
}

/**
 * Fetch a single community space by slug, along with its posts.
 */
export async function getSpaceBySlug(slug: string) {
  const supabase = createClient();

  // 1. Fetch the space
  const { data: space, error: spaceError } = await supabase
    .from("community_spaces")
    .select("id, name, slug, description, space_type, visibility, icon, banner_url")
    .eq("slug", slug)
    .single();

  if (spaceError || !space) {
    return { space: null, posts: [], error: spaceError?.message || "Space not found" };
  }

  // 2. Fetch posts in this space
  const { data: posts, error: postsError } = await supabase
    .from("posts")
    .select("id, title, post_type, is_pinned, created_at, user_id")
    .eq("community_space_id", space.id)
    .eq("status", "published")
    .order("is_pinned", { ascending: false })
    .order("created_at", { ascending: false });

  if (postsError) {
    return { space, posts: [], error: postsError.message };
  }

  if (!posts || posts.length === 0) {
    return { space, posts: [] };
  }

  // 3. Batch-fetch author display names
  const userIds = [...new Set(posts.map((p) => p.user_id))];
  const { data: authors } = await supabase
    .from("users")
    .select("id, display_name")
    .in("id", userIds);

  const authorMap = new Map(
    (authors ?? []).map((a: any) => [a.id, a.display_name])
  );

  // 4. Batch-fetch comment counts per post
  const postIds = posts.map((p) => p.id);
  const { data: commentRows } = await supabase
    .from("comments")
    .select("post_id")
    .in("post_id", postIds)
    .eq("status", "published");

  const commentCounts = new Map<string, number>();
  (commentRows ?? []).forEach((c: any) => {
    commentCounts.set(c.post_id, (commentCounts.get(c.post_id) ?? 0) + 1);
  });

  // 5. Shape the result
  const shapedPosts = posts.map((post) => ({
    id: post.id,
    title: post.title,
    postType: post.post_type,
    isPinned: post.is_pinned,
    createdAt: post.created_at,
    authorName: authorMap.get(post.user_id) ?? "Unknown",
    commentCount: commentCounts.get(post.id) ?? 0,
  }));

  return { space, posts: shapedPosts };
}

/**
 * Create a new post in a community space.
 */
export async function createPost(data: {
  communitySpaceId: string;
  title: string;
  body: string;
  postType: string;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !user.email) {
    return { error: "Not authenticated" };
  }

  // Look up the user's DB record
  const { data: dbUser } = await supabase
    .from("users")
    .select("id")
    .eq("email", user.email)
    .single();

  if (!dbUser) {
    return { error: "User record not found" };
  }

  // Validate required fields
  if (!data.title.trim()) {
    return { error: "Title is required" };
  }
  if (!data.body.trim()) {
    return { error: "Body is required" };
  }

  const { data: post, error } = await supabase
    .from("posts")
    .insert({
      user_id: dbUser.id,
      community_space_id: data.communitySpaceId,
      title: data.title.trim(),
      body: data.body.trim(),
      post_type: data.postType || "discussion",
      status: "published",
      is_pinned: false,
    })
    .select("id")
    .single();

  if (error) {
    return { error: error.message };
  }

  return { post };
}
