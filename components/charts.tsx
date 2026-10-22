import type { Benchmark, KeyResult, Stat } from "@/data/profile";

// Bars are thin, square where they start and rounded (4px) where they end. Every value is also written
// beside its bar, so the bars are for the eye and the numbers carry the meaning (and screen readers).
const bar = "block h-2.5 rounded-r-[4px]";

function Swatch({ className }: { className: string }) {
  return <span aria-hidden className={`inline-block size-2.5 rounded-[2px] mr-2 ${className}`} />;
}

// Each result as two bars on its own scale, from 0 to the baseline. The units differ (% and seconds),
// so there is no shared axis: the blue bar's length is the new error as a share of the old one.
// Side by side from lg (small multiples across the content width), stacked below.
export function ResultBars({ results, note }: { results: KeyResult[]; note?: string }) {
  return (
    <div data-reveal>
      <h4 className="text-body font-medium">Key results against each baseline</h4>
      {note && <p className="text-body text-muted mt-2 max-w-[62ch]">{note}</p>}
      <p className="text-small text-muted mt-6 flex flex-wrap gap-x-6 gap-y-1">
        <span>
          <Swatch className="bg-quiet" />
          Baseline
        </span>
        <span>
          <Swatch className="bg-accent" />
          After my work
        </span>
      </p>
      <dl className="mt-6 grid lg:grid-cols-3 gap-x-[var(--gutter)] gap-y-10 lg:gap-y-3">
        {results.map((r) => {
          const share = parseFloat(r.after) / parseFloat(r.before);
          return (
            // From lg each result spans two shared rows, so the bars line up even when a title wraps
            <div key={`${r.system}-${r.metric}`} className="lg:row-span-2 lg:grid lg:grid-rows-subgrid">
              <dt>
                <span className="block text-body">
                  {r.metric} · {r.system}
                </span>
                <span className="block text-small text-muted mt-1">
                  <span className="sm:hidden">{r.vs}</span>
                  <span className="hidden sm:inline">{r.evaluated}</span>
                </span>
              </dt>
              <dd className="mt-3 lg:mt-0 self-start grid grid-cols-[minmax(0,1fr)_4.5rem] items-center gap-x-4 gap-y-1.5 tabular">
                <span className={`${bar} bg-quiet`} title={`Baseline: ${r.before}`} />
                <span className="text-small text-muted">{r.before}</span>
                <span className={`${bar} bg-accent`} style={{ width: `${share * 100}%` }} title={`After: ${r.after}`} />
                <span className="text-body">{r.after}</span>
                <span className="col-span-2 text-small text-muted mt-1">{r.reduction}</span>
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

// One small multiple per metric, each on its own scale from 0 to its largest value. Every bar is labelled
// with its system, so there is no legend; the first system (the work shown) is the accented one.
export function BenchmarkBars({ title, note, systems, metrics }: Benchmark) {
  const fills = ["bg-accent", "bg-quiet", "bg-faint"];
  return (
    <div data-reveal>
      <h4 className="text-body font-medium">{title}</h4>
      <p className="text-body text-muted mt-2 max-w-[62ch]">{note}</p>
      <div className="mt-6 grid lg:grid-cols-2 gap-x-[var(--gutter)] gap-y-10">
        {metrics.map((m) => {
          const max = Math.max(...m.values);
          return (
            <div key={m.label}>
              <p className="text-body">
                {m.label} <span className="text-small text-muted">· {m.better} is better</span>
              </p>
              <dl>
                {systems.map((system, i) => (
                  <div
                    key={system}
                    className="mt-3 grid grid-cols-[minmax(0,1fr)_4.5rem] items-center gap-x-4 gap-y-1 tabular"
                  >
                    <dt className="col-span-2 text-small text-muted">{system}</dt>
                    <dd className="contents">
                      <span
                        className={`${bar} ${fills[i] ?? "bg-faint"}`}
                        style={{ width: `${(m.values[i] / max) * 100}%` }}
                        title={`${system}: ${m.values[i]}${m.unit}`}
                      />
                      <span className={i === 0 ? "text-body" : "text-small text-muted"}>
                        {m.values[i]}
                        {m.unit}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Scores on one 0–1 scale, one series: the grey track is the whole scale, the blue bar the score.
// Results that are not a 0–1 score (a cost) are listed underneath as plain figures.
export function ScoreBars({ stats, note }: { stats: Stat[]; note?: string }) {
  const isScore = (s: Stat) => Number(s.value) >= 0 && Number(s.value) <= 1;
  const scores = stats.filter(isScore);
  const others = stats.filter((s) => !isScore(s));
  return (
    <div data-reveal className="max-w-[62ch]">
      <h4 className="text-body font-medium mb-4">Results</h4>
      <dl className="flex flex-col gap-5">
        {scores.map((s) => (
          <div key={s.label} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-2">
            <dt className="text-body">{s.label}</dt>
            <dd className="contents">
              <span className="text-body tabular">{s.value}</span>
              <span className="col-span-2 block bg-rule rounded-r-[4px]" title={`${s.label}: ${s.value}`}>
                <span className={`${bar} bg-accent`} style={{ width: `${Number(s.value) * 100}%` }} />
              </span>
            </dd>
          </div>
        ))}
        {others.map((s) => (
          <div key={s.label} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4">
            <dt className="text-body">{s.label}</dt>
            <dd className="text-body tabular">{s.value}</dd>
          </div>
        ))}
      </dl>
      {note && <p className="text-small text-muted mt-4 max-w-[62ch]">{note}</p>}
    </div>
  );
}

type Votes = { against: string; wins: number; ties: number; losses: number };

// Each opponent's votes as one bar split three ways, in order: wins (blue), ties, losses (two greys).
// The 2px gaps are the page showing through. Counts sit inside the segments; the smallest (19 of 200)
// still leaves room for two digits on a phone.
export function VoteBars({ title, note, rows }: { title: string; note: string; rows: Votes[] }) {
  const parts = [
    { key: "wins", label: "JaiTTS wins", fill: "bg-accent text-accent-ink" },
    { key: "ties", label: "Ties", fill: "bg-quiet text-bg" },
    { key: "losses", label: "Competitor wins", fill: "bg-faint text-ink" },
  ] as const;
  return (
    <figure data-reveal>
      <figcaption>
        <span className="block text-body font-medium">{title}</span>
        <span className="block text-body text-muted mt-2 max-w-[62ch]">{note}</span>
      </figcaption>
      <p className="text-small text-muted mt-6 flex flex-wrap gap-x-6 gap-y-1">
        {parts.map((p) => (
          <span key={p.key}>
            <Swatch className={p.fill} />
            {p.label}
          </span>
        ))}
      </p>
      <dl className="mt-6 flex flex-col gap-6">
        {rows.map((r) => {
          const total = r.wins + r.ties + r.losses;
          return (
            <div key={r.against}>
              <dt className="text-body mb-2">
                vs. {r.against} <span className="text-muted text-small">· {total} comparisons</span>
              </dt>
              <dd className="flex gap-[2px] tabular text-small">
                {parts.map((p) => (
                  <span
                    key={p.key}
                    title={`${p.label}: ${r[p.key]} of ${total}`}
                    className={`flex items-center px-1.5 h-7 last:rounded-r-[4px] ${p.fill}`}
                    style={{ width: `${(r[p.key] / total) * 100}%` }}
                  >
                    <span className="sr-only">{p.label}: </span>
                    {r[p.key]}
                  </span>
                ))}
              </dd>
            </div>
          );
        })}
      </dl>
    </figure>
  );
}
