import { skillGroups } from "@/data/profile";
import { Section } from "@/components/ui";

// One row per group: the group on the left, its tools from the shared inner line at column 7.
export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="flex flex-col gap-6">
        {skillGroups.map((group, i) => (
          <div
            key={group.label}
            data-reveal
            style={{ "--i": i } as React.CSSProperties}
            className="grid gap-1 lg:grid-cols-9 lg:gap-x-[var(--gutter)] text-body"
          >
            <dt className="lg:col-span-3 text-muted">{group.label}</dt>
            <dd className="lg:col-span-6">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
