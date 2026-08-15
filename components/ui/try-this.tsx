"use client";

import { useState } from "react";

/**
 * The signature element. Every idea on this site comes with something to do,
 * and it always arrives as the same physical object: a tear-off card from a
 * notebook, perforated edge and all.
 *
 * Steps are checkable — nothing is saved anywhere, it just gives the one
 * moment on the page where "do something with it" is a thing you can
 * actually click, not just a line of copy.
 */
export function TryThisCard({
  title,
  steps,
  time,
  className = "",
}: {
  title: string;
  steps: string[];
  time?: string;
  className?: string;
}) {
  const [done, setDone] = useState<boolean[]>(() => steps.map(() => false));
  const toggle = (i: number) =>
    setDone((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  const allDone = done.length > 0 && done.every(Boolean);

  return (
    <div className={`relative pt-3 ${className}`}>
      {/* Perforation the card tears away from. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-3 top-0 border-t-2 border-dashed border-ink/35"
      />
      <div
        className={`shadow-hard-pen rotate-[-0.6deg] border-2 border-ink p-5 transition-colors duration-300 sm:p-7 ${
          allDone ? "bg-highlight" : "bg-butter"
        }`}
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="label-meta border-2 border-ink bg-pink-deep px-2.5 py-1 text-paper">
            {allDone ? "Now do it for real" : "Try this"}
          </span>
          {time && <span className="label-meta text-ink/65">{time}</span>}
        </div>

        <h3 className="font-display text-xl leading-tight font-bold sm:text-2xl">
          {title}
        </h3>

        <ol className="mt-5 space-y-3.5">
          {steps.map((step, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={done[i]}
                className="group/step flex w-full items-start gap-3.5 text-left"
              >
                <span
                  aria-hidden="true"
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2 border-pen transition-colors duration-150 ${
                    done[i] ? "bg-pen" : "bg-paper/70 group-hover/step:bg-pen-wash"
                  }`}
                >
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                    <path
                      d="M3 8.5l3 3 7-7"
                      stroke="var(--color-paper)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength={1}
                      style={{
                        strokeDasharray: 1,
                        strokeDashoffset: done[i] ? 0 : 1,
                        transition: "stroke-dashoffset 0.25s ease-out",
                      }}
                    />
                  </svg>
                </span>
                <span
                  className={`font-prose text-[1.02rem] leading-relaxed text-ink transition-opacity duration-150 ${
                    done[i] ? "opacity-55 line-through decoration-2 decoration-pen/50" : ""
                  }`}
                >
                  {step}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
