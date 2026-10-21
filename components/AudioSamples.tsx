import { voiceDemo, type VoiceSample } from "@/data/profile";
import { readWaveform } from "@/lib/waveform";
import { Section, Split, WaveformSvg } from "@/components/ui";
import OneAudioAtATime from "@/components/OneAudioAtATime";

// Input against output: the reference voice in the narrow column, the two clones of it in the wide one,
// each drawn from its own audio.
function Specimen({ sample }: { sample: VoiceSample }) {
  const { peaks } = readWaveform(sample.src, 96);
  return (
    <figure className="flex flex-col gap-4">
      <figcaption>
        <h3 className="text-lead">{sample.label}</h3>
        <p className="text-small text-muted mt-1">{sample.description}</p>
      </figcaption>
      <WaveformSvg
        peaks={peaks}
        className={`w-full h-[clamp(72px,6vw,96px)] ${sample.accent ? "text-ink" : "text-muted"}`}
      />
      {sample.targetText && (
        <p lang="th" className="text-body max-w-[48ch]">
          {sample.targetText}
        </p>
      )}
      <audio controls preload="metadata" src={sample.src} />
    </figure>
  );
}

export default function AudioSamples() {
  const [reference, ...clones] = voiceDemo.samples;
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
      <Split side={<Specimen sample={reference} />}>
        <div className="flex flex-col gap-12">
          {clones.map((s) => (
            <Specimen key={s.src} sample={s} />
          ))}
        </div>
      </Split>
      <OneAudioAtATime />
    </Section>
  );
}
