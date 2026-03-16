import { Section, Container, SectionHeading } from "@like-minds/ui";

const paths = [
  {
    title: "Feeling burned out?",
    text: "Start with our guides on neurodivergent burnout and recovery.",
    href: "/knowledge",
    cta: "Explore the Knowledge Hub",
    accent: "border-orange-200 bg-orange-50/50",
  },
  {
    title: "Trying to understand your brain?",
    text: "Learn how ADHD, autism, executive function, and genetics shape how your mind works.",
    href: "/research",
    cta: "Explore the Science",
    accent: "border-teal-200 bg-teal-50/50",
  },
  {
    title: "Looking for people who get it?",
    text: "Connect with other neurodivergent adults navigating similar experiences.",
    href: "https://likeminds-community-8530fe.circle.so",
    cta: "Find Your People",
    accent: "border-navy-200 bg-navy-50/50",
  },
];

export function WhereToStart() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          centered
          title="Where should you start?"
        />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {paths.map((path) => (
            <a
              key={path.title}
              href={path.href}
              className={`group block rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${path.accent}`}
            >
              <h3 className="text-lg font-semibold text-navy-900">
                {path.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-navy-600">
                {path.text}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-teal-600 group-hover:text-teal-700 transition-colors">
                {path.cta} &rarr;
              </span>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
