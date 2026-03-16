import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/onboarding", "/community"];
const authRoutes = ["/login"];

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: Record<string, unknown>) {
          request.cookies.set({ name, value, ...options });
          response = NextResponse.next({
            request: { headers: request.headers },
          });
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string) {
          request.cookies.set({ name, value: "" });
          response = NextResponse.next({
            request: { headers: request.headers },
          });
          response.cookies.set({ name, value: "" });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isOnboarding = pathname.startsWith("/onboarding");
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // Redirect unauthenticated users away from protected routes
  if (isProtected && !user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // For authenticated users, check onboarding completion
  if (user && (isProtected || isAuthRoute)) {
    // Look up user record and profile
    const { data: dbUser } = await supabase
      .from("users")
      .select("id, status")
      .eq("email", user.email!)
      .single();

    const hasCompletedOnboarding =
      dbUser &&
      dbUser.status === "active" &&
      (
        await supabase
          .from("member_profiles")
          .select("id")
          .eq("user_id", dbUser.id)
          .single()
      ).data !== null;

    if (!hasCompletedOnboarding && !isOnboarding) {
      // User hasn't finished onboarding — force them there
      return NextResponse.redirect(new URL("/onboarding", request.url));
    }

    if (hasCompletedOnboarding && isOnboarding) {
      // Already onboarded — no need to be on /onboarding
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Redirect authenticated users away from login page
    if (isAuthRoute) {
      return NextResponse.redirect(
        new URL(
          hasCompletedOnboarding ? "/dashboard" : "/onboarding",
          request.url
        )
      );
    }
  }

  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/onboarding/:path*", "/community/:path*", "/login"],
};
