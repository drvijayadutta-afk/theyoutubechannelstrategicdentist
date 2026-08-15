import type { ComponentProps, CSSProperties, ReactNode } from "react";

const tones = {
  butter: "bg-butter text-ink",
  highlight: "bg-highlight text-ink",
  pink: "bg-pink-wash text-ink",
  pen: "bg-pen-wash text-ink",
  paper: "bg-paper text-ink",
} as const;

interface StickyNoteProps extends Omit<ComponentProps<"div">, "children"> {
  children: ReactNode;
  label?: string;
  tone?: keyof typeof tones;
  rotate?: number;
}

export function StickyNote({
  children,
  label,
  tone = "butter",
  rotate = -2,
  className = "",
  style,
  ...rest
}: StickyNoteProps) {
  return (
    <div
      style={{ "--tilt": `${rotate}deg`, ...style } as CSSProperties}
      className={`shadow-hard-sm rotate-[var(--tilt)] border border-ink/15 p-4 transition-transform duration-200 hover:rotate-0 motion-reduce:transition-none motion-reduce:hover:rotate-[var(--tilt)] ${tones[tone]} ${className}`}
      {...rest}
    >
      {label && <p className="label-meta mb-2 text-ink/75">{label}</p>}
      <div className="prose-note text-[1.02rem] leading-snug text-ink">
        {children}
      </div>
    </div>
  );
}
