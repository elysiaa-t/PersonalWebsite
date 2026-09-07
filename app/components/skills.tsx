import { skillGroups } from "../content";
import { Section } from "./section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Skills"
      description="The stack I reach for, from raw data to a finished dashboard or deck."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.name} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold tracking-tight">{group.name}</h3>
            <p className="mt-1 text-sm text-muted">{group.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border bg-background px-2.5 py-1 text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
