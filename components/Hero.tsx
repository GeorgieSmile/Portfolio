import Image from "next/image";
import { profile } from "@/data/profile";
import { DownloadIcon, GithubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const iconLinks = [
  { label: "GitHub", href: profile.github, Icon: GithubIcon, external: true },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon, external: true },
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon, external: false },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[calc(100svh-3.5rem)] flex items-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 py-10 sm:py-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <p className="text-accent-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              {profile.title}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-5 tracking-tight leading-tight">
              Nithid
              <br />
              Guntasin
            </h1>
            <p className="text-subtle text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
              {profile.tagline}
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-10 max-w-md mx-auto md:mx-0 text-left">
              {profile.highlights.map((h) => (
                <a
                  key={h.href}
                  href={h.href}
                  className="rounded-lg border border-line bg-surface px-3 py-2.5 hover:border-accent-500/50 transition-colors"
                >
                  <span className="block font-mono text-accent-400 text-[13px] sm:text-base font-semibold whitespace-nowrap">
                    {h.value}
                  </span>
                  <span className="block text-subtle text-xs leading-snug mt-1">
                    {h.label}
                  </span>
                </a>
              ))}
            </div>
            <div className="flex gap-3 justify-center md:justify-start items-center">
              <a
                href={profile.resume}
                download
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-500 text-canvas text-sm font-semibold hover:bg-accent-400 transition-colors duration-200"
              >
                <DownloadIcon /> Resume
              </a>
              {iconLinks.map(({ label, href, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-line bg-surface text-fg hover:border-accent-500/50 hover:text-accent-400 transition-colors duration-200"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-full bg-accent-500/10 blur-xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-accent-500/30 ring-offset-4 ring-offset-canvas">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  sizes="(min-width: 768px) 18rem, (min-width: 640px) 14rem, 10rem"
                  className="object-cover object-[center_28%] scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
