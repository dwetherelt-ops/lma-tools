import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl">
          Like Minds Community
        </h1>
        <p className="mt-6 text-lg leading-8 text-navy-600">
          Connect with fellow neurodivergent adults. Share experiences, learn
          from each other, and build the support system you deserve.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/login"
            className="rounded-md bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors"
          >
            Join Now
          </Link>
          <a
            href="https://likemindsalliance.org"
            className="text-sm font-semibold leading-6 text-navy-700 hover:text-navy-500 transition-colors"
          >
            Visit Like Minds Alliance <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <p className="mt-4 text-sm text-navy-400">
          Already a member?{" "}
          <Link
            href="/login"
            className="font-medium text-teal-600 hover:text-teal-500 transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
