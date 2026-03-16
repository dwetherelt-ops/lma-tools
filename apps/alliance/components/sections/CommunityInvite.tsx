import { Section, Container } from "@like-minds/ui";

const highlights = [
  {
    label: "Peer support",
    description: "Connect with adults who understand neurodivergent life firsthand.",
  },
  {
    label: "Expert content",
    description: "Access genetics education and research you won't find elsewhere.",
  },
  {
    label: "Safe space",
    description: "A moderated, respectful community built on trust and understanding.",
  },
];

export function CommunityInvite() {
  return (
    <Section className="bg-teal-600">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            You don&apos;t have to figure this out alone
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-teal-100">
            Like Minds Community is where neurodivergent adults share real
            strategies, ask hard questions, and support each other. Without
            judgement, without jargon.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="text-center">
              <h3 className="text-base font-semibold text-white">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-teal-100">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://likeminds-community-8530fe.circle.so"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-teal-700 shadow-sm hover:bg-teal-50 transition-colors"
            >
              Join the Community
            </a>
            <a
              href="/knowledge"
              className="inline-flex items-center justify-center text-base font-semibold text-white hover:text-teal-100 transition-colors"
            >
              Explore Resources <span aria-hidden="true" className="ml-2">&rarr;</span>
            </a>
          </div>
          <p className="mt-2 text-sm text-teal-200">
            Free to join &middot; Read quietly if you want &middot; Share when you&apos;re ready
          </p>
        </div>
      </Container>
    </Section>
  );
}
