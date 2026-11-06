import { copyFor, siteFlags } from "@/lib/flags";
import { siteEmails } from "@/lib/site";

const serviceNavLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
];

export const navigation = {
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    ...(siteFlags.showServices ? serviceNavLinks : []),
    { label: "Products", href: "/products" },
    { label: "Build log", href: "/blog" },
  ],
  cta: copyFor("Get in touch", "Book a consultation"),
};

export const hero = {
  eyebrow: copyFor(
    "AI products, engineered end to end",
    "AI systems & products, engineered end to end",
  ),
  title: ["Ideas, Engineered", "Into Intelligence"],
  subtitle: [
    copyFor(
      "We build AI products that actually ship,",
      "We build AI systems and products that actually ship,",
    ),
    "not prototypes that stall at the pitch deck.",
    "Engineering-first. AI-native. Built to run in production.",
  ],
  points: [
    { label: "AI & ML", detail: "Models that ship" },
    { label: "Full-stack", detail: "UI to infrastructure" },
    { label: "Automation", detail: "Agents in production" },
  ],
  cta: copyFor("Get in touch", "Book a consultation"),
};

export const trustedCompanies = {
  title: "Powered by the tools modern teams already trust",
};

export const howWeBuild = {
  title: "From Idea to Infrastructure",
  subtitle:
    "One discovery, three delivery paths — AI & ML, full-stack, and automation — converging into production-ready systems.",
  cta: "See what we do & how we build it →",
  ctaHref: "/services",
  start: {
    title: "Discovery & Planning",
    description: "Goals, constraints, and the path to ship.",
    icon: "planning" as const,
  },
  branches: [
    {
      id: "ai-ml",
      title: "AI & ML Engineering",
      description: "Classical ML and GenAI, built to ship.",
      icon: "ai" as const,
      subPaths: [
        {
          id: "ml",
          title: "ML",
          icon: "ml" as const,
          steps: [
            { title: "Data Processing", icon: "database" as const },
            { title: "Model Selection", icon: "brain" as const },
            { title: "Training & Tuning", icon: "train" as const },
            { title: "Evaluation", icon: "evaluate" as const },
            { title: "Model Serving", icon: "serve" as const },
          ],
        },
        {
          id: "genai",
          title: "GenAI",
          icon: "genai" as const,
          steps: [
            { title: "Prompt Design", icon: "prompt" as const },
            { title: "Embeddings", icon: "embed" as const },
            { title: "RAG", icon: "network" as const },
            {
              title: "Model & Tool Orchestration",
              icon: "orchestrate" as const,
            },
            { title: "Evals & Safety", icon: "sparkles" as const },
          ],
        },
      ],
      merge: {
        title: "AI Systems Ready",
        icon: "ready" as const,
      },
    },
    {
      id: "stack",
      title: "Full-Stack Development",
      description: "UI to APIs to cloud.",
      icon: "layers" as const,
      steps: [
        { title: "Frontend", icon: "monitor" as const },
        { title: "API", icon: "server" as const },
        { title: "Data Layer", icon: "database" as const },
        { title: "CI/CD", icon: "cicd" as const },
        { title: "Deploy", icon: "cloud" as const },
      ],
    },
    {
      id: "automation",
      title: "Automation & Agentic Systems",
      description: "Agents and workflows, built to run.",
      icon: "automation" as const,
      steps: [
        { title: "Process Mapping", icon: "map" as const },
        { title: "Integrations", icon: "plug" as const },
        { title: "Orchestration", icon: "bot" as const },
        { title: "Safeguards", icon: "shield" as const },
        { title: "Test & Launch", icon: "flask" as const },
      ],
    },
  ],
  end: {
    title: "Production-ready",
    description: "Shipped, monitored, and built for the real world.",
    icon: "logo" as const,
  },
  nodes: [
    {
      title: "Discovery & Planning",
      description: "Scope, architecture, and a clear path to ship.",
      icon: "planning" as const,
    },
    {
      title: "AI & ML Engineering",
      description: "ML systems and GenAI — retrieval, models, and evals.",
      icon: "ai" as const,
    },
    {
      title: "Full-Stack Development",
      description: "Apps from UI to APIs, data, and cloud.",
      icon: "layers" as const,
    },
    {
      title: "Automation & Agentic Systems",
      description: "Agents and workflows that run without busywork.",
      icon: "automation" as const,
    },
    {
      title: "Production-ready systems",
      description: "Shipped, monitored, and built for the real world.",
      icon: "logo" as const,
      final: true,
    },
  ],
};

export const homeProducts = {
  eyebrow: "Our products",
  title: "Built by us, used by you",
  subtitle: copyFor(
    "We ship our own products, put them in front of real users, and keep them running.",
    "We do not only build for clients. We ship our own products, put them in front of real users, and keep them running.",
  ),
  body: copyFor(
    "Products force the hard parts: taste, reliability, support, and the discipline to keep shipping after launch.",
    "Products force the hard parts: taste, reliability, support, and the discipline to keep shipping after launch. That pressure is intentional. It keeps our client work honest.",
  ),
  aside:
    "If you want the deep dive into features and flows, that lives on each product page. Here is simply where we stand by what we run ourselves.",
  viewAllLabel: "See how they work",
  viewAllHref: "/products",
  items: [
    {
      id: "skedvio",
      name: "Skedvio",
      meta: "Live · skedvio.com",
      line: "How we book our own calls.",
      href: "/products/skedvio",
    },
    {
      id: "elim-mcp",
      name: "elim-mcp",
      meta: "Open source · npm",
      line: "How our agents keep context.",
      href: "/products/elim-mcp",
    },
    {
      id: "fylmkit",
      name: "Fylmkit",
      badge: "Coming soon",
      meta: "fylmkit.com",
      line: "AI video that stays on brand.",
      href: "/products/fylmkit",
    },
  ],
};

export const homeWork = {
  eyebrow: "Selected work",
  title: "Work that's live",
  subtitle:
    "Client builds that made it past the deck and into production. Real users, real systems, code we still stand behind.",
  body: "We take ownership from the first architecture call through launch. The case studies on the work page cover the problem, the stack, and what shipped.",
  aside:
    "Here is a look at the interfaces. Details, outcomes, and stack notes live on the work page.",
  viewAllLabel: "View all work",
  viewAllHref: "/work",
  slides: [
    {
      id: "exactmails",
      name: "ExactMails",
      image: "/assets/work/exactmails-dashboard.png",
      imageAlt: "ExactMails campaign and prospecting dashboard",
      href: "/work#exactmails",
    },
    {
      id: "leaseform",
      name: "LeaseForm",
      image: "/assets/work/leaseform-dashboard.png",
      imageAlt: "LeaseForm lease wizard and landlord dashboard",
      href: "/work#leaseform",
    },
    {
      id: "profexohvac",
      name: "ProfexoHvac",
      image: "/assets/work/profexohvac-dashboard.png",
      imageAlt: "ProfexoHvac engineering workflow dashboard",
      href: "/work#profexohvac",
    },
    {
      id: "pressedpod",
      name: "PressedPod",
      image: "/assets/work/pressedpod-app.png",
      imageAlt: "PressedPod product interface",
      href: "/work#pressedpod",
    },
  ],
};

