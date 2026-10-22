import Image from "next/image";
import { projects } from "@/data/profile";
import { ExpandableBullets, Pair, Section, TextLink } from "@/components/ui";
import { ScoreBars } from "@/components/charts";
import { Pipeline } from "@/components/Pipeline";

// Each project reads top to bottom from one left edge, like a job: what it is and what it is for,
// what it scored beside how it works, what it looks like, then what was done (the rest opens on request).
export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col gap-24">
        {projects.map((project) => (
          <article key={project.title} className="flex flex-col gap-12">
            <div data-reveal>
              <h3 className="text-lead">{project.title}</h3>
              <p className="text-body mt-1">
                {project.role && `${project.role} · `}
                <span className="text-muted tabular whitespace-nowrap">{project.date}</span>
              </p>
              <p className="text-small text-muted mt-2">{project.tags.join(", ")}</p>
              <p className="text-lead max-w-[48ch] mt-6">{project.summary}</p>
            </div>
            {(project.results || project.pipeline) && (
              <Pair>
                {project.results && <ScoreBars stats={project.results} note={project.resultsNote} />}
                {project.pipeline && <Pipeline steps={project.pipeline} label="How it works" />}
              </Pair>
            )}
            {project.screenshots && (
              <div data-reveal className="flex flex-col gap-6 max-w-[871px]">
                {project.screenshots.map((shot) => (
                  <figure key={shot.src}>
                    {/* Opens at full size: the app's own text is small once scaled to a phone */}
                    <a href={shot.src} target="_blank" rel="noopener noreferrer" className="block">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        width={shot.width}
                        height={shot.height}
                        sizes="(min-width: 1024px) 871px, 100vw"
                        className="w-full h-auto rounded-md"
                      />
                    </a>
                    <figcaption className="text-small text-muted mt-2">
                      {shot.caption}
                      <span className="sm:hidden"> · Tap to enlarge</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
            <div data-reveal>
              <ExpandableBullets items={project.bullets} visible={3} />
              {project.link && (
                <div className="mt-6">
                  <TextLink href={project.link.href}>{project.link.label}</TextLink>
                </div>
              )}
              {project.linkNote && <p className="text-small text-muted mt-6">{project.linkNote}</p>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
