import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, BrainCircuit, Code2, Compass, Github, MapPin, Server, Sparkles, Telescope, Wrench } from "lucide-react";
import { APPROACH, GITHUB_URL, PROJECTS, SKILLS, type Project } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { ActionCard } from "./ActionCard";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const btnBase = "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
      <div aria-hidden className="absolute inset-0 bg-glow" />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <Reveal><p className="eyebrow mb-6">STORM / WEB DEVELOPER</p></Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">
              Hi, I'm Lemmy. <span className="italic text-gradient">I build for the web.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I'm a Namibia-based developer building responsive websites, Python backend services, and practical full-stack applications. I enjoy connecting polished interfaces to real functionality and exploring AI-assisted tools.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className={`${btnBase} bg-foreground text-background hover:shadow-glow`}>View My Work <ArrowDown className="size-4" /></a>
            <a href="#contact" className={`${btnBase} border hover:border-primary hover:bg-accent`}>Let's Work Together</a>
            <a href={GITHUB_URL} {...ext} className={`${btnBase} text-muted-foreground hover:text-foreground`}><Github className="size-4" /> Explore My GitHub <ArrowUpRight className="size-4" /></a>
          </Reveal>
          <p className="mt-10 font-mono text-xs text-muted-foreground">Web & Backend Developer · Creative Technologist · Problem Solver</p>
        </div>

        <motion.div
          aria-hidden
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="absolute inset-0 rounded-full bg-accent-gradient opacity-20 blur-3xl" />
          <motion.div
            className="absolute inset-4 rounded-full border border-dashed border-foreground/15"
            animate={reduce ? { rotate: 0 } : { rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-12 flex flex-col justify-between rounded-[2rem] border bg-card/80 p-6 shadow-card backdrop-blur">
            <div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-primary" /><span className="size-2.5 rounded-full bg-cyan" /><span className="size-2.5 rounded-full bg-muted-foreground/40" /></div>
            <div className="text-center font-display text-[7rem] leading-none sm:text-[8rem]">S<span className="text-gradient">.</span></div>
            <pre className="font-mono text-[11px] leading-5 text-muted-foreground">
{`const storm = {
  base: `}<span className="text-cyan">"Windhoek, NA"</span>{`,
  ships: `}<span className="text-primary">"purposeful web"</span>{`,
};`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function About() {
  const highlights = [
    { icon: Compass, label: "Purposeful Design" },
    { icon: Code2, label: "Clean Development" },
    { icon: Sparkles, label: "Continuous Learning" },
    { icon: MapPin, label: "Windhoek, Namibia" },
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
      <SectionHeading eyebrow="About" title="More Than Just Code." />
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p><span className="text-foreground">I'm Lemmy Nyambe, a Namibia-based developer</span> with a passion for technology, creative problem-solving, and building things that people can use. I enjoy bringing ideas to life through frontend interfaces, Python backend development, REST APIs, and interactive applications.</p>
          <p>My published work includes Place of Serenity, a responsive website, and NOVA Store, an interactive e-commerce frontend demo. Beyond these websites, I'm continuing to develop my skills in software engineering, backend systems, and AI integration.</p>
          <p className="font-display text-3xl leading-snug text-foreground">"I believe great development combines clean implementation, meaningful design, and an understanding of what users actually need."</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="grid grid-cols-2 gap-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="group rounded-2xl border bg-card p-5 transition hover:border-primary/50 hover:shadow-glow">
                <Icon className="mb-6 size-5 text-cyan transition group-hover:text-primary" aria-hidden />
                <span className="font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const arsenalIcons = [Code2, Server, BrainCircuit, Wrench];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-y bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-glow opacity-30" />
      <div className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
        <SectionHeading eyebrow="Technical expertise" title="My Technical Arsenal." />
        <Reveal className="-mt-7 mb-12 max-w-2xl md:-mt-10 md:mb-16">
          <p className="text-lg leading-relaxed text-muted-foreground">
            A growing toolkit for building software, exploring intelligent systems, and solving real-world problems.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {SKILLS.categories.map((group, i) => {
            const Icon = arsenalIcons[i];
            const cyan = i % 2 === 0;
            return (
              <Reveal
                key={group.number}
                delay={i * 0.07}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card sm:p-8"
              >
                <div aria-hidden className={`pointer-events-none absolute right-0 top-0 size-36 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${cyan ? "bg-cyan/5 opacity-40" : "bg-primary/10 opacity-40"}`} />
                <div className="relative mb-7 flex items-start justify-between gap-4">
                  <div className={`flex size-13 items-center justify-center rounded-2xl border ${cyan ? "border-cyan/25 bg-cyan/10 text-cyan" : "border-primary/25 bg-primary/10 text-primary"}`}>
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-muted-foreground">{group.number} / 04</span>
                </div>
                <div className="relative mb-3 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{group.title}</h3>
                  <span className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide ${cyan ? "border-cyan/25 text-cyan" : "border-primary/35 text-primary"}`}>
                    {group.status}
                  </span>
                </div>
                <p className="relative mb-7 max-w-md text-sm leading-relaxed text-muted-foreground">{group.description}</p>
                <ul className="relative mt-auto flex flex-wrap gap-2" aria-label={`${group.title} technologies`}>
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-full border bg-secondary/60 px-3.5 py-2 text-sm text-foreground transition-colors duration-200 ${cyan ? "hover:border-cyan/50 hover:bg-cyan/10" : "hover:border-primary/50 hover:bg-primary/10"}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-5 rounded-3xl border border-dashed border-primary/30 bg-card/40 p-6 sm:p-8">
          <div className="flex flex-wrap items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
              <Telescope className="size-6" aria-hidden />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Currently Exploring</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Technologies and disciplines I'm actively expanding my knowledge in.
              </p>
            </div>
          </div>
          <ul className="mt-7 flex flex-wrap gap-2">
            {SKILLS.exploring.map((item) => (
              <li key={item} className="rounded-full border border-primary/30 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-20 md:mt-24">
          <Reveal className="mb-8 max-w-2xl">
            <p className="eyebrow mb-3">Skills in practice</p>
            <h3 className="font-display text-4xl leading-tight sm:text-5xl">Applied in Real Projects.</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Explore the technologies used in my published websites and interactive demos.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {SKILLS.appliedProjects.map((project, i) => (
              <Reveal
                key={project.name}
                delay={i * 0.07}
                className="group flex h-full flex-col rounded-2xl border bg-card/80 p-6 transition-all duration-300 hover:border-cyan/40 hover:shadow-card"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-cyan">0{i + 1}</span>
                  <span className="text-xs text-muted-foreground">{project.category}</span>
                </div>
                <h4 className="text-lg font-semibold sm:text-xl">{project.name}</h4>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies used for ${project.name}`}>
                  {project.technologies.map((tech) => (
                    <li key={tech} className="rounded-full border bg-secondary px-3 py-1.5 font-mono text-xs text-muted-foreground">{tech}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  {project.url && (
                    <ActionCard
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View live project
                    </ActionCard>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <Reveal className="group grid overflow-hidden rounded-3xl border bg-card shadow-card transition hover:border-primary/40 md:col-span-2 lg:grid-cols-[1.3fr_1fr]">
      <a href={p.liveUrl} {...ext} aria-label={`Open ${p.name} live site`} className="relative block overflow-hidden bg-muted">
        {p.image ? (
          <img src={p.image} alt={`Screenshot of the ${p.name} website homepage`} loading="lazy" width={1200} height={750} className="h-full w-full object-cover object-left-top transition duration-700 group-hover:scale-[1.03]" />
        ) : (
          <div className="flex aspect-video items-center justify-center font-mono text-xs text-muted-foreground">Screenshot placeholder</div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 font-mono text-xs backdrop-blur">Featured · Live</span>
      </a>
      <div className="flex flex-col p-8 md:p-10">
        <p className="eyebrow">{p.category}</p>
        <h3 className="mt-4 font-display text-5xl">{p.name}</h3>
        <p className="mt-5 leading-relaxed text-muted-foreground">{p.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {p.tags.map((t) => <li key={t} className="rounded-full bg-secondary px-3 py-1 font-mono text-xs">{t}</li>)}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          {p.liveUrl && <a href={p.liveUrl} {...ext} className={`${btnBase} bg-foreground text-background hover:shadow-glow`}>Live Preview <ArrowUpRight className="size-4" /></a>}
          {p.sourceUrl && <a href={p.sourceUrl} {...ext} className={`${btnBase} border hover:border-primary`}><Github className="size-4" /> View Source</a>}
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
      <SectionHeading eyebrow="Projects" title="Selected work." />
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p) => <ProjectCard key={p.name} p={p} />)}
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section id="approach" className="border-y bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
        <SectionHeading eyebrow="My approach" title="From Idea to Experience." />
        <ol className="grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="group h-full bg-card p-8 transition hover:bg-accent">
              <li className="list-none">
                <span className="font-mono text-sm text-gradient">{s.n}</span>
                <h3 className="mt-10 font-display text-4xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
