import type { PipelineStep } from "@/data/profile";

// A flow read top to bottom at every width, so long step and tool names never squeeze into narrow
// columns. The first step is the input; the last is the output and the one accented box, so the eye
// lands on the result.
export function Pipeline({ steps, label }: { steps: PipelineStep[]; label: string }) {
  return (
    <figure data-reveal className="max-w-[62ch]">
      <figcaption className="text-body font-medium mb-4">{label}</figcaption>
      <ol className="flex flex-col gap-5">
        {steps.map((s, i) => {
          const last = i === steps.length - 1;
          return (
            <li
              key={s.step}
              className={`relative grid grid-cols-[4.5rem_1fr] items-baseline gap-x-3 rounded-md px-3 py-3 text-body ${
                last ? "bg-accent/20" : "bg-surface"
              }`}
            >
              {i > 0 && <Arrow accent={last} />}
              <span className="text-small text-muted">{i === 0 ? "Input" : last ? "Output" : `Step ${i}`}</span>
              <span>
                <span className="font-medium text-ink">{s.step}</span>
                {s.tool && <span className="text-small text-muted"> · {s.tool}</span>}
              </span>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}

// Sits in the 20px gap above its box, pointing down into it.
function Arrow({ accent }: { accent: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 20"
      className={`absolute h-5 w-3 left-8 -top-5 ${accent ? "text-accent" : "text-quiet"}`}
    >
      <path d="M6 1v17M2 14l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}
