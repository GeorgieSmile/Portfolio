import { jobs } from "@/data/profile";
import { ExpandableBullets, Pair, Section } from "@/components/ui";
import { BenchmarkBars, ResultBars } from "@/components/charts";
import { Pipeline } from "@/components/Pipeline";

// Each job reads top to bottom from one left edge: who and when, what it was for, what it achieved,
// how the main system works beside the first bullets of each kind of work (the rest open on request).
export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="flex flex-col gap-24">
        {jobs.map((job) => {
          const bullets = (
            <div data-reveal>
              {job.bullets && <ExpandableBullets items={job.bullets} visible={2} />}
              {job.bulletGroups?.map((group) => (
                <div key={group.label} className="mt-8 first:mt-0">
                  <h4 className="text-body font-medium mb-3">{group.label}</h4>
                  <ExpandableBullets items={group.bullets} visible={1} />
                </div>
              ))}
            </div>
          );
          return (
            <li key={job.company} id={job.id} className="flex flex-col gap-12">
              <div data-reveal>
                <h3 className="text-lead">{job.title}</h3>
                <p className="text-body mt-1">
                  {job.company} <span className="text-muted tabular whitespace-nowrap">· {job.date}</span>
                </p>
                {job.tags && <p className="text-small text-muted mt-2">{job.tags.join(", ")}</p>}
                <p className="text-lead max-w-[48ch] mt-6">{job.summary}</p>
              </div>
              {job.keyResults && <ResultBars results={job.keyResults} note={job.keyResultsNote} />}
              {job.benchmark && <BenchmarkBars {...job.benchmark} />}
              {job.pipeline ? (
                <Pair>
                  <Pipeline steps={job.pipeline.steps} label={job.pipeline.label} />
                  {bullets}
                </Pair>
              ) : (
                bullets
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
