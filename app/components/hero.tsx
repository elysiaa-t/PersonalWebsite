import { profile, stats } from "../content";
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto w-full max-w-5xl px-6 pb-16 pt-20 sm:pb-24 sm:pt-28">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to data analyst &amp; data science internships
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          {profile.tagline}
        </h1>

        <p className="mt-3 font-mono text-sm text-accent sm:text-base">{profile.title}</p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            View projects
            <ArrowRightIcon width={16} height={16} />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <DownloadIcon width={16} height={16} />
            Download resume
          </a>
          <div className="ml-1 flex items-center gap-1">
            <IconLink href={`mailto:${profile.email}`} label="Email">
              <MailIcon />
            </IconLink>
            <IconLink href={profile.linkedin} label="LinkedIn">
              <LinkedInIcon />
            </IconLink>
            <IconLink href={profile.github} label="GitHub">
              <GitHubIcon />
            </IconLink>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col bg-card px-5 py-5">
              <dt className="order-last mt-1 text-xs leading-snug text-muted">{stat.label}</dt>
              <dd className="font-mono text-2xl font-semibold tracking-tight text-accent sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-card hover:text-accent"
    >
      {children}
    </a>
  );
}
