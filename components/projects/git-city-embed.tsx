"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Git City preview: a real screenshot of a generated 3D city, with a stylized
 * low-poly illustration as an automatic fallback if the image fails to load.
 * The launch button opens the live app full-screen in a new tab.
 */
const buildings = [
  { x: 40, w: 40, h: 58 },
  { x: 86, w: 38, h: 92 },
  { x: 130, w: 44, h: 132 },
  { x: 180, w: 40, h: 78 },
  { x: 226, w: 46, h: 110 },
  { x: 278, w: 38, h: 66 },
];

const BASE = 190;
const DX = 11;
const DY = 11;

function Building({ x, w, h }: { x: number; w: number; h: number }) {
  const top = BASE - h;
  return (
    <g>
      <polygon
        points={`${x + w},${top} ${x + w + DX},${top - DY} ${x + w + DX},${BASE - DY} ${x + w},${BASE}`}
        fill="#1b8c66"
      />
      <polygon
        points={`${x},${top} ${x + DX},${top - DY} ${x + w + DX},${top - DY} ${x + w},${top}`}
        fill="#5fe0b0"
      />
      <rect x={x} y={top} width={w} height={h} fill="#2fb98c" />
    </g>
  );
}

function CityIllustration() {
  return (
    <svg viewBox="0 0 400 230" className="absolute inset-0 size-full">
      <rect width="400" height="230" fill="#0a1424" />
      <g stroke="#16314a" strokeWidth="1">
        <line x1="0" y1="196" x2="400" y2="196" />
        <line x1="0" y1="206" x2="400" y2="206" opacity="0.6" />
      </g>
      {buildings.map((b) => (
        <Building key={b.x} {...b} />
      ))}
      <rect x="330" y="172" width="26" height="18" fill="#16604a" />
      <rect x="330" y="172" width="26" height="5" fill="#2c8a6c" />
    </svg>
  );
}

export function GitCityEmbed() {
  const [failed, setFailed] = useState(false);

  return (
    <a
      href="https://gitcity-3d.vercel.app/"
      target="_blank"
      rel="noreferrer"
      aria-label="Launch the live Git City app"
      className="group relative block aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-[#0a1424]"
    >
      {failed ? (
        <CityIllustration />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/gitcity.webp"
          alt="A Git City 3D visualization of the facebook/react repository"
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      )}

      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-card/90 px-3.5 py-1.5 text-sm font-medium text-ink backdrop-blur-sm transition-colors group-hover:bg-card">
        Launch the live city
        <ArrowUpRight size={15} style={{ color: "var(--c-gitcity)" }} />
      </span>
    </a>
  );
}
