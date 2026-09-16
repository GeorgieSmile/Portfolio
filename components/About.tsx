export default function About() {
  return (
    <section id="about" className="py-20 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-indigo-500 flex-shrink-0" />
          About
        </h2>
        <p className="text-[#a3a3a3] text-base md:text-lg leading-relaxed max-w-2xl">
          AI/ML Engineer and Computer Engineering graduate from SIIT (GPA
          3.65/4.00), co-author of a published arXiv paper on Thai voice cloning
          (JaiTTS, 2026). Experience spans speech AI, LLM/RAG pipelines, and NLP
          — including fine-tuning TTS models that reduced Character Error Rate
          from 44% to 2.75% during an internship at Jasmine Technology Solution.
          Seeking to grow across the full ML lifecycle, from research and
          experimentation to production deployment.
        </p>
      </div>
    </section>
  );
}
