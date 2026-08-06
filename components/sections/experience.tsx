import { ArrowUpRight } from "lucide-react";
import { experience, profile } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="work-only border-t border-line bg-card/40"
    >
      <Reveal className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          index="02"
          title="Where I've worked"
          subtitle="5+ years across products serving real users, fully remote."
        />

        <div className="mt-12 flex flex-col">
          {experience.map((job) => (
            <div
              key={job.company + job.period}
              className="grid gap-4 border-t border-line py-8 sm:grid-cols-[180px_1fr] sm:gap-8"
            >
              <div className="font-mono text-xs text-muted">
                <p>{job.period}</p>
                <p className="mt-1">{job.location}</p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="text-lg font-medium text-ink">{job.role}</h3>
                  <span className="text-muted">·</span>
                  <span className="text-ink">{job.company}</span>
                  {job.client && (
                    <span className="rounded-md bg-card-2 px-2 py-0.5 font-mono text-[11px] text-muted">
                      client: {job.client}
                    </span>
                  )}
                </div>

                <ul className="mt-3 flex flex-col gap-2">
                  {job.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="relative pl-4 text-[14px] leading-relaxed text-ink/85 before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-brand/60"
                    >
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-card-2 px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          href={profile.resume}
          className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-card"
        >
          Full résumé (PDF)
          <ArrowUpRight size={15} />
        </a>
      </Reveal>
    </section>
  );
}
