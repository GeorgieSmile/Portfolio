type KeyResult = {
  metric: string;
  system: string;
  evaluated: string;
  before: string;
  after: string;
  reduction: string;
};

const keyResults: KeyResult[] = [
  {
    metric: "CER",
    system: "MOSS-TTS Local 1.7B",
    evaluated: "Fine-tuned TTS synthesis",
    before: "44.01%",
    after: "2.75%",
    reduction: "↓ 93.7% reduction",
  },
  {
    metric: "MAE",
    system: "Duration predictor (XLM-RoBERTa)",
    evaluated: "Predicted vs. actual utterance duration",
    before: "1.70s",
    after: "1.09s",
    reduction: "↓ 35.9% reduction",
  },
  {
    metric: "CER",
    system: "F5-TTS inference",
    evaluated: "Synthesis quality with duration predictor vs. byte-counting baseline",
    before: "4.78%",
    after: "4.32%",
    reduction: "↓ 9.6% reduction",
  },
];

const bullets = [
  "Contributed to a Thai speech data collection and processing pipeline for TTS model development",
  "Built a YouTube audio scraping utility to support large-scale Thai speech data collection",
  "Adapted an audio processing pipeline based on Emilia and MOSS-TTS, including source separation, speech restoration, VAD segmentation, ASR transcription, and quality control",
  "Fine-tuned MOSS-TTS Local 1.7B on 550 hours of Thai speech data, reducing CER from 44.01% to 2.75%",
  "Trained a duration predictor for F5-TTS inference using XLM-RoBERTa with a regression head, improving MAE from 1.70s to 1.09s and reducing CER from 4.78% to 4.32%",
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
          <span className="w-8 h-px bg-indigo-500 flex-shrink-0" />
          Experience
        </h2>
        <div className="bg-[#171717] border border-[#262626] rounded-xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-5">
            <div>
              <h3 className="text-white font-semibold text-base md:text-lg">
                AI Engineer Intern
              </h3>
              <p className="text-indigo-400 text-sm mt-0.5">
                Jasmine Technology Solution
              </p>
            </div>
            <span className="text-[#737373] text-sm whitespace-nowrap">
              Jan 2026 – May 2026
            </span>
          </div>
          <ul className="space-y-2.5 mb-6">
            {bullets.map((item, i) => (
              <li key={i} className="flex gap-3 text-[#a3a3a3] text-sm leading-relaxed">
                <span className="mt-2 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="border-t border-[#262626] pt-5">
            <p className="text-[#737373] text-xs font-medium uppercase tracking-wider mb-3">
              Key Results
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {keyResults.map((r) => (
                <div
                  key={`${r.system}-${r.metric}`}
                  className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a] flex flex-col"
                >
                  <p className="text-indigo-400/90 text-xs font-medium mb-0.5">
                    {r.system}
                  </p>
                  <p className="text-[#737373] text-xs mb-1">{r.evaluated}</p>
                  <p className="text-white text-sm font-semibold mb-2">{r.metric}</p>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="text-[#737373] text-lg font-semibold">{r.before}</span>
                    <span className="text-[#404040] text-sm">→</span>
                    <span className="text-indigo-400 text-lg font-bold">{r.after}</span>
                  </div>
                  <p className="text-emerald-500 text-xs mt-1">{r.reduction}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
