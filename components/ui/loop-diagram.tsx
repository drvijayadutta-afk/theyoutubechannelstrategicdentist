/**
 * The loop, drawn literally. The dashed circle draws itself in on scroll
 * (same mechanism as the arrows), then a small pen dot orbits it
 * indefinitely — the one place on the site where "repeat" is shown rather
 * than just written as a word in the step list.
 */
export function LoopDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-[168px] w-[168px] ${className}`} aria-hidden="true">
      <svg viewBox="0 0 168 168" className="h-full w-full">
        <circle
          data-draw=""
          cx="84"
          cy="84"
          r="68"
          fill="none"
          stroke="var(--color-pen-light)"
          strokeWidth="2"
          strokeDasharray="1 11"
          strokeLinecap="round"
        />
        <path
          data-draw=""
          d="M84 12c14 0 19 6 22 12"
          fill="none"
          stroke="var(--color-pink)"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ "--reveal-delay": "500ms" } as React.CSSProperties}
        />
        <path
          data-draw=""
          d="M99 15l7 9 10-4"
          fill="none"
          stroke="var(--color-pink)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ "--reveal-delay": "550ms" } as React.CSSProperties}
        />
      </svg>
      <span
        className="loop-dot absolute h-3.5 w-3.5 rounded-full bg-pink shadow-hard-sm"
        style={{ "--r": "68px" } as React.CSSProperties}
      />
    </div>
  );
}