export const productFeature = {
  title: "Scheduling, without the back-and-forth",
  subtitle: copyFor(
    "Skedvio is our own product, built for real calendars and real users. See it in action.",
    "Skedvio is our own product, built the way we build for clients. See it in action.",
  ),
  badge: "Live product",
  cta: "Try Skedvio free",
  ctaHref: "https://skedvio.com",
  defaultExpanded: 2,
  rows: [
    {
      featureTitle: "Google Calendar Sync",
      featureDescription:
        "Connect Google Calendar and keep events fresh with incremental sync and webhooks so availability always reflects reality.",
      preview: {
        kind: "sync" as const,
        accounts: [
          {
            name: "work@13stack.com",
            status: "Synced · 12s ago",
            connected: true,
          },
          {
            name: "personal@gmail.com",
            status: "Synced · 41s ago",
            connected: true,
          },
          { name: "ops@13stack.com", status: "Paused", connected: false },
        ],
        pipeline: ["Google Calendar", "Webhook", "Skedvio"],
        latency: "184 ms",
        eventsUpdated: "3 events this minute",
      },
    },
    {
      featureTitle: "Availability Engine",
      featureDescription:
        "Set your rules once. Skedvio computes open windows across every connected calendar in real time, not a stale fixed grid.",
      preview: {
        kind: "availability" as const,
        dayLabel: "Wednesday",
        openHours: "5h open",
        rules: ["No Fridays after 3", "15 min buffer", "Focus 10–12 locked"],
        blocks: [
          {
            label: "Focus block",
            range: "10:00 – 12:00",
            tone: "locked" as const,
          },
          {
            label: "Open for booking",
            range: "1:00 – 2:30",
            tone: "open" as const,
          },
          {
            label: "Internal sync",
            range: "3:00 – 3:45",
            tone: "busy" as const,
          },
          {
            label: "Open for booking",
            range: "4:00 – 5:00",
            tone: "open" as const,
          },
        ],
      },
    },
    {
      featureTitle: "Guest-Friendly Booking",
      featureDescription:
        "Share one booking link. Guests pick a slot in their own timezone, reserve it, and get a calendar invite. No account required, no email tennis.",
      preview: {
        kind: "booking" as const,
        link: "skedvio.com/b/alex",
        guest: "Priya · IST",
        hostZone: "Your time · EST",
        slot: "Thu · 2:00 PM",
        guestSlot: "Thu · 12:30 AM",
        status: "Invite queued",
      },
    },
    {
      featureTitle: "AI Daily Brief",
      featureDescription:
        "Start the day with a concise calendar summary and overload warnings when the week is getting heavy, before conflicts pile up.",
      preview: {
        kind: "brief" as const,
        generatedAt: "Generated 6:12 AM",
        greeting: "Thursday looks dense.",
        warning:
          "3 meetings stacked before noon. Soft cap exceeded on Thursday.",
        bullets: [
          "Move the 1:1 with Sam to Friday afternoon",
          "Protect 90 minutes of focus after lunch",
          "Travel buffer missing before the 4:15 review",
        ],
        scoreLabel: "Load",
        scoreValue: "High",
      },
    },
  ],
};

export const homeAbout = {
  eyebrow: "Why us",
  title: "Built by the people who ship it",
  subtitle:
    "Founder-led engineering. Direct ownership. Systems meant to run in production, not look good in a deck.",
  body: copyFor(
    "The same engineers who design the product write the code, catch the edge cases, and keep shipping after launch.",
    "The same engineers who scope the work write the code, catch the edge cases, and stay on it after launch.",
  ),
  aside: "Leadership, practices, and the full story live on the about page.",
  cta: copyFor("About 13Stack", "Why teams choose 13Stack"),
  ctaHref: "/about",
  slides: [
    {
      id: "ownership",
      label: "01",
      title: copyFor("Engineers own the product", "Engineers own the work"),
      line: copyFor(
        "The people who design it are the people who build it. No handoff theater.",
        "The people who scope it are the people who build it. No handoff theater.",
      ),
    },
    {
      id: "direct",
      label: "02",
      title: "Talk to the builders",
      line: copyFor(
        "You hear from the team writing the product. No account layer in the middle.",
        "You work with the team writing the system. No account layer in the middle.",
      ),
    },
    {
      id: "production",
      label: "03",
      title: "Production is the bar",
      line: "We ship software that runs. Launch is day one of ownership, not the exit.",
    },
    {
      id: "ai-native",
      label: "04",
      title: "AI native by default",
      line: "RAG, agents, and LLM work are in the build path, not bolted on at the end.",
    },
  ],
};

export type BlogPostKind = "news" | "article";

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "code"; language: string; filename?: string; code: string }
  | { type: "note"; title: string; text: string }
  | { type: "list"; items: string[] };

type BlogSection = {
  id: string;
  title: string;
  blocks: BlogBlock[];
};

type BlogPostShared = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  author: string;
  readingTime: string;
};

type BlogNewsLink = {
  label: string;
  href: string;
  external?: boolean;
};

type BlogNewsAnnouncement = {
  badge: string;
  title: string;
  text: string;
};

export type BlogNewsPost = BlogPostShared & {
  kind: "news";
  announcement: BlogNewsAnnouncement;
  body: string[];
  links: BlogNewsLink[];
};

export type BlogArticlePost = BlogPostShared & {
  kind: "article";
  brief: string[];
  sections: BlogSection[];
};

type BlogPostVisibility = {
  requiresServices?: boolean;
};

export type BlogPost = (BlogNewsPost | BlogArticlePost) & BlogPostVisibility;

export function getVisibleBlogPosts() {
  return blogPosts.filter(
    (post) => siteFlags.showServices || !post.requiresServices,
  );
}

