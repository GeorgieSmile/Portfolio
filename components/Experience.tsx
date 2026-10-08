import { jobs } from "@/data/profile";
import { BulletList, Card, CardHeader, Section, Tags } from "@/components/ui";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-5">
        {jobs.map((job) => (
          <Card key={job.company}>
            <CardHeader title={job.title} subtitle={job.company} date={job.date} />
            {job.tags && <Tags items={job.tags} className="mb-5" />}

            {job.keyResults && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                {job.keyResults.map((r) => (
                  <div key={`${r.system}-${r.metric}`} className="bg-raised rounded-lg p-3 sm:p-4 border border-line flex flex-col">
                    <p className="text-indigo-400/90 text-xs font-medium mb-0.5">{r.system}</p>
                    <p className="text-subtle text-xs mb-1 sm:hidden">{r.vs}</p>
                    <p className="text-subtle text-xs mb-1 hidden sm:block">{r.evaluated}</p>
                    <p className="text-white text-sm font-semibold mb-2">{r.metric}</p>
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="text-subtle text-lg font-semibold">{r.before}</span>
                      <span className="text-faint text-sm">→</span>
                      <span className="text-indigo-400 text-lg font-bold">{r.after}</span>
                    </div>
                    <p className="text-emerald-500 text-xs mt-1">{r.reduction}</p>
                  </div>
                ))}
              </div>
            )}

            <BulletList items={job.bullets} />
          </Card>
        ))}
      </div>
    </Section>
  );
}
