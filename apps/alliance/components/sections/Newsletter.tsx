import { Section, Container } from "@like-minds/ui";

export function Newsletter() {
  return (
    <Section id="newsletter" className="bg-navy-900">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stay in the loop
          </h2>
          <p className="mt-4 text-lg leading-8 text-navy-300">
            Weekly insights on neurodivergent genetics, practical strategies,
            and community updates. Written for adults who want substance, not
            soundbites.
          </p>

          {/* Email form - wired to Resend in Sprint 4 */}
          <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border-0 bg-white/10 px-4 py-3 text-white placeholder:text-navy-400 focus:ring-2 focus:ring-teal-500 sm:max-w-sm"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="rounded-md bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-xs text-navy-400">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </Container>
    </Section>
  );
}
