import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { AlertTriangle, ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { CONTACT_EMAIL, GITHUB_URL, GITHUB_USERNAME, LINKEDIN_PROFILE, LINKEDIN_URL, NAV } from "@/data/portfolio";
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

function LinkedInPreview() {
  if (!LINKEDIN_URL) return null;
  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${LINKEDIN_PROFILE.name}'s LinkedIn profile`}
      className="group/linkedin block overflow-hidden rounded-3xl border bg-card shadow-card transition duration-200 hover:-translate-y-1 hover:border-[#70b5f9]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan motion-reduce:transform-none motion-reduce:transition-none"
    >
      <div className="relative flex h-20 items-start justify-between overflow-hidden bg-linear-to-br from-[#0a66c2]/50 via-[#173451] to-[#191d32] px-6 pt-4">
        <span aria-hidden className="absolute -right-8 -top-16 size-48 rounded-full border border-white/10" />
        <span aria-hidden className="absolute right-6 -top-10 size-36 rounded-full border border-white/10" />
        <span className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">Let's connect</span>
        <span className="relative flex items-center gap-1.5 text-sm font-semibold text-white"><Linkedin className="size-4" aria-hidden /> LinkedIn</span>
      </div>
      <div className="relative px-6 pb-6">
        <div aria-hidden className="-mt-8 mb-4 flex size-16 items-center justify-center rounded-2xl border-4 border-card bg-secondary font-display text-3xl text-foreground shadow-lg">
          {LINKEDIN_PROFILE.initials}
        </div>
        <h3 className="text-xl font-semibold tracking-tight">{LINKEDIN_PROFILE.name}</h3>
        <p className="mt-1 text-sm text-foreground/90">{LINKEDIN_PROFILE.headline}</p>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="size-3.5" aria-hidden /> {LINKEDIN_PROFILE.location}</p>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{LINKEDIN_PROFILE.summary}</p>
        <span className="mt-5 flex items-center justify-between gap-3 border-t border-foreground/10 pt-4 text-sm font-semibold text-[#8ac6ff]">
          View LinkedIn profile <ArrowUpRight className="size-4 transition-transform group-hover/linkedin:translate-x-0.5 group-hover/linkedin:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none" aria-hidden />
        </span>
      </div>
    </a>
  );
}

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState(false);
  const { copied, copy } = useCopyUsername();

  const clearError = (key: keyof Errors) => {
    setErrors((current) => ({ ...current, [key]: undefined }));
    setNotice(false);
  };

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

    // GitHub Pages cannot deliver mail on its own. Open a prepared email
    // draft instead of incorrectly claiming that the form was submitted.
    if (!CONTACT_EMAIL) return;
    const { name, email, projectType, message } = res.data;
    const subject = `New ${projectType} inquiry — STORM portfolio`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      "",
      "Message:",
      message,
    ].join("\n");
    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
            <LinkedInPreview />
            <ul className="space-y-3">
              {CONTACT_EMAIL && (
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-3 rounded-2xl border bg-card p-4 transition-colors hover:border-cyan/60 hover:text-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                  >
                    <Mail className="size-5 shrink-0" aria-hidden />
                    <span className="min-w-0 break-all">{CONTACT_EMAIL}</span>
                  </a>
                </li>
              )}
              <li className="group relative flex items-center justify-between gap-3 rounded-2xl border bg-card p-4 transition-colors hover:border-cyan/60 focus-within:border-cyan/60">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  className="absolute inset-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                />
                <span className="pointer-events-none flex min-w-0 items-center gap-3 transition-colors group-hover:text-cyan">
                  <Github className="size-5 shrink-0" aria-hidden />
                  <span className="break-all">github.com/{GITHUB_USERNAME}</span>
                </span>
                <button
                  type="button"
                  onClick={copy}
                  aria-label="Copy GitHub username"
                  className="relative z-10 inline-flex size-9 shrink-0 items-center justify-center rounded-full border transition hover:border-cyan focus-visible:outline-2 focus-visible:outline-ring"
                >
                  {copied ? <Check className="size-4 text-cyan" /> : <Copy className="size-4" />}
                </button>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form noValidate onSubmit={onSubmit} className="space-y-5 rounded-3xl border bg-card/80 p-6 shadow-card backdrop-blur md:p-8" aria-describedby="form-status">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
                  <input id="name" name="name" autoComplete="name" maxLength={100} onChange={() => clearError("name")} className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
                  {err("name")}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" maxLength={255} onChange={() => clearError("email")} className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} />
                  {err("email")}
                </div>
              </div>
              <div>
                <label htmlFor="projectType" className="mb-2 block text-sm font-medium">Project type</label>
                <select id="projectType" name="projectType" defaultValue="Landing page" onChange={() => clearError("projectType")} className={`${field} cursor-pointer`} style={{ colorScheme: "dark" }} aria-invalid={!!errors.projectType} aria-describedby={errors.projectType ? "projectType-err" : undefined}>
                  <option>Landing page</option>
                  <option>Business website</option>
                  <option>Frontend experience</option>
                  <option>Something else</option>
                </select>
                {err("projectType")}
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
                <textarea id="message" name="message" rows={5} maxLength={2000} onChange={() => clearError("message")} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
                {err("message")}
              </div>
              <button type="submit" className="w-full rounded-full bg-foreground px-6 py-3 font-medium text-background transition hover:shadow-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">Open Email Draft</button>
              <p className="text-center text-xs text-muted-foreground">We'll prepare your message in your email app. You'll review and send it there.</p>
              <div id="form-status" role="status" aria-live="polite">
                {notice && (
                  <div className="flex gap-3 rounded-2xl border border-primary/40 bg-accent p-4 text-sm">
                    <AlertTriangle className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden />
                    <p>{CONTACT_EMAIL ? <>Your email app should open with a prepared message. <strong>No email has been sent yet.</strong> Please press Send in your email app. If nothing opens, email <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a> directly.</> : <>Email is not configured yet. Nothing was sent or stored. Please reach out via GitHub.</>}</p>
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
