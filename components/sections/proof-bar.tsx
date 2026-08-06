import { proof } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function ProofBar() {
  return (
    <section className="work-only border-y border-line bg-card/50">
      <Reveal className="mx-auto grid max-w-5xl grid-cols-2 gap-px px-5 sm:grid-cols-4 sm:px-8">
        {proof.map((item) => (
          <div key={item.label} className="py-6 sm:py-7">
            <p className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {item.value}
            </p>
            <p className="mt-1 max-w-[16ch] text-xs leading-snug text-muted">
              {item.label}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
