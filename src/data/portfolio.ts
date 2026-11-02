import serenityShot from "@/assets/place-of-serenity.jpg";

export const GITHUB_USERNAME = "Storm-Wind1";
export const GITHUB_URL = "https://github.com/Storm-Wind1";

/** Set these when ready; null shows a "not configured" note in Contact. */
export const LINKEDIN_URL: string | null = "https://www.linkedin.com/in/lemmy-nyambe-a8449632b/";
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
      description: "Developing application logic, backend services, and web applications.",
      items: ["Python", "Flask", "Django"],
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
  exploring: ["Next.js", "FastAPI", "Cybersecurity", "Web Application Security", "Advanced AI/ML"],
  appliedProjects: [
    {
      name: "Place of Serenity",
      category: "Responsive website",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      url: "https://placeserenity.com/",
    },
    {
      name: "Flask Lab Application",
      category: "Backend project work",
      technologies: ["Python", "Flask"],
    },
    {
      name: "Medical Management Application",
      category: "Application development project",
      technologies: ["Python", "Django"],
    },
    {
      name: "Currency Note Recognition",
      category: "Machine learning project work",
      technologies: ["Python", "TensorFlow"],
    },
  ],
};

export const APPROACH = [
  { n: "01", title: "Discover", text: "Understand the goal, audience, and requirements." },
  { n: "02", title: "Design", text: "Plan an intuitive, visually consistent interface." },
  { n: "03", title: "Develop", text: "Build responsive and maintainable frontend experiences." },
  { n: "04", title: "Refine", text: "Test, improve, and prepare the experience for launch." },
];
