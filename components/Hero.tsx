import Image from "next/image";
import { education, jobs, profile } from "@/data/profile";

// The facts a recruiter screens for, on the first screen
const facts = [
  { label: "Now", value: `${jobs[0].title}, ${jobs[0].company}` },
  { label: "Before", value: `${jobs[1].title}, ${jobs[1].company}` },
  { label: "Degree", value: `${education.degree}, ${education.school} · ${education.badges.join(", ")}` },
];

// Read top to bottom on the left: who, what, where they work now, then the proof. The portrait on the right.
export default function Hero() {
  return (
    <section
      id="top"
      className="frame grid grid-cols-1 md:grid-12 md:grid-rows-[auto_auto_1fr_auto_auto] lg:grid-rows-[auto_auto_auto_auto_1fr] gap-y-8 md:gap-y-0 pt-8 md:pt-[6vh] pb-16 lg:min-h-[calc(100svh-4rem)]"
    >
      <h1 data-enter className="text-display tracking-[-0.035em] font-medium md:col-[1/span_7] md:row-[1]">
        <span className="block">
          {profile.name}
          <span className="sr-only">,</span>
        </span>
        <span className="block">{profile.title}</span>
      </h1>

      <p
        data-enter
        style={{ "--i": 1 } as React.CSSProperties}
        className="text-lead max-w-[42ch] md:col-[1/span_7] lg:col-[1/span_6] md:row-[2] md:mt-6"
      >
        {profile.tagline}
      </p>

      <dl
        data-enter
        style={{ "--i": 2 } as React.CSSProperties}
        className="grid sm:grid-cols-3 gap-x-[var(--gutter)] gap-y-5 md:col-span-12 md:row-[4] lg:col-[1/span_7] lg:row-[3] md:mt-10"
      >
        {facts.map((f) => (
          <div key={f.label}>
            <dt className="text-small text-muted">{f.label}</dt>
            <dd className="text-body mt-1">{f.value}</dd>
          </div>
        ))}
      </dl>

      <ul
        data-enter
        style={{ "--i": 3 } as React.CSSProperties}
        className="grid sm:grid-cols-3 gap-x-[var(--gutter)] gap-y-4 md:col-span-12 md:row-[5] lg:col-[1/span_7] lg:row-[4] md:mt-10"
      >
        {profile.highlights.map((h) => (
          <li key={h.href}>
            <a href={h.href} className="press group block">
              <span className="block text-lead group-hover:underline underline-offset-4 decoration-1">{h.value}</span>
              <span className="block text-small text-muted">{h.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div
        data-enter
        style={{ "--i": 4 } as React.CSSProperties}
        className="relative w-[52%] ml-auto md:w-auto md:ml-0 md:col-[8/span_5] md:row-[1/4] lg:row-[1/6] md:self-start aspect-[3/4] md:max-h-[80svh] overflow-hidden"
      >
        <Image
          src={profile.photo}
          alt={profile.name}
          fill
          preload
          sizes="(min-width: 768px) 40vw, 52vw"
          className="drift object-cover object-[center_22%]"
        />
      </div>
    </section>
  );
}
