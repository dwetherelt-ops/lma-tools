import { Section, Container } from "@like-minds/ui";

// Placeholder members - replace with dynamic data from community database later
const members = [
  { name: "Sarah", location: "Austin", initial: "S" },
  { name: "Miguel", location: "San Diego", initial: "M" },
  { name: "Elena", location: "Seattle", initial: "E" },
  { name: "Chris", location: "London", initial: "C" },
  { name: "Priya", location: "Toronto", initial: "P" },
  { name: "Jordan", location: "Melbourne", initial: "J" },
];

export function NewMembers() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            New members
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-navy-600">
            People finding their way to the community.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-3 rounded-xl border border-navy-100 bg-navy-50/30 px-4 py-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">
                {member.initial}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-navy-900">
                  {member.name}
                </p>
                <p className="text-xs text-navy-500">{member.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