const blogPosts: BlogPost[] = [
  {
    slug: "skedvio-live-booking",
    kind: "news",
    title: "Skedvio is live for guest booking",
    excerpt:
      "Public guest booking is open. Early users get founding pricing while we keep shipping calendar sync and availability in the open.",
    date: "2026-07-22",
    dateLabel: "Jul 22, 2026",
    author: "13Stack",
    readingTime: "2 min",
    announcement: {
      badge: "Early access",
      title: "Founding users: 40% off the first 3 months",
      text: "Public beta is live. Claim founding pricing when you create your workspace, then share a booking link that respects real calendars and timezones.",
    },
    body: [
      "Skedvio started as the booking flow we wanted for our own meetings. Calendar ping pong was eating time we would rather spend shipping.",
      "Guest booking is open now. Share a link, let people pick a slot in their timezone, and keep availability tied to Google Calendar instead of a stale fixed grid.",
      "We will keep iterating in public. If something feels off, tell us. The product walkthrough covers sync, availability rules, and the booking path end to end.",
    ],
    links: [
      { label: "Open Skedvio", href: "https://skedvio.com", external: true },
      { label: "Product walkthrough", href: "/products/skedvio" },
    ],
  },
  {
    slug: "elim-mcp-on-npm",
    kind: "news",
    title: "elim-mcp is on npm",
    excerpt:
      "Our agent memory MCP server is published. Install it free, wire it into your stack, and stop relearning the same dead ends every session.",
    date: "2026-07-08",
    dateLabel: "Jul 8, 2026",
    author: "13Stack",
    readingTime: "2 min",
    announcement: {
      badge: "Package live",
      title: "Free on npm · beta open for early adopters",
      text: "Install elim-mcp today. Early adopters get priority on the roadmap for session memory, branch context, and tool handoff.",
    },
    body: [
      "Coding agents are fast until they forget what they already ruled out. We kept hitting the same investigations on a new branch or a new session.",
      "elim-mcp is the memory layer we built for that. It remembers what was tried, what failed, and what is still open so the next pass can skip the noise.",
      "The package is on npm now. Grab it, drop it into your agent setup, and use the products page for the install path and a before or after session trace.",
    ],
    links: [
      {
        label: "View on npm",
        href: "https://www.npmjs.com/package/elim-mcp",
        external: true,
      },
      { label: "Install walkthrough", href: "/products/elim-mcp" },
    ],
  },
  {
    slug: "why-we-ship-our-own-products",
    kind: "article",
    requiresServices: true,
    title: "Why we ship our own products",
    excerpt:
      "Client work is half the story. Building and running our own tools keeps the delivery bar honest.",
    date: "2026-06-18",
    dateLabel: "Jun 18, 2026",
    author: "13Stack",
    readingTime: "8 min",
    brief: [
      "Products we use ourselves expose taste and reliability gaps decks never catch.",
      "Skedvio and elim-mcp are production systems, not portfolio props.",
      "Client scoping inherits the same ship and own standard.",
    ],
    sections: [
      {
        id: "pressure",
        title: "The pressure that changes quality",
        blocks: [
          {
            type: "paragraph",
            text: "Agencies can hide behind decks. Product teams cannot. Once real users are on a tool you built, taste, reliability, and support stop being optional.",
          },
          {
            type: "paragraph",
            text: "That pressure is the point. Shipping our own products forces decisions under the same constraints our clients face: incomplete specs, messy calendars, agents that forget context, and users who do not care how clever the architecture diagram looked.",
          },
          {
            type: "note",
            title: "What we mean by product",
            text: "Not a landing page and a waitlist. A system someone can open tomorrow, complete a job, and come back to without us babysitting every step.",
          },
        ],
      },
      {
        id: "what-we-run",
        title: "What we run in public",
        blocks: [
          {
            type: "paragraph",
            text: "Skedvio is the scheduling product we use for our own consults. elim-mcp is the memory layer we use so coding agents stop reinvestigating the same dead ends. Both live outside the studio slide deck.",
          },
          {
            type: "list",
            items: [
              "Skedvio: guest booking, calendar sync, availability that matches reality",
              "elim-mcp: session memory for attempts, failures, and open threads",
              "Both: owned by the same engineers who scoped and shipped them",
            ],
          },
          {
            type: "paragraph",
            text: "When something breaks at 9am, we feel it the same way a client would. That feedback loop is faster than any retrospective we could schedule after a handoff.",
          },
        ],
      },
      {
        id: "delivery-bar",
        title: "How it changes client delivery",
        blocks: [
          {
            type: "paragraph",
            text: "When we scope a client build, we bring the same instincts: ship something that runs, own it after launch, and cut anything that only looks good in a slide.",
          },
          {
            type: "code",
            language: "ts",
            filename: "delivery-bar.ts",
            code: `type DeliveryBar = {
  ships: "working software";
  owns: "through launch and after";
  cuts: "deck-only features";
};

const bar: DeliveryBar = {
  ships: "working software",
  owns: "through launch and after",
  cuts: "deck-only features",
};`,
          },
          {
            type: "paragraph",
            text: "The bar is simple on purpose. If a feature cannot survive contact with a real user or a real calendar, it does not belong in the first cut.",
          },
        ],
      },
      {
        id: "takeaway",
        title: "What to take from this",
        blocks: [
          {
            type: "paragraph",
            text: "Client work is still half the story. The other half is staying sharp by building and operating our own tools. That is how the delivery bar stays honest when the next engagement starts.",
          },
        ],
      },
    ],
  },
  {
    slug: "production-rag-without-the-theater",
    kind: "article",
    title: "Production RAG without the theater",
    excerpt:
      "Retrieval that holds up under real traffic needs evals, guardrails, and boring operational discipline.",
    date: "2026-05-29",
    dateLabel: "May 29, 2026",
    author: "13Stack",
    readingTime: "10 min",
    brief: [
      "Happy path demos are not a retrieval system.",
      "Treat chunking, evals, and guardrails as infrastructure.",
      "Operate for drift, latency, and stale citations from day one.",
    ],
    sections: [
      {
        id: "demo-gap",
        title: "Where demos stop",
        blocks: [
          {
            type: "paragraph",
            text: "Most RAG demos stop at a happy path query. Production starts when the corpus drifts, latency spikes, and someone asks why the model cited a stale doc.",
          },
          {
            type: "paragraph",
            text: "If your only proof is a notebook that returned a clean answer once, you do not have retrieval. You have a screenshot of retrieval.",
          },
          {
            type: "note",
            title: "The real question",
            text: "Can your team explain why an answer was retrieved, catch when quality slips, and ship a fix without rebuilding the whole stack?",
          },
        ],
      },
      {
        id: "chunking",
        title: "Chunking you can defend",
        blocks: [
          {
            type: "paragraph",
            text: "Chunking is not a one line default. It is a product decision: what unit of meaning should the model see, and what metadata has to travel with it so citations stay honest.",
          },
          {
            type: "code",
            language: "ts",
            filename: "chunk.ts",
            code: `type Chunk = {
  id: string;
  sourceId: string;
  text: string;
  updatedAt: string;
  section?: string;
};

function shouldReindex(chunk: Chunk, sourceUpdatedAt: string) {
  return chunk.updatedAt < sourceUpdatedAt;
}`,
          },
          {
            type: "paragraph",
            text: "Carry source identity and freshness with every chunk. When the upstream doc changes, you need a path to reindex without pretending the old embedding still represents reality.",
          },
        ],
      },
      {
        id: "evals",
        title: "Evals that catch regressions",
        blocks: [
          {
            type: "paragraph",
            text: "Eval sets are how you notice silent failure. A small, fixed set of queries with expected source ids beats vibes every time you change embeddings, prompts, or ranking.",
          },
          {
            type: "code",
            language: "ts",
            filename: "rag-eval.ts",
            code: `type EvalCase = {
  query: string;
  mustCite: string[];
  mustNotInvent: boolean;
};

const cases: EvalCase[] = [
  {
    query: "What is the refund window?",
    mustCite: ["policy/refunds.md"],
    mustNotInvent: true,
  },
];

async function score(run: (q: string) => Promise<{ cites: string[] }>) {
  let pass = 0;
  for (const c of cases) {
    const result = await run(c.query);
    const hit = c.mustCite.every((id) => result.cites.includes(id));
    if (hit) pass += 1;
  }
  return pass / cases.length;
}`,
          },
          {
            type: "list",
            items: [
              "Keep cases boring and specific to your corpus",
              "Fail closed when required sources are missing",
              "Run the set on every retrieval or prompt change",
            ],
          },
        ],
      },
      {
        id: "guardrails",
        title: "Guardrails around invention",
        blocks: [
          {
            type: "paragraph",
            text: "Models invent under pressure. Guardrails decide what happens when retrieval is thin: refuse, ask for clarification, or answer only inside cited spans.",
          },
          {
            type: "code",
            language: "ts",
            filename: "guard.ts",
            code: `type AnswerPolicy = {
  minCitations: number;
  allowUngrounded: false;
};

function canAnswer(cites: string[], policy: AnswerPolicy) {
  if (cites.length < policy.minCitations) return false;
  return policy.allowUngrounded === false;
}`,
          },
          {
            type: "paragraph",
            text: "A short refusal is better than a fluent wrong answer. Users trust systems that admit when the corpus does not support a claim.",
          },
        ],
      },
      {
        id: "operate",
        title: "Operate after ship",
        blocks: [
          {
            type: "paragraph",
            text: "The goal is not a clever prompt. It is a system your team can operate when the first version is already in users' hands: logs for latency, alerts for empty retrieval, and a cadence to refresh stale sources.",
          },
          {
            type: "note",
            title: "Boring wins",
            text: "Chunking you can defend, evals that catch regressions, and guardrails around invention. That is production RAG. The theater can stay in the demo reel.",
          },
        ],
      },
    ],
  },
  {
    slug: "leaseform-in-production",
    kind: "news",
    requiresServices: true,
    title: "LeaseForm is live for Nova Scotia landlords",
    excerpt:
      "Wizard drafting, PDF packages, and a landlord dashboard are in production. Early teams get onboarding support while we keep tightening the lease lifecycle.",
    date: "2026-04-14",
    dateLabel: "Apr 14, 2026",
    author: "13Stack",
    readingTime: "2 min",
    announcement: {
      badge: "In production",
      title: "Live on leaseform.co · early landlord onboarding open",
      text: "The full draft to signed path is running. Early landlord teams get hands on onboarding while we keep shipping the operational surfaces around leases.",
    },
    body: [
      "LeaseForm needed more than a form. Landlords in Nova Scotia needed AI assisted drafting, PDF packages, and a dashboard that kept property context in one place.",
      "We shipped the wizard, AcroForm generation, and the operational surfaces around it so leases move from draft to signed without a pile of disconnected tools.",
      "The product is live. Read the case study for stack and outcomes, or open LeaseForm if you want to see the landlord flow itself.",
    ],
    links: [
      {
        label: "Visit LeaseForm",
        href: "https://leaseform.co",
        external: true,
      },
      { label: "Read the case study", href: "/work#leaseform" },
    ],
  },
];

export const homeBlog = {
  eyebrow: "Build log",
  title: "From the build log",
  subtitle:
    "Product news, shipping notes, and longer reads from the work we do in public.",
  body: "Short updates when something goes live. Longer pieces when a lesson is worth writing down. This is where we share both.",
  aside:
    "Browse the full log for news and articles. New posts land here as we ship.",
  viewAllLabel: "Browse the build log",
  viewAllHref: "/blog",
  previewCount: 4,
};

