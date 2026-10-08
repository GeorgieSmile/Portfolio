import { publication } from "@/data/profile";
import { BulletList, Card, Section, TextLink } from "@/components/ui";

export default function Publication() {
  return (
    <Section id="publication" title="Research">
      <Card>
        <div className="mb-4">
          <span className="inline-block px-2 py-0.5 text-xs font-medium bg-accent-500/10 text-accent-400 rounded border border-accent-500/20">
            {publication.badge}
          </span>
        </div>
        <h3 className="text-white font-semibold text-base md:text-lg mb-3 leading-snug">
          {publication.title}
        </h3>
        <p className="text-subtle text-sm mb-5 leading-relaxed">
          {publication.authorsBefore}{" "}
          <span className="text-fg font-medium">{publication.me}</span>
          {publication.authorsAfter}
        </p>
        <BulletList items={publication.contributions} className="mb-5" />
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {publication.links.map((link) => (
            <TextLink key={link.href} href={link.href}>
              {link.label}
            </TextLink>
          ))}
        </div>
      </Card>
    </Section>
  );
}
