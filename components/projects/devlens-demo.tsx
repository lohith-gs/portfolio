/**
 * A presentational mock of the DevLens inspector - a Chrome extension can't
 * be embedded, so this conveys the core feature (network table + JSON diff)
 * with the same craft. Decorative; the real thing lives on the Web Store.
 */
const rows = [
  { method: "GET", path: "/api/orders", status: 200, time: "84ms" },
  { method: "GET", path: "/api/orders/482", status: 200, time: "61ms" },
  { method: "POST", path: "/api/returns", status: 201, time: "133ms" },
  { method: "GET", path: "/api/user/me", status: 304, time: "12ms" },
];

export function DevLensDemo() {
  return (
    <div
      className="w-full overflow-hidden rounded-xl border border-line bg-card-2 font-mono text-xs"
      aria-hidden
    >
      {/* Toolbar */}
      <div className="flex items-center gap-2 border-b border-line px-3 py-2 text-muted">
        <span className="size-2 rounded-full" style={{ background: "var(--c-devlens)" }} />
        DevLens · Network
        <span className="ml-auto text-[11px]">4 requests · 290ms</span>
      </div>

      {/* Request table */}
      <table className="w-full text-left">
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-line/60 last:border-0">
              <td className="px-3 py-1.5 text-muted">{r.method}</td>
              <td className="px-3 py-1.5 text-ink">{r.path}</td>
              <td
                className="px-3 py-1.5"
                style={{
                  color: r.status < 300 ? "var(--c-gitcity)" : "var(--c-devlens)",
                }}
              >
                {r.status}
              </td>
              <td className="px-3 py-1.5 text-right text-muted">{r.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* JSON diff */}
      <div className="border-t border-line px-3 py-2">
        <p className="mb-1.5 text-[11px] text-muted">structural diff · response</p>
        <pre className="leading-relaxed text-ink">
          <span className="block">{`{`}</span>
          <span className="block pl-3">{`"id": 482,`}</span>
          <span
            className="block rounded-sm pl-3"
            style={{ background: "rgba(52,211,153,.14)", color: "var(--c-gitcity)" }}
          >
            {`+ "status": "refunded",`}
          </span>
          <span
            className="block rounded-sm pl-3"
            style={{ background: "rgba(251,191,36,.14)", color: "var(--c-devlens)" }}
          >
            {`~ "total": 219.00 → 0.00`}
          </span>
          <span className="block">{`}`}</span>
        </pre>
      </div>
    </div>
  );
}
