// All site content lives here, so a CV update is a one-file edit.

export type KeyResult = {
  metric: string;
  system: string;
  evaluated: string;
  // Short version of `evaluated`, shown on phones
  vs: string;
  before: string;
  after: string;
  reduction: string;
};

export type Job = {
  title: string;
  company: string;
  date: string;
  tags?: string[];
  keyResults?: KeyResult[];
  bullets: string[];
};

export type Link = { label: string; href: string };

export type Project = {
  title: string;
  role?: string;
  date: string;
  tags: string[];
  // The first 4 are always shown; any extra sit behind "Show more"
  bullets: string[];
  link?: Link;
};

export type Image = { src: string; alt: string };

export type Achievement = {
  title: string;
  badge: string;
  date: string;
  description: string;
  highlights?: string[];
};

export type VoiceSample = {
  label: string;
  description: string;
  src: string;
  accent: boolean;
  targetText?: string;
};

export const profile = {
  name: "Nithid Guntasin",
  title: "AI Engineer",
  tagline:
    "Building end-to-end ML systems for Thai speech and text, from data pipelines and model fine-tuning to LLM/RAG applications and evaluation.",
  about:
    "AI Engineer building end-to-end ML systems for Thai speech and text, from data pipelines and model fine-tuning to LLM/RAG applications and evaluation. Currently an AI Engineer (Contract) at the Artificial Intelligence Association of Thailand (AIAT), and previously an AI Engineer Intern at Jasmine Technology Solution, where I fine-tuned a Thai TTS model that cut Character Error Rate from 44% to 2.75%. Co-author of JaiTTS (arXiv, 2026) and a Computer Engineering graduate from SIIT with First Class Honors.",
  siteUrl: "https://portfolio-topaz-kappa-94.vercel.app",
  photo: "/photo.jpg",
  resume: "/Resume_NithidGuntasin.pdf",
  github: "https://github.com/GeorgieSmile",
  linkedin: "https://www.linkedin.com/in/nithid-guntasin",
  email: "nguntasin16@gmail.com",
  phone: { display: "+66 62 357 4592", href: "tel:+66623574592" },
};

export const jobs: Job[] = [
  {
    title: "AI Engineer (Contract)",
    company: "Artificial Intelligence Association of Thailand (AIAT)",
    date: "Aug 2026 – Present",
    tags: ["Web scraping", "Data cleaning", "Record deduplication", "KPI design", "Dashboard"],
    bullets: [
      "Built 8 web scrapers to collect Thai public data on community innovation, local businesses, and cultural sites for a government agency's provincial development dashboard",
      "Cleaned and standardized records from 8 sources, merging records that described the same person, business, or product across websites so each was counted once",
      "Designed the KPI definitions and calculations, reporting only the KPIs the collected data could reliably support",
      "Built and tested the dashboard section showing the KPIs by province, with drill-down to the underlying records",
    ],
  },
  {
    title: "AI Engineer Intern",
    company: "Jasmine Technology Solution",
    date: "Jan 2026 – May 2026",
    tags: ["MOSS-TTS", "F5-TTS", "XLM-RoBERTa", "Whisper", "vLLM", "DiariZen", "Silero VAD", "yt-dlp"],
    bullets: [
      "Built a 6-stage Thai TTS data pipeline that turned 800+ hours of raw audio into a 550-hour training set, covering speech enhancement, diarization and segmentation, quality filtering, transcription and cleaning, speaker-matched prompt pairing, and dataset assembly",
      "Integrated MossFormer2, DiariZen, Silero VAD, DNSMOS/AudioBox, Whisper, vLLM, and WavLM/ECAPA-TDNN models across the pipeline stages",
      "Fine-tuned MOSS-TTS (1.7B, no prior Thai support) on the 550-hour set, cutting Character Error Rate (CER) from 44.01% to 2.75%",
      "Trained an XLM-RoBERTa model to predict speech duration for F5-TTS, reducing timing error (MAE) from 1.70s to 1.09s vs. a byte-count baseline and CER from 4.78% to 4.32%",
      "Made the pipeline restartable from any stage by saving parquet checkpoints, and kept the H100 GPU busy by preparing audio in parallel on CPU and batching clips by length to avoid out-of-memory errors",
      "Developed a YouTube channel audio downloader with yt-dlp, adding resume support, rate limiting, and FLAC export so it could run unattended for large-scale Thai speech collection",
    ],
    keyResults: [
      {
        metric: "CER",
        system: "MOSS-TTS Local 1.7B",
        evaluated: "Thai fine-tuned TTS model vs. Pretrained Model",
        vs: "vs. pretrained model",
        before: "44.01%",
        after: "2.75%",
        reduction: "↓ 93.7% reduction",
      },
      {
        metric: "MAE",
        system: "Duration predictor (XLM-RoBERTa)",
        evaluated: "Duration predictor model vs. Byte-counting Baseline",
        vs: "vs. byte-count baseline",
        before: "1.70s",
        after: "1.09s",
        reduction: "↓ 35.9% reduction",
      },
      {
        metric: "CER",
        system: "F5-TTS inference",
        evaluated: "Synthesis quality with duration predictor vs. Byte-counting Baseline",
        vs: "vs. byte-count baseline",
        before: "4.78%",
        after: "4.32%",
        reduction: "↓ 9.6% reduction",
      },
    ],
  },
];

