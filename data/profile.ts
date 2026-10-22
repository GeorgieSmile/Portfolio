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

// One step of a flow diagram: what it does and the tool or amount behind it.
// The first step is drawn as the input and the last as the output.
export type PipelineStep = { step: string; tool?: string };

// A small-multiples comparison: each metric draws one bar per system, the first system accented
export type Benchmark = {
  title: string;
  note: string;
  systems: string[];
  metrics: { label: string; unit: string; better: "lower" | "higher"; values: number[] }[];
};

export type Job = {
  // Anchor for links straight to this job
  id?: string;
  title: string;
  company: string;
  date: string;
  // One plain sentence on what the work was for, shown before the detail
  summary: string;
  tags?: string[];
  keyResults?: KeyResult[];
  // Plain-language meaning of the key-result metrics
  keyResultsNote?: string;
  // Optional comparison against other systems, shown after the key results
  benchmark?: Benchmark;
  // Optional flow diagram of the main system built, with its caption
  pipeline?: { label: string; steps: PipelineStep[] };
  // Either one list, or the same kind of bullets split into labelled groups
  bullets?: string[];
  bulletGroups?: { label: string; bullets: string[] }[];
};

export type Link = { label: string; href: string };

export type Project = {
  title: string;
  role?: string;
  date: string;
  // One plain sentence on what the project does, shown before the results
  summary: string;
  tags: string[];
  // The first 3 are always shown; any extra sit behind "Show more"
  bullets: string[];
  link?: Link;
  // Shown instead of a link when there is nothing public to link to
  linkNote?: string;
  // Optional flow diagram: each step's tool and what it does
  pipeline?: PipelineStep[];
  // Values between 0 and 1 are drawn as bars on a 0–1 scale; anything else (a cost) is shown as text
  results?: Stat[];
  // Plain-language meaning of the result labels
  resultsNote?: string;
  // A sequence (e.g. a question, then its answer), shown in order
  screenshots?: (Image & { caption: string; width: number; height: number })[];
};

export type Image = { src: string; alt: string };

export type Stat = { value: string; label: string };

export type Achievement = {
  title: string;
  badge: string;
  date: string;
  description: string;
  highlights?: Stat[];
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
    "I build Thai text-to-speech models and chatbots that answer from documents, from collecting the training data to measuring the results.",
  // Proof points under the hero tagline; each links to the section with the details
  highlights: [
    { value: "44% → 2.8%", label: "Thai text-to-speech error rate (CER), lower is better", href: "#jasmine" },
    { value: "JaiTTS", label: "Co-author · arXiv 2026", href: "#publication" },
    { value: "▶ Listen", label: "Thai voice cloning demo", href: "#audio" },
  ],
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
    summary: "Collecting and cleaning Thai public data for a government agency's provincial development dashboard.",
    tags: ["Web scraping", "Data cleaning", "Record deduplication", "KPI design", "Dashboard"],
    bullets: [
      "Built 10 web scrapers to collect Thai public data on community innovation, local businesses, and cultural sites for a government agency's provincial development dashboard",
      "Cleaned and standardized records from 10 sources, merging records that described the same person, business, or product across websites so each was counted once",
      "Designed the KPI definitions and calculations, reporting only the KPIs the collected data could reliably support",
      "Built and tested the dashboard section showing the KPIs by province, with drill-down to the underlying records",
    ],
  },
  {
    id: "jasmine",
    title: "AI Engineer Intern",
    company: "Jasmine Technology Solution",
    date: "Jan 2026 – May 2026",
    summary: "Thai text-to-speech (TTS): built the training data and fine-tuned the models that turn Thai text into spoken Thai.",
    tags: ["MOSS-TTS", "F5-TTS", "XLM-RoBERTa", "Typhoon Whisper", "Gemma 4", "vLLM", "DiariZen", "Silero VAD", "yt-dlp"],
    pipeline: {
      label: "How the training data was built",
      steps: [
        { tool: "~1,000 hours from YouTube", step: "Raw audio" },
        { tool: "MossFormer2", step: "Speech enhancement" },
        { tool: "DiariZen (WavLM-Large), Silero VAD", step: "Diarization & segmentation" },
        { tool: "DNSMOS, AudioBox", step: "Quality filtering" },
        { tool: "Typhoon Whisper, Gemma 4 on vLLM", step: "Transcription & cleaning" },
        { tool: "WavLM, ECAPA-TDNN", step: "Speaker-matched prompt pairing" },
        { tool: "~400 hours kept, plus 150 hours of company data", step: "Dataset assembly" },
        { tool: "550 hours", step: "Training set" },
      ],
    },
    bulletGroups: [
      {
        label: "Building the training data",
        bullets: [
          "Built the 6-stage pipeline shown here, which turned about 1,000 hours of raw YouTube audio into about 400 hours of clean, transcribed speech; with 150 hours of company data, that made the 550-hour training set",
          "Developed a YouTube channel audio downloader with yt-dlp, adding resume support, rate limiting, and FLAC export so it could run unattended for large-scale Thai speech collection",
        ],
      },
      {
        label: "Training the models",
        bullets: [
          "Fine-tuned MOSS-TTS Local (1.7B, not optimized for Thai) on the 550-hour set, choosing between checkpoints by CER, speaker similarity and blind listening tests",
          "Trained an XLM-RoBERTa model on about 100,000 Thai and English clips to predict speech duration for F5-TTS, replacing a byte-count baseline; separate Thai and English models beat a single combined one",
        ],
      },
      {
        label: "Making the pipeline reliable",
        bullets: [
          "Made the pipeline restartable from any stage by saving parquet checkpoints, and kept the H100 GPU busy by preparing audio in parallel on CPU and batching clips by length to avoid out-of-memory errors",
        ],
      },
    ],
    keyResultsNote:
      "Lower is better for all three. CER (character error rate) is the share of characters the speech gets wrong, scored the Seed-TTS-eval way: Typhoon Whisper transcribes the speech, and Thai normalization rules clean both texts before they are compared. MAE is the average error, in seconds, of the predicted speech duration, measured on a 10,000-clip test set. Fine-tuned checkpoints were also compared in blind listening tests: 2 listeners, 20–30 clips per checkpoint.",
    // From the internship report: the best checkpoint on the same test as OmniVoice and real recordings.
    // Test size (~200+ clips) and the Seed-TTS-eval method are from Georgie, not the report.
    benchmark: {
      title: "Against a state-of-the-art model",
      note: "My best checkpoint next to OmniVoice, a state-of-the-art multilingual TTS model, and real human recordings, on about 200 or more test clips. The two models are within about one point of each other on both measures, and the two listeners' blind preferences between them were closely matched. Speaker similarity is the cosine similarity of WavLM speaker embeddings between the speech and its reference clip; real recordings can score lower than cloned speech because each is a separate take, while a cloned clip is built from the reference itself.",
      systems: ["My fine-tuned MOSS-TTS", "OmniVoice", "Real human recordings"],
      metrics: [
        { label: "CER", unit: "%", better: "lower", values: [2.775, 2.883, 1.978] },
        { label: "Speaker similarity", unit: "%", better: "higher", values: [63.6, 64.6, 60.7] },
      ],
    },
    keyResults: [
      {
        metric: "CER",
        system: "MOSS-TTS Local 1.7B",
        evaluated: "Thai fine-tuned TTS model vs. Pretrained Model",
        vs: "vs. pretrained model",
        before: "44.01%",
        after: "2.775%",
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
        after: "4.26%",
        reduction: "↓ 10.9% reduction",
      },
    ],
  },
];

