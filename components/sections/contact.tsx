import { Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";

type IconProps = { size?: number; className?: string };

function GithubIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function InstagramIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13-.67-.66-1.34-1.07-2.13-1.38-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  );
}

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail, mode: "both" },
  { label: "GitHub", value: "lohith-gs", href: profile.github, Icon: GithubIcon, mode: "both" },
  { label: "LinkedIn", value: "LohithGs", href: profile.linkedin, Icon: LinkedinIcon, mode: "both" },
  { label: "Instagram", value: "lohith.gs", href: profile.instagram, Icon: InstagramIcon, mode: "fun" },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
      <p className="font-mono text-xs text-brand">05</p>

      {/* Work mode */}
      <h2 className="work-only mt-2 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
        Let&apos;s build something.
      </h2>
      <p className="work-only mt-4 max-w-lg text-[16px] text-muted">
        Open to remote roles and relocation. The fastest way to reach me is a
        direct email, and I reply quickly.
      </p>

      {/* Fun mode */}
      <h2 className="fun-only mt-2 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
        Let&apos;s connect.
      </h2>
      <p className="fun-only mt-4 max-w-lg text-[16px] text-muted">
        Up for collaborating on a fun side project, or just trading travel and
        ride stories? Either way, my inbox is open.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-on-brand transition-opacity hover:opacity-90"
        >
          <Mail size={16} />
          {profile.email}
        </a>
        <a
          href={profile.resume}
          className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-card"
        >
          Résumé
          <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
        {links.map(({ label, value, href, Icon, mode }) => (
          <div key={label} className={mode === "fun" ? "fun-only" : ""}>
            <a
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex h-full items-center gap-3 rounded-xl border border-line bg-card p-4 transition-colors hover:bg-card-2"
            >
              <Icon size={18} className="text-muted group-hover:text-brand" />
              <div className="min-w-0">
                <p className="font-mono text-xs text-muted">{label}</p>
                <p className="truncate text-sm text-ink">{value}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-muted">
          Built with Next.js · Made in Hyderabad
        </p>
      </div>
    </footer>
  );
}
