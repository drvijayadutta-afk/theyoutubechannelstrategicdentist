import type { ComponentProps, CSSProperties, ReactNode } from "react";

/**
 * Highlighter swipe that draws itself in behind the text.
 *
 * Painted as a cloned background rather than an absolutely-positioned bar, so a
 * phrase that wraps gets a marker stroke on each line instead of one bar
 * stretched across the whole line box.
 */
export function Highlight({
  children,
  tone = "highlight",
  style,
}: {
  children: ReactNode;
  tone?: "highlight" | "pink" | "pen";
  style?: CSSProperties;
}) {
  const fill =
    tone === "pink"
      ? "var(--color-pink-wash)"
      : tone === "pen"
        ? "var(--color-pen-wash)"
        : "var(--color-highlight)";

  return (
    <span
      data-swipe=""
      style={{ backgroundImage: `linear-gradient(${fill}, ${fill})`, ...style }}
      className="box-decoration-clone bg-no-repeat [background-position:0_88%] [background-size:100%_0.42em]"
    >
      {children}
    </span>
  );
}

/** Circled-in-pen emphasis, for one word at a time. */
export function Circled({ children }: { children: ReactNode }) {
  return (
    <span className="relative isolate inline-block pl-[0.18em]">
      <svg
        aria-hidden="true"
        viewBox="0 0 200 80"
        preserveAspectRatio="none"
        className="absolute inset-[-0.28em_-0.1em] -z-10 h-[1.55em] w-[calc(100%+0.2em)]"
      >
        <path
          data-draw=""
          d="M100 6C40 6 8 22 8 40s34 34 92 34 92-14 92-34S162 8 96 6c-24 0-48 4-64 12"
          fill="none"
          stroke="var(--color-pink)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      {children}
    </span>
  );
}

type ArrowVariant =
  | "curve-down"
  | "curve-right"
  | "squiggle"
  | "hook-left"
  | "hook-up";

const paths: Record<ArrowVariant, { d: string; head: string; box: string }> = {
  "hook-up": {
    d: "M84 50C70 46 30 44 18 12",
    head: "M8 24l10-14 13 9",
    box: "0 0 96 56",
  },
  "curve-down": {
    d: "M12 6C10 34 22 58 48 72",
    head: "M36 72l12 4-4-13",
    box: "0 0 64 88",
  },
  "curve-right": {
    d: "M6 30C30 8 62 8 86 24",
    head: "M74 12l14 12-16 8",
    box: "0 0 96 44",
  },
  squiggle: {
    d: "M6 20c12-14 22 12 34 0s20-14 32 0 20 10 30 2",
    head: "M92 12l10 10-12 8",
    box: "0 0 110 40",
  },
  "hook-left": {
    d: "M86 10C56 6 20 14 10 40",
    head: "M22 30l-13 11 16 7",
    box: "0 0 96 56",
  },
};

/** Hand-drawn ballpoint arrow. Decorative — always hidden from assistive tech. */
export function HandArrow({
  variant = "curve-down",
  className = "",
  tone = "pen",
}: {
  variant?: ArrowVariant;
  className?: string;
  tone?: "pen" | "pink" | "ink";
}) {
  const { d, head, box } = paths[variant];
  const stroke =
    tone === "pink" ? "var(--color-pink)" : tone === "ink" ? "var(--color-ink)" : "var(--color-pen)";
  return (
    <svg
      aria-hidden="true"
      viewBox={box}
      fill="none"
      className={className}
      stroke={stroke}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path data-draw="" d={d} />
      <path data-draw="" d={head} style={{ "--reveal-delay": "500ms" } as CSSProperties} />
    </svg>
  );
}

/** Handwritten margin annotation. */
export function MarginNote({
  children,
  className = "",
  ...rest
}: ComponentProps<"p">) {
  return (
    <p className={`prose-note text-[0.95rem] ${className}`} {...rest}>
      {children}
    </p>
  );
}