export const blogPage = {
  eyebrow: "BUILD LOG",
  headingFrom: "News",
  headingTo: "Notes",
  subtitle:
    "Product announcements, shipping updates, and writing from the 13Stack team on AI systems that make it to production.",
  heroProducts: {
    label: "Written from the products",
    items: [
      {
        id: "skedvio",
        name: "Skedvio",
        status: "Live",
        line: "Scheduling intelligence",
        href: "/products/skedvio",
      },
      {
        id: "elim-mcp",
        name: "elim-mcp",
        status: "Open source",
        line: "Agent memory on npm",
        href: "/products/elim-mcp",
      },
      {
        id: "fylmkit",
        name: "Fylmkit",
        status: "Soon",
        line: "AI video on brand",
        href: "/products/fylmkit",
      },
    ],
  },
  filters: [
    { id: "all" as const, label: "All" },
    { id: "news" as const, label: "News" },
    { id: "article" as const, label: "Articles" },
  ],
  emptyTitle: "Nothing in this filter yet",
  emptyBody: "Try another category, or check back after the next ship.",
  backLabel: "Back to build log",
};

export const cta = {
  title: copyFor("Want to try what we ship?", "Ready to build something real?"),
  subtitle: copyFor(
    "Reach out about Skedvio, elim-mcp, Fylmkit, or what we are building next.",
    "Tell us what you're building. We'll help you find the fastest path from idea to shipped product.",
  ),
  cta: copyFor("Get in touch", "Book a consultation"),
};

export const servicesPage = {
  eyebrow: "SERVICES",
  subtitle:
    "From architecture to production deploy, we design, build, and own AI native systems end to end. One team, clear delivery paths, and software that ships.",
  heroCards: [
    {
      id: "ai-ml",
      eyebrow: "Path 01",
      title: "AI & ML",
      line: "Models, retrieval, evals, and guardrails built for live traffic.",
    },
    {
      id: "fullstack",
      eyebrow: "Path 02",
      title: "Full Stack",
      line: "UI, APIs, data, and cloud as one product build that can grow.",
    },
    {
      id: "automation",
      eyebrow: "Path 03",
      title: "Automation",
      line: "Agents and workflows that run, retry, and report on their own.",
    },
    {
      id: "ship",
      eyebrow: "Outcome",
      title: "Ship live",
      line: "Paths converge into production systems your team can own.",
    },
  ],
  overview: {
    eyebrow: "Capabilities",
    title: "What we build",
    subtitle:
      "Three focused paths covering AI and ML, full stack product builds, and agentic automation, each engineered to ship into production with clear ownership.",
    items: [
      {
        id: "ai-ml",
        label: "AI & ML Engineering",
        summary:
          "Production ML and GenAI: models, retrieval, evals, and guardrails that hold up under real traffic.",
        icon: "ai" as const,
      },
      {
        id: "fullstack",
        label: "Full Stack Development",
        summary:
          "Complete product builds across UI, APIs, data, and cloud, ready to grow with your users.",
        icon: "layers" as const,
      },
      {
        id: "automation",
        label: "Automation & Agentic Systems",
        summary:
          "Agents and workflows that run, retry, and report on their own so your team stops babysitting busywork.",
        icon: "automation" as const,
      },
    ],
  },
  tabs: {
    what: "What we do",
    how: "How we do it",
  },
  deepDives: [
    {
      id: "ai-ml",
      title: "AI & ML Engineering",
      description:
        "Classical ML and GenAI engineered for production. Data, models, retrieval, orchestration, and guardrails come together so intelligence ships reliable, not experimental.",
      steps: [
        {
          title: "Model",
          body: "Streaming generation with tool use, retries, and structured outputs, plus latency budgets and fallbacks built into every request path so model choice stays flexible as your product requirements evolve.",
        },
        {
          title: "RAG",
          body: "Embeddings and retrieval over your own verified source of truth, with chunking, ranking, and filters tuned for answer quality so responses stay grounded and auditable back to source documents.",
        },
        {
          title: "Output",
          body: "Eval gates and tracing before anything reaches production users, with safety, cost, and latency controls dialed for live traffic and regression checks that keep answer quality steady as you ship.",
        },
      ],
      deliverables: [
        "LLM integrations with tool use, streaming, and structured outputs ready for scale",
        "RAG pipelines grounded on your data with measurable retrieval quality",
        "Evals and tracing in place before regressions ever reach users",
        "Cost, latency, and safety controls tuned for live production traffic",
      ],
      diagram: "rag" as const,
    },
    {
      id: "fullstack",
      title: "Full Stack Development",
      description:
        "Product builds from UI to APIs, data, and cloud. Engineered to scale cleanly without turning into a science project.",
      steps: [
        {
          title: "Frontend",
          body: "Product interfaces with clear UX flows and fast load paths, built as accessible layouts that hold up across phones and desktops with client and server rendering balanced for the product experience.",
        },
        {
          title: "API",
          body: "Typed contracts with auth, validation, and clear actionable errors on versioned surfaces your clients can depend on long term, with observability hooks wired in from the first request path.",
        },
        {
          title: "Database",
          body: "Schema first data models designed for change without painful rewrites, with migrations and access patterns that stay maintainable and integrity rules enforced close to your source of truth.",
        },
        {
          title: "Cloud",
          body: "Deploy pipelines that make shipping to production feel routine, with logging, metrics, and alerts wired from day one and environments that mirror production closely without extra friction.",
        },
      ],
      deliverables: [
        "Frontends with production grade UX, accessibility, and performance",
        "APIs with clear contracts, auth flows, and strict validation",
        "Schema first data layers built for steady product iteration",
        "Cloud deploy, observability, and CI that keep releases shipping",
      ],
      diagram: "stack" as const,
    },
    {
      id: "automation",
      title: "AI Automation & Agentic Systems",
      description:
        "Agents and workflows that take repetitive work off your plate. Built to run, retry, and report without constant supervision.",
      steps: [
        {
          title: "Trigger",
          body: "Webhooks, schedules, and events reliably start the automation loop, with context captured up front so the agent has what it needs and noisy inputs filtered before any real work begins.",
        },
        {
          title: "Agent",
          body: "Planning and tool use across your existing product and ops stack, with human in the loop gates wherever stakes run high and decisions that stay fully inspectable instead of a sealed black box.",
        },
        {
          title: "Action",
          body: "Execute, retry, and report cleanly across connected business systems, with failures that surface clearly, practical recovery paths built in, and outcomes that land where your team already works.",
        },
      ],
      deliverables: [
        "Agentic workflows wired into the tools your team already uses",
        "Human in the loop checkpoints for every high stakes decision step",
        "Orchestration across email, calendars, CRMs, and internal tools",
        "Monitoring and fallbacks so automation stays trustworthy in production",
      ],
      diagram: "cycle" as const,
    },
  ],
  process: {
    title: "How we deliver",
    subtitle:
      "Every stage from the first conversation through launch and ongoing support, with clear outcomes at each step.",
    stages: [
      {
        title: "Discovery",
        summary: "Align on goals, constraints, and what success looks like.",
        detail:
          "We map stakeholders, risks, and existing systems so you leave with a scoped problem, success metrics, and a recommended path.",
        outcomes: ["Problem framing", "Success metrics", "Delivery plan"],
        icon: "discovery" as const,
      },
      {
        title: "Architecture",
        summary: "Shape the system, data model, and AI boundaries for change.",
        detail:
          "We lock the stack, data contracts, and where models sit in the flow, including auth, observability, and failure modes before build starts.",
        outcomes: ["System diagram", "Data model", "AI boundaries"],
        icon: "architecture" as const,
      },
      {
        title: "Build",
        summary: "Ship full stack increments you can click and steer.",
        detail:
          "Frontend, APIs, and data move together in short cycles. Every iteration ends with a working demo, not a black box milestone.",
        outcomes: ["Working increments", "Demo cadence", "Clear backlog"],
        icon: "build" as const,
      },
      {
        title: "AI Integration",
        summary: "Wire models, RAG, and agents with evals from the start.",
        detail:
          "LLMs, retrieval, and automation land where they earn their place, with guardrails so quality is measured before users feel rough edges.",
        outcomes: ["Model wiring", "RAG and agents", "Evals and guardrails"],
        icon: "ai" as const,
      },
      {
        title: "Ship",
        summary: "Launch to production with monitoring that holds under load.",
        detail:
          "CI, environments, dashboards, and a go live checklist. We stay through launch so issues get fixed by the people who built the system.",
        outcomes: ["Production deploy", "Monitoring", "Launch support"],
        icon: "ship" as const,
      },
      {
        title: "Support",
        summary: "Keep iterating so the system earns trust over time.",
        detail:
          "We refine from real usage across performance, prompts, workflows, and features as your team and traffic grow.",
        outcomes: ["Ops cadence", "Iteration loops", "Reliability focus"],
        icon: "support" as const,
        final: true,
      },
    ],
  },
};

