import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, Container, SectionHeading } from "@like-minds/ui";

export const metadata: Metadata = {
  title: "Tools We Trust - Like Minds Community",
  description:
    "A curated list of tools and products that help neurodivergent adults manage energy, focus, sensory environments, and recovery.",
};

/* ───────── Types ───────── */

interface Product {
  name: string;
  image: string;
  description: string;
  why: string;
  href: string;
}

interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  products: Product[];
}

/* ───────── Product data ───────── */

const productCategories: ProductCategory[] = [
  {
    id: "light-sensory",
    title: "Light & Sensory",
    subtitle:
      "Reduce sensory overload and create calmer environments that work with your nervous system.",
    icon: "💡",
    products: [
      {
        name: "Loop Earplugs",
        image: "/images/tools/loop-earplugs.jpg",
        description:
          "Noise-reducing earplugs that lower volume without blocking sound completely. Multiple filter levels.",
        why: "Reduces auditory overload in open offices, social events, and public spaces without isolating you from conversation.",
        href: "#",
      },
      {
        name: "Philips Hue Smart Lights",
        image: "/images/tools/philips-hue.jpg",
        description:
          "Adjustable colour temperature and brightness. Set warm, low-light scenes to reduce visual overstimulation.",
        why: "Fluorescent and harsh overhead lighting is a major sensory trigger. Warm, dimmable light reduces cognitive load and supports evening wind-down.",
        href: "#",
      },
      {
        name: "Weighted Blanket (15–20 lbs)",
        image: "/images/tools/weighted-blanket.jpg",
        description:
          "Deep pressure stimulation blanket. Available in various weights and fabrics.",
        why: "Deep pressure activates the parasympathetic nervous system, reducing anxiety and helping with sleep onset. Both are common challenges for neurodivergent adults.",
        href: "#",
      },
    ],
  },
  {
    id: "supplements",
    title: "Supplements",
    subtitle:
      "Evidence-backed supplements that support focus, sleep, and nervous system regulation. We recommend Seeking Health by Dr. Ben Lynch, formulated around genetic and methylation science. Always consult your healthcare provider.",
    icon: "💊",
    products: [
      {
        name: "Seeking Health Optimal Magnesium",
        image: "/images/tools/seeking-health-magnesium.jpg",
        description:
          "Highly bioavailable magnesium blend from Seeking Health. Supports sleep quality, muscle relaxation, and nervous system calm without digestive issues.",
        why: "Many neurodivergent adults are magnesium deficient. Dr. Ben Lynch's formulations prioritise bioavailability and are designed around genetic methylation differences that affect how your body processes nutrients.",
        href: "https://crrnt.app/SEEK/oKZvq-Ye",
      },
      {
        name: "Seeking Health Optimal Fish Oil",
        image: "/images/tools/seeking-health-omega.jpg",
        description:
          "High-quality omega-3 (EPA/DHA) from Seeking Health. Molecularly distilled for purity. Supports brain function, reduces inflammation, and may improve focus.",
        why: "Multiple studies show omega-3 supplementation supports cognitive function and may improve ADHD symptoms. Seeking Health's formulation prioritises purity and absorption.",
        href: "https://crrnt.app/SEEK/oKZvq-Ye",
      },
      {
        name: "Dirty Genes by Dr. Ben Lynch",
        image: "/images/tools/dirty-genes.jpg",
        description:
          "The book that explains how genetic variants affect mood, energy, focus, and detoxification. A practical guide to understanding your own biochemistry.",
        why: "Many neurodivergent adults have methylation and detox gene variants (MTHFR, COMT, MAO) that affect how their brain produces and processes neurotransmitters. This book makes the science accessible and actionable.",
        href: "https://crrnt.app/SEEK/oKZvq-Ye",
      },
    ],
  },
  {
    id: "focus-work",
    title: "Focus & Work Tools",
    subtitle:
      "External scaffolding that compensates for executive function differences and supports deep work.",
    icon: "🎯",
    products: [
      {
        name: "Focusmate",
        image: "/images/tools/focusmate.jpg",
        description:
          "Virtual co-working sessions with a real person. 25, 50, or 75-minute sessions with video accountability.",
        why: "Body doubling is one of the most effective strategies for ADHD focus. Focusmate provides on-demand body doubling with zero social pressure.",
        href: "#",
      },
      {
        name: "Time Timer",
        image: "/images/tools/time-timer.jpg",
        description:
          "Visual countdown timer that shows time as a disappearing coloured disc. No ticking, no numbers to process.",
        why: "Time blindness is a core ADHD challenge. Making time visible and intuitive reduces the executive function cost of tracking it.",
        href: "#",
      },
      {
        name: "Remarkable 2 Tablet",
        image: "/images/tools/remarkable.jpg",
        description:
          "E-ink writing tablet that feels like paper. No apps, no notifications, no distractions.",
        why: "Eliminates digital distraction while capturing handwritten notes and ideas. The tactile writing experience can improve idea formation for some neurodivergent thinkers.",
        href: "#",
      },
    ],
  },
  {
    id: "sleep-recovery",
    title: "Sleep & Recovery",
    subtitle:
      "Better sleep is the foundation of burnout recovery. These tools address the specific sleep challenges neurodivergent adults face.",
    icon: "🌙",
    products: [
      {
        name: "Oura Ring",
        image: "/images/tools/oura-ring.jpg",
        description:
          "Wearable ring that tracks sleep stages, HRV, body temperature, and readiness score. No screen, no distractions.",
        why: "Objective sleep data helps neurodivergent adults understand their actual recovery patterns instead of relying on unreliable self-reporting.",
        href: "#",
      },
      {
        name: "Lume Downshift by Parallel",
        image: "/images/lume/lume-downshift.png",
        description:
          "Precision spectral-filtering glasses that block 100% of melatonin-suppressing light (460–480nm). Designed for evening wind-down.",
        why: "Neurodivergent adults often struggle with delayed sleep phase and evening hyperarousal. Downshift signals your brain that the day is ending, supporting natural melatonin production without sedation.",
        href: "/lume",
      },
      {
        name: "White Noise Machine",
        image: "/images/tools/white-noise.jpg",
        description:
          "Consistent ambient sound that masks environmental noise. Multiple sound profiles available.",
        why: "Auditory sensitivity can make sleep fragile. Consistent background sound reduces the impact of unexpected noises that trigger wakefulness.",
        href: "#",
      },
    ],
  },
  {
    id: "brain-friendly",
    title: "Brain-Friendly Environments",
    subtitle:
      "Small environmental changes that add up to significant cognitive load reduction across your day.",
    icon: "🏡",
    products: [
      {
        name: "Standing Desk Converter",
        image: "/images/tools/standing-desk.jpg",
        description:
          "Height-adjustable desk attachment that lets you switch between sitting and standing. No full desk replacement needed.",
        why: "Movement supports dopamine production and focus regulation. The ability to shift position throughout the day matches the ADHD need for physical variability.",
        href: "#",
      },
      {
        name: "Fidget Tools (Quality Set)",
        image: "/images/tools/fidget-tools.jpg",
        description:
          "Discreet, quiet fidget tools designed for adults. Includes textured rings, magnetic putty, or silent spinner options.",
        why: "Stimming and fidgeting support focus and emotional regulation. Quality tools designed for adults avoid the stigma of children's fidget toys.",
        href: "#",
      },
      {
        name: "Air Purifier with HEPA Filter",
        image: "/images/tools/air-purifier.jpg",
        description:
          "Quiet air purifier that removes allergens, dust, and pollutants. Look for models under 30dB on low settings.",
        why: "Clean air reduces headaches and brain fog. The gentle white noise from a quiet purifier can also serve as calming background sound.",
        href: "#",
      },
    ],
  },
];

