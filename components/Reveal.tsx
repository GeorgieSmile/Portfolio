"use client";

import { useEffect } from "react";

// Section entrances, once each. Anything already on screen is marked shown before hiding is
// switched on, so nothing flashes and nothing stays hidden if this never runs.
export default function Reveal() {
  useEffect(() => {
    const items = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    for (const el of items) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("is-in");
      else io.observe(el);
    }
    document.documentElement.classList.add("reveal-on");
    return () => io.disconnect();
  }, []);

  return null;
}
