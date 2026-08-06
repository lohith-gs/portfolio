"use client";

import { useEffect, useRef } from "react";

/**
 * Autoplaying, looping, muted screen capture of the real tan(AI) branching
 * canvas (converted from a GIF to a small MP4). Muted is set imperatively so
 * autoplay is allowed across browsers.
 */
export function TanAiVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.muted = true;
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-card-2">
      <video
        ref={ref}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/tanai-poster.jpg"
        className="block aspect-[1545/784] w-full object-cover"
      >
        <source src="/images/tanai.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