/* ───────── Featured Product (Lume) ───────── */

function FeaturedProduct() {
  return (
    <Section className="bg-white pt-0 pb-4">
      <Container>
        <Link
          href="/lume"
          className="group block overflow-hidden rounded-2xl border-2 border-teal-200 bg-gradient-to-r from-navy-50/60 via-white to-teal-50/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
              <Image
                src="/images/lume/lume-hero.jpg"
                alt="Woman wearing Lume Downshift glasses by Parallel Eyewear, rose-tinted lenses for evening sensory recovery"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                  Featured product
                </span>
                <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
                  Sensory support
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy-900 group-hover:text-teal-700 transition-colors sm:text-3xl">
                Lume by Parallel Eyewear
              </h2>

              <p className="mt-1 text-sm font-medium text-navy-500">
                Functional eyewear for sensory regulation &middot; From $89
              </p>

              <p className="mt-4 text-base leading-7 text-navy-700">
                Light sensitivity is one of the most underrecognised challenges
                for neurodivergent adults. Fluorescent offices, screen glare,
                and artificial lighting create a constant background of visual
                overstimulation that drains cognitive energy and compounds
                burnout.
              </p>

              <p className="mt-3 text-base leading-7 text-navy-700">
                Lume glasses use Neox&trade; dual-filter lens technology to
                selectively filter the wavelengths of light most associated
                with sensory overload and circadian disruption. Two lens
                options: <strong>Balance</strong> for daytime focus and{" "}
                <strong>Downshift</strong> for evening nervous system recovery.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <span className="inline-flex items-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors group-hover:bg-teal-500">
                  Learn more &rarr;
                </span>
                <span className="text-sm text-navy-400">
                  ANSI Z87.1 rated &middot; 100% UV protection
                </span>
              </div>

              {/* Disclosure */}
              <p className="mt-6 rounded-lg border border-navy-100 bg-navy-50/50 px-4 py-3 text-xs leading-relaxed text-navy-500">
                <span className="font-semibold text-navy-600">
                  Disclosure:
                </span>{" "}
                The founder of Like Minds Community is part of the leadership
                team at Parallel Eyewear and was involved in the design of the
                Lume product line. We believe in full transparency about this
                relationship.
              </p>
            </div>
          </div>
        </Link>

        <p className="mt-3 text-center text-sm text-navy-500">
          Read the science:{" "}
          <Link
            href="/knowledge/why-bright-light-feels-exhausting"
            className="font-medium text-teal-600 underline underline-offset-2 hover:text-teal-500 transition-colors"
          >
            Why bright light feels exhausting for ADHD and autistic brains
          </Link>
        </p>
      </Container>
    </Section>
  );
}

