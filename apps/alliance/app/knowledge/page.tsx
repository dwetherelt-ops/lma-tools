import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@like-minds/ui";
import {
  articles,
  categories,
  type CategoryKey,
  getFeaturedArticle,
  getStarterGuides,
  getArticlesByCategory,
} from "./articles";

export const metadata: Metadata = {
  title: "Knowledge Hub - Like Minds Community",
  description:
    "Articles on neurodivergent burnout, ADHD, autism, genetics, and practical strategies. Written in plain language and grounded in research.",
};

/* ───────── Article Card ───────── */

function ArticleCard({
  slug,
  title,
  summary,
  tags,
  readingTime,
  author,
}: {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  readingTime: string;
  author: string;
}) {
  return (
    <Link
      href={`/knowledge/${slug}`}
      className="group block rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-navy-50 px-2.5 py-0.5 text-xs font-medium text-navy-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mt-3 text-lg font-semibold leading-snug text-navy-900 group-hover:text-teal-700 transition-colors">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-navy-600 line-clamp-3">
        {summary}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-navy-400">
          {author} &middot; {readingTime}
        </p>
        <span className="text-sm font-medium text-teal-600 group-hover:text-teal-700 transition-colors">
          Read &rarr;
        </span>
      </div>
    </Link>
  );
}

/* ───────── Featured Article Hero ───────── */

function FeaturedArticle() {
  const featured = getFeaturedArticle();
  if (!featured) return null;

  return (
    <Link
      href={`/knowledge/${featured.slug}`}
      className="group block rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50/60 to-white p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-10"
    >
      <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
        Featured
      </span>
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy-900 group-hover:text-teal-700 transition-colors sm:text-3xl">
        {featured.title}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-7 text-navy-600">
        {featured.summary}
      </p>
      <div className="mt-5 flex items-center gap-4">
        <p className="text-sm text-navy-400">
          {featured.author} &middot; {featured.readingTime}
        </p>
        <span className="text-sm font-semibold text-teal-600 group-hover:text-teal-700 transition-colors">
          Read article &rarr;
        </span>
      </div>
    </Link>
  );
}

/* ───────── Topic Collections Grid ───────── */

function TopicCollections() {
  const categoryOrder: CategoryKey[] = [
    "burnout",
    "brain-science",
    "adhd",
    "autism",
    "genetics",
    "practical",
    "lived-experience",
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {categoryOrder.map((key) => {
        const cat = categories[key];
        const count = getArticlesByCategory(key).length;
        return (
          <a
            key={key}
            href={`#${key}`}
            className="group rounded-xl border border-navy-100 bg-white p-4 text-center transition-all duration-200 hover:border-teal-300 hover:-translate-y-0.5 hover:shadow-sm"
          >
            <span className="text-2xl">{cat.icon}</span>
            <p className="mt-2 text-sm font-semibold text-navy-900 group-hover:text-teal-700 transition-colors">
              {cat.label}
            </p>
            <p className="mt-0.5 text-xs text-navy-400">
              {count} {count === 1 ? "article" : "articles"}
            </p>
          </a>
        );
      })}
    </div>
  );
}

/* ───────── Category Section ───────── */

function CategorySection({
  categoryKey,
  isAlt,
}: {
  categoryKey: CategoryKey;
  isAlt: boolean;
}) {
  const category = categories[categoryKey];
  const categoryArticles = articles.filter((a) => a.category === categoryKey);

  if (categoryArticles.length === 0) return null;

  return (
    <Section
      id={categoryKey}
      className={isAlt ? "bg-navy-50/30" : "bg-white"}
    >
      <Container>
        <div className="mb-8 flex items-center gap-3">
          <span className="text-2xl">{category.icon}</span>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              {category.label}
            </h2>
            <p className="mt-1 max-w-2xl text-base leading-7 text-navy-600">
              {category.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoryArticles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ───────── Start Here Section ───────── */

function StartHereSection() {
  const guides = getStarterGuides();
  if (guides.length === 0) return null;

  return (
    <Section className="bg-teal-50/40 border-y border-teal-100">
      <Container>
        <div className="mb-8 text-center">
          <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
            Start here
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
            New to neurodivergent burnout?
          </h2>
          <p className="mt-2 text-base text-navy-600">
            These guides will give you the foundation you need.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((article) => (
            <Link
              key={article.slug}
              href={`/knowledge/${article.slug}`}
              className="group block rounded-2xl border border-teal-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-xs font-medium uppercase tracking-wide text-teal-600">
                {categories[article.category].label}
              </span>
              <h3 className="mt-2 text-base font-semibold leading-snug text-navy-900 group-hover:text-teal-700 transition-colors">
                {article.title}
              </h3>
              <p className="mt-4 text-sm font-medium text-teal-600 group-hover:text-teal-700 transition-colors">
                {article.readingTime} &rarr;
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ───────── Page ───────── */

const categoryOrder: CategoryKey[] = [
  "burnout",
  "brain-science",
  "adhd",
  "autism",
  "genetics",
  "practical",
  "lived-experience",
];

export default function KnowledgeHubPage() {
  return (
    <>
      {/* Page header */}
      <Section className="bg-gradient-to-b from-navy-50 to-white pt-14 pb-8 sm:pt-20 sm:pb-10">
        <Container>
          <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
            Knowledge Hub
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            Learn how your brain works
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-navy-600">
            Plain-language articles on neurodivergent burnout, brain science,
            genetics, and practical strategies. Grounded in research. Written
            for real life.
          </p>
        </Container>
      </Section>

      {/* Featured article */}
      <Section className="bg-white pt-0">
        <Container>
          <FeaturedArticle />
        </Container>
      </Section>

      {/* Topic collections */}
      <Section className="bg-navy-50/30">
        <Container>
          <h2 className="mb-6 text-center text-xl font-bold tracking-tight text-navy-900 sm:text-2xl">
            Browse by topic
          </h2>
          <TopicCollections />
        </Container>
      </Section>

      {/* Start Here */}
      <StartHereSection />

      {/* Article categories */}
      {categoryOrder.map((key, i) => (
        <CategorySection key={key} categoryKey={key} isAlt={i % 2 !== 0} />
      ))}

      {/* Footer note */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base leading-7 text-navy-600">
              New articles are added regularly. All content is reviewed for
              scientific accuracy and written with strengths-based,
              non-clinical language.
            </p>
            <p className="mt-3 text-sm text-navy-400">
              Want to suggest a topic?{" "}
              <Link
                href="/contact"
                className="text-teal-600 hover:text-teal-700 transition-colors"
              >
                Get in touch
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
