import { education } from "@/data/profile";
import { Section, Split } from "@/components/ui";

// The degree and its record on the left; the scholarship and what it covered on the right.
export default function Education() {
  return (
    <Section id="education" title="Education">
      <Split
        side={
          <>
            <h3 className="text-lead">{education.school}</h3>
            <p className="text-body mt-1">{education.degree}</p>
            <p className="text-small text-muted mt-2 tabular">{education.date}</p>
            <ul className="text-body mt-4">
              {education.badges.map((badge) => (
                <li key={badge}>{badge}</li>
              ))}
            </ul>
          </>
        }
      >
        <h4 className="text-body text-muted mb-2">Scholarship</h4>
        <p className="text-body max-w-[62ch]">{education.scholarship}</p>
        <h4 className="text-body text-muted mt-10 mb-2">Relevant coursework</h4>
        <ul className="text-body sm:columns-2 sm:gap-[var(--gutter)]">
          {education.coursework.map((c) => (
            <li key={c} className="break-inside-avoid py-0.5">
              {c}
            </li>
          ))}
        </ul>
      </Split>
    </Section>
  );
}
