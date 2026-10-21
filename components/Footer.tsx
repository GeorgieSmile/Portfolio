import { profile } from "@/data/profile";

// The close, on the same structure as every section: the heading on the left, the email address
// as display type from column 4, then a single quiet line.
export default function Footer() {
  const [user, domain] = profile.email.split("@");
  return (
    <footer id="contact" className="frame pt-[clamp(56px,6vw,88px)]">
      <div className="grid-12 gap-y-8">
        <h2 data-reveal className="heading col-span-12 lg:col-span-3">
          Contact
        </h2>
        <div className="col-span-12 lg:col-[4/span_9] min-w-0">
          <a
            data-reveal
            href={`mailto:${profile.email}`}
            className="press block w-fit text-display tracking-[-0.035em] transition-colors duration-200 hover:text-accent"
          >
            <span className="block sm:inline">{user}@</span>
            <span className="block sm:inline">{domain}</span>
          </a>
          <div
            data-reveal
            style={{ "--i": 1 } as React.CSSProperties}
            className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-body"
          >
            <a href={profile.phone.href} className="link press tabular">
              {profile.phone.display}
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link press">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link press">
              LinkedIn
            </a>
            <a href={profile.resume} download className="link press">
              Resume (PDF)
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-2 sm:gap-6 py-8 mt-[clamp(80px,12vw,160px)] text-small text-muted">
        <p>
          {profile.name}, {profile.title}
        </p>
        <a href="#top" className="link press text-ink w-fit">
          Back to top
        </a>
        <p className="sm:text-right">© 2026 {profile.name}</p>
      </div>
    </footer>
  );
}
