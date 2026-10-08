import { profile } from "@/data/profile";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Demo", href: "#audio" },
  { label: "Research", href: "#publication" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 h-14 bg-canvas/80 backdrop-blur border-b border-divider">
      <nav className="max-w-4xl h-full mx-auto px-6 flex items-center gap-6">
        <a
          href="#top"
          className="hidden sm:block text-white text-sm font-semibold whitespace-nowrap hover:text-indigo-400 transition-colors"
        >
          {profile.name}
        </a>
        {/* Scrolls sideways on narrow screens instead of wrapping */}
        <div className="flex-1 flex sm:justify-end gap-5 overflow-x-auto [scrollbar-width:none]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-subtle text-sm whitespace-nowrap hover:text-fg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
