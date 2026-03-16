export interface Article {
  slug: string;
  title: string;
  summary: string;
  category: CategoryKey;
  tags: string[];
  readingTime: string;
  author: string;
  publishedAt: string;
  featured?: boolean;
  starterGuide?: boolean;
}

export const categories = {
  burnout: {
    label: "Neurodivergent Burnout",
    description:
      "Why burnout hits neurodivergent adults differently, and what recovery actually looks like.",
    icon: "🔥",
  },
  "brain-science": {
    label: "Understanding Your Brain",
    description:
      "How ADHD, autism, and executive function shape the way you think, focus, and feel.",
    icon: "🧠",
  },
  adhd: {
    label: "ADHD",
    description:
      "Living with ADHD as an adult: focus, motivation, emotional regulation, and practical strategies.",
    icon: "⚡",
  },
  autism: {
    label: "Autism",
    description:
      "Autistic experience in adulthood: masking, sensory processing, social energy, and identity.",
    icon: "🌀",
  },
  genetics: {
    label: "Genetics & Biology",
    description:
      "The biological foundations of neurodivergence, explained in plain language.",
    icon: "🧬",
  },
  practical: {
    label: "Practical Systems",
    description:
      "Tools, strategies, and approaches that actually work for neurodivergent brains.",
    icon: "🛠️",
  },
  "lived-experience": {
    label: "Lived Experience",
    description:
      "Real stories and reflections from neurodivergent adults navigating work, relationships, and identity.",
    icon: "💬",
  },
} as const;

export type CategoryKey = keyof typeof categories;