export const voiceDemo = {
  subtitle:
    "Thai TTS — fine-tuned on 550 hours of speech data during internship at Jasmine Technology Solution",
  samples: [
    {
      label: "Reference Voice",
      description: "Original voice used as the cloning prompt",
      src: "/audio/prompt.wav",
      accent: false,
    },
    {
      label: "Generated Sample 1",
      description: "Voice cloned from the reference above",
      src: "/audio/prompt_gen1.wav",
      accent: true,
      targetText:
        "Honda คว้ารางวัล gen z top brand award 2026 และรางวัล best costume design จากงาน motor show 2026",
    },
    {
      label: "Generated Sample 2",
      description: "Second generated output — same reference",
      src: "/audio/prompt_gen2.wav",
      accent: true,
      targetText:
        "พอผมใกล้จะทำ Moss TTS version 1 เสร็จ version 2 ก็ใกล้ออกแล้ว",
    },
  ] satisfies VoiceSample[],
};

export const publication = {
  badge: "arXiv · Apr 2026",
  title: "JaiTTS: A Thai Voice Cloning Model",
  authorsBefore:
    "Karnjanaekarin, J., Trakuekul, P., Panitsrisit, N., Sumanakul, S., Nitayasomboon, V.,",
  me: "Guntasin, N.",
  authorsAfter: ", Denkavin, T., & Rutherford, A.T.",
  contributions: [
    "Built the blind A/B listening-test app with Streamlit and SQLite, used for the paper's human evaluation: 20 native Thai raters compared randomized model pairs on naturalness and speaker similarity, with JaiTTS winning 283 of 400 comparisons against commercial models",
    "Added a password-protected admin dashboard reporting head-to-head win rates and Elo ratings, covered by pytest unit tests",
    "Co-created the paper's 231-case long-duration test set from YouTube with manually verified transcripts, and evaluated audio tokenizers and restoration models",
  ],
  links: [
    { label: "arXiv:2604.27607", href: "https://arxiv.org/abs/2604.27607" },
    { label: "GitHub", href: "https://github.com/JTS-AI-Team/JaiTTS" },
  ] satisfies Link[],
};

export const projects: Project[] = [
  {
    title: "Scrybe: RAG Academic Chatbot",
    role: "Senior Project · Data & AI Lead (team of 4)",
    date: "Aug – Dec 2025",
    tags: ["RAG", "n8n", "Pinecone", "Cohere Rerank", "Gemini 2.5 Flash", "Claude Haiku 4.5"],
    bullets: [
      "Gathered requirements from students and staff, using their feedback to shape the chatbot's features",
      "Owned the knowledge-base ingestion: cleaned, chunked, embedded, and indexed SIIT web pages and staff-provided FAQs across 7 support domains in Pinecone, with domain metadata on every chunk",
      "Designed and tested the n8n RAG workflow: Gemini 2.5 Flash classifies the query domain to guide retrieval, Pinecone retrieves candidate chunks, Cohere reranks them, and Claude Haiku 4.5 generates answers grounded in the top passages",
      "Evaluated the system: 0.93 recall@3 and 0.76 precision@3; LLM-judged faithfulness 0.93 and correctness 0.92",
      "Collected user ratings on a 0–1 scale: 20 students rated helpfulness 0.82 and correctness 0.85; 2 staff members rated helpfulness 0.98 and correctness 0.86",
      "Estimated LLM generation cost at about $0.014 (0.50 THB) per query with Claude Haiku 4.5",
    ],
  },
  {
    title: "Thai Sentiment Analysis Web Application",
    date: "Aug 2025",
    tags: ["WangchanBERTa", "FastAPI", "Docker Compose", "Nginx"],
    bullets: [
      "Built a Thai sentiment web app with a FastAPI backend, containerized with Docker Compose and Nginx, supporting single-sentence, batch-file (.txt/.csv), and YouTube-comment analysis with per-class probabilities",
      "Fine-tuned WangchanBERTa on about 25,000 labeled Thai sentences, with 78% accuracy on 3 sentiment classes",
      "Converted the 4-class Wisesight dataset into a 3-class setup through preprocessing and label mapping",
    ],
    link: { label: "GitHub", href: "https://github.com/GeorgieSmile/Thai_Sentiment" },
  },
];

