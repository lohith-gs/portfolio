/* ----------------------------------------------------------------------------
   Single source of truth for all portfolio content.
---------------------------------------------------------------------------- */

export const profile = {
  name: "Sri Lohith Gelli",
  role: "Senior Full Stack Engineer",
  tagline: "I build web apps for work, and developer tools for fun.",
  blurb:
    "React · Next.js · TypeScript · Node · GraphQL · 5+ years, fully remote, async-first.",
  location: "Hyderabad, India",
  status: "Open to remote roles & relocation",
  email: "lohith7711@gmail.com",
  github: "https://github.com/lohith-gs",
  linkedin: "https://linkedin.com/in/LohithGs",
  instagram: "https://www.instagram.com/lohith.gs",
  resume: "/Sri_Lohith_Resume.pdf",
};

export const proof = [
  { value: "5+ yrs", label: "shipping production web apps" },
  { value: "Millions", label: "of users served" },
  { value: "95%+", label: "test coverage delivered" },
  { value: "50%", label: "fewer production incidents" },
];

export type Project = {
  id: string;
  name: string;
  tag: string;
  status: "live" | "web-store" | "in-progress";
  statusLabel: string;
  accent: string; // CSS variable name
  summary: string;
  hardPart: string;
  stack: string[];
  links: { label: string; href: string }[];
  embed?: string; // live iframe URL
};

export const projects: Project[] = [
  {
    id: "gitcity",
    name: "Git City",
    tag: "Turns any GitHub repo into a living 3D city",
    status: "live",
    statusLabel: "Live",
    accent: "var(--c-gitcity)",
    summary:
      "Paste a public repo and watch it rise as a low-poly 3D city: files become buildings, commits drive growth, deleted files become ruins. An intuitive way to feel a codebase's scale and history.",
    hardPart:
      "Mapping arbitrary repo structures to stable, readable urban layouts and rendering them smoothly in the browser with real-time generation.",
    stack: ["Next.js", "Three.js", "TypeScript", "GitHub API"],
    links: [{ label: "Open live", href: "https://gitcity-3d.vercel.app/" }],
    embed: "https://gitcity-3d.vercel.app/",
  },
  {
    id: "devlens",
    name: "DevLens",
    tag: "A sharper network inspector for the browser",
    status: "web-store",
    statusLabel: "On Chrome Web Store",
    accent: "var(--c-devlens)",
    summary:
      "A Chrome DevTools extension for developers who debug API-heavy apps: side-by-side response comparison, structural JSON diff, automatic TypeScript interface generation from responses, and a cascade timeline.",
    hardPart:
      "Working within the Chrome DevTools Protocol and Manifest V3 constraints while generating accurate TypeScript types from arbitrary JSON shapes.",
    stack: ["React", "TypeScript", "Chrome DevTools Protocol", "Manifest V3"],
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/allolniimedofhingkeodfglnogcmelj",
      },
    ],
  },
  {
    id: "tanai",
    name: "tan(AI)",
    tag: "Non-linear, branching AI conversations",
    status: "live",
    statusLabel: "Live",
    accent: "var(--c-tanai)",
    summary:
      "Reimagines AI chat as a canvas: explore tangents as visual branches without polluting the main thread. Each branch keeps its own history but references only relevant parent context, so token usage stays lean.",
    hardPart:
      "Designing the branching context model, so each node inherits just enough parent context to stay coherent while keeping prompts small and fast.",
    stack: ["Next.js", "React Flow", "TypeScript", "Groq API"],
    links: [{ label: "Open live", href: "https://tan-ai-nl.vercel.app/" }],
  },
];

