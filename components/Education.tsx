const coursework = [
  "Machine Learning",
  "Natural Language Processing",
  "Deep Learning",
  "Computer Vision",
  "Database Systems",
  "Big Data Analytics",
];

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
          <span className="w-8 h-px bg-indigo-500 flex-shrink-0" />
          Education
        </h2>
        <div className="bg-[#171717] border border-[#262626] rounded-xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-4">
            <div>
              <h3 className="text-white font-semibold text-base md:text-lg">
                Sirindhorn International Institute of Technology
              </h3>
              <p className="text-indigo-400 text-sm mt-0.5">
                B.Eng. Computer Engineering
              </p>
            </div>
            <span className="text-[#737373] text-sm whitespace-nowrap">
              Aug 2022 – May 2026
            </span>
          </div>

          <div className="flex items-center gap-2 mb-5">
            <span className="px-2.5 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-400 rounded border border-indigo-500/20">
              GPA 3.64 / 4.00
            </span>
            <span className="px-2.5 py-1 text-xs font-medium bg-[#1f1f1f] text-[#a3a3a3] rounded border border-[#333]">
              Expected Graduation
            </span>
          </div>

          <div>
            <p className="text-[#737373] text-xs font-medium uppercase tracking-wider mb-3">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1.5 text-xs font-medium bg-[#1f1f1f] text-[#a3a3a3] rounded-lg border border-[#333]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
