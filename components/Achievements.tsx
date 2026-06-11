import CampGallery from "@/components/CampGallery";

type AchievementImage = {
  src: string;
  alt: string;
};

type Achievement = {
  title: string;
  badge: string;
  date: string;
  description: string;
  highlights?: string[];
  images?: AchievementImage[];
};

const achievements: Achievement[] = [
  {
    title: "SIIT Academic Scholarship",
    badge: "Scholarship",
    date: "2024–2025",
    description:
      "Awarded for strong academic performance and good conduct across three semesters (1/2024, 2/2024, 1/2025).",
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
];

const superAI: Achievement = {
  title: "Super AI Engineer Season 6",
  badge: "Level 2 (Selected top 157 of 10,457 applicants)",
  date: "May 2026 – Jun 2026",
  description:
    "Developed AI prototypes for real-world use cases, including RAG chatbots, sales forecasting, and CCTV object detection.",
  highlights: [
    "Won 1st place twice and Judge's Favorite Award across 4 team hackathons.",
    "3rd place in individual Kaggle hackathon (avg. score of 5 competitions).",
  ],
  images: [
    {
      src: "/super-ai/SPAI6-Hack2.jpg",
      alt: "Team winning 1st place at the Edge-AI for Intelligence Transport System hackathon",
    },
    {
      src: "/super-ai/SPAI6-Hack4.jpg",
      alt: "Team winning 1st place at the FahMai Enterprise Data Agent Showdown hackathon",
    },
    {
      src: "/super-ai/SPAI6-Hack3.jpg",
      alt: "Team receiving Judge's Favorite Award at the WellSense AIoT hackathon",
    },
    {
      src: "/super-ai/SPAI6-SoloHack.jpg",
      alt: "Presenting at Super AI Engineer camp",
    },
    {
      src: "/super-ai/SPAI6-SoloHack2.jpg",
      alt: "Award recognition for strong individual hackathon performance at camp",
    },
  ],
};

function AchievementCard({
  achievement,
  className = "",
}: {
  achievement: Achievement;
  className?: string;
}) {
  return (
    <div
      className={`bg-[#171717] border border-[#262626] rounded-xl p-5 hover:border-[#333] transition-colors ${className}`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-sm font-semibold leading-snug">
            {achievement.title}
          </h3>
          <p className="text-indigo-400 text-xs mt-0.5">{achievement.badge}</p>
        </div>
        <span className="text-[#737373] text-xs whitespace-nowrap">
          {achievement.date}
        </span>
      </div>
      {achievement.description && (
        <p className="text-[#737373] text-xs leading-relaxed mt-2">
          {achievement.description}
        </p>
      )}
    </div>
  );
}

export default function Achievements() {
  const teamWins = superAI.images!.slice(0, 3);
  const campMoments = superAI.images!.slice(3);

  return (
    <section id="achievements" className="py-20 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
          <span className="w-8 h-px bg-indigo-500 flex-shrink-0" />
          Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {achievements.map((a, i) => (
            <AchievementCard
              key={a.title}
              achievement={a}
              className={`lg:col-span-2 ${
                achievements.length % 2 !== 0 && i === achievements.length - 1
                  ? "sm:col-span-2 sm:max-w-md sm:mx-auto w-full"
                  : ""
              } ${i === 3 ? "lg:col-start-2" : ""}`}
            />
          ))}
        </div>

        <div className="mt-8 bg-[#171717] border border-[#262626] rounded-xl p-6 md:p-8 hover:border-[#333] transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-4">
            <div>
              <h3 className="text-white font-semibold text-base md:text-lg">
                {superAI.title}
              </h3>
              <p className="text-indigo-400 text-sm mt-0.5">{superAI.badge}</p>
            </div>
            <span className="text-[#737373] text-sm whitespace-nowrap">
              {superAI.date}
            </span>
          </div>

          <p className="text-[#a3a3a3] text-sm leading-relaxed">
            {superAI.description}
          </p>

          {superAI.highlights && (
            <div className="mt-4 pt-4 border-t border-[#262626] space-y-1.5">
              {superAI.highlights.map((line) => (
                <p
                  key={line}
                  className="text-amber-400/90 text-sm font-medium leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-[#262626]">
            <p className="text-[#737373] text-xs font-medium uppercase tracking-wider mb-4">
              Camp Highlights
            </p>

            <CampGallery teamWins={teamWins} campMoments={campMoments} />
          </div>
        </div>
      </div>
    </section>
  );
}
