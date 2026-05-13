import Image from "next/image";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <p className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              AI / ML Engineer
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-5 tracking-tight leading-tight">
              Nithid
              <br />
              Guntasin
            </h1>
            <p className="text-[#737373] text-base md:text-lg mb-10 max-w-md mx-auto md:mx-0 leading-relaxed">
              Building intelligent systems at the intersection of NLP, speech
              synthesis, and machine learning.
            </p>
            <div className="flex gap-3 justify-center md:justify-start flex-wrap">
              <a
                href="https://github.com/GeorgieSmile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#262626] bg-[#171717] text-[#e5e5e5] text-sm font-medium hover:border-indigo-500/50 hover:text-indigo-400 transition-colors duration-200"
              >
                <GithubIcon /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/nithid-guntasin-8abaa1381"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#262626] bg-[#171717] text-[#e5e5e5] text-sm font-medium hover:border-indigo-500/50 hover:text-indigo-400 transition-colors duration-200"
              >
                <LinkedInIcon /> LinkedIn
              </a>
              <a
                href="mailto:nguntasin16@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#262626] bg-[#171717] text-[#e5e5e5] text-sm font-medium hover:border-indigo-500/50 hover:text-indigo-400 transition-colors duration-200"
              >
                <MailIcon /> Email
              </a>
              <a
                href="/CV_NithidGuntasin.pdf"
                download
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-indigo-500/40 bg-indigo-500/10 text-indigo-400 text-sm font-medium hover:bg-indigo-500/20 hover:border-indigo-500/60 transition-colors duration-200"
              >
                <DownloadIcon /> CV
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-indigo-500/30 ring-offset-4 ring-offset-[#0f0f0f]">
                <Image
                  src="/photo.jpg"
                  alt="Nithid Guntasin"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
