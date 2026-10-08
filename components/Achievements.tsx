import CampGallery from "@/components/CampGallery";
import { achievements, superAI, type Achievement } from "@/data/profile";
import { Card, CardHeader, Label, Section } from "@/components/ui";

function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="bg-surface border border-line rounded-xl p-5 hover:border-line-strong transition-colors">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-sm font-semibold leading-snug">{achievement.title}</h3>
          <p className="text-indigo-400 text-xs mt-0.5">{achievement.badge}</p>
        </div>
        <span className="text-subtle text-xs whitespace-nowrap">{achievement.date}</span>
      </div>
      <p className="text-subtle text-xs leading-relaxed mt-2">{achievement.description}</p>
    </div>
  );
}

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <Card className="hover:border-line-strong transition-colors">
        <CardHeader title={superAI.title} subtitle={superAI.badge} date={superAI.date} />

        <p className="text-muted text-sm leading-relaxed">{superAI.description}</p>

        {superAI.highlights && (
          <div className="mt-4 pt-4 border-t border-line space-y-1.5">
            {superAI.highlights.map((line) => (
              <p key={line} className="text-fg text-sm font-medium leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-line">
          <Label className="mb-4">Camp Highlights</Label>
          <CampGallery teamWins={superAI.teamWins} campMoments={superAI.campMoments} />
        </div>
      </Card>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {achievements.map((a) => (
          <AchievementCard key={a.title} achievement={a} />
        ))}
      </div>
    </Section>
  );
}
