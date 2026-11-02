import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { About, Approach, Hero, Projects, Skills } from "@/components/site/Sections";
import { Contact, Footer } from "@/components/site/Contact";

const title = "STORM — Lemmy Nyambe, Web Developer in Windhoek";
const description = "Portfolio of Lemmy Nyambe (STORM), a Namibia-based web developer building modern, responsive, purposeful digital experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