export type Job = {
  company: string;
  client?: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    company: "TechGrit",
    role: "Senior Software Developer",
    period: "Aug 2024 - Present",
    location: "Remote, India",
    bullets: [
      "Led end-to-end development of an internal operations portal for a US manufacturer, spanning multi-role workflows across dealer, admin, sales and installer teams, replacing manual processes with a single digital platform.",
      "Built a multi-role estimate and order management system with complex form flows, real-time calculations and Excel upload, cutting manual effort across teams.",
      "Shipped a geo-targeted marketing site (Next.js SSR + Strapi + Azure) serving region-specific content across multiple US states.",
      "Also contributing to a secure payments platform (person-to-person, bank-to-bank) on the Java/Spring Boot/Angular stack with Kafka and Kubernetes.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Azure"],
  },
  {
    company: "Collabera Digital",
    client: "Lowe's",
    role: "Software Developer",
    period: "Feb 2023 - Aug 2024",
    location: "Remote, India",
    bullets: [
      "Built and maintained the post-purchase portal for a top US home-improvement retailer, handling order modifications, cancellations, returns and refunds for millions of customers a year.",
      "Architected it as an orchestration layer, owning both frontend (React, Redux) and backend (Node, Express) while routing to downstream services across a distributed system.",
      "Designed GraphQL schemas that streamlined data retrieval and reduced over-fetching across services.",
      "Established a Jest + Cypress testing strategy reaching 95%+ coverage and cutting production incidents by 50%; added Grafana dashboards for real-time visibility.",
    ],
    stack: ["React", "Node.js", "GraphQL", "Grafana"],
  },
  {
    company: "Tata Consultancy Services",
    client: "Apple",
    role: "Frontend Developer",
    period: "Jul 2020 - Dec 2022",
    location: "Remote, India",
    bullets: [
      "Built frontend for a global tech company's Business Intelligence unit: a delivery-date estimation portal used during product-launch events with high-traffic spikes.",
      "Engineered complex, data-rich UI: dynamic data grids, multi-level dropdowns and drag-and-drop interfaces for real-time delivery visibility across regions.",
      "Integrated REST APIs with a Python/Flask backend and delivered pixel-perfect, responsive interfaces within a 10+ member cross-functional team.",
    ],
    stack: ["React", "JavaScript", "REST", "Flask"],
  },
];

export type SkillGroup = {
  title: string;
  highlight?: boolean;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Core",
    items: ["React", "Next.js (App Router)", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express", "GraphQL", "REST APIs", "PostgreSQL"],
  },
  {
    title: "AI & Automation",
    highlight: true,
    items: ["LangChain", "OpenAI APIs", "AI Agents (tool calling)", "MCP Servers"],
  },
  {
    title: "State & Data",
    items: ["Redux", "TanStack Query"],
  },
  {
    title: "Cloud & Observability",
    items: ["AWS (S3, EC2, CloudFront)", "Azure", "Grafana", "Prometheus", "ELK Stack"],
  },
  {
    title: "Testing & Tooling",
    items: ["Jest", "React Testing Library", "Cypress", "Docker", "GitHub Actions", "Vite"],
  },
  {
    title: "Also works with",
    items: ["Java / Spring Boot", "Angular"],
  },
];

export type Hobby = {
  icon: "compass" | "bike" | "film";
  title: string;
  detail: string;
  images: string[];
  /** "split" = image gallery beside text; "posters" = full-width row of
      uncropped, full-height images. Defaults to "split". */
  layout?: "split" | "posters";
  tags?: string[];
  places?: {
    countries: { name: string; code: string }[];
    states: string[];
  };
};

/** Fun-mode-only personal side. `images` paths live in /public/images;
    missing files fall back to a placeholder automatically. */
export const hobbies: Hobby[] = [
  {
    icon: "compass",
    title: "Solo travel",
    detail:
      "Mostly solo. I go where I want, at my own pace, and I'm comfortable being dropped somewhere new, which is half the reason relocating doesn't scare me.",
    images: [
      "/images/travel-auli.jpg",
      "/images/travel-hampi.jpg",
      "/images/travel-birbilling.jpg",
    ],
    places: {
      countries: [
        { name: "India", code: "in" },
        { name: "Nepal", code: "np" },
        { name: "Thailand", code: "th" },
        { name: "Cambodia", code: "kh" },
      ],
      states: [
        "Andhra Pradesh",
        "Telangana",
        "Karnataka",
        "Tamil Nadu",
        "Kerala",
        "Maharashtra",
        "Goa",
        "Madhya Pradesh",
        "Himachal Pradesh",
        "Uttarakhand",
        "Sikkim",
        "West Bengal",
        "Delhi",
      ],
    },
  },
  {
    icon: "bike",
    title: "Bike rides",
    detail:
      "Recently got into long rides. Still the best way I've found to switch off, clear my head, and just follow the road for a while.",
    tags: ["Royal Enfield Meteor", "Weekend rides", "Lakeside stops"],
    images: ["/images/rides-enfield.jpg", "/images/rides-glove.jpg"],
  },
  {
    icon: "film",
    title: "Anime & movies",
    layout: "posters",
    detail:
      "Anime and films are how I switch off after a build. My desk wall has quietly become a shrine: One Piece, a katana, Fight Club, and most of Christopher Nolan's filmography.",
    tags: ["One Piece", "Fight Club", "Christopher Nolan"],
    images: ["/images/wall-katana.jpg"],
  },
];

export const nav = [
  { label: "Projects", href: "#projects", mode: "both" },
  { label: "Experience", href: "#experience", mode: "work" },
  { label: "Skills", href: "#skills", mode: "work" },
  { label: "About", href: "#about", mode: "work" },
  { label: "Hobbies", href: "#hobbies", mode: "fun" },
  { label: "Contact", href: "#contact", mode: "both" },
] as const;
