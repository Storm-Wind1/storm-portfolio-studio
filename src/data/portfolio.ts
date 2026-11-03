import serenityShot from "@/assets/place-of-serenity.jpg";
import novaShot from "@/assets/nova-store.jpg";

export const GITHUB_USERNAME = "Storm-Wind1";
export const GITHUB_URL = "https://github.com/Storm-Wind1";

/** Set these when ready; null shows a "not configured" note in Contact. */
export const LINKEDIN_URL: string | null = "https://www.linkedin.com/in/lemmy-nyambe";
export const CONTACT_EMAIL: string | null = "nyambe.lemmy2@gmail.com";

export const LINKEDIN_PROFILE = {
  name: "Lemmy Nyambe",
  initials: "LN",
  headline: "Web & Backend Developer",
  location: "Windhoek, Namibia",
  summary: "Responsive websites, Python backends, and interactive web experiences.",
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "approach", label: "Approach" },
  { id: "contact", label: "Contact" },
] as const;

export type Project = {
  name: string;
  category: string;
  description: string;
  tags: string[];
  status: "live";
  image?: string;
  liveUrl?: string;
  sourceUrl?: string;
};

/** Add finished, publicly viewable projects here — both project sections update automatically. */
export const PROJECTS: Project[] = [
  {
    name: "Place of Serenity",
    category: "Responsive Website / Frontend Development",
    description:
      "A modern, responsive website with an organized multi-section layout, engaging visual presentation, and smooth page navigation. Built using a component-based React architecture with TypeScript and Tailwind CSS.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    status: "live",
    image: serenityShot,
    liveUrl: "https://placeserenity.com/",
    sourceUrl: "https://github.com/Storm-Wind1/place-of-serenity-landing",
  },
  {
    name: "NOVA Store",
    category: "E-commerce / Interactive Frontend Demo",
    description:
      "A fictional premium tech and lifestyle store with 16 products, searchable and filterable shopping, product options, persistent cart and wishlist, and a validated demo checkout. Built to demonstrate a complete shopping experience without real payments or order fulfillment.",
    tags: ["React", "TypeScript", "TanStack Router", "Tailwind CSS", "localStorage"],
    status: "live",
    image: novaShot,
    liveUrl: "https://storm-wind1.github.io/nova-storefront-studio/",
    sourceUrl: "https://github.com/Storm-Wind1/nova-storefront-studio",
  },
];

// An evidence-led overview of my practical work and areas I am still learning.
// Add demonstration links only when a public project or case study is available.
export const SKILLS = {
  categories: [
    {
      number: "01",
      title: "Frontend Development",
      status: "Hands-on",
      description: "Building responsive interfaces and modern web experiences.",
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Responsive Design"],
    },
    {
      number: "02",
      title: "Backend & Programming",
      status: "Hands-on",
      description: "Building Python application logic, API endpoints, and connected backend services.",
      items: ["Python", "Flask", "Django", "FastAPI", "REST APIs"],
    },
    {
      number: "03",
      title: "Artificial Intelligence & ML",
      status: "Project experience",
      description: "Exploring intelligent systems, computer vision, and practical ML applications.",
      items: ["TensorFlow", "Machine Learning", "Computer Vision", "AI Integration"],
    },
    {
      number: "04",
      title: "Developer Tools",
      status: "Hands-on",
      description: "Version control, development environments, and project workflows.",
      items: ["Git", "GitHub", "VS Code", "Vite"],
    },
  ],
  exploring: ["Next.js", "Cybersecurity Fundamentals", "Secure Web Development", "Advanced AI/ML"],
  appliedProjects: PROJECTS.map((project) => ({
    name: project.name,
    category: project.category,
    technologies: project.tags,
    url: project.liveUrl,
  })),
};

export const SERVICES = [
  {
    number: "01",
    title: "Business Websites",
    subtitle: "Design & frontend",
    description: "Responsive landing pages and business websites that communicate clearly and work well on mobile.",
    icon: "globe",
    tags: ["Landing pages", "Responsive websites", "Modern interfaces"],
  },
  {
    number: "02",
    title: "Backend Development & APIs",
    subtitle: "Python & server-side",
    description: "Python backend logic, API endpoints, and integrations that connect interfaces to practical application functionality.",
    icon: "server",
    tags: ["Python", "Flask / Django", "FastAPI", "REST APIs"],
  },
  {
    number: "03",
    title: "Full-Stack Web Applications",
    subtitle: "End-to-end workflows",
    description: "Web applications that bring frontend experiences together with server-side workflows and application logic.",
    icon: "layers",
    tags: ["React", "Backend services", "Connected features"],
  },
  {
    number: "04",
    title: "AI-Powered Prototypes",
    subtitle: "Practical AI integration",
    description: "Prototyping applications with AI-assisted features, automation, and integrations.",
    icon: "brain",
    tags: ["AI APIs", "Workflow prototypes", "Python"],
  },
  {
    number: "05",
    title: "Website Improvements",
    subtitle: "Modernization",
    description: "Improving existing websites through responsive updates, usability refinements, and frontend feature work.",
    icon: "wrench",
    tags: ["Responsive fixes", "UX improvements", "Frontend updates"],
  },
  {
    number: "06",
    title: "Developer & Security Tooling",
    subtitle: "Exploratory project work",
    description: "Exploring experimental developer tools, scanner integration, and security-conscious workflows.",
    icon: "shield",
    tags: ["Security workflows", "Scanner integration", "Developer utilities"],
  },
] as const;

export const APPROACH = [
  { n: "01", title: "Discover", text: "Understand the goal, audience, and requirements." },
  { n: "02", title: "Design", text: "Plan an intuitive, visually consistent interface." },
  { n: "03", title: "Develop", text: "Build responsive and maintainable frontend experiences." },
  { n: "04", title: "Refine", text: "Test, improve, and prepare the experience for launch." },
];
