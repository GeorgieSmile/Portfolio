import CampGallery from "@/components/CampGallery";
import { achievements, superAI } from "@/data/profile";
import { Card, CardHeader, Label, Section, StatTiles } from "@/components/ui";

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <Card>
        <CardHeader title={superAI.title} subtitle={superAI.badge} date={superAI.date} />

        <p className="text-muted text-sm leading-relaxed">{superAI.description}</p>

        {superAI.highlights && (
          <StatTiles items={superAI.highlights} className="grid-cols-1 sm:grid-cols-2 mt-5" />
        )}

        <div className="mt-6 pt-6 border-t border-line">
          <Label className="mb-4">Winning Teams</Label>
          <CampGallery images={superAI.photos} />
        </div>
      </Card>

      {/* One list instead of a card grid, so short descriptions don't leave empty boxes */}
      <Label className="mt-10 mb-1">Other Hackathons</Label>
      <ul className="divide-y divide-line">
        {achievements.map((a) => (
          <li key={a.title} className="py-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
              <h3 className="text-white text-sm font-semibold">
                {a.title} <span className="text-accent-400 font-normal">· {a.badge}</span>
              </h3>
              <span className="text-subtle text-xs whitespace-nowrap">{a.date}</span>
            </div>
            <p className="text-subtle text-sm leading-relaxed mt-1">{a.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