/* ───────── Product Card ───────── */

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-2xl border border-navy-100 bg-white overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Image placeholder */}
      <div className="aspect-[4/3] bg-gradient-to-br from-navy-50 to-navy-100 flex items-center justify-center">
        <span className="text-sm font-medium text-navy-300">
          Product image
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-navy-900">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-600">
          {product.description}
        </p>

        {/* Why it helps */}
        <div className="mt-4 rounded-lg bg-teal-50/50 border border-teal-100 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Why it helps
          </p>
          <p className="mt-1 text-sm leading-relaxed text-navy-700">
            {product.why}
          </p>
        </div>

        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-500"
        >
          View product &rarr;
        </a>
      </div>
    </div>
  );
}

/* ───────── Category quick-nav ───────── */

function CategoryNav() {
  return (
    <nav
      className="flex flex-wrap gap-3"
      aria-label="Product categories"
    >
      {productCategories.map((cat) => (
        <a
          key={cat.id}
          href={`#${cat.id}`}
          className="rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-medium text-navy-700 transition-colors hover:border-teal-300 hover:text-teal-700"
        >
          {cat.icon} {cat.title}
        </a>
      ))}
    </nav>
  );
}

/* ───────── Page ───────── */

export default function ToolsWeTrustPage() {
  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-b from-navy-50 to-white pt-14 pb-8 sm:pt-20 sm:pb-10">
        <Container>
          <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
            Curated recommendations
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            Tools we trust
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-navy-600">
            A curated list of tools and products that help neurodivergent adults
            manage energy, focus, sensory environments, and recovery. Every
            recommendation is chosen for a specific reason, not because it is
            trendy.
          </p>

          {/* Affiliate disclosure */}
          <div className="mt-6 rounded-xl border border-orange-200 bg-orange-50/50 px-5 py-4">
            <p className="text-sm leading-relaxed text-navy-700">
              <span className="font-semibold text-navy-900">
                Transparency note:
              </span>{" "}
              Some links on this page are affiliate links, which means Like
              Minds Community may earn a small commission if you purchase
              through them. This does not affect the price you pay. We only
              recommend products we genuinely believe help neurodivergent
              adults, and affiliate income supports our free content and
              community resources.
            </p>
          </div>

          {/* Category nav */}
          <div className="mt-8">
            <CategoryNav />
          </div>
        </Container>
      </Section>

      {/* Featured product - Lume */}
      <FeaturedProduct />

      {/* How we choose */}
      <Section className="bg-white pt-0 pb-6">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-navy-100 bg-navy-50/30 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-navy-900">
              How we choose what to recommend
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-navy-700">
              <p>
                Every product on this page meets three criteria:
              </p>
              <ul className="ml-4 list-disc space-y-2">
                <li>
                  <strong>Science-informed.</strong> There is research or
                  clinical evidence supporting why it helps neurodivergent
                  adults specifically, not just the general population.
                </li>
                <li>
                  <strong>Personally tested or community-validated.</strong> We
                  have either used it ourselves or it has been consistently
                  recommended by neurodivergent adults in our community.
                </li>
                <li>
                  <strong>Specific to neurodivergent needs.</strong> We explain
                  exactly why each product helps and what neurodivergent
                  challenge it addresses. No generic wellness recommendations.
                </li>
              </ul>
              <p>
                We will never recommend something just because it has an
                affiliate programme. If a product stops meeting our standards,
                we remove it.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Product categories */}
      {productCategories.map((category, i) => (
        <Section
          key={category.id}
          id={category.id}
          className={i % 2 === 0 ? "bg-white" : "bg-navy-50/30"}
        >
          <Container>
            <div className="mb-8 flex items-start gap-3">
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
                  {category.title}
                </h2>
                <p className="mt-1 max-w-2xl text-base leading-7 text-navy-600">
                  {category.subtitle}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>

            {/* Seeking Health discount callout */}
            {category.id === "supplements" && (
              <div className="mt-8 rounded-2xl border border-teal-200 bg-gradient-to-r from-teal-50/60 to-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
                <div>
                  <p className="text-base font-semibold text-navy-900">
                    Like Minds Community discount
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-navy-600">
                    We have partnered with Seeking Health because Dr. Ben
                    Lynch&apos;s work on genetics and methylation aligns directly
                    with our mission. Use our code for 10% off your first order.
                  </p>
                </div>
                <div className="mt-4 flex flex-col items-start gap-2 sm:mt-0 sm:flex-shrink-0 sm:items-end">
                  <span className="inline-flex items-center rounded-lg border-2 border-dashed border-teal-300 bg-white px-4 py-2 text-lg font-bold tracking-wide text-teal-700">
                    DavidW10
                  </span>
                  <a
                    href="https://crrnt.app/SEEK/oKZvq-Ye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-500"
                  >
                    Shop Seeking Health &rarr;
                  </a>
                </div>
              </div>
            )}
          </Container>
        </Section>
      ))}

      {/* Medical disclaimer */}
      <Section className="bg-navy-50/30 border-t border-navy-100">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-bold text-navy-900">
              A note on supplements and health products
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-600">
              The supplement recommendations on this page are based on
              published research, but they are not medical advice. Every person
              is different, and neurodivergent adults often have co-occurring
              conditions or take medications that may interact with supplements.
              Always consult your healthcare provider before starting any new
              supplement.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-base leading-7 text-navy-600">
              Know a tool that has made a real difference for your
              neurodivergent life?
            </p>
            <p className="mt-2 text-sm text-navy-400">
              <Link
                href="/contact"
                className="text-teal-600 hover:text-teal-700 transition-colors"
              >
                Suggest a product
              </Link>{" "}
              and we will review it for inclusion.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
