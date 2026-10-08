import { profile } from "@/data/profile";
import { Section } from "@/components/ui";

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl">
        {profile.about}
      </p>
    </Section>
  );
}
