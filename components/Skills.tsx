import { skillGroups } from "@/data/profile";
import { Section } from "@/components/ui";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.label} className="flex flex-col sm:flex-row sm:items-start gap-3">
            <span className="sm:w-36 flex-shrink-0 text-subtle text-xs font-medium uppercase tracking-wider pt-1.5">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs font-medium bg-surface text-muted rounded-lg border border-line"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
