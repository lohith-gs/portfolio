"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const modeContent = {
  work: {
    kicker: "// the product engineer",
    line: "Full-stack, shipped at scale. Owns features end to end, async across timezones.",
    chips: ["React", "Next.js", "Node", "GraphQL", "AWS"],
  },
  fun: {
    kicker: "// the tool builder",
    line: "Side projects that turn abstract dev work into things you can actually play with.",
    chips: ["Git City", "DevLens", "tan(AI)"],
  },
};

export function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const mode = mounted && theme === "fun" ? "fun" : "work";
  const c = modeContent[mode];

  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-5xl flex-col justify-center px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Status pill */}
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 font-mono text-xs text-muted">
          <span className="size-1.5 rounded-full bg-brand" />
          {profile.status}
        </span>

        {/* Name */}
        <p className="mt-7 font-mono text-sm text-muted">
          {profile.name} · {profile.role}
        </p>

        {/* Tagline - the duality */}
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
          I build web apps for{" "}
          <span
            className={
              mode === "work" ? "text-brand" : "text-muted transition-colors"
            }
          >
            work
          </span>
          , and developer tools for{" "}
          <span
            className={
              mode === "fun" ? "text-brand" : "text-muted transition-colors"
            }
          >
            fun
          </span>
          .
        </h1>

        <p className="mt-6 max-w-xl font-mono text-sm text-muted">
          {profile.blurb}
        </p>
      </motion.div>

      {/* Mode-specific identity panel */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="mt-9 rounded-2xl border border-line bg-card p-5 sm:p-6"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
          >
            <p className="font-mono text-xs text-brand">{c.kicker}</p>
            <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink">
              {c.line}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-md bg-card-2 px-2.5 py-1 font-mono text-xs text-ink"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="mt-8 flex flex-wrap items-center gap-3"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-on-brand transition-opacity hover:opacity-90"
        >
          See my work
          <ArrowRight size={16} />
        </a>
        <a
          href={profile.resume}
          className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-card"
        >
          Download résumé
          <ArrowUpRight size={16} />
        </a>
        <span className="ml-1 hidden font-mono text-xs text-muted sm:inline">
          ↑ flip work / fun
        </span>
      </motion.div>
    </section>
  );
}