export const voiceDemo = {
  instruction: "Listen to the reference voice first, then the two clips the model generated in that same voice.",
  subtitle:
    "Generated by my fine-tuned MOSS-TTS Local 1.7B (best checkpoint), trained on 550 hours of Thai speech during my internship at Jasmine Technology Solution",
  samples: [
    {
      label: "Reference Voice",
      description: "Original voice used as the cloning prompt",
      src: "/audio/prompt.wav",
      accent: false,
    },
    {
      label: "Thai–English code-switching",
      description: "Cloned voice reading Thai mixed with English brand names",
      src: "/audio/prompt_gen1.wav",
      accent: true,
      targetText:
        "Honda คว้ารางวัล gen z top brand award 2026 และรางวัล best costume design award จากงาน motor show 2026",
    },
    {
      label: "Casual conversational Thai",
      description: "Same reference voice, informal spoken style",
      src: "/audio/prompt_gen2.wav",
      accent: true,
      targetText:
        "พอผมใกล้จะทำ Moss TTS version 1 เสร็จ version 2 ก็ใกล้จะออกมาแล้ว",
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
    "Built the blind A/B listening-test app with Streamlit and SQLite behind this human evaluation, where raters compared randomized model pairs on naturalness and speaker similarity",
    "Added a password-protected admin dashboard reporting head-to-head win rates and Elo ratings, covered by pytest unit tests",
    "Co-created the paper's 231-case long-duration test set from YouTube with manually verified transcripts, and evaluated audio tokenizers and restoration models",
  ],
  // Figure 2 of the paper: blind pairwise votes, 200 per commercial model
  humanEval: {
    title: "Human judgment against commercial models",
    note: "20 native Thai raters each heard two clips without knowing the models and picked the better one. JaiTTS won 283 of 400 comparisons, tied 59 and lost 58.",
    rows: [
      { against: "ElevenLabs v3", wins: 161, ties: 19, losses: 20 },
      { against: "MiniMax speech-2.8-hd", wins: 122, ties: 40, losses: 38 },
    ],
  },
  links: [
    { label: "arXiv:2604.27607", href: "https://arxiv.org/abs/2604.27607" },
    { label: "GitHub", href: "https://github.com/JTS-AI-Team/JaiTTS" },
  ] satisfies Link[],
};

export const projects: Project[] = [
  {
    title: "Scrybe: RAG Academic Chatbot",
    role: "Senior Project · Data & AI Lead (team of 4)",
    linkNote: "The code is not public (university senior project).",
    date: "Aug – Dec 2025",
    summary: "A chatbot that answers students' questions using SIIT web pages and staff-provided FAQs across 7 support domains.",
    tags: ["RAG", "n8n", "Pinecone", "Cohere Rerank", "Gemini 2.5 Flash", "Claude Haiku 4.5"],
    pipeline: [
      { tool: "Student query", step: "Question in" },
      { tool: "Gemini 2.5 Flash", step: "Classify domain" },
      { tool: "Pinecone", step: "Retrieve chunks" },
      { tool: "Cohere Rerank", step: "Rerank" },
      { tool: "Claude Haiku 4.5", step: "Grounded answer" },
    ],
    results: [
      { value: "0.93", label: "Retrieval recall@3" },
      { value: "0.76", label: "Retrieval precision@3" },
      { value: "0.93", label: "Faithfulness (LLM-judged)" },
      { value: "0.82", label: "Helpfulness · 20 students" },
      { value: "฿0.50", label: "LLM cost per query (about $0.014, Claude Haiku 4.5)" },
    ],
    screenshots: [
      {
        src: "/projects/scrybe-question.png",
        alt: "Scrybe's chat window with a student's question: “What do I have to do while doing internship?”",
        caption: "The question",
        width: 871,
        height: 222,
      },
      {
        src: "/projects/scrybe-answer-redacted.png",
        alt: "Scrybe's answer: faculty members may visit during training; after training, submit the final report via Google Classroom while the supervisor emails the evaluation form and time sheet (the address is blurred); accept the first company offer and follow the company's regular working hours; then an offer to clarify further",
        caption: "Most of the answer, drawn from SIIT's own documents",
        width: 871,
        height: 592,
      },
    ],
    resultsNote:
      "All four scores run from 0 to 1, higher is better. Recall@3: how often the right passage is among the top 3 retrieved; precision@3: how many of those 3 are relevant. Both are computed by script against test questions tagged with their correct passages. Faithfulness: how closely an answer sticks to those passages, scored by one LLM judge. Helpfulness: 20 students rated answers to 15 questions from 1 to 5, scaled to 0–1.",
    bullets: [
      "Gathered requirements from students and staff, using their feedback to shape the chatbot's features",
      "Owned the knowledge-base ingestion: cleaned, chunked, embedded, and indexed SIIT web pages and staff-provided FAQs across 7 support domains in Pinecone, with domain metadata on every chunk",
      "Designed and tested the n8n RAG workflow: Gemini 2.5 Flash classifies the query domain to guide retrieval, Pinecone retrieves candidate chunks, Cohere reranks them, and Claude Haiku 4.5 generates answers grounded in the top passages",
      "Evaluated retrieval by script and answer quality with an LLM judge, which also rated correctness at 0.92",
      "Collected user ratings: students rated correctness 0.85, and 2 staff members rated helpfulness 0.98 and correctness 0.86",
    ],
  },
  {
    title: "Thai Sentiment Analysis Web Application",
    date: "Aug 2025",
    summary: "A web app that reads the sentiment of Thai text: single sentences, uploaded files or YouTube comments.",
    tags: ["WangchanBERTa", "FastAPI", "Docker Compose", "Nginx"],
    bullets: [
      "Built a Thai sentiment web app with a FastAPI backend, containerized with Docker Compose and Nginx, supporting single-sentence, batch-file (.txt/.csv), and YouTube-comment analysis with per-class probabilities",
      "Fine-tuned WangchanBERTa on about 25,000 labeled Thai sentences, with 78% accuracy on 3 sentiment classes",
      "Converted the 4-class Wisesight dataset into a 3-class setup through preprocessing and label mapping",
    ],
    link: { label: "GitHub", href: "https://github.com/GeorgieSmile/Thai_Sentiment" },
  },
];

export const superAI: Achievement & { photos: Image[] } = {
  title: "Super AI Engineer Season 6",
  badge: "Level 3 · Bronze Medal",
  date: "May 2026 – Sep 2026",
  description:
    "Selected for the Level 2 bootcamp (157 of 10,457 applicants) of Thailand's national AI talent program, run by AIAT with Thailand's Ministry of Higher Education; advanced to Level 3 and earned a Bronze Medal for overall performance across Levels 2 and 3. Developed and evaluated AI prototypes under tight hackathon timelines, including RAG chatbots, sales forecasting, and CCTV object detection.",
  highlights: [
    { value: "2× 1st", label: "Team hackathon wins, plus Judge's Favorite (4 hackathons)" },
    { value: "3rd", label: "Individual Kaggle competition (average of 5 tasks)" },
  ],
  photos: [
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
  // Used where space is short (the hero)
  schoolShort: "SIIT",
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
