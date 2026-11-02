import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-5xl leading-[1.02] md:text-7xl">{title}</h2>
    </Reveal>
  );
}

export function Wordmark() {
  return (
    <span className="font-display text-2xl tracking-wide">
      STORM<span className="text-gradient">.</span>
    </span>
  );
}
