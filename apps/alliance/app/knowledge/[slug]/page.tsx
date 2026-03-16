import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, Container } from "@like-minds/ui";
import { articles, categories, getArticleBySlug } from "../articles";
import { articleContent, type ContentBlock } from "./content";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: `${article.title} - Like Minds Community`,
    description: article.summary,
  };
}

function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                className="mt-10 text-2xl font-bold tracking-tight text-navy-900 first:mt-0 sm:text-3xl"
              >
                {block.text}
              </h2>
            );

          case "paragraph":
            return block.text && block.text.includes("<a ") ? (
              <p
                key={i}
                className="mt-4 text-base leading-7 text-navy-700 [&_a]:font-medium [&_a]:text-teal-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-teal-500"
                dangerouslySetInnerHTML={{ __html: block.text }}
              />
            ) : (
              <p key={i} className="mt-4 text-base leading-7 text-navy-700">
                {block.text}
              </p>
            );

          case "list":
            return (
              <ul key={i} className="mt-4 space-y-3">
                {block.items?.map((item, j) => (
                  <li key={j} className="flex gap-3 text-base leading-7 text-navy-700">
                    <span
                      className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            );

          case "callout":
            return (
              <div
                key={i}
                className="mt-8 rounded-2xl border border-teal-100 bg-teal-50/40 p-6"
              >
                <p className="text-base font-medium leading-7 text-navy-800">
                  {block.text}
                </p>
              </div>
            );

          case "references":
            return (
              <div key={i} className="mt-10 border-t border-navy-100 pt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-500">
                  References
                </h3>
                <ol className="mt-4 space-y-2">
                  {block.items?.map((ref, j) => (
                    <li
                      key={j}
                      className="text-sm leading-6 text-navy-500"
                    >
                      {ref}
                    </li>
                  ))}
                </ol>
              </div>
            );

          default:
            return null;
        }
      })}
    </>
  );
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const content = articleContent[params.slug];
  if (!content) notFound();

  const category = categories[article.category];

  return (
    <>
      {/* Article header */}
      <Section className="bg-gradient-to-b from-navy-50 to-white pt-14 pb-8 sm:pt-20 sm:pb-10">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Knowledge Hub
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-teal-50 px-3 py-0.5 text-xs font-medium text-teal-700">
                {category.label}
              </span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-navy-50 px-2.5 py-0.5 text-xs font-medium text-navy-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              {article.title}
            </h1>

            <p className="mt-4 text-lg leading-8 text-navy-600">
              {article.summary}
            </p>

            <div className="mt-4 flex items-center gap-4 text-sm text-navy-400">
              <span>{article.author}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{article.readingTime}</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Article body */}
      <Section className="bg-white">
        <Container>
          <article className="mx-auto max-w-3xl">
            <ContentRenderer blocks={content} />
          </article>
        </Container>
      </Section>

      {/* Read more */}
      <Section className="bg-navy-50/30">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-navy-900">
              Keep reading
            </h2>
            <p className="mt-2 text-base text-navy-600">
              More articles from the Knowledge Hub
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/knowledge"
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 transition-colors"
              >
                Browse all articles
              </Link>
              <Link
                href="/research"
                className="rounded-md border border-navy-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-700 shadow-sm hover:bg-navy-50 transition-colors"
              >
                Explore the research
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
