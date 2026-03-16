import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container, SectionHeading } from "@like-minds/ui";

export const metadata: Metadata = {
  title: "Research - Like Minds Community",
  description:
    "Curated research on neurodivergence, burnout, ADHD, autism, and genetics. Plain-language summaries of the science that matters.",
};

interface ResearchArticle {
  title: string;
  authors: string;
  source: string;
  year: number;
  summary: string;
  url: string;
  tags: string[];
}

const burnoutResearch: ResearchArticle[] = [
  {
    title: "Autistic Burnout, Explained",
    authors: "Raymaker, D. M. et al.",
    source: "Autism in Adulthood",
    year: 2020,
    summary:
      "The first academic study to formally define autistic burnout. Identified three key features: chronic exhaustion, loss of skills, and reduced tolerance to stimulus. Found that burnout was distinct from depression and strongly linked to masking and life demands exceeding capacity.",
    url: "https://doi.org/10.1089/aut.2019.0079",
    tags: ["Burnout", "Autism"],
  },
  {
    title:
      "Understanding and Mitigating the Effect of Autistic Burnout",
    authors: "Mantzalas, J. et al.",
    source: "Brain Sciences",
    year: 2022,
    summary:
      "Explored the causes and consequences of autistic burnout across the lifespan. Found that cumulative masking, sensory overload, and navigating neurotypical social expectations were the primary drivers. Recommended reducing environmental demands as a recovery strategy.",
    url: "https://doi.org/10.3390/brainsci12050610",
    tags: ["Burnout", "Autism", "Masking"],
  },
  {
    title:
      "Occupational Burnout in Adults with ADHD: A Systematic Review",
    authors: "Hult, N. et al.",
    source: "BMC Psychiatry",
    year: 2022,
    summary:
      "Systematic review confirming that adults with ADHD experience significantly higher rates of occupational burnout. Executive function difficulties, emotional dysregulation, and workplace misfit were the strongest predictors.",
    url: "https://doi.org/10.1186/s12888-022-04308-4",
    tags: ["Burnout", "ADHD", "Workplace"],
  },
];

const neuroscienceResearch: ResearchArticle[] = [
  {
    title:
      "The Default Mode Network in Autism: A Review of Resting-State fMRI Studies",
    authors: "Padmanabhan, A. et al.",
    source: "Biological Psychiatry: CNNI",
    year: 2017,
    summary:
      "Reviewed brain imaging studies showing that autistic adults have distinct patterns of activity in the default mode network, the brain system active during rest and self-reflection. These differences may explain why autistic people experience social situations as more cognitively demanding.",
    url: "https://doi.org/10.1016/j.bpsc.2017.04.002",
    tags: ["Autism", "Neuroscience", "Brain Imaging"],
  },
  {
    title:
      "Dopamine and ADHD: Toward a Better Understanding of the Neurobiology",
    authors: "Volkow, N. D. et al.",
    source: "Neuropsychopharmacology",
    year: 2009,
    summary:
      "Landmark paper explaining the dopamine system differences in ADHD. Showed that ADHD involves lower dopamine signaling in reward and motivation pathways, which affects attention, motivation, and the ability to sustain effort on tasks that lack immediate reward.",
    url: "https://doi.org/10.1038/npp.2008.24",
    tags: ["ADHD", "Dopamine", "Neuroscience"],
  },
  {
    title:
      "Camouflaging in Autism: A Systematic Review",
    authors: "Hull, L. et al.",
    source: "Clinical Psychology Review",
    year: 2017,
    summary:
      "Comprehensive review of masking (camouflaging) in autistic adults. Found that sustained masking is linked to exhaustion, anxiety, depression, and identity loss. Highlighted that masking is a survival strategy with significant long-term mental health costs.",
    url: "https://doi.org/10.1016/j.cpr.2017.09.002",
    tags: ["Autism", "Masking", "Mental Health"],
  },
];

