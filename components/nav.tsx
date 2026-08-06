import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { nav, profile } from "@/lib/data";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-ink"
        >
          sri<span className="text-brand">.</span>lohith
        </Link>

        <div className="hidden items-center gap-7 text-sm text-muted md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-ink ${
                item.mode === "work"
                  ? "work-only"
                  : item.mode === "fun"
                    ? "fun-only"
                    : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            className="hidden rounded-full border border-line px-3.5 py-1.5 text-[13px] font-medium text-ink transition-colors hover:bg-card sm:inline-block"
          >
            Résumé
          </a>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
