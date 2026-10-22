import { voiceDemo, type VoiceSample } from "@/data/profile";
import { readWaveform } from "@/lib/waveform";
import { Section, WaveformSvg } from "@/components/ui";
import OneAudioAtATime from "@/components/OneAudioAtATime";

// Input then output, at equal widths so the waveforms compare like for like, each drawn from its own audio.
// From xl each clip spans four shared rows (title, waveform, text, player), so they line up across columns.
function Specimen({ sample }: { sample: VoiceSample }) {
  const { peaks } = readWaveform(sample.src, 96);
  return (
    <figure data-reveal className="flex flex-col gap-4 xl:row-span-4 xl:grid xl:grid-rows-subgrid">
      <figcaption>
        <h3 className="text-lead">{sample.label}</h3>
        <p className="text-small text-muted mt-1">{sample.description}</p>
      </figcaption>
      <WaveformSvg
        peaks={peaks}
        className={`w-full h-[clamp(72px,6vw,96px)] ${sample.accent ? "text-ink" : "text-muted"}`}
      />
      {/* The reference has no script; the empty slot keeps its player level with the others */}
      {sample.targetText ? (
        <p lang="th" className="text-body max-w-[48ch]">
          {sample.targetText}
        </p>
      ) : (
        <span aria-hidden className="hidden xl:block" />
      )}
      <audio controls preload="metadata" src={sample.src} />
    </figure>
  );
}

export default function AudioSamples() {
  return (
    <Section
      id="audio"
      title="Voice Cloning Demo"
      intro={
        <>
          <p>{voiceDemo.subtitle}</p>
          <p className="text-body mt-4">{voiceDemo.instruction}</p>
        </>
      }
    >
      <div className="grid gap-y-12 xl:grid-cols-3 xl:gap-x-[var(--gutter)] xl:gap-y-4">
        {voiceDemo.samples.map((s) => (
          <Specimen key={s.src} sample={s} />
        ))}
      </div>
      <OneAudioAtATime />
    </Section>
  );
}
