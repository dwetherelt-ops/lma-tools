import { Section, Container } from "@like-minds/ui";

const experiences = [
  {
    quote:
      "I got diagnosed with ADHD at 36. Suddenly my entire life made sense. The lost jobs, the unfinished projects, the feeling of being behind everyone else.",
    label: "Late-diagnosed ADHD",
  },
  {
    quote:
      "I held it together for years. Good job, good grades, good at pretending. Then one day I just stopped being able to function. Nobody understood why.",
    label: "Autistic burnout",
  },
  {
    quote:
      "People call me an overachiever. What they don't see is the crash that comes after every deadline. I'm not thriving. I'm surviving on fumes.",
    label: "Overachiever burnout",
  },
  {
    quote:
      "I spend so much energy acting normal that by the end of the day I have nothing left for the people I actually care about.",
    label: "Masking fatigue",
  },
];

export function NotAlone() {
  return (
    <Section className="bg-navy-50/30">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            You&apos;re not alone
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-navy-600">
            Millions of neurodivergent adults are navigating burnout, masking,
            and systems that were not built for how their brains work. These
            experiences are more common than you think.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {experiences.map((exp) => (
            <div
              key={exp.label}
              className="rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-base leading-7 text-navy-700 italic">
                &ldquo;{exp.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-medium text-teal-600">
                {exp.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <a
            href="https://likeminds-community-8530fe.circle.so"
            className="inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors"
          >
            Find Your People
          </a>
          <p className="mt-3 text-sm text-navy-400">
            Free to join &middot; Anonymous if you want &middot; No pressure to
            participate
          </p>
        </div>
      </Container>
    </Section>
  );
}
