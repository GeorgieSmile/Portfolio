const contributions = [
  "Built TTS evaluation interface and constructed test set",
  "Evaluated audio tokenizers and restoration models",
];

export default function Publication() {
  return (
    <section id="publication" className="py-20 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
          <span className="w-8 h-px bg-indigo-500 flex-shrink-0" />
          Publication
        </h2>
        <div className="bg-[#171717] border border-[#262626] rounded-xl p-6 md:p-8">
          <div className="mb-4">
            <span className="inline-block px-2 py-0.5 text-xs font-medium bg-indigo-500/10 text-indigo-400 rounded border border-indigo-500/20">
              arXiv 2026
            </span>
          </div>
          <h3 className="text-white font-semibold text-base md:text-lg mb-3 leading-snug">
            JaiTTS: A Thai Voice Cloning Model
          </h3>
          <p className="text-[#737373] text-sm mb-5 leading-relaxed">
            Karnjanaekarin, J., Trakuekul, P., Panitsrisit, N., Sumanakul, S.,
            Nitayasomboon, V.,{" "}
            <span className="text-[#e5e5e5] font-medium">Guntasin, N.</span>,
            Denkavin, T., &amp; Rutherford, A.T.
          </p>
          <ul className="space-y-2 mb-5">
            {contributions.map((item, i) => (
              <li key={i} className="flex gap-3 text-[#a3a3a3] text-sm">
                <span className="mt-2 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="https://arxiv.org/abs/2604.27607"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors"
          >
            arXiv:2604.27607 →
          </a>
        </div>
      </div>
    </section>
  );
}
