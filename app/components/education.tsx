import { education } from "../content";
import { Section, Tag } from "./section";

export function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{education.school}</h3>
            <p className="text-sm text-muted">{education.college}</p>
            <p className="mt-3 text-base">{education.degree}</p>
            <p className="text-sm text-muted">{education.minor}</p>
          </div>
          <div className="text-left font-mono text-sm text-muted sm:text-right">
            <p>{education.graduation}</p>
            <p className="mt-1 text-accent">{education.gpa}</p>
          </div>
        </div>
        <div className="mt-6 border-t border-border pt-5">
          <p className="mb-2 text-xs uppercase tracking-[0.15em] text-muted">
            Relevant coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <Tag key={course}>{course}</Tag>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
