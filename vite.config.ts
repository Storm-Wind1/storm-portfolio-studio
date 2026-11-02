// Lovable's configuration helper already registers TanStack Start, React,
// Tailwind and Nitro. Do not register any of those plugins a second time.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// The same source powers three builds:
// - Lovable preview / hosting: base "/", SSR enabled
// - Existing project GitHub Pages: base "/storm-portfolio-studio/", prerender
// - Clean user GitHub Pages: base "/", prerender
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isUserHomepage = process.env.GITHUB_PAGES_ROOT === "true";

export default defineConfig({
  vite: {
    base: isGitHubPages && !isUserHomepage ? "/storm-portfolio-studio/" : "/",
  },
  tanstackStart: {
    // Preserve Lovable's original server entry.
    server: { entry: "server" },
    prerender: {
      enabled: isGitHubPages,
      crawlLinks: true,
      failOnError: true,
    },
  },
});
