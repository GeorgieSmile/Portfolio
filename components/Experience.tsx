import { jobs } from "@/data/profile";
import { BulletList, CardHeader, Section, Tags } from "@/components/ui";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      {/* Timeline: a rail on the left with one dot per role; the current role's dot is filled */}
      <ol className="relative border-l border-line ml-1.5 space-y-14">
        {jobs.map((job) => (
          <li key={job.company} className="relative pl-6 sm:pl-10">
            <span
              aria-hidden
              className={`absolute -left-[7px] top-1.5 w-3 h-3 rounded-full ${
                job.date.includes("Present")
                  ? "bg-accent-500 ring-4 ring-accent-500/15"
                  : "bg-canvas border-2 border-accent-500/70"
              }`}
            />
            <CardHeader title={job.title} subtitle={job.company} date={job.date} />
            {job.tags && <Tags items={job.tags} className="mb-5" />}

            {job.keyResults && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                {job.keyResults.map((r) => (
                  <div key={`${r.system}-${r.metric}`} className="bg-raised rounded-lg p-3 sm:p-4 border border-line flex flex-col">
                    <p className="text-accent-400/90 text-xs font-medium mb-0.5">{r.system}</p>
                    <p className="text-subtle text-xs mb-1 sm:hidden">{r.vs}</p>
                    <p className="text-subtle text-xs mb-1 hidden sm:block">{r.evaluated}</p>
                    <p className="text-white text-sm font-semibold mb-2">{r.metric}</p>
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="font-mono text-subtle text-lg font-semibold">{r.before}</span>
                      <span className="text-faint text-sm">→</span>
                      <span className="font-mono text-accent-400 text-lg font-semibold">{r.after}</span>
                    </div>
                    <p className="text-accent-300 text-xs mt-1">{r.reduction}</p>
                  </div>
                ))}
              </div>
            )}

            <BulletList items={job.bullets} />
          </li>
        ))}
      </ol>
    </Section>
  );
}
