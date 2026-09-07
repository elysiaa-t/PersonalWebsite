import { experience } from "../content";
import { Section } from "./section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Leadership & involvement"
      title="Experience"
      description="Roles where I've managed budgets, logistics, and people — the same rigor I bring to data."
    >
      <ol className="relative border-l border-border pl-8">
        {experience.map((item) => (
          <li key={`${item.org}-${item.role}`} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-border bg-background"
              aria-hidden
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold tracking-tight">
                {item.role}
                <span className="font-normal text-muted"> · {item.org}</span>
              </h3>
              <p className="font-mono text-xs text-muted">{item.period}</p>
            </div>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
