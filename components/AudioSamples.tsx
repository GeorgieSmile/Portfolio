import { voiceDemo } from "@/data/profile";
import { Section } from "@/components/ui";

export default function AudioSamples() {
  return (
    <Section id="audio" title="Voice Cloning Demo" subtitle={voiceDemo.subtitle}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {voiceDemo.samples.map((s) => (
          <div
            key={s.label}
            className={`rounded-xl border p-5 flex flex-col gap-3 bg-surface ${
              s.accent ? "border-accent-500/20" : "border-line"
            }`}
          >
            <div>
              <p className={`text-sm font-semibold ${s.accent ? "text-accent-400" : "text-white"}`}>
                {s.label}
              </p>
              <p className="text-subtle text-xs mt-0.5">{s.description}</p>
              {"targetText" in s && (
                <div className="mt-3 pt-3 border-t border-line">
                  <p className="text-subtle text-xs font-medium uppercase tracking-wider mb-1.5">
                    Target Text
                  </p>
                  <p lang="th" className="text-muted text-sm leading-relaxed">{s.targetText}</p>
                </div>
              )}
            </div>
            <audio controls preload="metadata" src={s.src} className="w-full h-10 mt-auto" />
          </div>
        ))}
      </div>
    </Section>
  );
}
