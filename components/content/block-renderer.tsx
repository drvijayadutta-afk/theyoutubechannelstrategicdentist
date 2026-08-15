import type { Block } from "@/lib/types";
import { headingId } from "@/lib/content-utils";
import { TryThisCard } from "@/components/ui/try-this";

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                id={headingId(block.text)}
                className="mt-12 scroll-mt-28 font-display text-2xl leading-tight font-extrabold sm:text-3xl"
              >
                {block.text}
              </h2>
            );

          case "para":
            return (
              <p
                key={i}
                className="mt-5 font-prose text-[1.15rem] leading-[1.75] text-ink"
              >
                {block.text}
              </p>
            );

          case "list":
            return block.ordered ? (
              <ol key={i} className="mt-5 space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3.5">
                    <span className="label-meta mt-1.5 shrink-0 text-pink-deep">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span className="font-prose text-[1.1rem] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="mt-5 space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3.5">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-4 shrink-0 bg-pink"
                    />
                    <span className="font-prose text-[1.1rem] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "quote":
            return (
              <blockquote
                key={i}
                className="my-9 border-l-4 border-pink py-1 pl-5 sm:pl-7"
              >
                <p className="font-display text-xl leading-snug font-bold text-ink sm:text-2xl">
                  {block.text}
                </p>
              </blockquote>
            );

          case "callout":
            return (
              <aside
                key={i}
                className="my-9 border-2 border-pen bg-pen-wash p-5 sm:p-6"
              >
                <p className="label-meta text-pen">{block.title}</p>
                <p className="mt-2 font-prose text-[1.1rem] leading-relaxed text-ink">
                  {block.text}
                </p>
              </aside>
            );

          case "tryThis":
            return (
              <TryThisCard
                key={i}
                title={block.title}
                steps={block.steps}
                time={block.time}
                className="my-12"
              />
            );
        }
      })}
    </>
  );
}
