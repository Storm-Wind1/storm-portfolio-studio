# Storm Portfolio Studio

Create a new, separate project named "STORM — Developer Portfolio" and build the complete polished website in this first build turn. This is a real professional portfolio for Lemmy Nyambe, a Namibia-based web developer and technology enthusiast publishing work as STORM (GitHub: https://github.com/Storm-Wind1). Do not modify the existing workspace project.

BRAND
Public brand: STORM.
Headline: Web Developer | Creative Technologist | Problem Solver.
Location: Windhoek, Namibia.
Brand message: "Building digital experiences that make an impact."
Featured live project: https://placeserenity.com/
Featured source: https://github.com/Storm-Wind1/place-of-serenity-landing
Position around thoughtful design, practical problem-solving, user experience, and modern web development. Never invent employment history, clients, testimonials, certifications, completed projects, awards, statistics, email addresses, social profiles, or years of experience.

VISUAL DIRECTION
Premium, distinctive editorial/developer aesthetic, not a generic portfolio template: deep charcoal/near-black, soft ivory typography, restrained electric-violet and cool-cyan accents, confident typography, generous whitespace, subtle gradients, tasteful motion/micro-interactions, excellent contrast, distinctive project cards, refined monogram/wordmark "STORM.". Responsive from mobile up. Use Framer Motion if supported and respect reduced-motion. No excessive particles/clutter. Do not generate a fictional portrait; use an optional replaceable photo placeholder or elegant monogram.

PAGE / CONTENT
1) Sticky navigation: STORM. | Home | About | Skills | Projects | Approach | Contact, plus prominent Hire Me action. Functional mobile menu, smooth section navigation with sticky-header offset, active section highlight, keyboard accessibility.

2) Hero: eyebrow "STORM / WEB DEVELOPER"; headline exactly "Hi, I'm Lemmy. I build for the web."; supporting copy: "I'm a web developer based in Namibia, passionate about building modern, responsive, and purposeful digital experiences. I turn ideas into websites that look great, work smoothly, and deliver real value." CTAs: View My Work (scroll projects), Let's Work Together (scroll contact), Explore My GitHub (opens https://github.com/Storm-Wind1 in new tab). Add sophisticated abstract/code-inspired graphic or personal monogram.

3) About: heading "More Than Just Code." Biography: "I'm Lemmy Nyambe, a Namibia-based developer with a passion for technology, creative problem-solving, and building things that people can use. I enjoy bringing ideas to life through modern web development, from carefully designed landing pages to interactive digital experiences. My interests go beyond website design. I'm also interested in software engineering, cybersecurity, AI-powered tools, and the technologies shaping the future of digital products. I believe great development combines clean implementation, meaningful design, and an understanding of what users actually need." Highlight Purposeful Design, Clean Development, Continuous Learning, and Windhoek, Namibia.

4) Skills in attractive categories. Frontend: HTML5, CSS3, JavaScript, TypeScript, React, Tailwind CSS, Responsive Web Design. Development tools: Git, GitHub, Vite, VS Code. Additional technologies / exploration: Next.js, Python, FastAPI, AI Integration, Web Application Security. Distinguish main stack from additional exploration; do not claim expertise or use fabricated skill percentages.

5) Projects: reusable project-card system with structured data array for easy future additions. Show finished projects with public demo links. The current projects are:
Name: Place of Serenity.
Category: Responsive Website / Frontend Development.
Description: "A modern, responsive website with an organized multi-section layout, engaging visual presentation, and smooth page navigation. Built using a component-based React architecture with TypeScript and Tailwind CSS."
Tags: React, TypeScript, Vite, Tailwind CSS, Framer Motion.
Live Preview: https://placeserenity.com/
View Source: https://github.com/Storm-Wind1/place-of-serenity-landing
Name: NOVA Store.
Category: E-commerce / Interactive Frontend Demo.
Description: A fictional tech and lifestyle store demonstrating product browsing, cart and wishlist persistence, and a demo checkout without real payments or fulfillment.
Tags: React, TypeScript, TanStack Router, Tailwind CSS, localStorage.
Live Preview: https://storm-wind1.github.io/nova-storefront-studio/
View Source: https://github.com/Storm-Wind1/nova-storefront-studio
Use real screenshots. Add new projects gradually as they are finished and publicly available. Keep unpublished work and future-project placeholders out of the portfolio. Both Selected Work and Skills in Practice use the PROJECTS array in src/data/portfolio.ts.

6) Approach: heading "From Idea to Experience." Four stages: 01 Discover — Understand the goal, audience, and requirements. 02 Design — Plan an intuitive, visually consistent interface. 03 Develop — Build responsive and maintainable frontend experiences. 04 Refine — Test, improve, and prepare the experience for launch. Present as personal working approach, not past client claims.

7) Contact: heading "Have an Idea? Let's Build It." Copy: "Whether you need a landing page, a business website, or a modern frontend experience, I'd love to hear about your project." Contact form fields name, email, project type, message; GitHub; optional LinkedIn and professional email placeholders clearly marked as unconfigured. Validate fields and show meaningful feedback. Do not fake form submission: with no configured backend, show a clear setup-required notice; do not pretend messages have been sent. No unnecessary data collection.

FUNCTIONAL / QUALITY
Functional links, controls, navigation and hover states; accessible labels/focus states, semantic structure, reduced motion, responsive layouts; SEO title/description, Open Graph metadata, STORM monogram favicon, copy-to-clipboard GitHub username, footer with real links and copyright, proper rel attributes for external links, fast-loading imagery, custom 404 page. No fake visitor stats, testimonial blocks, client logos or achievements. Clear copy, confident approachable professional tone.

TECH
Use React + TypeScript + Tailwind CSS + shadcn/ui + Lucide icons + Framer Motion; prefer Vite where supported. Clean reusable components and static-hosting-friendly architecture. Do not provision a database, Supabase, auth, backend services, payment processing, API keys or secrets. The site should be maintainable and easy to update.

Build the full finished experience now, not a plan or wireframe. Prioritize visual quality, accurate content, mobile polish, and working interactions in this initial build. Before finishing, check the layout at desktop/mobile sizes, all navigation and external links, and the contact form's non-configured state.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://storm-portfolio-studio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e6b4b931-67b3-4bfd-b037-8ecc2fa934df).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