export const articles: Article[] = [
  // --- Burnout ---
  {
    slug: "why-burnout-hits-neurodivergent-adults-differently",
    title: "Why burnout hits neurodivergent adults differently",
    summary:
      "Burnout in neurodivergent adults is not the same as ordinary stress. It comes from years of masking, navigating systems designed for neurotypical brains, and running on cognitive overdrive.",
    category: "burnout",
    tags: ["Burnout", "ADHD", "Autism", "Neuroscience"],
    readingTime: "6 min read",
    author: "David Wetherelt",
    publishedAt: "2026-03-15",
    featured: true,
    starterGuide: true,
  },
  {
    slug: "what-recovery-actually-looks-like",
    title: "What recovery actually looks like for neurodivergent burnout",
    summary:
      "Recovering from neurodivergent burnout is not about resting harder. It requires reducing cognitive load, accepting variable capacity, and rebuilding a life that fits your brain.",
    category: "burnout",
    tags: ["Burnout", "Recovery", "ADHD", "Autism"],
    readingTime: "7 min read",
    author: "David Wetherelt",
    publishedAt: "2026-03-15",
    starterGuide: true,
  },

  // --- Brain Science ---
  {
    slug: "masking-the-hidden-driver-of-burnout",
    title: "Masking: the hidden driver of neurodivergent burnout",
    summary:
      "Masking is the act of suppressing neurodivergent traits to fit neurotypical expectations. It is exhausting, often unconscious, and one of the primary causes of burnout.",
    category: "brain-science",
    tags: ["Masking", "Burnout", "Autism", "Identity"],
    readingTime: "7 min read",
    author: "David Wetherelt",
    publishedAt: "2026-03-15",
  },
  {
    slug: "executive-function-the-hidden-operating-system",
    title: "Executive function: the hidden operating system of your brain",
    summary:
      "Executive function controls planning, focus, task-switching, and impulse control. When it works differently, everything from getting dressed to meeting deadlines becomes harder.",
    category: "brain-science",
    tags: ["Executive Function", "ADHD", "Autism", "Neuroscience"],
    readingTime: "6 min read",
    author: "David Wetherelt",
    publishedAt: "2026-03-15",
  },

  // --- ADHD ---
  {
    slug: "the-energy-problem",
    title:
      "The energy problem: why traditional productivity advice fails ND brains",
    summary:
      "Productivity systems assume a neurotypical brain. For neurodivergent adults, willpower, time management, and habit stacking often backfire.",
    category: "adhd",
    tags: ["ADHD", "Executive Function", "Productivity", "Energy"],
    readingTime: "7 min read",
    author: "David Wetherelt",
    publishedAt: "2026-03-15",
    starterGuide: true,
  },
  {
    slug: "adhd-emotional-dysregulation",
    title: "The emotional side of ADHD nobody talks about",
    summary:
      "ADHD is not just about focus. Emotional dysregulation, rejection sensitivity, and intensity are core features that affect relationships, work, and self-image.",
    category: "adhd",
    tags: ["ADHD", "Emotions", "RSD", "Relationships"],
    readingTime: "6 min read",
    author: "David Wetherelt",
    publishedAt: "2026-03-15",
  },

  // --- Autism ---
  {
    slug: "sensory-processing-and-daily-life",
    title: "Sensory processing: why everyday environments are exhausting",
    summary:
      "For autistic adults, sensory input is not background noise. It is a constant cognitive demand that drains energy, triggers shutdowns, and shapes every decision.",
    category: "autism",
    tags: ["Autism", "Sensory Processing", "Burnout", "Environment"],
    readingTime: "6 min read",
    author: "David Wetherelt",
    publishedAt: "2026-03-15",
    starterGuide: true,
  },
  {
    slug: "late-diagnosis-what-now",
    title: "Diagnosed late: the grief, relief, and identity rebuild",
    summary:
      "Receiving an autism or ADHD diagnosis in adulthood brings a complex mix of emotions. Understanding the journey from diagnosis to self-acceptance.",
    category: "autism",
    tags: ["Autism", "ADHD", "Diagnosis", "Identity"],
    readingTime: "7 min read",
    author: "David Wetherelt",
    publishedAt: "2026-03-15",
  },

  {
    slug: "why-bright-light-feels-exhausting",
    title:
      "Why bright light feels exhausting for ADHD and autistic brains",
    summary:
      "Fluorescent offices, screen glare, and harsh lighting are not just annoying for neurodivergent adults. They are a measurable source of cognitive drain that compounds fatigue and accelerates burnout.",
    category: "brain-science",
    tags: ["Sensory Processing", "ADHD", "Autism", "Light Sensitivity", "Environment"],
    readingTime: "8 min read",
    author: "David Wetherelt",
    publishedAt: "2026-03-15",
  },

  // --- Genetics ---
  {
    slug: "understanding-adhd-and-autism-through-biology",
    title: "Understanding ADHD and autism through the lens of biology",
    summary:
      "ADHD and autism are not personality flaws or parenting outcomes. They are neurobiological differences with strong genetic foundations.",
    category: "genetics",
    tags: ["ADHD", "Autism", "Genetics", "Neuroscience"],
    readingTime: "7 min read",
    author: "David Wetherelt",
    publishedAt: "2026-03-15",
  },
  {
    slug: "polygenic-scores-explained",
    title: "Polygenic scores: what your DNA can (and cannot) tell you",
    summary:
      "Polygenic risk scores aggregate thousands of genetic variants into a single number. Here is what they mean for neurodivergence and why they are not a diagnosis.",
    category: "genetics",
    tags: ["Genetics", "Polygenic Scores", "ADHD", "Autism"],
    readingTime: "6 min read",
    author: "David Wetherelt",
    publishedAt: "2026-03-15",
  },

  // --- Practical ---
  {
    slug: "building-systems-that-actually-work",
    title: "Building systems that actually work for your brain",
    summary:
      "The best productivity system is the one you will actually use. How to design external scaffolding that works with executive function differences, not against them.",
    category: "practical",
    tags: ["Productivity", "Executive Function", "ADHD", "Systems"],
    readingTime: "6 min read",
    author: "David Wetherelt",
    publishedAt: "2026-03-15",
  },
  {
    slug: "managing-sensory-environment",
    title: "Managing your sensory environment: a practical guide",
    summary:
      "Small environmental changes can dramatically reduce cognitive load. A practical guide to lighting, sound, temperature, and workspace design for neurodivergent adults.",
    category: "practical",
    tags: ["Sensory Processing", "Environment", "Practical", "Energy"],
    readingTime: "5 min read",
    author: "David Wetherelt",
    publishedAt: "2026-03-15",
  },

  // --- Lived Experience ---
  {
    slug: "the-cost-of-passing",
    title: "The cost of passing: what it means to look 'normal'",
    summary:
      "Many neurodivergent adults are invisible because they have learned to pass. The cost of that invisibility is measured in exhaustion, isolation, and lost identity.",
    category: "lived-experience",
    tags: ["Masking", "Identity", "Burnout", "Lived Experience"],
    readingTime: "6 min read",
    author: "David Wetherelt",
    publishedAt: "2026-03-15",
  },
  {
    slug: "relationships-when-your-brain-works-differently",
    title: "Relationships when your brain works differently",
    summary:
      "Neurodivergence affects how you communicate, process emotions, and manage energy in relationships. Understanding these differences changes everything.",
    category: "lived-experience",
    tags: ["Relationships", "ADHD", "Autism", "Communication"],
    readingTime: "7 min read",
    author: "David Wetherelt",
    publishedAt: "2026-03-15",
  },
];

// --- Helper functions ---

export function getArticlesByCategory(category: CategoryKey): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  articles.forEach((a) => a.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find((a) => a.featured);
}

export function getStarterGuides(): Article[] {
  return articles.filter((a) => a.starterGuide);
}
