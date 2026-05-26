type Achievement = {
  title: string;
  badge: string;
  date: string;
  description: string;
};

const achievements: Achievement[] = [
  {
    title: "SIIT Academic Scholarship",
    badge: "Scholarship",
    date: "2024–2025",
    description: "",
  },
  {
    title: "Cyberwarrior Hackathon",
    badge: "Semi-Finalist",
    date: "Jul 2025",
    description:
      "Designed a prototype cybercrime investigation tool for scam call network analysis",
  },
  {
    title: "GHB Open Innovation Hackathon",
    badge: "Finalist · Honorable Mention",
    date: "Jul 2025",
    description:
      "Proposed a data-driven Rent-to-Own housing concept integrating solar financing and alternative credit scoring",
  },
  {
    title: "Health & Innovation Hackathon",
    badge: "Finalist",
    date: "Sep 2025",
    description:
      "Designed an AI-powered EMS dashboard integrating YOLOv8 and speech-to-text to automatically extract and visualize critical patient data",
  },
  {
    title: "Mitr Phol GenAI Hackathon",
    badge: "Finalist",
    date: "Oct 2025",
    description:
      "Designed a GenAI copilot system for real-time boiler optimization, predictive safety, and weather-based tuning",
  },
  {
    title: "Super AI Engineer Season 6",
    badge: "Level 2",
    date: "May 2026",
    description:
      "Developed AI prototypes for real-world use cases, including RAG chatbots, sales forecasting, and CCTV object detection. Applied model development, evaluation, and rapid prototyping skills in hackathon-based projects with tight delivery timelines.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
          <span className="w-8 h-px bg-indigo-500 flex-shrink-0" />
          Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="bg-[#171717] border border-[#262626] rounded-xl p-5 hover:border-[#333] transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-sm font-semibold leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-indigo-400 text-xs mt-0.5">{a.badge}</p>
                </div>
                <span className="text-[#737373] text-xs whitespace-nowrap">
                  {a.date}
                </span>
              </div>
              {a.description && (
                <p className="text-[#737373] text-xs leading-relaxed mt-2">
                  {a.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
