"use client";

import { useState } from "react";
import { Film } from "lucide-react";

/**
 * A "poster on the wall" image: fixed height, width follows the image's own
 * aspect ratio, so nothing is cropped. Falls back to a placeholder tile.
 */
export function PosterImage({ src, alt }: { src?: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex aspect-[2/3] h-56 flex-col items-center justify-center gap-2 rounded-xl border border-line bg-card-2 text-muted sm:h-72">
        <Film size={22} strokeWidth={1.25} className="opacity-50" />
        <span className="font-mono text-[10px]">soon</span>
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
      className="h-56 w-auto rounded-xl border border-line object-cover sm:h-72"
    />
  );
}
