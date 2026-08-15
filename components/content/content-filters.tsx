import Link from "next/link";
import type { ContentFormat, PillarId } from "@/lib/types";
import { pillars } from "@/content/pillars";
import { formatLabels } from "@/lib/content-utils";

export const formats: ContentFormat[] = [
  "article",
  "video",
  "short",
  "tutorial",
  "experiment",
];

/**
 * Filters are links, not buttons, so every combination is a real URL: crawlable,
 * shareable, and working before any JavaScript arrives.
 */
const href = (pillar: PillarId | null, format: ContentFormat | null) => {
  const params = new URLSearchParams();
  if (pillar) params.set("pillar", pillar);
  if (format) params.set("format", format);
  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
};

function FilterLink({
  active,
  to,
  children,
}: {
  active: boolean;
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={to}
      scroll={false}
      aria-current={active ? "true" : undefined}
      className={`label-meta inline-flex min-h-11 items-center border-2 px-3 transition-colors ${
        active
          ? "border-ink bg-ink text-paper"
          : "border-ink/25 bg-paper text-ink-soft hover:border-ink hover:text-ink"
      }`}
    >
      {children}
    </Link>
  );
}

export function ContentFilters({
  pillar,
  format,
}: {
  pillar: PillarId | null;
  format: ContentFormat | null;
}) {
  return (
    <div className="border-2 border-ink bg-paper-2 p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="label-meta mr-1 text-pink-deep">Topic</span>
        <FilterLink active={pillar === null} to={href(null, format)}>
          Everything
        </FilterLink>
        {pillars.map((p) => (
          <FilterLink key={p.id} active={pillar === p.id} to={href(p.id, format)}>
            {p.name}
          </FilterLink>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2.5 border-t border-line pt-4">
        <span className="label-meta mr-1 text-pink-deep">Format</span>
        <FilterLink active={format === null} to={href(pillar, null)}>
          Any
        </FilterLink>
        {formats.map((f) => (
          <FilterLink key={f} active={format === f} to={href(pillar, f)}>
            {formatLabels[f]}
          </FilterLink>
        ))}
      </div>
    </div>
  );
}