export const productsPage = {
  eyebrow: "AI STUDIO · PRODUCTS",
  subtitle: copyFor(
    "Not demos or pitch decks. Tools we built for ourselves, run in production every day, and keep shipping.",
    "Not demos or pitch decks. Tools we built for ourselves, run in production every day, and keep shipping. Same standards we bring to client work.",
  ),
  heroStages: [
    {
      id: "idea",
      label: "Idea",
      title: "Start from a real need",
      line: "We build products we would use ourselves, not features invented for a deck.",
    },
    {
      id: "craft",
      label: "Craft",
      title: "Shape it for daily use",
      line: "Taste, reliability, and clear UX get the same attention as the architecture.",
    },
    {
      id: "ship",
      label: "Ship",
      title: "Put it in production",
      line: "Launch is the bar. Real users, real traffic, and ownership after day one.",
    },
    {
      id: "iterate",
      label: "Iterate",
      title: "Keep it honest",
      line: "Feedback and usage drive what comes next. The product stays alive after launch.",
    },
  ],
  overview: {
    eyebrow: "Products",
    title: "What we ship",
    subtitle:
      "Live tools from our own stack, plus what is next. Open a product page for the walkthrough, then jump to the live app, npm, or waitlist.",
  },
  proof: [
    { label: "Live products", value: "2" },
    { label: "Coming soon", value: "1" },
    { label: "Skedvio", value: "Live · PH" },
    { label: "Fylmkit", value: "Waitlist" },
  ],
  catalog: [
    {
      id: "skedvio",
      name: "Skedvio",
      badge: "Live product",
      meta: "skedvio.com",
      line: "Scheduling intelligence that keeps calendars conflict-free and booking links guest-ready.",
      points: [
        "Google Calendar sync with live availability",
        "Guest booking links in their timezone",
        "AI daily brief for overloaded weeks",
      ],
      href: "/products/skedvio",
      cta: "Open Skedvio page",
      externalHref: "https://skedvio.com",
      externalLabel: "Try Skedvio free",
    },
    {
      id: "elim-mcp",
      name: "elim-mcp",
      badge: "Open source · npm",
      meta: "elim-mcp on npm",
      line: "Elimination-ledger memory for coding agents — remembers what was ruled out, not just what is true.",
      points: [
        "remember · recall · get_current · trace",
        "Local SQLite ledger, no API key",
        "Works across Cursor, Claude Code, and more",
      ],
      href: "/products/elim-mcp",
      cta: "Open elim-mcp page",
      externalHref: "https://www.npmjs.com/package/elim-mcp",
      externalLabel: "View on npm",
    },
    {
      id: "fylmkit",
      name: "Fylmkit",
      badge: "Coming soon",
      meta: "fylmkit.com",
      line: "AI video that stays on brand — script, voice, captions, and every format from a few notes.",
      points: [
        "Brand kit once: colours, fonts, logo, tone",
        "Script, scenes, voiceover, and word-timed captions",
        "Short form first · reels, TikTok, Shorts, LinkedIn",
      ],
      href: "/products/fylmkit",
      cta: "Open Fylmkit page",
      externalHref: "https://fylmkit.com",
      externalLabel: "Join the waitlist",
    },
  ],
  principles: {
    eyebrow: "How we ship",
    title: "The bar for every product",
    subtitle:
      "We only keep shipping what we would run ourselves. That pressure shapes taste, reliability, and ownership after launch.",
    items: [
      {
        title: "Start from a real need",
        body: "Skedvio came from calendar ping-pong. elim-mcp from agents rechecking dead ends. Fylmkit from brands that need constant video with no video team.",
      },
      {
        title: "Ship into production",
        body: "Live products leave the waitlist. Real users, real traffic, and a team that stays on the hook after day one. Coming-soon tools get the same bar before launch.",
      },
      {
        title: "Keep iterating in public",
        body: "Build log posts, npm releases, and product updates stay visible. Feedback lands in the roadmap instead of a deck.",
      },
      {
        title: "Own the hard parts",
        body: "Sync edge cases, memory scope, brand fidelity, and boring operational details get the same attention as the first demo path.",
      },
    ],
  },
  audiences: {
    eyebrow: "Who they are for",
    title: "Different jobs. Same shipping standard.",
    subtitle:
      "Three products, three audiences — each built to remove friction that keeps showing up in real work.",
    items: [
      {
        product: "Skedvio",
        title: "Operators and founders",
        body: "Anyone who books calls across calendars and timezones without wanting another scheduling spreadsheet.",
        href: "/products/skedvio",
      },
      {
        product: "elim-mcp",
        title: "Builders using coding agents",
        body: "Engineers who want agents to skip already-ruled-out paths across sessions, branches, and tools.",
        href: "/products/elim-mcp",
      },
      {
        product: "Fylmkit",
        title: "Brands that post constantly",
        body: "Founders, agencies, ecommerce, educators, and local businesses that need on-brand video without a video team.",
        href: "/products/fylmkit",
      },
    ],
  },
  updates: {
    eyebrow: "Build log",
    title: "Latest product notes",
    subtitle:
      "Short updates when something goes live. Longer reads when a lesson is worth writing down.",
    viewAllLabel: "Browse the build log",
    viewAllHref: "/blog",
    slugs: ["skedvio-live-booking", "elim-mcp-on-npm"],
  },
  skedvio: {
    id: "skedvio",
  },
  elim: {
    id: "elim-mcp",
    name: "elim-mcp",
    badge: "npm package",
    tagline:
      "Every memory tool remembers what's true. This one also remembers what isn't.",
    description:
      "An MCP server that remembers what coding agents have already tried, ruled out, and solved, so nobody reinvestigates the same dead end twice across sessions, branches, and tools.",
    cta: "View on npm",
    ctaHref: "https://www.npmjs.com/package/elim-mcp",
    sessions: [
      {
        label: "Session 1",
        lines: [
          { tone: "dim", text: "$ agent investigate · slow API responses" },
          { tone: "out", text: "✗ ruled out: connection pool exhaustion" },
          { tone: "out", text: "✗ ruled out: API key rotation / auth drift" },
          { tone: "ok", text: "→ continuing… (root cause elsewhere)" },
        ],
      },
      {
        label: "Session 2",
        lines: [
          {
            tone: "dim",
            text: "$ agent investigate · same symptom, new branch",
          },
          {
            tone: "skip",
            text: "↺ recall: connection pool · already eliminated",
          },
          {
            tone: "skip",
            text: "↺ recall: API key rotation · already eliminated",
          },
          {
            tone: "ok",
            text: "→ skipped dead ends · resumed from open hypotheses",
          },
        ],
      },
    ],
    trace: [
      "trace · investigation chain",
      "1. connection pool exhaustion     [ruled out · s1]",
      "2. API key rotation / auth drift   [ruled out · s1]",
      "3. N+1 query on bookings feed      [confirmed · s2]",
      "→ handoff-ready trail for commit / PR",
    ],
  },
};

