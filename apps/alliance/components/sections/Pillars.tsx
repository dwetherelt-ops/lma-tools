import { Section, Container, SectionHeading, Card } from "@like-minds/ui";

const pillars = [
  {
    title: "Genetics Education",
    description:
      "Understand how your genes influence your neurodivergent traits, from dopamine pathways to sensory processing. Expert-led content reviewed by our genetics advisor, Amber Trivedi.",
    href: "/science",
    className: "border-teal-200 bg-teal-50/50",
  },
  {
    title: "Knowledge Library",
    description:
      "Articles, guides, and research summaries covering ADHD, autism, dyslexia, and more. Written in plain language and grounded in the latest science.",
    href: "/knowledge",
    className: "border-orange-200 bg-orange-50/50",
  },
  {
    title: "Peer Community",
    description:
      "Connect with other neurodivergent adults who get it. Share strategies, celebrate wins, and find your people in a safe, moderated space.",
    href: "https://likeminds-community-8530fe.circle.so",
    className: "border-navy-200 bg-navy-50/50",
  },
  {
    title: "Scientific Advisory",
    description:
      "Our content is guided by researchers and clinicians who specialise in neurodivergence. No pseudoscience, no stigma. Just evidence.",
    href: "/about#advisory",
    className: "border-teal-200 bg-teal-50/50",
  },
];

export function Pillars() {
  return (
    <Section className="bg-navy-50/30">
      <Container>
        <SectionHeading
          centered
          title="What we offer"
          subtitle="Four pillars that make Like Minds Community the most trusted resource for neurodivergent adults."
        />

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              href={pillar.href}
              title={pillar.title}
              description={pillar.description}
              className={pillar.className}
            >
              <span className="mt-4 inline-block text-sm font-semibold text-teal-600">
                Learn more &rarr;
              </span>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
