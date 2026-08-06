import { Sparkles } from "lucide-react";
import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Skills() {
  return (
    <section id="skills" className="work-only mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading
          index="03"
          title="The toolkit"
          subtitle="React, Next.js and TypeScript at the core, with backend and AI range."
        />
      </Reveal>

      <Reveal className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.title}
            className={`rounded-2xl border p-5 ${
              group.highlight
                ? "border-brand/40 bg-brand-soft"
                : "border-line bg-card"
            }`}
          >
            <div className="flex items-center gap-2">
              {group.highlight && <Sparkles size={14} className="text-brand" />}
              <h3
                className={`font-mono text-xs uppercase tracking-wide ${
                  group.highlight ? "text-brand" : "text-muted"
                }`}
              >
                {group.title}
              </h3>
            </div>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-card-2 px-2.5 py-1 text-[13px] text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
