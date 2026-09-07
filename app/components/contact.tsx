import { profile } from "../content";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-12 sm:px-12 sm:py-16">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden />
          <div className="relative max-w-3xl">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Get in touch
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a dataset that needs a story? Let&apos;s&nbsp;talk.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m actively looking for data analyst and data science internships. The
              fastest way to reach me is email — I usually reply within a day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                <MailIcon width={16} height={16} />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <LinkedInIcon width={16} height={16} />
                LinkedIn
                <ArrowUpRightIcon width={14} height={14} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <GitHubIcon width={16} height={16} />
                GitHub
                <ArrowUpRightIcon width={14} height={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
