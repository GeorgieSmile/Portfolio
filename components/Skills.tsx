const groups = [
  { label: "Programming", items: ["Python"] },
  {
    label: "Libraries",
    items: [
      "PyTorch",
      "Hugging Face Transformers",
      "Hugging Face Accelerate",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Librosa",
      "Whisper",
      "yt-dlp",
    ],
  },
  { label: "Backend", items: ["FastAPI"] },
  { label: "Databases", items: ["MySQL", "SQLite", "Pinecone"] },
  {
    label: "Tools",
    items: ["Git", "Docker", "Linux", "Jupyter Notebook", "Google Colab", "Weights & Biases"],
  },
  { label: "Languages", items: ["Thai (Native)", "English (CEFR C1)"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
          <span className="w-8 h-px bg-indigo-500 flex-shrink-0" />
          Skills
        </h2>
        <div className="space-y-5">
          {groups.map((group) => (
            <div
              key={group.label}
              className="flex flex-col sm:flex-row sm:items-start gap-3"
            >
              <span className="w-28 flex-shrink-0 text-[#737373] text-xs font-medium uppercase tracking-wider pt-1.5">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-medium bg-[#171717] text-[#a3a3a3] rounded-lg border border-[#262626] hover:border-indigo-500/30 hover:text-[#e5e5e5] transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