export const skedvioProductPage = {
  slug: "skedvio",
  eyebrow: "Product · Skedvio",
  name: "Skedvio",
  title: "Your calendar, finally working for you",
  subtitle:
    "Connect your calendars, set when you are available, and share a booking link. Guests pick a time in their timezone — every slot is checked live so nothing double-books.",
  badge: "Live product",
  primaryCta: { label: "Try Skedvio free", href: "https://skedvio.com" },
  secondaryCta: {
    label: "View on Product Hunt",
    href: "https://www.producthunt.com/products/skedvio-scheduling-intelligence/launches/skedvio?utm_source=other&utm_medium=social",
  },
  highlights: [
    {
      title: "Google Calendar sync",
      body: "Incremental sync and webhooks keep events fresh so availability always reflects reality.",
    },
    {
      title: "Live availability",
      body: "Open slots are computed across every connected calendar, including holidays and manual blocks.",
    },
    {
      title: "Verified before confirm",
      body: "Every booking is checked live against your calendar before it lands, so double-books stay out.",
    },
  ],
  steps: {
    eyebrow: "How it works",
    title: "From connected calendar to confirmed booking",
    subtitle:
      "Three steps — no complicated setup, no separate scheduling tool to maintain.",
    items: [
      {
        label: "01",
        title: "Connect your calendars",
        body: "Link Google Calendar today — Outlook read sync is supported too. Skedvio keeps events fresh with incremental sync and webhooks.",
      },
      {
        label: "02",
        title: "Set when you are open",
        body: "Define availability rules once. We compute open slots across every connected calendar, respecting holidays and manual blocks.",
      },
      {
        label: "03",
        title: "Share a booking link",
        body: "Send one link. Guests pick a time in their timezone. Confirmed bookings land on your calendar — no email tennis.",
      },
    ],
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "Everything you need to stay bookable",
    subtitle:
      "Scheduling intelligence that respects how your calendar actually works.",
    items: [
      {
        title: "Cache-first sync",
        body: "Connect Google (Outlook soon) and keep events fresh with incremental sync and webhooks.",
      },
      {
        title: "Availability engine",
        body: "Define rules once. Open slots are computed across every connected calendar in real time.",
      },
      {
        title: "Share links",
        body: "Send a booking link. Guests pick a slot in their timezone — no back-and-forth.",
      },
      {
        title: "Zero double-bookings",
        body: "Every booking is verified live against your calendar before it is confirmed.",
      },
      {
        title: "AI daily brief",
        body: "A concise summary of your day with overload warnings when things get heavy.",
      },
      {
        title: "Multi-account",
        body: "Work, personal, and shared calendars — manage them all from one clean dashboard.",
      },
      {
        title: "Guest-friendly booking",
        body: "Public links show open windows in the guest timezone. They reserve, confirm details, and get a calendar invite without an account.",
      },
      {
        title: "Built for busy weeks",
        body: "Merged availability, holiday awareness, and an optional AI brief help you see overload before it hits.",
      },
    ],
  },
  sibling: {
    label: "Also from 13Stack",
    name: "Fylmkit",
    line: "AI video that stays on brand. Coming soon.",
    href: "/products/fylmkit",
    logoId: "fylmkit" as const,
  },
};

export const elimMcpProductPage = {
  slug: "elim-mcp",
  eyebrow: "Product · elim-mcp",
  name: "elim-mcp",
  title: "Remembers what agents already ruled out",
  subtitle:
    "An MCP server that records what coding agents have tried, eliminated, and solved — so the next session skips the same dead ends across chats, branches, and tools.",
  badge: "Open source · MIT · npm",
  primaryCta: {
    label: "View on npm",
    href: "https://www.npmjs.com/package/elim-mcp",
  },
  secondaryCta: {
    label: "GitHub",
    href: "https://github.com/DevAsadYasin/elim-mcp",
  },
  highlights: [
    {
      title: "Ruled-out first",
      body: "First-class kinds for ruled_out, solution, decision, and note — not just generic memory blobs.",
    },
    {
      title: "Local SQLite ledger",
      body: "Project-local `.elim/ledger.db` with FTS5 search. No API key. Branch and session captured automatically.",
    },
    {
      title: "Four tools only",
      body: "remember, recall, get_current, and trace. Small enough for MCP clients to pick reliably.",
    },
  ],
  why: {
    eyebrow: "Why it exists",
    title: "Dead ends should not get thrown away",
    body: "Fresh chats and tool switches wipe mid-debug reasoning. Existing memory tools are good at facts and decisions. elim-mcp is for the negative trail — what was investigated and eliminated — chained as one investigation you can recall later.",
  },
  tools: {
    eyebrow: "Tools",
    title: "The four MCP tools",
    items: [
      {
        name: "remember",
        body: "Write a ruled-out theory, solution, decision, or note into the ledger.",
      },
      {
        name: "recall",
        body: "Search before re-investigating so agents skip known dead ends.",
      },
      {
        name: "get_current",
        body: "Load recent records for a chat, branch, or project scope.",
      },
      {
        name: "trace",
        body: "Walk the follows_from chain for one full investigation trail.",
      },
    ],
  },
  install: {
    eyebrow: "Install",
    title: "Drop it into Cursor in one paste",
    subtitle:
      "No API key. Restart the editor and it works. Pin ELIM_PROJECT_ROOT so the ledger stays in the open project.",
    filename: ".cursor/mcp.json",
    code: `{
  "mcpServers": {
    "elim": {
      "command": "npx",
      "args": ["-y", "elim-mcp"],
      "env": {
        "ELIM_PROJECT_ROOT": "\${workspaceFolder}"
      }
    }
  }
}`,
  },
  details: {
    eyebrow: "How it works",
    title: "Built for day-to-day debugging",
    items: [
      {
        title: "Scopes that match how you work",
        body: "chat · branch (default) · project · global — with git branch auto-capture for the common case.",
      },
      {
        title: "Investigation chains",
        body: "follows_from links ruled-out steps into one trail you can dump for a handoff or commit message.",
      },
      {
        title: "Native SQLite performance",
        body: "better-sqlite3 prefers a prebuilt binary. Most macOS, Windows, and Linux glibc setups never compile anything.",
      },
    ],
  },
  sibling: {
    label: "Also from 13Stack",
    name: "Fylmkit",
    line: "AI video that stays on brand. Coming soon.",
    href: "/products/fylmkit",
    logoId: "fylmkit" as const,
  },
};

export const fylmkitProductPage = {
  slug: "fylmkit",
  eyebrow: "Product · Fylmkit",
  name: "Fylmkit",
  title: "AI video that stays on brand",
  subtitle:
    "Fylmkit turns a few notes into a finished video that already looks and sounds like your brand. Coming soon — join the waitlist for early access and founding member pricing.",
  badge: "Coming soon",
  primaryCta: {
    label: "Join the waitlist",
    href: "https://fylmkit.com",
  },
  secondaryCta: {
    label: "Talk to 13Stack",
    href: "/contact",
  },
  highlights: [
    {
      title: "Brand kit once",
      body: "Set colours, fonts, logo, and tone of voice. Every video after that already looks and sounds like you.",
    },
    {
      title: "Notes to finished cut",
      body: "Give it something to say. It writes the script in your voice, plans scenes, generates voiceover, and times captions to the word.",
    },
    {
      title: "Every format you need",
      body: "Render for reels, TikTok, Shorts, and LinkedIn without an editor, stock footage hunt, or monthly agency bill.",
    },
  ],
  steps: {
    eyebrow: "How it works",
    title: "From brand kit to publish-ready video",
    subtitle:
      "No editor required. Set the brand once, then keep shipping clips that stay on voice.",
    items: [
      {
        label: "01",
        title: "Set up your brand",
        body: "Colours, fonts, logo, and tone of voice — locked in once so every render stays consistent.",
      },
      {
        label: "02",
        title: "Give it something to say",
        body: "Drop a few notes. Fylmkit writes the script in your voice, plans the scenes, and generates the voiceover.",
      },
      {
        label: "03",
        title: "Render every format",
        body: "Captions timed to the word. Short-form cuts for reels, TikTok, Shorts, and LinkedIn — ready to post.",
      },
    ],
  },
  capabilities: {
    eyebrow: "Built for",
    title: "Teams that post constantly",
    subtitle:
      "It already knows how different industries should look, so a clothing brand and a developer tool never get the same video.",
    items: [
      {
        title: "Founders and solo brands",
        body: "Ship constant short-form without hiring a video team or burning evenings in an editor.",
      },
      {
        title: "Agencies running several clients",
        body: "Keep each brand kit separate so client A never sounds like client B.",
      },
      {
        title: "Ecommerce and clothing",
        body: "Product drops, lookbooks, and promos that match the storefront — not generic stock energy.",
      },
      {
        title: "Educators and local businesses",
        body: "Explainers and updates that stay clear, on-brand, and ready for the platforms you already use.",
      },
      {
        title: "Short form first",
        body: "Reels, TikTok, Shorts, and LinkedIn now. Longer YouTube-style video is next on the roadmap.",
      },
      {
        title: "No agency tax",
        body: "No editor, no stock footage scramble, no monthly retainer just to keep posting.",
      },
    ],
  },
  sibling: {
    label: "Also from 13Stack",
    name: "Skedvio",
    line: "Scheduling that stays conflict-free.",
    href: "/products/skedvio",
    logoId: "skedvio" as const,
  },
};

