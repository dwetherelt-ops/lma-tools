import { Section, Container } from "@like-minds/ui";

const steps = [
  {
    step: "1",
    title: "Read quietly",
    text: "Explore articles and conversations without needing to participate.",
  },
  {
    step: "2",
    title: "Learn how your brain works",
    text: "Understand the science behind neurodivergent traits and burnout.",
  },
  {
    step: "3",
    title: "Connect when you're ready",
    text: "Join discussions, share experiences, and meet people who understand your experience.",
  },
];

export function StartHere() {
  return (
    <Section className="bg-navy-50/30">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Start here
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-navy-600">
            If you&apos;re new, this is a good place to begin.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-navy-100 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">
                {item.step}
              </span>
              <h3 className="mt-3 text-base font-semibold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-navy-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <a
            href="https://likeminds-community-8530fe.circle.so"
            className="inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors"
          >
            Start exploring
          </a>
          <p className="mt-2 text-sm text-navy-400">
            Free to join &middot; Read quietly if you want &middot; Share when you&apos;re ready
          </p>
        </div>
      </Container>
    </Section>
  );
}
