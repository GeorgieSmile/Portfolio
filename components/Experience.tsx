import { jobs, type KeyResult } from "@/data/profile";
import { BulletList, Section, Split } from "@/components/ui";

// Results set like a ledger: each figure split at its decimal point so the points line up,
// at heading size so the section heading still leads. Shown after the purpose, before the bullets.
function Ledger({ results, note }: { results: KeyResult[]; note?: string }) {
  return (
    <div className="mb-12">
      <h4 className="text-lead">Key results against each baseline</h4>
      {note && <p className="text-body text-muted mt-2 max-w-[62ch]">{note}</p>}
      <dl className="grid grid-cols-[auto_auto_1fr] gap-x-[0.1em] gap-y-16 sm:gap-y-8 items-baseline mt-8">
        {results.map((r) => {
          const [whole, decimals = ""] = r.after.split(".");
          return (
            <div key={`${r.system}-${r.metric}`} className="col-span-3 grid grid-cols-subgrid items-baseline gap-y-1">
              <dt className="sr-only">
                {r.metric}, {r.system}
              </dt>
              <dd className="contents">
                <span className="heading tabular text-right">{whole}</span>
                <span className="heading tabular">{decimals && `.${decimals}`}</span>
                <span className="col-span-3 sm:col-span-1 sm:pl-6">
                  <span className="block text-body">
                    {r.metric} · {r.system}
                  </span>
                  <span className="block text-small text-muted mt-1">
                    <span className="sm:hidden">{r.vs}</span>
                    <span className="hidden sm:inline">{r.evaluated}</span>: {r.before} → {r.after}, {r.reduction}
                  </span>
                </span>
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="flex flex-col gap-16">
        {jobs.map((job) => (
          <li key={job.company}>
            <Split
              side={
                <>
                  <h3 className="text-lead">{job.title}</h3>
                  <p className="text-body mt-1">{job.company}</p>
                  <p className="text-small text-muted mt-2 tabular">{job.date}</p>
                  {job.tags && <p className="text-small text-muted mt-4">{job.tags.join(", ")}</p>}
                </>
              }
            >
              <p className="text-lead max-w-[48ch] mb-10">{job.summary}</p>
              {job.keyResults && <Ledger results={job.keyResults} note={job.keyResultsNote} />}
              {job.bullets && <BulletList items={job.bullets} />}
              {job.bulletGroups?.map((group) => (
                <div key={group.label} className="mt-8 first:mt-0">
                  <h5 className="text-body font-medium mb-3">{group.label}</h5>
                  <BulletList items={group.bullets} />
                </div>
              ))}
            </Split>
          </li>
        ))}
      </ol>
    </Section>
  );
}
