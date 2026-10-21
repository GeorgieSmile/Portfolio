"use client";

import { useEffect } from "react";

// One voice at a time: starting any player pauses the others, so the clips never overlap.
export default function OneAudioAtATime() {
  useEffect(() => {
    // "play" does not bubble, so listen in the capture phase
    const onPlay = (e: Event) => {
      for (const audio of document.querySelectorAll("audio")) if (audio !== e.target) audio.pause();
    };
    document.addEventListener("play", onPlay, true);
    return () => document.removeEventListener("play", onPlay, true);
  }, []);

  return null;
}
