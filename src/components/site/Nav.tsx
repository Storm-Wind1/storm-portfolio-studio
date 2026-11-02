import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/data/portfolio";
import { Wordmark } from "./Reveal";
import { cn } from "@/lib/utils";

export function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-colors duration-300", scrolled || open ? "border-b bg-background/80 backdrop-blur-xl" : "bg-transparent")}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#home" aria-label="STORM — back to top" className="rounded focus-visible:outline-2 focus-visible:outline-ring"><Wordmark /></a>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={cn("relative rounded-full px-3 py-2 text-sm transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring", active === n.id ? "text-foreground" : "text-muted-foreground")}
              >
                {n.label}
                {active === n.id && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-accent-gradient" />}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition hover:shadow-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-flex">Hire Me</a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border lg:hidden focus-visible:outline-2 focus-visible:outline-ring"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className={cn("block py-3 font-display text-3xl", active === n.id ? "text-gradient" : "text-foreground")}>{n.label}</a>
              </li>
            ))}
            <li className="pt-3">
              <a href="#contact" onClick={() => setOpen(false)} className="block rounded-full bg-foreground py-3 text-center font-medium text-background">Hire Me</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
