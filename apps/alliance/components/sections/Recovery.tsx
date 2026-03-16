import { Section, Container } from "@like-minds/ui";

const outcomes = [
  "Work no longer drains every ounce of energy you have.",
  "You understand why your brain works the way it does.",
  "You stop blaming yourself for systems that don\u2019t fit you.",
  "You learn strategies that actually work for your mind.",
  "You connect with people who understand your experience.",
  "Burnout stops being your default state.",
];

export function Recovery() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            What recovery can look like
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-navy-600">
            When you understand how your brain works and connect with people
            who truly get it, burnout doesn&apos;t have to be your normal.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <div
              key={outcome}
              className="rounded-2xl border border-teal-100 bg-teal-50/50 p-5 text-sm leading-6 text-navy-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {outcome}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <a
            href="https://likeminds-community-8530fe.circle.so"
            className="inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors"
          >
            Start your recovery
          </a>
          <p className="mt-2 text-sm text-navy-400">
            Free to join &middot; Read quietly if you want &middot; Share when you&apos;re ready
          </p>
        </div>
      </Container>
    </Section>
  );
}
