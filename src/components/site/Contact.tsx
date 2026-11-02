import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { AlertTriangle, Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { CONTACT_EMAIL, GITHUB_URL, GITHUB_USERNAME, LINKEDIN_URL, NAV } from "@/data/portfolio";
import { Reveal, SectionHeading, Wordmark } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  projectType: z.string().min(1, "Please choose a project type."),
  message: z.string().trim().min(10, "Tell me a little more (at least 10 characters).").max(2000, "Message is too long (2000 max)."),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const field = "w-full rounded-xl border bg-input/20 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition focus:border-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 aria-[invalid=true]:border-destructive";

export function useCopyUsername() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(GITHUB_USERNAME);
      setCopied(true);
      toast.success(`Copied "${GITHUB_USERNAME}"`);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please copy it manually.");
    }
  };
  return { copied, copy };
}

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState(false);
  const { copied, copy } = useCopyUsername();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Errors = {};
      res.error.issues.forEach((i) => { errs[i.path[0] as keyof Errors] ??= i.message; });
      setErrors(errs);
      setNotice(false);
      return;
    }
    setErrors({});
    setNotice(true);
  };

  const err = (k: keyof Errors) => errors[k] && <p id={`${k}-err`} className="mt-1.5 text-sm text-destructive">{errors[k]}</p>;

  return (
    <section id="contact" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-glow opacity-70" />
      <div className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-36">
        <SectionHeading eyebrow="Contact" title="Have an Idea? Let's Build It." />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">Whether you need a landing page, a business website, or a modern frontend experience, I'd love to hear about your project.</p>
            <ul className="space-y-3">
              <li className="flex items-center justify-between gap-3 rounded-2xl border bg-card p-4">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-cyan">
                  <Github className="size-5" aria-hidden /> <span>github.com/{GITHUB_USERNAME}</span>
                </a>
                <button type="button" onClick={copy} aria-label="Copy GitHub username" className="inline-flex size-9 items-center justify-center rounded-full border transition hover:border-cyan focus-visible:outline-2 focus-visible:outline-ring">
                  {copied ? <Check className="size-4 text-cyan" /> : <Copy className="size-4" />}
                </button>
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-dashed p-4 text-muted-foreground">
                <Linkedin className="size-5" aria-hidden />
                {LINKEDIN_URL ? <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a> : <span>LinkedIn — <em>not configured yet</em></span>}
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-dashed p-4 text-muted-foreground">
                <Mail className="size-5" aria-hidden />
                {CONTACT_EMAIL ? <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground">{CONTACT_EMAIL}</a> : <span>Professional email — <em>not configured yet</em></span>}
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form noValidate onSubmit={onSubmit} className="space-y-5 rounded-3xl border bg-card/80 p-6 shadow-card backdrop-blur md:p-8" aria-describedby="form-status">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
                  <input id="name" name="name" autoComplete="name" maxLength={100} className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
                  {err("name")}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" maxLength={255} className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
                  {err("email")}
                </div>
              </div>
              <div>
                <label htmlFor="projectType" className="mb-2 block text-sm font-medium">Project type</label>
                <select id="projectType" name="projectType" defaultValue="" className={field} aria-invalid={!!errors.projectType} aria-describedby={errors.projectType ? "projectType-err" : undefined}>
                  <option value="" disabled>Select one…</option>
                  <option>Landing page</option>
                  <option>Business website</option>
                  <option>Frontend experience</option>
                  <option>Something else</option>
                </select>
                {err("projectType")}
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
                <textarea id="message" name="message" rows={5} maxLength={2000} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
                {err("message")}
              </div>
              <button type="submit" className="w-full rounded-full bg-foreground px-6 py-3 font-medium text-background transition hover:shadow-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">Send Message</button>
              <div id="form-status" role="status" aria-live="polite">
                {notice && (
                  <div className="flex gap-3 rounded-2xl border border-primary/40 bg-accent p-4 text-sm">
                    <AlertTriangle className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden />
                    <p><strong>Message not sent — the contact form isn't connected yet.</strong> Your details look good, but no delivery service is set up, so nothing was sent or stored. Please reach out via GitHub for now.</p>
                  </div>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div><Wordmark /><p className="mt-1 text-sm text-muted-foreground">Building digital experiences that make an impact.</p></div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {NAV.slice(1).map((n) => <a key={n.id} href={`#${n.id}`} className="hover:text-foreground">{n.label}</a>)}
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a>
        </nav>
        <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Lemmy Nyambe · Windhoek</p>
      </div>
    </footer>
  );
}
