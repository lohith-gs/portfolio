"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Briefcase, Sparkles } from "lucide-react";

/**
 * The signature interaction: flips the whole site between Work mode
 * (clean, recruiter-facing) and Fun mode (dark, dev-tools playground).
 */
export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const mode = theme === "fun" ? "fun" : "work";

  return (
    <div
      role="group"
      aria-label="Switch between work and fun mode"
      className="relative inline-flex items-center rounded-full border border-line bg-card p-1 text-[13px] font-medium select-none"
    >
      {/* Sliding indicator */}
      <span
        aria-hidden
        className="absolute top-1 bottom-1 w-[calc(50%-2px)] rounded-full bg-brand transition-transform duration-300 ease-out"
        style={{
          transform:
            mounted && mode === "fun" ? "translateX(100%)" : "translateX(0%)",
        }}
      />
      <button
        type="button"
        onClick={() => setTheme("work")}
        aria-pressed={mode === "work"}
        className={`relative z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${
          mounted && mode === "work" ? "text-on-brand" : "text-muted"
        }`}
      >
        <Briefcase size={14} strokeWidth={2} />
        Work
      </button>
      <button
        type="button"
        onClick={() => setTheme("fun")}
        aria-pressed={mode === "fun"}
        className={`relative z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${
          mounted && mode === "fun" ? "text-on-brand" : "text-muted"
        }`}
      >
        <Sparkles size={14} strokeWidth={2} />
        Fun
      </button>
    </div>
  );
}
