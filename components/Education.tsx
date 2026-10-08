import { education } from "@/data/profile";
import { Card, CardHeader, Label, Section } from "@/components/ui";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <Card>
        <CardHeader title={education.school} subtitle={education.degree} date={education.date} />

        <div className="flex items-center gap-2 mb-5">
          {education.badges.map((badge) => (
            <span
              key={badge}
              className="px-2.5 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-400 rounded border border-indigo-500/20"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mb-5">
          <Label className="mb-2">Scholarship</Label>
          <p className="text-muted text-sm leading-relaxed">{education.scholarship}</p>
        </div>

        <div>
          <Label>Relevant Coursework</Label>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 text-xs font-medium bg-raised text-muted rounded-lg border border-line-strong"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Section>
  );
}
