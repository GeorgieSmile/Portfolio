const bullets = [
  "Contributed to Thai speech data collection pipeline development",
  "Built a YouTube audio scraping utility to support TTS training data collection",
  "Adapted audio processing pipeline (based on Emilia and MOSS-TTS) for Thai speech, covering source separation, speech restoration, VAD segmentation, ASR transcription, and quality control",
  "Fine-tuned MOSS-TTS (MossTTS Local 1.7B) on 550 hours of Thai speech data, reducing Character Error Rate from 44.01% (pretrained baseline) to 2.75%",
  "Trained a duration predictor for F5-TTS inference using XLM-RoBERTa with a regression head, improving MAE from 1.7s to 1.09s over the byte-counting baseline, reducing CER from 4.78% to 4.32%",
  "Read and evaluated TTS research papers to guide technical decisions on model selection, pipeline design, and hyperparameter tuning",
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a]">
                <p className="text-[#737373] text-xs mb-2">MOSS-TTS Fine-tuning · CER</p>
                <div className="flex items-center gap-2">
                  <span className="text-[#737373] text-lg font-semibold">44.01%</span>
                  <span className="text-[#404040] text-sm">→</span>
                  <span className="text-indigo-400 text-lg font-bold">2.75%</span>
                </div>
                <p className="text-emerald-500 text-xs mt-1">↓ 93.7% reduction</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a]">
                <p className="text-[#737373] text-xs mb-2">Duration Predictor · MAE</p>
                <div className="flex items-center gap-2">
                  <span className="text-[#737373] text-lg font-semibold">1.70s</span>
                  <span className="text-[#404040] text-sm">→</span>
                  <span className="text-indigo-400 text-lg font-bold">1.09s</span>
                </div>
                <p className="text-emerald-500 text-xs mt-1">↓ 35.9% reduction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
