import type { ReactNode } from "react";
import type { Stat } from "@/data/profile";

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-20 border-t border-divider">
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className={`text-2xl font-bold text-white flex items-center gap-3 ${
            subtitle ? "mb-2" : "mb-10"
          }`}
        >
          <span className="w-8 h-px bg-accent-500 flex-shrink-0" />
          {title}
        </h2>
        {subtitle && <p className="text-subtle text-sm mb-10 ml-11">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

export function Card({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`bg-surface border border-line rounded-xl p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}

// Title, accent subtitle and date row used at the top of most cards.
export function CardHeader({
  title,
  subtitle,
  date,
}: {
  title: string;
  subtitle?: string;
  date: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-5">
      <div>
        <h3 className="text-white font-semibold text-base md:text-lg">{title}</h3>
        {subtitle && <p className="text-accent-400 text-sm mt-0.5">{subtitle}</p>}
      </div>
      <span className="text-subtle text-sm whitespace-nowrap">{date}</span>
    </div>
  );
}

export function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-muted text-sm leading-relaxed">
          <span className="mt-2 w-1 h-1 rounded-full bg-accent-500 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// Shows the first `visible` bullets; the rest open with a native <details> toggle (no JS).
export function ExpandableBullets({ items, visible }: { items: string[]; visible: number }) {
  const shown = items.slice(0, visible);
  const hidden = items.slice(visible);
  return (
    <>
      <BulletList items={shown} />
      {hidden.length > 0 && (
        <details className="group mt-3">
          <summary className="inline-flex items-center gap-1.5 text-accent-400 text-sm font-medium cursor-pointer select-none list-none hover:text-accent-300 transition-colors [&::-webkit-details-marker]:hidden">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4 transition-transform group-open:rotate-90"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
            <span className="group-open:hidden">Show {hidden.length} more</span>
            <span className="hidden group-open:inline">Show less</span>
          </summary>
          <BulletList items={hidden} className="mt-3" />
        </details>
      )}
    </>
  );
}

// Phones show the first PHONE_TAG_LIMIT tags plus a "+N" chip; wider screens show all.
const PHONE_TAG_LIMIT = 5;
const tagClass =
  "px-2.5 py-1 text-xs font-medium bg-raised text-muted rounded-md border border-line-strong";

export function Tags({ items, className = "" }: { items: string[]; className?: string }) {
  const extra = items.length - PHONE_TAG_LIMIT;
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((tag, i) => (
        <span key={tag} className={`${tagClass} ${i >= PHONE_TAG_LIMIT ? "hidden sm:inline" : ""}`}>
          {tag}
        </span>
      ))}
      {extra > 0 && (
        <span className={`${tagClass} sm:hidden`} title={items.slice(PHONE_TAG_LIMIT).join(", ")}>
          +{extra}
        </span>
      )}
    </div>
  );
}

// Big mono number over a short label. `className` sets the grid columns.
export function StatTiles({ items, className = "" }: { items: Stat[]; className?: string }) {
  return (
    <div className={`grid gap-3 ${className}`}>
      {items.map((s) => (
        <div key={s.label} className="bg-raised rounded-lg p-3 border border-line">
          <p className="font-mono text-accent-400 text-lg font-semibold">{s.value}</p>
          <p className="text-subtle text-xs mt-0.5">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-subtle text-xs font-medium uppercase tracking-wider mb-3 ${className}`}>
      {children}
    </p>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-accent-400 text-sm font-medium hover:text-accent-300 transition-colors"
    >
      {children} →
    </a>
  );
}
