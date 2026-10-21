import { projects } from "@/data/profile";
import { ExpandableBullets, Section, Split, TextLink } from "@/components/ui";

// Each project: what it is on the left; what it is for, what it scored, how it works and what was done on the right.
export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col gap-16">
        {projects.map((project) => (
          <Split
            key={project.title}
            side={
              <>
                <h3 className="text-lead">{project.title}</h3>
                {project.role && <p className="text-body mt-1">{project.role}</p>}
                <p className="text-small text-muted mt-2 tabular">{project.date}</p>
                <p className="text-small text-muted mt-4">{project.tags.join(", ")}</p>
              </>
            }
          >
            <p className="text-lead max-w-[48ch] mb-10">{project.summary}</p>
            {(project.pipeline || project.results) && (
              <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-x-[var(--gutter)] gap-y-8 mb-10">
                {project.results && (
                  <div>
                    <h4 className="text-body text-muted mb-2">Results</h4>
                    <dl className="text-body">
                      {project.results.map((r) => (
                        <div key={r.label} className="flex justify-between gap-4 py-1">
                          <dt>{r.label}</dt>
                          <dd className="tabular">{r.value}</dd>
                        </div>
                      ))}
                    </dl>
                    {project.resultsNote && <p className="text-small text-muted mt-3 max-w-[62ch]">{project.resultsNote}</p>}
                  </div>
                )}
                {project.pipeline && (
                  <div>
                    <h4 className="text-body text-muted mb-2">How it works</h4>
                    <ol className="text-body">
                      {project.pipeline.map((s) => (
                        <li key={s.tool} className="flex justify-between gap-4 py-1">
                          <span>{s.tool}</span>
                          <span className="text-muted text-right">{s.step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            )}
            <ExpandableBullets items={project.bullets} visible={4} />
            {project.link && (
              <div className="mt-6">
                <TextLink href={project.link.href}>{project.link.label}</TextLink>
              </div>
            )}
          </Split>
        ))}
      </div>
    </Section>
  );
}
