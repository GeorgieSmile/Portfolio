import { profile } from "@/data/profile";
import { GithubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-divider">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-white text-sm font-semibold mb-2">Get in touch</p>
          <div className="flex flex-col gap-1 text-sm">
            <a href={`mailto:${profile.email}`} className="text-muted hover:text-indigo-400 transition-colors">
              {profile.email}
            </a>
            <a href={profile.phone.href} className="text-muted hover:text-indigo-400 transition-colors">
              {profile.phone.display}
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-3">
          <div className="flex gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-subtle hover:text-fg transition-colors"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-subtle hover:text-fg transition-colors"
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-subtle hover:text-fg transition-colors"
            >
              <MailIcon />
            </a>
          </div>
          <p className="text-subtle text-sm">© 2026 {profile.name}</p>
        </div>
      </div>
    </footer>
  );
}
