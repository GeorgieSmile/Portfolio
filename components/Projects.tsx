import { projects, type Project } from "@/data/profile";
import { Card, CardHeader, ExpandableBullets, Label, Section, StatTiles, Tags, TextLink } from "@/components/ui";

// Numbered nodes on a connecting line: horizontal on wider screens, vertical on phones.
// Deliberately box-free so it reads as a flow, not as more stat tiles.
function Pipeline({ steps }: { steps: NonNullable<Project["pipeline"]> }) {
  return (
    <div className="mb-6">
      <Label>How it works</Label>
      <ol className="flex flex-col sm:flex-row">
        {steps.map((s, i) => {
          const last = i === steps.length - 1;
          return (
            <li key={s.tool} className="relative flex sm:flex-col sm:flex-1 items-start sm:items-center gap-3 sm:gap-0 pb-4 sm:pb-0">
              {!last && (
                <span
                  aria-hidden
                  className="absolute bg-accent-500/50 left-[11.5px] top-6 bottom-0 w-px sm:left-1/2 sm:top-3 sm:bottom-auto sm:w-full sm:h-px"
                />
              )}
              <span
                className={`relative z-10 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-semibold ${
                  last
                    ? "bg-accent-500 text-canvas"
                    : "bg-surface text-accent-400 border border-accent-500/70"
                }`}
              >
                {i + 1}
              </span>
              <div className="sm:mt-2.5 sm:px-1 sm:text-center">
                <p className="text-fg text-xs font-semibold">{s.tool}</p>
                <p className="text-subtle text-xs mt-0.5">{s.step}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-5">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader title={project.title} subtitle={project.role} date={project.date} />
            <Tags items={project.tags} className="mb-5" />
            {project.pipeline && <Pipeline steps={project.pipeline} />}
            {project.results && (
              <StatTiles items={project.results} className="grid-cols-2 sm:grid-cols-4 mb-5" />
            )}
            <ExpandableBullets items={project.bullets} visible={4} />
            {project.link && (
              <div className="mt-5">
                <TextLink href={project.link.href}>{project.link.label}</TextLink>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
