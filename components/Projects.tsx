import { projects } from "@/data/profile";
import { Card, CardHeader, ExpandableBullets, Section, Tags, TextLink } from "@/components/ui";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-5">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader title={project.title} subtitle={project.role} date={project.date} />
            <Tags items={project.tags} className="mb-5" />
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
