type Sample = {
  label: string;
  description: string;
  src: string;
  accent: boolean;
  targetText?: string;
};

const samples: Sample[] = [
  {
    label: "Reference Voice",
    description: "Original voice used as the cloning prompt",
    src: "/audio/prompt.wav",
    accent: false,
  },
  {
    label: "Generated Sample 1",
    description: "Voice cloned from the reference above",
    src: "/audio/prompt_gen1.wav",
    accent: true,
    targetText:
      "Honda คว้ารางวัล gen z top brand award 2026 และรางวัล best costume design จากงาน motor show 2026",
  },
  {
    label: "Generated Sample 2",
    description: "Second generated output — same reference",
    src: "/audio/prompt_gen2.wav",
    accent: true,
    targetText:
      "พอผมใกล้จะทำ Moss TTS version 1 เสร็จ version 2 ก็ใกล้ออกแล้ว",
  },
];

export default function AudioSamples() {
  return (
    <section id="audio" className="py-20 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <span className="w-8 h-px bg-indigo-500 flex-shrink-0" />
          Voice Cloning Demo
        </h2>
        <p className="text-[#737373] text-sm mb-10 ml-11">
          Thai TTS — fine-tuned on 550 hours of speech data during internship at Jasmine Technology Solution
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {samples.map((s) => (
            <div
              key={s.label}
              className={`rounded-xl border p-5 flex flex-col gap-3 ${
                s.accent
                  ? "bg-[#171717] border-indigo-500/20"
                  : "bg-[#171717] border-[#262626]"
              }`}
            >
              <div>
                <p
                  className={`text-sm font-semibold ${
                    s.accent ? "text-indigo-400" : "text-white"
                  }`}
                >
                  {s.label}
                </p>
                <p className="text-[#737373] text-xs mt-0.5">{s.description}</p>
                {s.targetText && (
                  <div className="mt-3 pt-3 border-t border-[#262626]">
                    <p className="text-[#737373] text-xs font-medium uppercase tracking-wider mb-1.5">
                      Target Text
                    </p>
                    <p className="text-[#a3a3a3] text-xs leading-relaxed">
                      {s.targetText}
                    </p>
                  </div>
                )}
              </div>
              <audio
                controls
                src={s.src}
                className="w-full h-8 accent-indigo-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
