import { MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section
      id="about"
      className="work-only border-t border-line bg-card/40"
    >
      <Reveal className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading index="04" title="About" />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-[16px] leading-relaxed text-ink/90">
            <p>
              I&apos;m a senior full-stack engineer who&apos;s spent 5+ years
              shipping production web apps, owning features end to end, from the
              interface down to the APIs and infrastructure behind them.
            </p>
            <p>
              I&apos;ve been fully remote and async-first since day one, so I&apos;m
              comfortable driving work across timezones without hand-holding.
              Whether I&apos;m building a product for a team or a developer tool for
              fun, I care about the same things: speed, clarity, and the small
              details that make software feel good to use.
            </p>
            <p>
              Right now I&apos;m looking for high-impact remote roles, and I&apos;m
              open to relocating internationally for the right team.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-card p-5">
            <p className="flex items-center gap-2 text-sm text-ink">
              <MapPin size={15} className="text-brand" />
              {profile.location}
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Availability</dt>
                <dd className="text-right text-ink">Remote · Relocation</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Working style</dt>
                <dd className="text-right text-ink">Async-first</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Focus</dt>
                <dd className="text-right text-ink">Full-stack · Frontend</dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
