import { projects } from "../content";
import { ChartIcon, TrophyIcon } from "./icons";
import { Section, Tag } from "./section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects that answer real questions"
      description="Analysis, modeling, and product work — each with a concrete outcome."
    >
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group relative rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/60 sm:p-8"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
              <div className="lg:w-64 lg:shrink-0">
                <div className="mb-3 flex items-center gap-2 font-mono text-xs text-muted">
                  <span className="text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden>/</span>
                  <span>{project.period}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {project.role} · {project.org}
                </p>
                {project.outcome ? (
                  <p className="mt-4 inline-flex items-start gap-2 rounded-lg bg-accent-soft px-3 py-2 text-sm font-medium text-accent-strong">
                    {project.featured ? (
                      <TrophyIcon width={16} height={16} className="mt-0.5 shrink-0" />
                    ) : (
                      <ChartIcon width={16} height={16} className="mt-0.5 shrink-0" />
                    )}
                    <span>{project.outcome}</span>
                  </p>
                ) : null}
              </div>

              <div className="flex-1">
                <p className="text-base leading-relaxed">{project.summary}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
