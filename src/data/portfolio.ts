import serenityShot from "@/assets/place-of-serenity.jpg";

export const GITHUB_USERNAME = "Storm-Wind1";
export const GITHUB_URL = "https://github.com/Storm-Wind1";

/** Set these when ready; null shows a "not configured" note in Contact. */
export const LINKEDIN_URL: string | null = null;
export const CONTACT_EMAIL: string | null = "nyambe.lemmy2@gmail.com";

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "approach", label: "Approach" },
  { id: "contact", label: "Contact" },
] as const;

export type Project = {
  name: string;
  category: string;
  description: string;
  tags: string[];
  status: "live" | "upcoming";
  image?: string;
  liveUrl?: string;
  sourceUrl?: string;
};

/** Add new projects here — cards render automatically. */
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
    name: "Upcoming Project",
    category: "E-commerce Experience",
    description: "A future exploration into shopping experiences that feel fast, clear, and easy to trust.",
    tags: ["In planning"],
    status: "upcoming",
  },
  {
    name: "Upcoming Project",
    category: "Interactive Web Application",
    description: "A future exploration into interactive, app-like tools built for the browser.",
    tags: ["In planning"],
    status: "upcoming",
  },
];

export const SKILLS = {
  core: [
    { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Responsive Web Design"] },
    { title: "Development Tools", items: ["Git", "GitHub", "Vite", "VS Code"] },
  ],
  exploring: ["Next.js", "Python", "FastAPI", "AI Integration", "Web Application Security"],
};

export const APPROACH = [
  { n: "01", title: "Discover", text: "Understand the goal, audience, and requirements." },
  { n: "02", title: "Design", text: "Plan an intuitive, visually consistent interface." },
  { n: "03", title: "Develop", text: "Build responsive and maintainable frontend experiences." },
  { n: "04", title: "Refine", text: "Test, improve, and prepare the experience for launch." },
];
