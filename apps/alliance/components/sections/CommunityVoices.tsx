import { Section, Container } from "@like-minds/ui";

const quotes = [
  {
    text: "I finally realized I wasn\u2019t lazy. I was burned out.",
    attribution: "ADHD member",
  },
  {
    text: "This is the first place where people actually understand masking.",
    attribution: "Autistic member",
  },
  {
    text: "I thought I was just failing at life. Now I understand my brain.",
    attribution: "Dyslexic member",
  },
];

export function CommunityVoices() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Community voices
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {quotes.map((quote) => (
            <blockquote
              key={quote.text}
              className="rounded-2xl border border-navy-100 bg-white p-6 text-center"
            >
              <p className="text-base leading-7 text-navy-700 italic">
                &ldquo;{quote.text}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-medium text-teal-600">
                - {quote.attribution}
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </Section>
  );
}
