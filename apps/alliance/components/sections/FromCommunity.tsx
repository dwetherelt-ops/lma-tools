import { Section, Container } from "@like-minds/ui";

// Placeholder posts - replace with dynamic data from community platform later
const posts = [
  {
    title: "Anyone else feel exhausted after masking all day?",
    category: "ADHD / Masking",
    replies: 24,
  },
  {
    title: "Understanding why burnout hits neurodivergent adults differently",
    category: "Burnout",
    replies: 18,
  },
  {
    title: "First week here and already feel less alone.",
    category: "Community",
    replies: 31,
  },
  {
    title: "Strategies that actually work for executive dysfunction",
    category: "ADHD",
    replies: 42,
  },
  {
    title: "How do you explain sensory overload to people who don't get it?",
    category: "Autism",
    replies: 15,
  },
];

export function FromCommunity() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            From the community
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-navy-600">
            A glimpse of conversations happening inside the community.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl divide-y divide-navy-100">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium leading-6 text-navy-800">
                  {post.title}
                </p>
                <span className="mt-1 inline-block rounded-full bg-navy-50 px-2.5 py-0.5 text-xs font-medium text-navy-600">
                  {post.category}
                </span>
              </div>
              <span className="shrink-0 text-xs text-navy-400">
                {post.replies} replies
              </span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <a
            href="https://likeminds-community-8530fe.circle.so"
            className="inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors"
          >
            Join the conversation
          </a>
          <p className="mt-2 text-sm text-navy-400">
            Free to join &middot; Read quietly if you want &middot; Share when you&apos;re ready
          </p>
        </div>
      </Container>
    </Section>
  );
}
