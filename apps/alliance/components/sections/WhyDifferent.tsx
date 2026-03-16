import { Section, Container } from "@like-minds/ui";

const reasons = [
  {
    title: "Neurodivergent-first",
    text: "Everything here starts with how neurodivergent brains actually work, not how people expect them to work.",
  },
  {
    title: "Science + lived experience",
    text: "Research matters. But so does real life. Our work combines both.",
  },
  {
    title: "No pressure to perform",
    text: "You can read quietly, participate when you want, and move at your own pace.",
  },
];

export function WhyDifferent() {
  return (
    <Section className="bg-navy-50/30">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Why this is different
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-navy-600">
            Most advice for burnout assumes everyone&apos;s brain works the same
            way. For neurodivergent people, that often makes things worse. Like
            Minds Community was built differently.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-navy-100 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-navy-900">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-navy-600">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