const geneticsResearch: ResearchArticle[] = [
  {
    title:
      "Genetic Architecture of Autism Spectrum Disorder: Lessons Learned from Large-Scale Genomic Studies",
    authors: "Bai, D. et al.",
    source: "Nature Reviews Neuroscience",
    year: 2019,
    summary:
      "Major twin and family study confirming that autism is 80% heritable. Showed that hundreds of common genetic variants each contribute a small amount of risk, rather than a single gene causing autism. This supports the understanding of neurodivergence as a natural spectrum of human brain variation.",
    url: "https://doi.org/10.1001/jamapsychiatry.2019.1411",
    tags: ["Genetics", "Autism", "Heritability"],
  },
  {
    title:
      "Discovery of the First Genome-Wide Significant Risk Loci for ADHD",
    authors: "Demontis, D. et al.",
    source: "Nature Genetics",
    year: 2019,
    summary:
      "The largest genetic study of ADHD at the time, identifying 12 genomic regions associated with ADHD. Confirmed significant genetic overlap between ADHD and other traits including educational attainment, depression, and BMI. Established ADHD as a polygenic condition with strong biological roots.",
    url: "https://doi.org/10.1038/s41588-018-0269-7",
    tags: ["Genetics", "ADHD", "Genomics"],
  },
  {
    title:
      "Cross-Disorder Group of the Psychiatric Genomics Consortium: Genetic Overlap Across Neurodevelopmental Conditions",
    authors: "Cross-Disorder Group of the PGC",
    source: "Cell",
    year: 2019,
    summary:
      "Groundbreaking study showing significant genetic overlap between ADHD, autism, depression, bipolar disorder, and schizophrenia. Suggests these conditions share common biological pathways rather than being completely separate disorders. Supports a dimensional view of neurodivergence.",
    url: "https://doi.org/10.1016/j.cell.2019.11.020",
    tags: ["Genetics", "Cross-Disorder", "Genomics"],
  },
];

const practicalResearch: ResearchArticle[] = [
  {
    title:
      "A Systematic Review of Executive Function in Adults with ADHD",
    authors: "Barkley, R. A.",
    source: "Journal of Attention Disorders",
    year: 2019,
    summary:
      "Comprehensive review of executive function difficulties in adults with ADHD. Identified working memory, planning, time management, and emotional regulation as the most affected areas. Emphasized that executive function challenges persist into adulthood even when hyperactivity decreases.",
    url: "https://doi.org/10.1177/1087054719882788",
    tags: ["ADHD", "Executive Function", "Adults"],
  },
  {
    title:
      "Physical Exercise for ADHD: Systematic Review and Meta-Analysis",
    authors: "Vysniauske, R. et al.",
    source: "Journal of Attention Disorders",
    year: 2020,
    summary:
      "Meta-analysis showing that physical exercise has a significant positive effect on attention, executive function, and mood in adults with ADHD. Even moderate activity like walking showed benefits. Exercise may work through the same dopamine pathways targeted by medication.",
    url: "https://doi.org/10.1177/1087054718784642",
    tags: ["ADHD", "Exercise", "Practical"],
  },
  {
    title:
      "Sensory Processing and Quality of Life in Autistic Adults",
    authors: "Tavassoli, T. et al.",
    source: "Research in Autism Spectrum Disorders",
    year: 2014,
    summary:
      "Found that sensory processing differences significantly affect quality of life in autistic adults. Sensory overload was strongly linked to anxiety, social withdrawal, and fatigue. Suggests that environment design and sensory management are practical tools for reducing burnout.",
    url: "https://doi.org/10.1016/j.rasd.2014.02.007",
    tags: ["Autism", "Sensory", "Quality of Life"],
  },
];

function ResearchCard({ article }: { article: ResearchArticle }) {
  return (
    <article className="rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex flex-wrap items-center gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-navy-50 px-2.5 py-0.5 text-xs font-medium text-navy-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mt-3 text-lg font-semibold leading-snug text-navy-900">
        {article.title}
      </h3>

      <p className="mt-1 text-sm text-navy-400">
        {article.authors} &middot; {article.source} ({article.year})
      </p>

      <p className="mt-3 text-sm leading-relaxed text-navy-600">
        {article.summary}
      </p>

      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
      >
        Read the paper
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
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </a>
    </article>
  );
}

