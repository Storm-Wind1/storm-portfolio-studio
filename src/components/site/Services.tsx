import { BrainCircuit, Globe2, Layers3, Server, ShieldCheck, Wrench } from "lucide-react";
import { SERVICES } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { ActionCard } from "./ActionCard";

const icons = {
  globe: Globe2,
  server: Server,
  layers: Layers3,
  brain: BrainCircuit,
  wrench: Wrench,
  shield: ShieldCheck,
} as const;

export function Services() {
  return (
    <section id="services" className="relative border-y bg-surface">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-glow opacity-20" />
      <div className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
        <SectionHeading eyebrow="How I can help" title="What I Can Build For You." />
        <Reveal className="-mt-7 mb-12 max-w-3xl md:-mt-10 md:mb-16">
          <p className="text-lg leading-relaxed text-muted-foreground">
            From polished websites to Python backend services and full-stack applications,
            I work across the interface and the logic behind it. I also explore
            AI integration and developer tools through hands-on projects.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = icons[service.icon];
            const cyan = i % 2 === 0;
            return (
              <Reveal
                key={service.number}
                delay={(i % 3) * 0.07}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card sm:p-7"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className={`flex size-12 items-center justify-center rounded-2xl border ${cyan ? "border-cyan/25 bg-cyan/10 text-cyan" : "border-primary/30 bg-primary/10 text-primary"}`}>
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <span className="font-mono text-xs tracking-wider text-muted-foreground">{service.number} / 06</span>
                </div>
                <p className="mb-2 font-mono text-xs text-cyan">{service.subtitle}</p>
                <h3 className="text-xl font-semibold leading-snug tracking-tight">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${service.title} capabilities`}>
                  {service.tags.map((tag) => (
                    <li key={tag} className="rounded-full border bg-secondary/70 px-3 py-1.5 text-xs text-foreground">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <ActionCard href="#contact">Discuss a Project</ActionCard>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-9 rounded-2xl border border-primary/25 bg-card/60 px-6 py-5 sm:px-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Explore my published work:</span>{" "}
            Visit Place of Serenity and try the NOVA Store e-commerce demo to see my frontend work in action.
            View both in <a href="#projects" className="font-medium text-cyan underline underline-offset-4 hover:text-foreground">Selected Work</a>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
