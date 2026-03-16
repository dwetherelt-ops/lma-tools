import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, Container } from "@like-minds/ui";

export const metadata: Metadata = {
  title: "Lume by Parallel Eyewear - Like Minds Community",
  description:
    "Functional eyewear designed for sensory regulation. Lume uses Neox dual-filter lens technology to reduce visual overstimulation and support circadian recovery for neurodivergent adults.",
};

/* ───────── Page ───────── */

export default function LumePage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden bg-navy-900 pt-14 pb-0 sm:pt-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Copy */}
            <div className="py-8 lg:py-16">
              <Link
                href="/tools"
                className="inline-flex items-center text-sm text-navy-300 hover:text-white transition-colors"
              >
                &larr; Back to Tools We Trust
              </Link>

              <p className="mt-6 text-sm font-medium uppercase tracking-widest text-teal-400">
                Featured sensory tool
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Lume
              </h1>
              <p className="mt-1 text-xl font-medium text-navy-300">
                by Parallel Eyewear
              </p>

              <p className="mt-6 text-lg leading-8 text-navy-200">
                Functional eyewear engineered for sensory regulation. Not
                fashion optics. Not medical correction. A precision tool for
                managing how light affects your brain, your focus, and your
                recovery.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.paralleleyewear.com/lume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-teal-500"
                >
                  Shop Lume &rarr;
                </a>
                <span className="text-sm text-navy-400">
                  From $89 &middot; Free shipping
                </span>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-t-2xl lg:rounded-2xl">
              <Image
                src="/images/lume/lume-hero.jpg"
                alt="Woman reclining wearing Lume Downshift glasses with rose-tinted lenses for evening sensory recovery"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Disclosure bar */}
      <div className="bg-navy-800 border-t border-navy-700">
        <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
          <p className="text-center text-xs leading-relaxed text-navy-300">
            <span className="font-semibold text-navy-200">
              Transparency:
            </span>{" "}
            The founder of Like Minds Community is part of the leadership team
            at Parallel Eyewear and was involved in the design of the Lume
            product line. This page reflects our genuine belief in the product,
            and we are transparent about this relationship.
          </p>
        </div>
      </div>

      {/* The problem — Light noise */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
              The problem
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Your brain was not built for artificial light
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-navy-700">
              <p>
                For hundreds of thousands of years, human biology evolved under
                natural light: a smooth curve from sunrise to sunset, with
                darkness signaling recovery. Modern environments have replaced
                that with a constant barrage of artificial light — fluorescent
                offices, LED screens, overhead strips — creating what
                researchers call <strong>&ldquo;light noise&rdquo;</strong>.
              </p>
              <p>
                For neurodivergent adults, this is not a minor inconvenience. It
                is a measurable source of cognitive load. Sensory processing
                differences mean that light which neurotypical people filter out
                automatically continues to demand active processing in ADHD and
                autistic brains. The result: accelerated fatigue, increased
                anxiety, and compounded burnout.
              </p>
              <p>
                Research shows that constant visual overstimulation triggers
                glutamatergic drive — excitatory signaling that keeps the
                nervous system on high alert. In the evening, artificial blue
                light in the 460–480nm range suppresses melatonin production,
                blocking the biological signals your brain needs to shift into
                recovery mode.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Two lenses */}
      <Section className="bg-navy-50/30">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
              Two lenses, two purposes
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Designed around how your day actually works
            </h2>
            <p className="mt-4 text-base leading-7 text-navy-600">
              Lume is not a single-solution product. It is a system of two
              precision-engineered lenses, each targeting a specific phase of
              your daily cycle.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Balance */}
            <div className="rounded-2xl border border-navy-200 bg-white overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/lume/lume-balance.png"
                  alt="Professional wearing Lume Balance glasses with blue-grey tinted lenses in an office environment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                    Daytime
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-bold text-navy-900">
                  Balance
                </h3>
                <p className="mt-1 text-sm font-medium text-navy-500">
                  For focus
                </p>
                <p className="mt-4 text-base leading-7 text-navy-700">
                  When your environment will not slow down, Balance gives your
                  brain a break. Filters 30–60% of blue and green light to
                  reduce the excitatory visual signals that drive sensory
                  overload in high-stimulus environments like open offices,
                  hospitals, and co-working spaces.
                </p>
                <div className="mt-6 space-y-2">
                  <p className="text-sm font-semibold text-navy-900">
                    How it works
                  </p>
                  <ul className="space-y-1.5 text-sm text-navy-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                      Reduces beta-wave power (13–30 Hz) to lower the
                      &ldquo;mental buzz&rdquo;
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                      Lowers cognitive load and peripheral distraction
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                      Does not dim awareness or cause drowsiness
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Downshift */}
            <div className="rounded-2xl border border-navy-200 bg-white overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/lume/lume-downshift.png"
                  alt="Person wearing Lume Downshift glasses with rose-tinted lenses in a relaxed evening setting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
                    Evening
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-bold text-navy-900">
                  Downshift
                </h3>
                <p className="mt-1 text-sm font-medium text-navy-500">
                  For rest
                </p>
                <p className="mt-4 text-base leading-7 text-navy-700">
                  When your nervous system will not shut off, Downshift helps
                  your brain transition from high alert into recovery. Filters
                  100% of the 460–480nm light that suppresses melatonin,
                  signaling your master clock that the day is ending.
                </p>
                <div className="mt-6 space-y-2">
                  <p className="text-sm font-semibold text-navy-900">
                    How it works
                  </p>
                  <ul className="space-y-1.5 text-sm text-navy-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
                      Facilitates parasympathetic rebound (&ldquo;rest and
                      digest&rdquo;)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
                      Supports natural melatonin production for sleep onset
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
                      Overcomes the &ldquo;neural vigilance&rdquo; caused by
                      screen-heavy evenings
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Science section */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
              The science
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Neox&trade; dual-filter architecture
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-navy-700">
              <p>
                Lume lenses are not commodity blue-light blockers. They use a
                proprietary dual-filter system engineered for precision spectral
                filtering:
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-navy-100 bg-navy-50/30 p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-navy-900">
                  Filter 1: Dielectric stack
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy-700">
                  Six layers of vacuum-deposited titanium and silicon oxide,
                  alternating at 90-degree angles. Blocks 100% of UV radiation
                  and provides the foundation layer of spectral control.
                </p>
              </div>
              <div className="rounded-xl border border-navy-100 bg-navy-50/30 p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-navy-900">
                  Filter 2: Dye-impregnated polymer
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy-700">
                  High-contrast dyes molecularly bonded to the lens material
                  using a cast-in-mold process. This is not a surface coating
                  that can chip or wear off — the filtering is built into the
                  lens itself.
                </p>
              </div>
            </div>

            {/* Specs */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                "ANSI Z87.1 Safety Rated",
                "Hydrophobic/Oleophobic Coatings",
                "Hard-Coated Scratch Resistance",
                "100% UV Protection",
              ].map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center gap-1.5 rounded-full border border-navy-200 bg-white px-3 py-1.5 text-xs font-medium text-navy-700"
                >
                  <svg
                    className="h-3.5 w-3.5 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Why it matters for ND adults */}
      <Section className="bg-teal-50/40 border-y border-teal-100">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
              Why this matters for neurodivergent adults
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Light as a sensory trigger
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-navy-700">
              <p>
                Research by Teresa Tavassoli and colleagues (2014) established
                that sensory processing differences significantly affect
                quality of life in autistic adults. Light sensitivity is among
                the most commonly reported sensory challenges.
              </p>
              <p>
                For ADHD adults, the impact is different but equally significant.
                Open-plan offices with fluorescent lighting create a steady
                stream of peripheral visual distraction. Each flash of
                movement, each flicker of light in your visual field competes
                for attentional resources that are already under pressure.
              </p>
              <p>
                Clinical research on spectral filtering shows promising results
                for neurodivergent populations. Studies on FL-41 tinted lenses
                (the spectral range targeted by Lume) have demonstrated reduced
                activation in pain-processing brain regions and measurable
                improvements in sensory comfort.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-teal-200 bg-white p-6 text-center">
                <p className="text-4xl font-bold text-navy-900">49%</p>
                <p className="mt-2 text-sm text-navy-600">
                  of participants no longer met ADHD diagnostic criteria after
                  spectral filtering implementation (short-term study)
                </p>
              </div>
              <div className="rounded-xl border border-teal-200 bg-white p-6 text-center">
                <p className="text-4xl font-bold text-navy-900">64%</p>
                <p className="mt-2 text-sm text-navy-600">
                  of participants no longer met ADHD criteria at long-term
                  follow-up
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs text-navy-400 text-center">
              Based on published clinical research on spectral filtering for
              ADHD. Lume is a consumer wellness product and does not claim to
              treat or diagnose any medical condition.
            </p>
          </div>
        </Container>
      </Section>

      {/* Lifestyle images */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              Designed for real life
            </h2>
            <p className="mt-3 text-base text-navy-600">
              Lume is consumer wellness eyewear that looks and feels like
              premium sunglasses. No clinical aesthetics. No stigma. Just
              quiet, effective sensory support you can wear anywhere.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/lume/lume-lifestyle-1.png"
                alt="Person wearing Lume Balance glasses during a workout, demonstrating everyday wearability"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/lume/lume-lifestyle-2.png"
                alt="Healthcare worker wearing Lume Balance glasses in a clinical environment"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/lume/lume-lifestyle-3.png"
                alt="Woman relaxing at home wearing Lume Downshift glasses for evening wind-down"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Comparison */}
      <Section className="bg-navy-50/30">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              Not all light-filtering eyewear is the same
            </h2>
            <p className="mt-3 text-base text-navy-600">
              Lume sits in a unique position: professional-grade science at an
              accessible price, in a design that does not look medical.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-200">
                  <th className="py-3 pr-4 text-left font-semibold text-navy-900">
                    &nbsp;
                  </th>
                  <th className="px-4 py-3 text-center font-bold text-teal-700 bg-teal-50/50 rounded-t-lg">
                    Lume
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-navy-600">
                    Roka
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-navy-600">
                    Avulux
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-navy-600">
                    Felix Gray
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-100">
                <tr>
                  <td className="py-3 pr-4 font-medium text-navy-900">
                    Price
                  </td>
                  <td className="px-4 py-3 text-center font-bold text-teal-700 bg-teal-50/50">
                    $89
                  </td>
                  <td className="px-4 py-3 text-center text-navy-600">$265</td>
                  <td className="px-4 py-3 text-center text-navy-600">$299</td>
                  <td className="px-4 py-3 text-center text-navy-600">$95</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-navy-900">
                    Primary claim
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-teal-700 bg-teal-50/50">
                    Functional wellness
                  </td>
                  <td className="px-4 py-3 text-center text-navy-600">
                    Circadian optimisation
                  </td>
                  <td className="px-4 py-3 text-center text-navy-600">
                    Migraine / FDA
                  </td>
                  <td className="px-4 py-3 text-center text-navy-600">
                    General blue light
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-navy-900">
                    Validation
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-teal-700 bg-teal-50/50">
                    Clinical / whitepaper
                  </td>
                  <td className="px-4 py-3 text-center text-navy-600">
                    Sport performance
                  </td>
                  <td className="px-4 py-3 text-center text-navy-600">
                    Medical device
                  </td>
                  <td className="px-4 py-3 text-center text-navy-600">
                    Digital lifestyle
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-navy-900">
                    Dual day/night system
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-teal-700 bg-teal-50/50">
                    Yes
                  </td>
                  <td className="px-4 py-3 text-center text-navy-600">No</td>
                  <td className="px-4 py-3 text-center text-navy-600">No</td>
                  <td className="px-4 py-3 text-center text-navy-600">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Who it is for */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              Who Lume is for
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-navy-100 bg-navy-50/30 p-6 text-center">
              <span className="text-3xl">🧠</span>
              <h3 className="mt-3 text-base font-semibold text-navy-900">
                Neurodivergent professionals
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                If fluorescent-lit offices drain your energy before lunch, or
                screen-heavy evenings leave your brain wired at midnight.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50/30 p-6 text-center">
              <span className="text-3xl">🏥</span>
              <h3 className="mt-3 text-base font-semibold text-navy-900">
                Healthcare and shift workers
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                High-stimulus clinical environments and irregular schedules
                disrupt circadian rhythms. Lume helps maintain focus during
                shifts and supports recovery after.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50/30 p-6 text-center">
              <span className="text-3xl">💻</span>
              <h3 className="mt-3 text-base font-semibold text-navy-900">
                Remote workers
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                Hours of video calls and screen time in home environments where
                lighting is rarely optimised. Balance and Downshift create
                structure your light environment lacks.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-navy-900">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Take control of your light environment
            </h2>
            <p className="mt-4 text-lg leading-8 text-navy-300">
              Lume is not a cure. It is a tool — one designed around the
              specific way neurodivergent brains process sensory input. If light
              sensitivity is part of your experience, it may be worth trying.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://www.paralleleyewear.com/lume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-teal-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-colors hover:bg-teal-500"
              >
                Shop Lume at Parallel Eyewear &rarr;
              </a>
              <span className="text-sm text-navy-400">
                From $89 &middot; ANSI Z87.1 rated &middot; 100% UV
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bottom disclosure + disclaimer */}
      <Section className="bg-navy-50/30 border-t border-navy-100">
        <Container>
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <div>
              <p className="text-sm font-semibold text-navy-900">
                Relationship disclosure
              </p>
              <p className="mt-2 text-xs leading-relaxed text-navy-500">
                The founder of Like Minds Community, David Wetherelt, is part
                of the leadership team at Parallel Eyewear and was directly
                involved in the design of the Lume product line. Like Minds
                Community may receive compensation from Lume sales. We believe
                in full transparency about this relationship and only feature
                products we genuinely believe serve our community.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-900">Disclaimer</p>
              <p className="mt-2 text-xs leading-relaxed text-navy-500">
                Lume is consumer wellness eyewear. It is not a medical device
                and does not claim to diagnose, treat, cure, or prevent any
                medical condition. The clinical research referenced on this
                page relates to the general science of spectral filtering and
                is provided for educational context. Individual results may
                vary. If you have specific visual or sensory health concerns,
                consult a qualified healthcare professional.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
