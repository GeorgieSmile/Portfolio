import { publication } from "@/data/profile";
import { BulletList, Section, Split, TextLink } from "@/components/ui";

// The paper, where it was published and its links on the left; who wrote it and what this author did on the right.
export default function Publication() {
  return (
    <Section id="publication" title="Research">
      <Split
        side={
          <>
            <h3 className="text-lead">{publication.title}</h3>
            <p className="text-small text-muted mt-2">{publication.badge}</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6">
              {publication.links.map((link) => (
                <TextLink key={link.href} href={link.href}>
                  {link.label}
                </TextLink>
              ))}
            </div>
          </>
        }
      >
        <p className="text-body max-w-[62ch]">
          {publication.authorsBefore} <span className="font-medium">{publication.me}</span>
          {publication.authorsAfter}
        </p>
        <BulletList items={publication.contributions} className="mt-8" />
      </Split>
    </Section>
  );
}
