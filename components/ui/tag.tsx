import type { PillarAccent } from "@/lib/types";

export const accentChip: Record<PillarAccent, string> = {
  pink: "bg-pink-wash text-pink-deep border-pink-deep/40",
  highlight: "bg-highlight/45 text-ink border-gold/50",
  pen: "bg-pen-wash text-pen border-pen/35",
  gold: "bg-gold/20 text-ink border-gold/60",
  butter: "bg-butter text-ink border-gold/45",
};

export const accentBar: Record<PillarAccent, string> = {
  pink: "bg-pink",
  highlight: "bg-highlight",
  pen: "bg-pen",
  gold: "bg-gold",
  butter: "bg-butter",
};

export function Tag({
  children,
  accent = "pink",
  className = "",
}: {
  children: React.ReactNode;
  accent?: PillarAccent;
  className?: string;
}) {
  return (
    <span
      className={`label-meta inline-flex items-center border px-2 py-1 ${accentChip[accent]} ${className}`}
    >
      {children}
    </span>
  );
}

/** Neutral metadata pill — format, reading time, date. */
export function MetaTag({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`label-meta text-ink-soft ${className}`}>{children}</span>
  );
}
