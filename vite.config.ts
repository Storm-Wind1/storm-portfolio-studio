// Lovable's configuration helper already registers the React, TanStack Start,
// Tailwind, and Nitro plugins. Do not register those plugins a second time.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Enable GitHub Pages-specific settings only in the GitHub Actions build.
// The normal Lovable preview and deployment keep their existing root URL.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  vite: {
    base: isGitHubPages ? "/storm-portfolio-studio/" : "/",
  },
  tanstackStart: {
    // Retain Lovable's existing custom server entry.
    server: { entry: "server" },
    // GitHub Pages cannot run a server, so render the page during the build.
    // Keep Lovable's usual server-rendered build unchanged.
    prerender: {
      enabled: isGitHubPages,
      crawlLinks: true,
      failOnError: true,
    },
  },
});
