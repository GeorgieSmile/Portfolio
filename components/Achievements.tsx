import CampGallery from "@/components/CampGallery";
import { achievements, superAI } from "@/data/profile";
import { Section, Split } from "@/components/ui";

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <Split
        side={
          <>
            <h3 className="text-lead">{superAI.title}</h3>
            <p className="text-body mt-1">{superAI.badge}</p>
            <p className="text-small text-muted mt-2 tabular">{superAI.date}</p>
            {superAI.highlights && (
              <dl className="flex flex-col gap-5 mt-8">
                {superAI.highlights.map((h) => (
                  <div key={h.label}>
                    <dt className="sr-only">{h.label}</dt>
                    <dd>
                      <span className="block text-lead tabular">{h.value}</span>
                      <span className="block text-body mt-1">{h.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </>
        }
      >
        <p className="text-body max-w-[62ch]">{superAI.description}</p>
      </Split>

      <div className="mt-12">
        <CampGallery images={superAI.photos} />
      </div>

      <Split className="mt-16" side={<h3 className="text-lead">Other hackathons</h3>}>
        <ul className="flex flex-col gap-8">
          {achievements.map((a) => (
            <li key={a.title}>
              <h4 className="text-body font-medium">{a.title}</h4>
              <p className="text-body">
                {a.badge} <span className="text-small text-muted tabular">· {a.date}</span>
              </p>
              <p className="text-body mt-2 max-w-[62ch]">{a.description}</p>
            </li>
          ))}
        </ul>
      </Split>
    </Section>
  );
}
