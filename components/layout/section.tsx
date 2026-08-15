import type { ReactNode } from "react";
import { MarginNote } from "@/components/ui/marks";

type Tone = "paper" | "paper-2" | "ink" | "butter" | "ruled";

const tones: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  "paper-2": "bg-paper-2 text-ink",
  ruled: "bg-paper-2 text-ink surface-ruled",
  butter: "bg-butter text-ink",
  ink: "bg-ink text-paper surface-grid",
};

/**
 * The margin rail: a ruled left column carrying the eyebrow and a handwritten
 * note, exactly like the margin of a notebook page. On small screens it stacks
 * above the content rather than being dropped.
 */
export function Section({
  children,
  eyebrow,
  note,
  tone = "paper",
  id,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  eyebrow?: string;
  note?: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  size?: "default" | "tight" | "loose";
}) {
  const pad =
    size === "tight"
      ? "py-14 sm:py-16"
      : size === "loose"
        ? "py-20 sm:py-28 lg:py-32"
        : "py-16 sm:py-20 lg:py-24";
  const railBorder = tone === "ink" ? "md:border-paper/20" : "md:border-pink/25";
  const eyebrowTone = tone === "ink" ? "text-highlight" : "text-pink-deep";
  const noteTone = tone === "ink" ? "text-pen-light" : "";

  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-[78rem] px-5 sm:px-8">
        <div
          className={`grid gap-x-10 gap-y-5 md:grid-cols-[10rem_minmax(0,1fr)] lg:grid-cols-[13rem_minmax(0,1fr)] ${pad}`}
        >
          {(eyebrow || note) && (
            <div
              className={`flex flex-col gap-3 border-l-2 border-pink/40 pl-4 md:border-l-0 md:border-r md:pl-0 md:pr-6 md:text-right ${railBorder}`}
            >
              {eyebrow && (
                <p className={`label-meta ${eyebrowTone}`}>{eyebrow}</p>
              )}
              {note && (
                <MarginNote className={`max-w-xs md:ml-auto ${noteTone}`}>
                  {note}
                </MarginNote>
              )}
            </div>
          )}
          <div className={eyebrow || note ? "" : "md:col-span-2"}>{children}</div>
        </div>
      </div>
    </section>
  );
}
