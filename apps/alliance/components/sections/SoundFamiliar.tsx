import { Section, Container } from "@like-minds/ui";

const statements = [
  "You\u2019re exhausted all the time, even when you haven\u2019t done that much.",
  "Work drains you more than it seems to drain everyone else.",
  "Advice that works for other people never seems to work for you.",
  "You feel like you\u2019re constantly masking or pretending to be fine.",
  "You know you\u2019re capable of more but can\u2019t sustain it.",
  "You\u2019re burned out and don\u2019t fully understand why.",
];

export function SoundFamiliar() {
  return (
    <Section className="bg-navy-50/30">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Does this sound familiar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-navy-600">
            You are not failing. You may be burned out, misunderstood, or
            trying to live in systems that were not built for your kind of
            mind.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {statements.map((statement) => (
            <div
              key={statement}
              className="rounded-2xl border border-navy-100 bg-white p-5 text-sm leading-6 text-navy-600 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {statement}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-xl font-semibold tracking-tight text-navy-900 sm:text-2xl">
            You&apos;re not broken. Your brain just works differently.
          </p>
          <a
            href="https://likeminds-community-8530fe.circle.so"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors"
          >
            Find Your People
          </a>
          <p className="mt-2 text-sm text-navy-400">
            Explore at your own pace. No pressure to participate.
          </p>
        </div>
      </Container>
    </Section>
  );
}
