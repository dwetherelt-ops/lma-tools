import { Container } from "@like-minds/ui";

export function AuthorityBand() {
  return (
    <div className="border-y border-navy-100 bg-navy-50/40 py-5">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-navy-600">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" aria-hidden="true" />
            Research-informed
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" aria-hidden="true" />
            Neurodivergent-led
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" aria-hidden="true" />
            Community-supported
          </span>
        </div>
      </Container>
    </div>
  );
}
