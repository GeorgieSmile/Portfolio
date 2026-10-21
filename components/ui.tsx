import type { ReactNode } from "react";

// Every section reads the same way: its heading in columns 1–3, its content from column 4.
// Inside the content, `Split` adds one second line at column 7.
export function Section({
  id,
  title,
  intro,
  className = "",
  children,
}: {
  id: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`frame py-[clamp(56px,6vw,88px)] ${className}`}>
      <div className="grid-12 gap-y-8">
        <h2 data-reveal className="heading col-span-12 lg:col-span-3 lg:self-start">
          {title}
        </h2>
        <div className="col-span-12 lg:col-[4/span_9] min-w-0">
          {intro && (
            <div data-reveal style={{ "--i": 1 } as React.CSSProperties} className="text-lead max-w-[48ch] mb-12">
              {intro}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

// Two columns inside a section's content, on the page grid: 3 columns of labels or facts, 6 of detail.
export function Split({ side, children, className = "" }: { side: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={`grid gap-y-6 lg:grid-cols-9 lg:gap-x-[var(--gutter)] ${className}`}>
      <div data-reveal className="lg:col-span-3 min-w-0">
        {side}
      </div>
      <div data-reveal style={{ "--i": 1 } as React.CSSProperties} className="lg:col-span-6 min-w-0">
        {children}
      </div>
    </div>
  );
}

export function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`list-disc pl-5 marker:text-muted space-y-3 text-body max-w-[62ch] ${className}`}>
      {items.map((item) => (
        <li key={item} className="pl-1">
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
          <summary className="press link inline-block text-body cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Show {hidden.length} more details</span>
            <span className="hidden group-open:inline">Show less</span>
          </summary>
          <BulletList items={hidden} className="mt-3" />
        </details>
      )}
    </>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link press inline-block text-body">
      {children} →
    </a>
  );
}

// A voice drawn from its own samples: one bar per slice of the clip, mirrored around the middle.
export function WaveformSvg({ peaks, className = "" }: { peaks: number[]; className?: string }) {
  const step = 4;
  return (
    <svg
      viewBox={`0 0 ${peaks.length * step} 100`}
      preserveAspectRatio="none"
      aria-hidden
      className={className}
    >
      {peaks.map((p, i) => {
        const h = Math.max(3, p * 96);
        return <rect key={i} x={i * step + 0.8} y={50 - h / 2} width={2.4} height={h} fill="currentColor" />;
      })}
    </svg>
  );
}
