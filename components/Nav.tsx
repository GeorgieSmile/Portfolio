"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";

// In page order, one link per section
const links = [
  { label: "Demo", href: "#audio" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#publication" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// The section whose top has passed 40% of the viewport is "current";
// at the very bottom of the page the contact section wins.
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
  const [open, setOpen] = useState(false);
  // The phone menu is a native <details>, so it opens without JavaScript; the script only closes it
  const menuRef = useRef<HTMLDetailsElement>(null);

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

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  // Phone menu: closes on Escape (focus back to its toggle) and on a tap outside it
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        menuRef.current?.querySelector("summary")?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) closeMenu();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const linkClass = (href: string) =>
    `press transition-colors ${active === href.slice(1) ? "text-ink" : "text-muted hover:text-ink"}`;

  return (
    <header className="sticky top-0 z-40 bg-bg">
      <nav className="frame h-16 flex items-center gap-4 sm:gap-8 text-small">
        <a href="#top" className="press font-medium whitespace-nowrap">
          {profile.name}
        </a>
        <ul className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href.slice(1) ? "location" : undefined}
                className={linkClass(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex items-center gap-4 sm:gap-5">
          <details ref={menuRef} onToggle={(e) => setOpen(e.currentTarget.open)} className="group lg:hidden">
            <summary className="press flex items-center h-11 text-ink cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">Menu</span>
              <span className="hidden group-open:inline">Close</span>
            </summary>
            <div className="hidden group-open:block absolute inset-x-0 top-16 bg-surface frame py-4">
              <ul className="flex flex-col">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={active === link.href.slice(1) ? "location" : undefined}
                      className={`${linkClass(link.href)} flex items-center h-12 text-lead`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>
          <a href={profile.resume} download className="button h-10 px-3 sm:px-4 whitespace-nowrap">
            Resume PDF
          </a>
        </div>
      </nav>
    </header>
  );
}
