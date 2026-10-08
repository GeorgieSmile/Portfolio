"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Demo", href: "#audio" },
  { label: "Research", href: "#publication" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

// The section whose top has passed 40% of the viewport is "current";
// at the very bottom of the page the footer (#contact) wins.
function currentSectionId(): string | null {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    return "contact";
  }
  let current: string | null = null;
  for (const el of document.querySelectorAll<HTMLElement>("main section[id]")) {
    if (el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = el.id;
  }
  return current;
}

export default function Nav() {
  const [active, setActive] = useState<string | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setActive(currentSectionId()));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // On phones the strip scrolls sideways: keep the active link in view.
  useEffect(() => {
    const strip = stripRef.current;
    const link = strip?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!strip || !link || strip.scrollWidth <= strip.clientWidth) return;
    strip.scrollTo({ left: link.offsetLeft - strip.offsetLeft - 24, behavior: "smooth" });
  }, [active]);

  return (
    <header className="sticky top-0 z-40 h-14 bg-canvas/80 backdrop-blur border-b border-divider">
      <nav className="max-w-4xl h-full mx-auto px-6 flex items-center gap-6">
        <a
          href="#top"
          className="hidden sm:block text-white text-sm font-semibold whitespace-nowrap hover:text-accent-400 transition-colors"
        >
          {profile.name}
        </a>
        {/* Scrolls sideways on narrow screens; the right-edge fade hints there is more */}
        <div
          ref={stripRef}
          className="flex-1 h-full flex items-center sm:justify-end gap-5 pr-8 sm:pr-0 overflow-x-auto [scrollbar-width:none] [mask-image:linear-gradient(to_right,black_80%,transparent)] sm:[mask-image:none]"
        >
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative h-full flex items-center text-sm whitespace-nowrap transition-colors ${
                  isActive ? "text-fg" : "text-subtle hover:text-fg"
                }`}
              >
                {link.label}
                {isActive && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent-500 rounded-full" />}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