export const superAI: Achievement & { teamWins: Image[]; campMoments: Image[] } = {
  title: "Super AI Engineer Season 6",
  badge: "Level 3 · Bronze Medal",
  date: "May 2026 – Sep 2026",
  description:
    "Selected for the Level 2 bootcamp (157 of 10,457 applicants) of Thailand's national AI talent program, run by AIAT with Thailand's Ministry of Higher Education; advanced to Level 3 and earned a Bronze Medal for overall performance across Levels 2 and 3. Developed and evaluated AI prototypes under tight hackathon timelines, including RAG chatbots, sales forecasting, and CCTV object detection.",
  highlights: [
    "Won 1st place twice and Judge's Favorite across 4 team hackathons.",
    "Ranked 3rd in an individual Kaggle competition (average of 5 tasks).",
  ],
  teamWins: [
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
  ],
  campMoments: [
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

export const achievements: Achievement[] = [
  {
    title: "Mitr Phol GenAI Hackathon",
    badge: "Finalist",
    date: "Aug – Oct 2025",
    description: "Built a prototype GenAI copilot for real-time boiler optimization.",
  },
  {
    title: "Health & Innovation Hackathon",
    badge: "Finalist",
    date: "Sep 2025",
    description:
      "Built a prototype AI-powered EMS dashboard integrating YOLOv8 and speech-to-text to automatically extract and visualize critical patient data.",
  },
  {
    title: "GHB Open Innovation Hackathon",
    badge: "Finalist · Honorable Mention",
    date: "Jul 2025",
    description:
      "Proposed a data-driven Rent-to-Own housing concept integrating solar financing and alternative credit scoring.",
  },
  {
    title: "Cyberwarrior Hackathon",
    badge: "Semi-Finalist",
    date: "Jul 2025",
    description: "Built a prototype cybercrime investigation tool for scam-call network analysis.",
  },
];

export const skillGroups = [
  {
    label: "Programming & Data",
    items: ["Python", "SQL", "JavaScript", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Requests", "BeautifulSoup"],
  },
  {
    label: "ML / DL",
    items: ["PyTorch", "Hugging Face Transformers", "Accelerate", "scikit-learn", "OpenCV", "PyThaiNLP"],
  },
  {
    label: "LLM & RAG",
    items: ["vLLM", "Pinecone", "Cohere Rerank", "n8n", "Gemini & Claude APIs", "LLM-as-judge evaluation"],
  },
  {
    label: "Speech",
    items: ["Whisper", "Silero VAD", "DiariZen", "DNSMOS", "Librosa", "F5-TTS", "MOSS-TTS"],
  },
  {
    label: "Backend & Tools",
    items: ["FastAPI", "Streamlit", "Nginx", "MySQL", "SQLite", "Git", "Docker", "Linux", "Weights & Biases", "uv", "yt-dlp"],
  },
  { label: "Languages", items: ["Thai (Native)", "English (CEFR C1; B.Eng. taught in English)"] },
];

export const education = {
  school: "Sirindhorn International Institute of Technology",
  degree: "B.Eng. Computer Engineering",
  date: "Aug 2022 – May 2026",
  badges: ["GPA 3.65 / 4.00", "First Class Honors"],
  scholarship:
    "SIIT Scholarship for Good Academic Performance and Good Conduct (GAC) — 25% of tuition, renewed for 3 consecutive semesters (1/2024, 2/2024, 1/2025)",
  coursework: [
    "Machine Learning",
    "Natural Language Processing",
    "Deep Learning",
    "Computer Vision",
    "Database Systems",
    "Big Data Analytics",
  ],
};
