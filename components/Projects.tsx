const tags = ["WangchanBERTa", "FastAPI", "Python", "JavaScript"];

const bullets = [
  "Fine-tuned WangchanBERTa on ~25,000 labeled Thai sentences for 3-class sentiment classification (adapted from 4-class Wisesight dataset), achieving 78% accuracy",
  "Built an end-to-end NLP system: data collection, model fine-tuning, FastAPI backend, and JavaScript frontend deployment",
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
          <span className="w-8 h-px bg-indigo-500 flex-shrink-0" />
          Projects
        </h2>
        <div className="bg-[#171717] border border-[#262626] rounded-xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-4">
            <h3 className="text-white font-semibold text-base md:text-lg">
              Thai Sentiment Analysis Web Application
            </h3>
            <span className="text-[#737373] text-sm whitespace-nowrap">
              Aug 2025
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium bg-[#1f1f1f] text-[#a3a3a3] rounded-md border border-[#333]"
              >
                {tag}
              </span>
            ))}
          </div>
          <ul className="space-y-2.5">
            {bullets.map((item, i) => (
              <li key={i} className="flex gap-3 text-[#a3a3a3] text-sm leading-relaxed">
                <span className="mt-2 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