export const workPage = {
  eyebrow: "WORK",
  subtitle:
    "Client builds taken from scope to production. Real systems, real users, and ownership that stays with the people who shipped the code.",
  heroPhases: [
    {
      id: "brief",
      label: "Brief",
      status: "done" as const,
      title: "Lock the problem",
      line: "Scope, constraints, and success criteria before a line of code moves.",
      marks: ["Clear outcome", "Shared ownership", "No handoff fog"],
    },
    {
      id: "build",
      label: "Build",
      status: "active" as const,
      title: "Ship in thin slices",
      line: "Architecture and delivery stay with the same engineers through every cut.",
      marks: ["Working software", "Review in the loop", "Risk surfaced early"],
    },
    {
      id: "launch",
      label: "Launch",
      status: "next" as const,
      title: "Go live with intent",
      line: "Production deploy, monitoring, and a team that stays on the hook.",
      marks: ["Real users", "Operable system", "Launch is day one"],
    },
    {
      id: "own",
      label: "Own",
      status: "next" as const,
      title: "Stay after ship",
      line: "Fixes, follow through, and the next iteration without starting from zero.",
      marks: ["Accountability", "Stable handoff", "Room to grow"],
    },
  ],
  overview: {
    eyebrow: "Case studies",
    title: "Selected work",
    subtitle:
      "A look at products and platforms we have shipped end to end, from first architecture decisions through launch and beyond.",
  },
  caseStudies: [
    {
      id: "exactmails",
      name: "ExactMails",
      badge: "Lead engineer",
      summary: "AI email marketing with automated prospecting baked in.",
      description:
        "Built an AI powered email marketing platform where lead discovery feeds campaigns directly. Scraping and LinkedIn prospecting land in the same flow as mailing, so outreach starts from verified prospects instead of a static list.",
      outcomes: [
        "Automated prospecting into campaign pipelines",
        "LinkedIn discovery wired into mailing flows",
        "Lead engineer ownership across the build",
      ],
      stack: ["AI workflows", "Lead discovery", "Email campaigns"],
      image: "/assets/work/exactmails-dashboard.png",
      imageAlt: "ExactMails campaign and prospecting dashboard",
    },
    {
      id: "leaseform",
      name: "LeaseForm",
      badge: "Live product",
      summary:
        "Lease management for Nova Scotia landlords, with AI in the wizard.",
      description:
        "Full lease wizard with AI assisted autofill, form refinement, and smart suggestions. AcroForm PDF generation, a landlord dashboard, Property Profiles, and SendGrid email keep the lease lifecycle in one place from draft to signed.",
      outcomes: [
        "AI assisted lease wizard and suggestions",
        "AcroForm PDF generation for signed packages",
        "Dashboard and Property Profiles for landlords",
      ],
      stack: ["FastAPI", "Next.js", "Supabase", "Railway", "Vercel"],
      href: "https://leaseform.co",
      linkLabel: "Visit leaseform.co",
      image: "/assets/work/leaseform-dashboard.png",
      imageAlt: "LeaseForm lease wizard and landlord dashboard",
    },
    {
      id: "profexohvac",
      name: "ProfexoHvac",
      badge: "Production",
      summary: "Data heavy HVAC engineering workflows, live in production.",
      description:
        "Interactive Next.js frontend backed by FastAPI services and a schema optimized PostgreSQL database for real time state sync. Built modular so complex engineering tools can grow without rewriting the core.",
      outcomes: [
        "Real time sync for engineering workflows",
        "Modular frontend ready for rapid features",
        "Schema optimized data layer under load",
      ],
      stack: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL"],
      href: "https://profexohvac.com",
      linkLabel: "Visit profexohvac.com",
      image: "/assets/work/profexohvac-dashboard.png",
      imageAlt: "ProfexoHvac engineering workflow dashboard",
    },
    {
      id: "pressedpod",
      name: "PressedPod",
      badge: "Greenfield",
      summary: "Full stack web app from blank repo to live production.",
      description:
        "Responsive Next.js frontend with a FastAPI backend tuned for rapid data processing. Taken from scratch through deploy with a clean split between UI and high throughput API work.",
      outcomes: [
        "Scratch to production delivery",
        "Responsive product UI on Next.js",
        "FastAPI backend for rapid data processing",
      ],
      stack: ["Next.js", "React", "FastAPI", "Python"],
      image: "/assets/work/pressedpod-app.png",
      imageAlt: "PressedPod product interface",
    },
  ],
};

