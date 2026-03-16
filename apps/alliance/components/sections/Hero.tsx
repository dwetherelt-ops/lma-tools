import Image from "next/image";
import { Section, Container } from "@like-minds/ui";

export function Hero() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white pt-14 pb-14 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              For neurodivergent adults, by neurodivergent adults
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
              Your mind is different.{" "}
              <span className="text-teal-600">That&apos;s your strength.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-navy-600 sm:text-xl">
              Like Minds Community is a community for neurodivergent adults who
              feel burned out, overwhelmed, or like the world was built for a
              different kind of mind. Here you&apos;ll find science-backed
              insight, lived experience, and a community that understands how
              your brain actually works, so you can recover from burnout and
              build a life that fits you.
            </p>
            <div className="mt-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://likeminds-community-8530fe.circle.so"
                  className="inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors"
                >
                  Join the Community
                </a>
                <a
                  href="/science"
                  className="inline-flex items-center justify-center text-base font-semibold text-navy-700 hover:text-navy-500 transition-colors"
                >
                  Explore the Science <span aria-hidden="true" className="ml-2">&rarr;</span>
                </a>
              </div>
              <p className="mt-2 text-sm text-navy-400">
                Free to join &middot; Read quietly if you want &middot; Share when you&apos;re ready
              </p>
            </div>
          </div>

          {/*
            Hero image - PLACEHOLDER from Unsplash (free to use)
            To swap with your own image:
            1. Save your image to /public/hero-image.jpg
            2. Change src below to "/hero-image.jpg"
            3. Remove images.unsplash.com from next.config.js if no longer needed
            Recommended dimensions: 1600x1200px landscape
          */}
          <div className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=1200&fit=crop&crop=faces&auto=format&q=80"
                alt="People connecting in a calm, natural setting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 540px"
                priority
              />
              {/* Soft gradient overlay to blend with site palette */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-navy-900/15 via-transparent to-teal-600/10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative gradient blob */}
      <div
        className="absolute -top-24 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-teal-100/40 blur-3xl"
        aria-hidden="true"
      />
    </Section>
  );
}
