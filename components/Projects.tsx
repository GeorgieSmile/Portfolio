const projects = [
  {
    title: "RAG-based Academic Chatbot for University Support",
    date: "Aug – Dec 2025",
    tags: ["RAG", "n8n", "Vector Retrieval", "Reranking"],
    bullets: [
      "Designed and built an end-to-end RAG pipeline with query classification, vector retrieval, reranking, and answer generation orchestrated through n8n",
      "Achieved 0.93 faithfulness and 0.93 recall@3 in LLM-as-a-judge evaluation, plus 0.82–0.98 helpfulness in human evaluation with 20 students and 2 staff members",
    ],
  },
  {
    title: "Thai Sentiment Analysis Web Application",
    date: "Aug 2025",
    tags: ["WangchanBERTa", "FastAPI", "Python", "JavaScript"],
    bullets: [
      "Fine-tuned WangchanBERTa on approximately 25,000 labeled Thai sentences for 3-class sentiment classification, achieving 78% accuracy",
      "Converted a 4-class Wisesight dataset into a 3-class sentiment setup through preprocessing and label mapping",
      "Built an end-to-end NLP application with model fine-tuning, FastAPI inference API, and JavaScript frontend",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
          <span className="w-8 h-px bg-indigo-500 flex-shrink-0" />
          Projects
        </h2>
        <div className="space-y-5">
          {projects.map((project) => (
            <div key={project.title} className="bg-[#171717] border border-[#262626] rounded-xl p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-4">
                <h3 className="text-white font-semibold text-base md:text-lg">{project.title}</h3>
                <span className="text-[#737373] text-sm whitespace-nowrap">{project.date}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-[#1f1f1f] text-[#a3a3a3] rounded-md border border-[#333]">
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="space-y-2.5">
                {project.bullets.map((item) => (
                  <li key={item} className="flex gap-3 text-[#a3a3a3] text-sm leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
