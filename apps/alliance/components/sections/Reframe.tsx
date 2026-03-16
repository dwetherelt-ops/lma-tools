import { Section, Container } from "@like-minds/ui";

export function Reframe() {
  return (
    <Section className="bg-navy-50/30 border-y border-navy-100">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            A different way to think about burnout
          </h2>
          <div className="mt-8 space-y-4 text-lg leading-8 text-navy-700">
            <p>If life has felt harder than it should,</p>
            <p>it may not be because you are failing.</p>
            <p>
              It may be because your brain works differently
              <br />
              in systems that were not designed for it.
            </p>
            <p className="pt-2 text-xl font-semibold text-navy-900">
              You are not alone.
              <br />
              And you are not broken.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
