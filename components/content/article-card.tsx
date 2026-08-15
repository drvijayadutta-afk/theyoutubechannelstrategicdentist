import Link from "next/link";
import type { Article } from "@/lib/types";
import { pillarById } from "@/content/pillars";
import { formatDate, formatLabels, readingMinutes } from "@/lib/content-utils";
import { Tag, MetaTag } from "@/components/ui/tag";
import { accentBar } from "@/components/ui/tag";
import { SubscribeYouTube } from "@/components/cta/subscribe-youtube";

export function ArticleCard({
  article,
  variant = "default",
}: {
  article: Article;
  variant?: "default" | "featured" | "compact";
}) {
  const pillar = pillarById(article.pillar);
  const minutes = readingMinutes(article);
  const isWatchable = article.format === "video" || article.format === "short";

  if (variant === "compact") {
    return (
      <article className="group border-b border-line py-4 last:border-0">
        <Link href={`/blog/${article.slug}`} className="block">
          <div className="flex flex-wrap items-center gap-2.5">
            <Tag accent={pillar.accent}>{pillar.name}</Tag>
            <MetaTag>{formatLabels[article.format]}</MetaTag>
          </div>
          <h3 className="mt-2 font-display text-lg leading-snug font-bold group-hover:text-pink-deep">
            {article.title}
          </h3>
        </Link>
      </article>
    );
  }

  if (variant === "featured") {
    return (
      <article className="relative border-2 border-ink bg-paper shadow-hard">
        <div aria-hidden="true" className={`h-2.5 ${accentBar[pillar.accent]}`} />
        <div className="p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="label-meta border-2 border-ink bg-pink-deep px-2.5 py-1 text-paper">
              Currently exploring
            </span>
            <Tag accent={pillar.accent}>{pillar.name}</Tag>
          </div>

          <h2 className="mt-4 font-display text-[1.85rem] leading-[1.08] font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            <Link
              href={`/blog/${article.slug}`}
              className="underline decoration-highlight decoration-[6px] underline-offset-[6px] hover:decoration-pink"
            >
              {article.title}
            </Link>
          </h2>

          <p className="mt-4 max-w-2xl font-prose text-lg leading-relaxed text-ink-soft">
            {article.dek}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <MetaTag>{formatLabels[article.format]}</MetaTag>
            <MetaTag>{minutes} min read</MetaTag>
            <MetaTag>{formatDate(article.date)}</MetaTag>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex h-full flex-col border-2 border-ink bg-paper transition-transform duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-hard motion-reduce:transition-none motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0">
      <div aria-hidden="true" className={`h-2 ${accentBar[pillar.accent]}`} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Tag accent={pillar.accent}>{pillar.name}</Tag>
          <MetaTag>{formatLabels[article.format]}</MetaTag>
        </div>

        <h3 className="mt-3 font-display text-xl leading-tight font-bold">
          <Link
            href={`/blog/${article.slug}`}
            className="after:absolute after:inset-0 group-hover:text-pink-deep"
          >
            {article.title}
          </Link>
        </h3>

        <p className="mt-2.5 flex-1 font-prose leading-relaxed text-ink-soft">
          {article.dek}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3.5">
          <MetaTag>
            {formatDate(article.date)} · {minutes} min
          </MetaTag>
          {isWatchable && article.externalUrl && (
            <SubscribeYouTube variant="inline" className="relative z-10 text-sm" />
          )}
        </div>
      </div>
    </article>
  );
}
