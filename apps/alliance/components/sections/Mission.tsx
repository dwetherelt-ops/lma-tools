import { Section, Container, SectionHeading, Card } from "@like-minds/ui";

function CredibleIcon() {
  return (
    <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M5 14.5l-.94 2.06a.752.752 0 0 0 .826 1.065l2.09-.346a2.25 2.25 0 0 1 1.37.284l1.406.844a2.25 2.25 0 0 0 2.496-.044l1.29-.858a2.25 2.25 0 0 1 1.37-.347l2.09.346a.752.752 0 0 0 .826-1.065L19 14.5" />
    </svg>
  );
}

function CompassionateIcon() {
  return (
    <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

function EmpoweringIcon() {
  return (
    <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

const values = [
  {
    title: "Credible",
    description:
      "Every resource is grounded in peer-reviewed science and reviewed by our scientific advisory team.",
    icon: <CredibleIcon />,
  },
  {
    title: "Compassionate",
    description:
      "We centre lived experience, strengths-based language, and genuine understanding of neurodivergent life.",
    icon: <CompassionateIcon />,
  },
  {
    title: "Empowering",
    description:
      "We give you the knowledge and tools to advocate for yourself: at work, in healthcare, and in daily life.",
    icon: <EmpoweringIcon />,
  },
];

export function Mission() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading
          title="Built on science. Led by lived experience."
          subtitle="Like Minds Community exists because neurodivergent adults deserve more than coping strategies. We combine cutting-edge genetics research with real-world community support."
        />

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {values.map((value) => (
            <Card
              key={value.title}
              title={value.title}
              description={value.description}
              icon={
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50">
                  {value.icon}
                </div>
              }
              className="border-navy-100 bg-navy-50/50"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
