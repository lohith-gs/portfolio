import { Compass, Bike, Film } from "lucide-react";
import { hobbies, type Hobby } from "@/lib/data";
import { HobbyImage } from "@/components/sections/hobby-image";
import { PosterImage } from "@/components/sections/poster-image";
import { Reveal } from "@/components/reveal";

const icons = { compass: Compass, bike: Bike, film: Film } as const;

function Meta({ h }: { h: Hobby }) {
  if (h.places) {
    return (
      <div className="mt-5 space-y-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
            Countries
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {h.places.countries.map((c) => (
              <span
                key={c.code}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 font-mono text-xs text-ink"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://flagcdn.com/h20/${c.code}.png`}
                  alt=""
                  className="h-3 w-auto rounded-[2px]"
                />
                {c.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
            Indian states
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {h.places.states.map((s) => (
              <span
                key={s}
                className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (h.tags) {
    return (
      <div className="mt-4 flex flex-wrap gap-2">
        {h.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink"
          >
            {t}
          </span>
        ))}
      </div>
    );
  }
  return null;
}

function HobbyText({ h }: { h: Hobby }) {
  const Icon = icons[h.icon];
  return (
    <div>
      <span className="flex size-10 items-center justify-center rounded-xl bg-card-2 text-brand">
        <Icon size={18} />
      </span>
      <h3 className="mt-4 text-xl font-medium text-ink sm:text-2xl">{h.title}</h3>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
        {h.detail}
      </p>
      <Meta h={h} />
    </div>
  );
}

/** Gallery used by the "split" layout (travel, bike rides). */
function Gallery({ h }: { h: Hobby }) {
  const Icon = icons[h.icon];
  const imgs = h.images;

  if (imgs.length <= 1) {
    return (
      <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-card-2">
        {imgs.length === 1 ? (
          <HobbyImage src={imgs[0]} alt={h.title} />
        ) : (
          <div className="flex size-full flex-col items-center justify-center gap-3 text-muted">
            <Icon size={40} strokeWidth={1.25} className="opacity-50" />
            <span className="font-mono text-[11px]">photo coming soon</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2.5">
      {imgs.slice(0, 4).map((src, idx) => (
        <div
          key={src}
          className={`overflow-hidden rounded-xl border border-line bg-card-2 ${
            imgs.length === 3 && idx === 0
              ? "col-span-2 aspect-[16/9]"
              : "aspect-square"
          }`}
        >
          <HobbyImage src={src} alt={h.title} />
        </div>
      ))}
    </div>
  );
}

export function OffTheClock() {
  return (
    <section id="hobbies" className="fun-only border-t border-line bg-card/40">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-xs text-brand">// off the clock</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-4xl">
            When I&apos;m not shipping
          </h2>
          <p className="mt-2 max-w-lg text-[15px] text-muted">
            The short version of the human behind the code.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-16 sm:gap-20">
          {hobbies.map((h, i) => {
            if (h.layout === "posters") {
              return (
                <Reveal key={h.title}>
                  <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <div>
                      <HobbyText h={h} />
                    </div>
                    <div className="flex flex-wrap gap-4 lg:justify-start">
                      {h.images.map((src) => (
                        <PosterImage key={src} src={src} alt={h.title} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            }

            const flip = i % 2 === 1;
            return (
              <Reveal key={h.title}>
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                  <div className={flip ? "lg:order-2" : ""}>
                    <Gallery h={h} />
                  </div>
                  <div className={flip ? "lg:order-1" : ""}>
                    <HobbyText h={h} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
