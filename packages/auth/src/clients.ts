import { createBrowserClient as createSupabaseBrowserClient } from "@supabase/ssr";
import { createServerClient as createSupabaseServerClient } from "@supabase/ssr";

/**
 * Creates a Supabase client for use in browser/client components.
 * Uses NEXT_PUBLIC_ environment variables.
 */
export function createBrowserClient() {
  return createSupabaseBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

/**
 * Creates a Supabase client for use in server components/actions.
 * Requires cookies for auth session management.
 *
 * Usage in Next.js App Router:
 *   import { cookies } from "next/headers";
 *   const supabase = createServerClient(cookies());
 */
export function createServerClient(cookieStore: {
  get: (name: string) => { value: string } | undefined;
  set: (name: string, value: string, options: Record<string, unknown>) => void;
  delete: (name: string) => void;
}) {
  return createSupabaseServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: Record<string, unknown>) {
          try {
            cookieStore.set(name, value, options);
          } catch {
            // The `set` method may be called from a Server Component
            // which would throw. Can be ignored if middleware handles refresh.
          }
        },
        remove(name: string) {
          try {
            cookieStore.delete(name);
          } catch {
            // Same as above
          }
        },
      },
    }
  );
}