export const aboutPage = {
  eyebrow: "AI STUDIO · ABOUT",
  headingFrom: "Founders",
  headingTo: "Execution",
  subtitle:
    "A founder-led studio. Small team, direct ownership, real delivery.",
  heroCards: [
    {
      id: "ceo",
      eyebrow: "Leadership",
      title: "CEO & Founder",
      line: "Product direction and technical architecture, hands-on from idea to ship.",
    },
    {
      id: "team",
      eyebrow: "Studio",
      title: "Engineering leadership",
      line: "Strategy, architecture, and delivery owned by the people building the product.",
    },
    {
      id: "base",
      eyebrow: "How we work",
      title: "Direct ownership",
      line: "Small team, no account layers, clear communication from kickoff through launch.",
    },
    {
      id: "ship",
      eyebrow: "Delivery",
      title: "Built to run",
      line: copyFor(
        "Production systems for our own products, not prototypes that stall.",
        "Production systems for clients and our own products, not prototypes that stall.",
      ),
    },
  ],
  intro: copyFor(
    "13Stack is an AI product studio. We design, build, and ship full-stack and AI-native products like Skedvio, elim-mcp, and Fylmkit — working with teams wherever they are.",
    "13Stack is an AI studio building production systems, not prototypes. We design, build, and ship full-stack and AI-native products for clients, alongside our own products like Skedvio, elim-mcp, and Fylmkit — working with teams wherever they are.",
  ),
  overview: {
    eyebrow: "Studio",
    title: "Who we are",
    subtitle:
      "A founder-led AI studio. Small team, direct ownership, and systems built to run in production.",
  },
  leadership: {
    title: "Leadership",
    people: [
      {
        initials: "AY",
        name: "Asad Yasin",
        title: "CEO & Founder",
        email: siteEmails.ceo,
        bio: "Full-stack developer and AI/ML engineer, leading product direction and technical architecture at 13Stack. Hands-on across the stack from system design to AI integration.",
      },
      {
        initials: "AS",
        name: "Anas Shafique",
        title: "CTO",
        email: siteEmails.cto,
        bio: "Owns technical strategy at 13Stack: full-stack architecture, cloud deployments across Azure and AWS, and applied LLM/ML engineering. Focused on the right solution for the problem, monolith or microservices, balancing best practices with real user experience.",
      },
      {
        initials: "ZH",
        name: "Zakria Hameed",
        title: "Head of Engineering",
        email: siteEmails.engineering,
        bio: copyFor(
          "Drives delivery end to end: refining development workflows, following best practices, and shipping on time without losing sight of what users actually need. Takes ownership of outcomes, not just tasks.",
          "Drives delivery end to end: refining development workflows, following best practices, and shipping on time without losing sight of what the client actually needs. Takes ownership of outcomes, not just tasks.",
        ),
      },
    ],
  },
  location: {
    title: "Small team. Built for anywhere.",
    body: copyFor(
      "We are a small, hands-on team. Direct communication, no account managers, no layers between you and the people building the product. Remote-first, working with users across time zones.",
      "We are a small, hands-on team. Direct communication, no account managers, no layers between you and the people building your product. Remote-first, working with clients across time zones.",
    ),
  },
  whyUs: {
    eyebrow: "Why us",
    title: "What makes us the right team",
    subtitle:
      "Not the biggest studio. The one that stays close to the work, ships production systems, and measures success by outcomes you can run.",
    points: [
      {
        title: "Builders in the room",
        body: "The engineers who scope the work are the ones who build it. No translation layer, no diluted ownership.",
      },
      {
        title: "Production is the bar",
        body: "We design for real traffic, real data, and real handoff. Demos that die after the pitch are not the deliverable.",
      },
      {
        title: "AI where it earns its place",
        body: "RAG, agents, and LLM integrations when they move the product forward, with evals and guardrails so they hold up after launch.",
      },
      {
        title: "Same standard for our products",
        body: copyFor(
          "Skedvio and elim-mcp run in public. Fylmkit is next. That pressure keeps the product honest.",
          "Skedvio and elim-mcp run in public. Fylmkit is next. That pressure keeps client work honest.",
        ),
      },
    ],
  },
  practices: {
    eyebrow: "Engineering",
    title: "Practices we do not skip",
    subtitle:
      "How we keep quality high without slowing delivery into process theater.",
    items: [
      {
        title: "Clear architecture early",
        body: "Boundaries, data flow, and failure modes decided before the codebase sprawls.",
      },
      {
        title: "Ship in thin slices",
        body: "Vertical cuts that reach users, then iterate. Not a big bang that hides risk until the end.",
      },
      {
        title: "Review and harden",
        body: "Code review, testing where it matters, and operational checks before something is called done.",
      },
      {
        title: "Own it after launch",
        body: "Monitoring, fixes, and follow through. Launch is the start of ownership, not the exit.",
      },
    ],
  },
  impact: {
    eyebrow: "Business impact",
    title: "Outcomes that show up in the business",
    subtitle:
      "Engineering only matters if it moves something real: speed, reliability, cost, or the ability to ship the next thing.",
    items: [
      {
        title: "Faster path to live",
        body: "Fewer handoffs and clearer decisions mean less time stuck between idea and production.",
      },
      {
        title: "Systems that stay operable",
        body: "Your team inherits something they can run, extend, and explain, not a black box.",
      },
      {
        title: "Less rework later",
        body: "Practices up front cut the expensive surprises that appear after the first real users arrive.",
      },
      {
        title: "AI that earns trust",
        body: "Integrations built with evaluation and guardrails so the business can rely on them, not demo them once.",
      },
    ],
  },
  customerVoice: {
    eyebrow: "Our products",
    title: "Shaped with the people who use them",
    subtitle: copyFor(
      "We listen, ship against real need, and keep the roadmap honest.",
      "We build our own products the same way we build for clients. We listen, ship against real need, and keep the roadmap honest.",
    ),
    pillars: [
      {
        title: "We hear our users",
        body: "Support threads, sessions, and feedback loops feed what we build next. Noise gets filtered. Patterns get prioritized.",
      },
      {
        title: "Future features from need",
        body: "Roadmaps are not wishlist theater. Features land when they solve a repeated problem for people already using the product.",
      },
      {
        title: "Delivered to the customer",
        body: copyFor(
          "Product work follows the brief: what was promised, what was needed, and what ships on time.",
          "Client work and product work both follow the brief: what was promised, what was needed, and what ships on time.",
        ),
      },
    ],
    reviewsTitle: "What users say",
    reviews: [
      {
        quote:
          "Booking stopped being email tennis. Guests pick a slot, calendars stay clean, and we look more professional without more admin.",
        author: "Product lead",
        context: "Skedvio",
      },
      {
        quote:
          "Our agents stopped reinvestigating the same dead ends. elim-mcp made the next session useful instead of repetitive.",
        author: "Engineering manager",
        context: "elim-mcp",
      },
      {
        quote:
          "They shipped what we needed, not a pile of extras. Communication stayed direct and the system was ready for real users.",
        author: "Founder",
        context: "Client delivery",
        audience: "services" as const,
      },
    ],
  },
};

export const contactPage = {
  eyebrow: copyFor("Contact", "Consultation"),
  title: copyFor(
    "Talk to us about our products",
    "Tell us what you are building",
  ),
  subtitle: copyFor(
    "Questions about Skedvio, elim-mcp, Fylmkit, or 13Stack. We will reply — usually within one business day.",
    "Share the problem, the constraints, and where you want to land. We will reply with clear next steps — usually within one business day.",
  ),
  emailLabel: "Email",
  responseLabel: "Response time",
  responseValue: "Within one business day",
  points: [
    {
      label: copyFor("Product first", "Discovery first"),
      detail: copyFor(
        "Ask about a product, a partnership, or what we are shipping next.",
        "Goals, constraints, and the fastest path to ship.",
      ),
    },
    {
      label: "Real reply",
      detail: "A person writes back — no auto-pitch sequences.",
    },
    {
      label: "Clear next steps",
      detail: copyFor(
        "A product answer, a pointer, or a short call if that helps more.",
        "Scope, approach, or a short call if that helps more.",
      ),
    },
  ],
  form: {
    nameLabel: "Name",
    emailLabel: "Work email",
    companyLabel: "Company",
    companyOptional: "Optional",
    messageLabel: copyFor("What's on your mind?", "What are you building?"),
    messagePlaceholder: copyFor(
      "A product question, partnership idea, or anything else…",
      "Product idea, AI system, automation need, timeline, and anything already decided…",
    ),
    submitLabel: copyFor("Send message", "Book a consultation"),
    submittingLabel: "Sending…",
    successMessage:
      "Thanks — we received your note and will get back to you soon.",
    note: "Prefer email? Write the studio, CEO, CTO, or Head of Engineering directly.",
    newsletterStudio: "Send me the 13Stack build log and studio updates.",
    newsletterSkedvio: "Also send Skedvio product updates.",
  },
};

export const newsletter = {
  title: "Build log + product notes",
  description:
    "Ship updates from 13Stack. Optional Skedvio product news if you want both.",
  emailLabel: "Email",
  emailPlaceholder: "you@company.com",
  submitLabel: "Subscribe",
  submittingLabel: "Subscribing…",
  successMessage: "You are on the list.",
  skedvioOptIn: "Also get Skedvio product updates",
};

export const footer = {
  tagline: copyFor(
    "AI products, engineered end to end.",
    "AI systems and products, engineered end to end.",
  ),
  location: "Remote-first · shipping worldwide",
  columns: [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        ...(siteFlags.showServices
          ? [
              { label: "Services", href: "/services" },
              { label: "Work", href: "/work" },
            ]
          : []),
        { label: "Build log", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Skedvio", href: "/products/skedvio" },
        { label: "elim-mcp", href: "/products/elim-mcp" },
        { label: "Fylmkit", href: "/products/fylmkit" },
        { label: "All products", href: "/products" },
        { label: "skedvio.com", href: "https://skedvio.com", external: true },
        {
          label: "elim-mcp on npm",
          href: "https://www.npmjs.com/package/elim-mcp",
          external: true,
        },
        {
          label: "fylmkit.com",
          href: "https://fylmkit.com",
          external: true,
        },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: siteEmails.ceo, href: `mailto:${siteEmails.ceo}` },
        { label: siteEmails.cto, href: `mailto:${siteEmails.cto}` },
        {
          label: siteEmails.engineering,
          href: `mailto:${siteEmails.engineering}`,
        },
        { label: siteEmails.sales, href: `mailto:${siteEmails.sales}` },
        { label: siteEmails.support, href: `mailto:${siteEmails.support}` },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} 13Stack. All rights reserved.`,
};
