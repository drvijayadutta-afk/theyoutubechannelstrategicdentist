import type { PillarId } from "@/lib/types";

/**
 * One hand-drawn, single-stroke doodle per pillar. Stays still until the
 * card is hovered (or focused), then draws itself in — the same "ink
 * appearing" idea as the arrows and circles elsewhere, triggered by touch
 * instead of scroll position.
 */
const icons: Record<PillarId, { paths: string[]; viewBox: string; colorClass: string }> = {
  "ai-automation": {
    viewBox: "0 0 48 48",
    colorClass: "text-pen",
    paths: [
      // A hand-drawn spark/bolt.
      "M25 5 13 27h9l-3 16 16-24h-10l3-14z",
      // Orbit ring around it.
      "M6 24c0-6 4-11 10-13",
    ],
  },
  "branding-communication": {
    viewBox: "0 0 48 48",
    colorClass: "text-pink-deep",
    paths: [
      // Speech bubble with a tail.
      "M8 10h32c2 0 3 1 3 3v16c0 2-1 3-3 3H21l-8 8v-8h-5c-2 0-3-1-3-3V13c0-2 1-3 3-3z",
      // A little voice squiggle inside it.
      "M14 20c2-3 4 3 6 0s4-3 6 0 4 3 6 0",
    ],
  },
  "marketing-growth": {
    viewBox: "0 0 48 48",
    colorClass: "text-gold",
    paths: [
      // Rough upward trend line.
      "M5 34c7 1 11-4 15-10s8-9 13-7 6 8 10-2",
      // Arrowhead at the end.
      "M35 10l8 5-3 9",
    ],
  },
  "healthcare-health-tech": {
    viewBox: "0 0 48 48",
    colorClass: "text-ink",
    paths: [
      // Heartbeat pulse line.
      "M4 26h8l4-14 6 26 5-18 3 6h14",
    ],
  },
  "career-learning": {
    viewBox: "0 0 48 48",
    colorClass: "text-pink",
    paths: [
      // A winding path — the non-linear career.
      "M6 40C10 26 2 22 8 14s16-4 14 4-14 2-12-6 12-8 18-2",
      // Flag at the end.
      "M32 6v18M32 7l10 4-10 4",
    ],
  },
};

export function PillarIcon({ id, className = "" }: { id: PillarId; className?: string }) {
  const icon = icons[id];
  return (
    <svg
      aria-hidden="true"
      viewBox={icon.viewBox}
      fill="none"
      className={`${icon.colorClass} ${className}`}
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icon.paths.map((d, i) => (
        <path
          key={i}
          d={d}
          className="[stroke-dasharray:120] [stroke-dashoffset:120] transition-[stroke-dashoffset] duration-700 ease-out group-hover:[stroke-dashoffset:0] group-focus-within:[stroke-dashoffset:0]"
          style={{ transitionDelay: `${i * 120}ms` }}
        />
      ))}
    </svg>
  );
}
