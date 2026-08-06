import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { GitCityEmbed } from "@/components/projects/git-city-embed";
import { DevLensDemo } from "@/components/projects/devlens-demo";
import { TanAiVideo } from "@/components/projects/tanai-video";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const demos: Record<string, React.ReactNode> = {
  gitcity: <GitCityEmbed />,
  devlens: <DevLensDemo />,
  tanai: <TanAiVideo />,
};

function ProjectBlock({ p, flip }: { p: Project; flip: boolean }) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <div className={flip ? "lg:order-2" : ""}>{demos[p.id]}</div>

      <div className={flip ? "lg:order-1" : ""}>
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-xs"
            style={{ background: "var(--card-2)", color: p.accent }}
          >
            <span className="size-1.5 rounded-full" style={{ background: p.accent }} />
            {p.statusLabel}
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          {p.name}
        </h3>
        <p className="mt-1 text-[15px] text-muted">{p.tag}</p>

        <p className="mt-4 text-[15px] leading-relaxed text-ink/90">{p.summary}</p>

        <div className="mt-4 rounded-xl border border-line bg-card p-4">
          <p className="font-mono text-xs text-muted">the hard part</p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink/90">{p.hardPart}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-card-2 px-2.5 py-1 font-mono text-xs text-muted"
            >
              {s}
            </span>
          ))}
        </div>

        {p.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-3">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-card"
              >
                {l.label}
                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading
          index="01"
          title="Things I've built"
          subtitle="Live and playable, not screenshots. Have a go."
        />
      </Reveal>
      <div className="mt-12 flex flex-col gap-20 sm:gap-28">
        {projects.map((p, i) => (
          <Reveal key={p.id}>
            <ProjectBlock p={p} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
