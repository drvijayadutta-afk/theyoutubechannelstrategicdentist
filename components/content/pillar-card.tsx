import Link from "next/link";
import type { Pillar } from "@/lib/types";
import { accentBar } from "@/components/ui/tag";

/**
 * Deliberately not numbered. The five pillars aren't a sequence, and 01/02/03
 * markers would assert an order the content doesn't have.
 */
export function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <article className="group relative flex h-full flex-col border-2 border-ink bg-paper transition-transform duration-200 hover:-translate-y-[3px] hover:shadow-hard motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div aria-hidden="true" className={`h-2.5 ${accentBar[pillar.accent]}`} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl leading-tight font-extrabold sm:text-2xl">
          <Link href={`/blog?pillar=${pillar.id}`} className="after:absolute after:inset-0">
            {pillar.name}
          </Link>
        </h3>
        <p className="prose-note mt-1.5 text-[0.98rem]">{pillar.tagline}</p>
        <p className="mt-3 flex-1 font-prose leading-relaxed text-ink-soft">
          {pillar.description}
        </p>

        <ul className="mt-5 space-y-1.5 border-t border-line pt-4">
          {pillar.exploring.map((item) => (
            <li key={item} className="flex gap-2.5 text-[0.95rem] text-ink-soft">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-pink" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-5 font-bold text-pink-deep underline decoration-2 underline-offset-4 group-hover:decoration-4">
          Explore this →
        </p>
      </div>
    </article>
  );
}
