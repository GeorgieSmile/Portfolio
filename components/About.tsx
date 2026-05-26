export default function About() {
  return (
    <section id="about" className="py-20 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-indigo-500 flex-shrink-0" />
          About
        </h2>
        <p className="text-[#a3a3a3] text-base md:text-lg leading-relaxed max-w-2xl">
          Computer Engineering graduate from SIIT with hands-on experience in
          machine learning, speech data pipelines, model fine-tuning, and backend
          development. Completed an AI Engineer internship focused on Thai speech
          data processing and TTS optimization, including fine-tuning a 1.7B model
          on 550 hours of speech data. Co-author of an arXiv paper on Thai voice
          cloning. Seeking an AI/ML Engineer role building reliable
          production-oriented ML systems.
        </p>
      </div>
    </section>
  );
}
