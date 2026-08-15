import type { Resource } from "@/lib/types";
import { pillarById } from "@/content/pillars";
import { Tag } from "@/components/ui/tag";

const statusChip = {
  free: "border-ink bg-highlight text-ink",
  external: "border-pen bg-pen-wash text-pen",
  "coming-soon": "border-ink/40 bg-paper-2 text-ink-soft",
} as const;

const statusLabel = {
  free: "Free",
  external: "External",
  "coming-soon": "Coming soon",
} as const;

export function ResourceCard({ resource }: { resource: Resource }) {
  const pillar = pillarById(resource.pillar);
  const pending = resource.status === "coming-soon";

  return (
    <article
      className={`flex h-full flex-col border-2 p-5 sm:p-6 ${
        pending
          ? "border-dashed border-ink/40 bg-paper-2"
          : "border-ink bg-paper shadow-hard-sm"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`label-meta border-2 px-2 py-0.5 ${statusChip[resource.status]}`}
        >
          {statusLabel[resource.status]}
        </span>
        <Tag accent={pillar.accent}>{resource.kind}</Tag>
      </div>

      <h3
        className={`mt-3 font-display text-lg leading-snug font-bold ${pending ? "text-ink/70" : ""}`}
      >
        {resource.title}
      </h3>
      <p className="mt-2 flex-1 font-prose leading-relaxed text-ink-soft">
        {resource.description}
      </p>

      <p className="mt-4 border-t border-line pt-3">
        {pending ? (
          <span className="prose-note text-[0.95rem]">
            Still being built — the notes will say when it&rsquo;s ready.
          </span>
        ) : (
          <span className="font-bold text-pink-deep">
            Available with The Strategic Notes →
          </span>
        )}
      </p>
    </article>
  );
}
