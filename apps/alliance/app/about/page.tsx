import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, Container } from "@like-minds/ui";

export const metadata: Metadata = {
  title: "Why I Built Like Minds - David Wetherelt",
  description:
    "The founder's story behind Like Minds Community. Why neurodivergent adults deserve a space that combines real science, lived experience, and genuine peer support.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-navy-50 to-white pt-14 pb-6 sm:pt-20 sm:pb-8">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Founder&apos;s story
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
              Why I built Like Minds
            </h1>
            <p className="mt-4 text-lg text-navy-500">David Wetherelt</p>
          </div>
        </Container>
      </Section>

      {/* Photo + opening */}
      <Section className="bg-white pt-0 pb-4">
        <Container>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Photo */}
            <div className="flex items-start justify-center lg:col-span-2">
              <div className="relative h-80 w-80 overflow-hidden rounded-2xl">
                <Image
                  src="/founder-david.jpeg"
                  alt="David Wetherelt, founder of Like Minds Community"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 320px, 320px"
                  priority
                />
              </div>
            </div>

            {/* Opening */}
            <div className="lg:col-span-3">
              <div className="space-y-5 text-base leading-7 text-navy-700">
                <p className="text-lg font-medium text-navy-900">
                  For most of my life, I felt like I was trying to operate in a
                  world built for a different kind of brain.
                </p>
                <p>
                  On the outside, things looked fine. I built businesses,
                  pursued ambitious projects, and kept moving forward. But
                  underneath that progress there was a constant sense that life
                  was harder than it seemed to be for other people. Focus would
                  come in powerful bursts, then disappear. Energy cycles were
                  unpredictable. Burnout would arrive suddenly, often after
                  periods of intense productivity.
                </p>
                <p>
                  For years I assumed the problem was discipline.
                </p>
                <p>
                  If I could just become more organised, more consistent, more
                  focused, things would finally fall into place.
                </p>
                <p>
                  But the advice that seemed to work for everyone else never
                  quite worked for me.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Body content */}
      <Section className="bg-white pt-0 pb-8">
        <Container>
          <div className="mx-auto max-w-3xl">
            <article className="space-y-8">
              {/* Discovering a different explanation */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-navy-900">
                  Discovering a different explanation
                </h2>
                <div className="mt-4 space-y-5 text-base leading-7 text-navy-700">
                  <p>
                    Eventually I began exploring ADHD and neurodivergence more
                    seriously. What started as curiosity quickly became a
                    realisation: many of the patterns I had struggled with for
                    decades suddenly made sense.
                  </p>
                  <p>
                    The cycles of intense focus and exhaustion. The difficulty
                    with traditional productivity systems. The feeling of
                    constantly adapting to environments that didn&apos;t quite
                    fit.
                  </p>
                  <p>
                    Around the same time, I became fascinated with the science
                    behind how our brains actually work, especially the role
                    genetics plays in shaping cognitive traits like attention,
                    motivation, and sensory processing.
                  </p>
                  <p>
                    But the more I read, the more I noticed a problem.
                  </p>
                  <p>
                    The information existed, but it was scattered across academic
                    papers and technical journals that most people would never
                    encounter, let alone understand.
                  </p>
                  <p>
                    And the communities where neurodivergent adults gathered
                    often lacked access to reliable scientific information.
                  </p>
                  <p>
                    There was a gap between science and lived experience.
                  </p>
                </div>
              </div>

              {/* The question */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-navy-900">
                  The question that wouldn&apos;t go away
                </h2>
                <div className="mt-4 space-y-5 text-base leading-7 text-navy-700">
                  <p>One question kept coming back to me:</p>
                  <blockquote className="border-l-4 border-teal-400 bg-teal-50/40 py-4 pl-6 pr-4 text-lg font-medium italic text-navy-800">
                    Why isn&apos;t there a place where neurodivergent adults can
                    access real science, honest lived experience, and supportive
                    community, all in one place?
                  </blockquote>
                  <p>
                    Most resources seemed to focus on children, clinical
                    diagnosis, or surface-level productivity advice.
                  </p>
                  <p>
                    Very few spaces took the adult neurodivergent experience
                    seriously.
                  </p>
                  <p>
                    Yet everywhere I looked, I saw adults quietly dealing with:
                  </p>
                  <ul className="ml-4 list-disc space-y-2 text-navy-700">
                    <li>Burnout that felt different from ordinary stress</li>
                    <li>The exhaustion of masking every day</li>
                    <li>Sensory overwhelm in everyday environments</li>
                    <li>
                      The feeling of constantly trying to adapt to systems that
                      didn&apos;t match how their brains worked
                    </li>
                  </ul>
                  <p>
                    I realised many people were having the same experiences I
                    had, but without the language, understanding, or support to
                    make sense of them.
                  </p>
                </div>
              </div>

              {/* Bringing the pieces together */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-navy-900">
                  Bringing the pieces together
                </h2>
                <div className="mt-4 space-y-5 text-base leading-7 text-navy-700">
                  <p>Like Minds grew out of a simple idea:</p>
                  <p className="font-medium text-navy-900">
                    What if we could bring three things together in one place?
                  </p>

                  {/* Three pillars */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-navy-100 bg-navy-50/30 p-5">
                      <p className="text-sm font-bold uppercase tracking-wide text-teal-600">
                        Science
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-navy-700">
                        Clear explanations of how neurodivergent brains actually
                        work, grounded in research.
                      </p>
                    </div>
                    <div className="rounded-xl border border-navy-100 bg-navy-50/30 p-5">
                      <p className="text-sm font-bold uppercase tracking-wide text-teal-600">
                        Lived experience
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-navy-700">
                        Real conversations about the challenges and strengths of
                        neurodivergent life.
                      </p>
                    </div>
                    <div className="rounded-xl border border-navy-100 bg-navy-50/30 p-5">
                      <p className="text-sm font-bold uppercase tracking-wide text-teal-600">
                        Community
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-navy-700">
                        A place where people can connect with others who
                        genuinely understand their experiences.
                      </p>
                    </div>
                  </div>

                  <p>
                    The goal isn&apos;t to label people or reduce anyone to a
                    diagnosis.
                  </p>
                  <p>
                    It&apos;s to help people understand themselves better.
                  </p>
                  <p>
                    When people understand how their brains work, many struggles
                    suddenly become easier to navigate. What once felt like
                    personal failure often turns out to be a mismatch between a
                    person&apos;s brain and the systems around them.
                  </p>
                </div>
              </div>

              {/* A different kind of community */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-navy-900">
                  A different kind of community
                </h2>
                <div className="mt-4 space-y-5 text-base leading-7 text-navy-700">
                  <p>
                    Like Minds is designed to be a space where neurodivergent
                    adults can explore questions like:
                  </p>
                  <ul className="ml-4 list-disc space-y-2 text-navy-700">
                    <li>Why does burnout happen so often for us?</li>
                    <li>
                      Why do certain environments drain energy so quickly?
                    </li>
                    <li>
                      Why do some strategies work for other people but not for
                      us?
                    </li>
                  </ul>
                  <p>And most importantly:</p>
                  <p className="text-lg font-medium text-navy-900">
                    What actually helps?
                  </p>
                  <p>
                    The goal is not to &ldquo;fix&rdquo; neurodivergence.
                    It&apos;s to understand it.
                  </p>
                  <p>
                    Because when people understand their own minds, they can
                    begin to build lives that fit them, instead of constantly
                    trying to force themselves into systems that don&apos;t.
                  </p>
                </div>
              </div>

              {/* The bigger vision */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-navy-900">
                  The bigger vision
                </h2>
                <div className="mt-4 space-y-5 text-base leading-7 text-navy-700">
                  <p>My hope for Like Minds is simple.</p>
                  <p>
                    That it becomes a place where neurodivergent adults can find:
                  </p>
                  <ul className="ml-4 list-disc space-y-2 text-navy-700">
                    <li>Clear explanations grounded in science</li>
                    <li>Practical ideas that actually help</li>
                    <li>
                      A community of people who genuinely understand what
                      they&apos;re going through
                    </li>
                  </ul>
                  <p>
                    For many people, the moment they realise they are not alone
                    is incredibly powerful.
                  </p>
                  <p>
                    If Like Minds helps even a few people reach that moment of
                    clarity and connection, then it will have done exactly what
                    it was created for.
                  </p>
                </div>
              </div>
            </article>

            {/* CTA */}
            <div className="mt-10 rounded-2xl bg-gradient-to-r from-teal-50 to-navy-50/40 border border-teal-200 p-6 text-center sm:p-6">
              <p className="text-xl font-bold text-navy-900">
                If this story resonates with you, you&apos;re not alone.
              </p>
              <p className="mt-3 text-base leading-7 text-navy-600">
                You can explore the science, read the guides, or connect with
                others in the community.
              </p>
              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/knowledge"
                  className="inline-flex items-center rounded-lg border border-navy-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-700 shadow-sm transition-colors hover:bg-navy-50"
                >
                  Explore the Knowledge Hub
                </Link>
                <a
                  href="https://likeminds-community-8530fe.circle.so"
                  className="inline-flex items-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-500"
                >
                  Find your people &rarr;
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
