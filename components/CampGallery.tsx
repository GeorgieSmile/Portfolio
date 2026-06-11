"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

function CampPhoto({
  img,
  className = "",
  onClick,
}: {
  img: GalleryImage;
  className?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative rounded-lg overflow-hidden border border-[#333] bg-[#1a1a1a] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${className}`}
      aria-label={`Enlarge: ${img.alt}`}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-200 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
      <span className="absolute bottom-2 right-2 px-2 py-1 text-[10px] font-medium text-white/90 bg-black/50 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        Click to enlarge
      </span>
    </button>
  );
}

export default function CampGallery({
  teamWins,
  campMoments,
}: {
  teamWins: GalleryImage[];
  campMoments: GalleryImage[];
}) {
  const images = [...teamWins, ...campMoments];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? images[activeIndex] : null;

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i + images.length - 1) % images.length
    );
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) =>
          i === null ? null : (i + images.length - 1) % images.length
        );
      }
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, images.length]);

  const openAt = (index: number) => setActiveIndex(index);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
        {teamWins.map((img, i) => (
          <CampPhoto
            key={img.src}
            img={img}
            onClick={() => openAt(i)}
            className="aspect-[4/3] sm:aspect-[3/2]"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:max-w-[66%] sm:mx-auto">
        {campMoments.map((img, i) => (
          <CampPhoto
            key={img.src}
            img={img}
            onClick={() => openAt(teamWins.length + i)}
            className="aspect-[4/3]"
          />
        ))}
      </div>

      {active && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/90 cursor-zoom-out"
            onClick={close}
            aria-label="Close enlarged photo"
          />

          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-lg transition-colors"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-2 sm:left-4 z-10 p-2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-lg transition-colors"
                aria-label="Previous photo"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-2 sm:right-4 z-10 p-2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-lg transition-colors"
                aria-label="Next photo"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-3 pointer-events-none">
            <div className="relative w-full h-[70vh] pointer-events-auto">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <p className="text-[#a3a3a3] text-sm text-center max-w-2xl px-4">
              {active.alt}
            </p>
            {images.length > 1 && (
              <p className="text-[#737373] text-xs">
                {activeIndex + 1} / {images.length}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
