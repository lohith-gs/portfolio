"use client";

import { useState } from "react";
import { Camera } from "lucide-react";

/**
 * Renders a hobby photo, falling back to a tasteful placeholder if the file
 * isn't present yet (so missing images never show a broken-image icon).
 */
export function HobbyImage({ src, alt }: { src?: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex size-full flex-col items-center justify-center gap-2 text-muted">
        <Camera size={28} strokeWidth={1.25} className="opacity-50" />
        <span className="font-mono text-[11px]">photo coming soon</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="size-full object-cover"
    />
  );
}
