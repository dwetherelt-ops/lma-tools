import Image from "next/image";
import { Section, Container } from "@like-minds/ui";

export function Founder() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Founder photo */}
          <div className="flex items-start justify-center lg:col-span-2">
            <div className="relative h-80 w-80 overflow-hidden rounded-2xl">
              <Image
                src="/founder-david.jpeg"
                alt="David Wetherelt, founder of Like Minds Community"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 320px, 320px"
                priority={false}
              />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Why I built Like Minds Community
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              David Wetherelt
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-navy-600">
              <p>
                Like Minds Community started with a question I couldn&apos;t
                stop asking: &ldquo;Why isn&apos;t there a community that takes
                neurodivergent adults seriously?&rdquo;
              </p>
              <p>
                After years navigating life with ADHD and discovering how
                genetics shapes the way our brains work, I realised the
                information was out there, but scattered across journals most
                people would never read. I wanted to change that.
              </p>
              <p>
                Like Minds Community brings together science, lived experience,
                and genuine peer support into one place, so you can understand
                yourself better and live on your own terms.
              </p>
            </div>
            <a
              href="/about"
              className="mt-6 inline-block text-sm font-semibold text-teal-600 hover:text-teal-500 transition-colors"
            >
              Read the full story &rarr;
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
