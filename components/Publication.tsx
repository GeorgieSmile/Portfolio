import { publication } from "@/data/profile";
import { BulletList, Pair, Section, TextLink } from "@/components/ui";
import { VoteBars } from "@/components/charts";

// Read top to bottom from one left edge, like a job: the paper, where it was published and its links,
// who wrote it, its headline human-judgment result beside what this author did.
export default function Publication() {
  return (
    <Section id="publication" title="Research">
      <div className="flex flex-col gap-12">
        <div data-reveal>
          <h3 className="text-lead max-w-[48ch]">{publication.title}</h3>
          <p className="text-small text-muted mt-2">{publication.badge}</p>
          <p className="text-body max-w-[62ch] mt-6">
            {publication.authorsBefore} <span className="font-medium">{publication.me}</span>
            {publication.authorsAfter}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6">
            {publication.links.map((link) => (
              <TextLink key={link.href} href={link.href}>
                {link.label}
              </TextLink>
            ))}
          </div>
        </div>
        <Pair>
          <VoteBars {...publication.humanEval} />
          <div data-reveal>
            <BulletList items={publication.contributions} />
          </div>
        </Pair>
      </div>
    </Section>
  );
}
