"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

// The three winning-team photos: a small thumbnail beside its caption on phones, one row of three above that.

function CampPhoto({
  img,
  index,
  onClick,
}: {
  img: GalleryImage;
  index: number;
  onClick: () => void;
}) {
  return (
    <figure className="flex gap-4 items-start sm:block">
      <button
        type="button"
        onClick={onClick}
        data-reveal="shutter"
        style={{ "--i": index } as React.CSSProperties}
        className="group relative block w-2/5 shrink-0 sm:w-full aspect-[3/2] overflow-hidden bg-surface cursor-zoom-in"
        aria-label={`Enlarge: ${img.alt}`}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          // Three photos only: load them with the page so a quick scroll never meets an empty frame
          loading="eager"
          sizes="(min-width: 640px) 30vw, 40vw"
          className="object-cover brightness-[0.85] group-hover:brightness-100"
        />
      </button>
      <figcaption className="text-small text-muted sm:mt-3 max-w-[48ch]">{img.alt}</figcaption>
    </figure>
  );
}

export default function CampGallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  // Thumbnail that opened the lightbox, so focus can return to it on close
  const openerRef = useRef<HTMLElement | null>(null);
  const active = activeIndex !== null ? images[activeIndex] : null;

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i + images.length - 1) % images.length
    );
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      // Keep Tab focus inside the dialog
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button:not([tabindex='-1'])");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
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

    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      openerRef.current?.focus();
    };
  }, [isOpen, images.length]);

  const openAt = (index: number) => {
    openerRef.current = document.activeElement as HTMLElement | null;
    setActiveIndex(index);
  };

  return (
    <>
      <div className="grid sm:grid-cols-3 gap-x-[var(--gutter)] gap-y-6 sm:gap-y-10">
        {images.map((img, i) => (
          <CampPhoto
            key={img.src}
            img={img}
            index={i}
            onClick={() => openAt(i)}
          />
        ))}
      </div>

      {active && activeIndex !== null && (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo"
        >
          <button
            type="button"
            className="absolute inset-0 bg-bg/95 cursor-zoom-out"
            tabIndex={-1}
            onClick={close}
            aria-label="Close enlarged photo"
          />

          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="press absolute top-4 right-4 z-20 p-3 text-ink bg-surface"
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
                className="press absolute left-2 sm:left-4 z-20 p-3 text-ink bg-surface"
                aria-label="Previous photo"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={showNext}
                className="press absolute right-2 sm:right-4 z-20 p-3 text-ink bg-surface"
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
                preload
              />
            </div>
            <p className="text-small text-ink text-center max-w-2xl px-4">
              {active.alt}
            </p>
            {images.length > 1 && (
              <p className="text-small text-muted tabular">
                {activeIndex + 1} / {images.length}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
