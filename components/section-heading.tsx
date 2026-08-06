export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <p className="font-mono text-xs text-brand">{index}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-[15px] text-muted">{subtitle}</p>}
    </div>
  );
}
