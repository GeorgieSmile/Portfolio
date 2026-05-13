export default function About() {
  return (
    <section id="about" className="py-20 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-indigo-500 flex-shrink-0" />
          About
        </h2>
        <p className="text-[#a3a3a3] text-base md:text-lg leading-relaxed max-w-2xl">
          Computer Engineering student at SIIT (GPA 3.64/4.00) with hands-on
          experience in speech data pipeline development and fine-tuning
          large-scale TTS models. Completed an AI Engineer internship focused on
          Thai TTS data pipelines and model fine-tuning. Co-author on an arXiv
          publication in Thai speech synthesis. Experienced in NLP, audio
          processing, and backend development with FastAPI. Seeking a full-time
          AI/ML Engineer position upon graduation in 2026.
        </p>
      </div>
    </section>
  );
}