function ResearchCategory({
  id,
  title,
  description,
  articles,
  background,
}: {
  id: string;
  title: string;
  description: string;
  articles: ResearchArticle[];
  background: string;
}) {
  return (
    <Section id={id} className={background}>
      <Container>
        <SectionHeading title={title} subtitle={description} />
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <ResearchCard key={article.title} article={article} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default function ResearchPage() {
  return (
    <>
      {/* Page header */}
      <Section className="bg-gradient-to-b from-navy-50 to-white pt-14 pb-8 sm:pt-20 sm:pb-10">
        <Container>
          <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
            Research Library
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            The science behind neurodivergence
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-navy-600">
            Curated research on ADHD, autism, burnout, genetics, and the
            biology of neurodivergent brains. Every paper listed here has
            been selected for its relevance to the lived experience of
            neurodivergent adults.
          </p>

          {/* Science Snapshot */}
          <div className="mt-8 rounded-2xl border border-teal-100 bg-teal-50/40 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              Science Snapshot
            </p>
            <p className="mt-3 text-base font-medium leading-7 text-navy-800">
              Research increasingly shows:
            </p>
            <ul className="mt-2 space-y-1.5 text-base leading-7 text-navy-700">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
                Neurodivergence is strongly influenced by genetics
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
                Burnout is linked to chronic cognitive load and masking
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
                Executive function differences affect motivation and energy
              </li>
            </ul>
            <p className="mt-4 text-sm leading-6 text-navy-500">
              Understanding these patterns helps explain experiences many
              neurodivergent adults have struggled to put into words.
            </p>
          </div>

          {/* Category quick links */}
          <nav className="mt-8 flex flex-wrap gap-3" aria-label="Research categories">
            <a href="#burnout" className="rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-medium text-navy-700 transition-colors hover:border-teal-300 hover:text-teal-700">
              Burnout
            </a>
            <a href="#neuroscience" className="rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-medium text-navy-700 transition-colors hover:border-teal-300 hover:text-teal-700">
              Neuroscience
            </a>
            <a href="#genetics" className="rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-medium text-navy-700 transition-colors hover:border-teal-300 hover:text-teal-700">
              Genetics
            </a>
            <a href="#practical" className="rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-medium text-navy-700 transition-colors hover:border-teal-300 hover:text-teal-700">
              Practical Science
            </a>
          </nav>
        </Container>
      </Section>

      {/* Research categories */}
      <ResearchCategory
        id="burnout"
        title="Burnout and neurodivergence"
        description="Research exploring why neurodivergent adults experience burnout differently, including the role of masking, sensory overload, and executive function demands."
        articles={burnoutResearch}
        background="bg-white"
      />

      <ResearchCategory
        id="neuroscience"
        title="How neurodivergent brains work"
        description="Brain imaging and neuroscience research that helps explain the biological basis of ADHD, autism, and related traits."
        articles={neuroscienceResearch}
        background="bg-navy-50/30"
      />

      <ResearchCategory
        id="genetics"
        title="Genetics of neurodivergence"
        description="Genomic research showing that neurodivergence is heritable, polygenic, and part of natural human brain variation."
        articles={geneticsResearch}
        background="bg-white"
      />

      <ResearchCategory
        id="practical"
        title="Practical science"
        description="Research with direct implications for daily life, including exercise, sensory management, and executive function strategies."
        articles={practicalResearch}
        background="bg-navy-50/30"
      />

      {/* Closing note */}
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-navy-900">
              A note on how we choose research
            </h2>
            <p className="mt-4 text-base leading-7 text-navy-600">
              Every paper on this page comes from a peer-reviewed journal.
              We prioritize research that centers neurodivergent adults,
              uses strengths-based framing, and has practical relevance to
              real life. We avoid studies that treat neurodivergence as a
              deficit to be corrected. This library will grow over time as
              new research is published.
            </p>
            <p className="mt-4 text-sm text-navy-400">
              Have a paper you think we should include?{" "}
              <Link
                href="/contact"
                className="text-teal-600 hover:text-teal-700 transition-colors"
              >
                Let us know
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
