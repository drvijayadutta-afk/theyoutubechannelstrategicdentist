import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { articles, featuredArticle } from "@/content/articles";
import { pillars } from "@/content/pillars";
import type { ContentFormat, PillarId } from "@/lib/types";
import { Section } from "@/components/layout/section";
import { Highlight } from "@/components/ui/marks";
import { ArticleCard } from "@/components/content/article-card";
import { ContentFilters, formats } from "@/components/content/content-filters";
import { NewsletterPanel } from "@/components/forms/newsletter-panel";
import { SubscribeYouTube } from "@/components/cta/subscribe-youtube";
import { revealDelay } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Content",
  description:
    "Articles, videos, tutorials and experiments across AI, branding, marketing, healthcare and career learning — each one with something to try.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Content · ${site.name}`,
    description:
      "Articles, videos, tutorials and experiments — each one with something to try.",
    url: "/blog",
  },
};

interface Props {
  searchParams: Promise<{ pillar?: string; format?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const query = await searchParams;

  const pillar = pillars.some((p) => p.id === query.pillar)
    ? (query.pillar as PillarId)
    : null;
  const format = formats.includes(query.format as ContentFormat)
    ? (query.format as ContentFormat)
    : null;

  const filtered = articles.filter(
    (a) => (!pillar || a.pillar === pillar) && (!format || a.format === format),
  );
  const filtering = pillar !== null || format !== null;

  return (
    <>
      <section className="border-b-2 border-ink bg-paper">
        <div className="mx-auto max-w-[78rem] px-5 py-14 sm:px-8 sm:py-18 lg:py-20">
          <p className="label-meta text-pink-deep" data-reveal="">
            The archive
          </p>
          <h1
            className="mt-4 max-w-3xl font-display text-[2.4rem] leading-[1.02] font-extrabold tracking-tight sm:text-5xl lg:text-[3.5rem]"
            data-reveal=""
            style={revealDelay(1)}
          >
            Everything I&rsquo;ve <Highlight style={revealDelay(5)}>tried so far.</Highlight>
          </h1>
          <p
            className="mt-6 max-w-2xl font-prose text-lg leading-relaxed text-ink-soft"
            data-reveal=""
            style={revealDelay(2)}
          >
            Written up while it was still fresh enough to be honest. Every piece
            ends with something you can actually do — filter by what
            you&rsquo;re working on.
          </p>
        </div>
      </section>

      <Section eyebrow="Start here" note={<>the one I&rsquo;d read first</>} tone="paper-2">
        <div data-reveal="">
          <ArticleCard article={featuredArticle} variant="featured" />
        </div>
      </Section>

      <Section eyebrow="Everything else" note={<>five topics, five formats</>}>
        <div id="archive">
          <ContentFilters pillar={pillar} format={format} />

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="label-meta text-ink-soft">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
            {filtering && (
              <Link
                href="/blog"
                scroll={false}
                className="inline-flex min-h-11 items-center font-bold text-pink-deep underline decoration-2 underline-offset-4 hover:decoration-4"
              >
                Clear filters
              </Link>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="mt-4 border-2 border-dashed border-ink/40 p-10 text-center">
              <p className="font-display text-xl font-bold">
                Nothing here yet — that combination is still on the list.
              </p>
              <p className="prose-note mt-3 text-[1.05rem]">
                try widening one of the filters
              </p>
            </div>
          ) : (
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>
      </Section>

      <Section eyebrow="The channel" tone="ruled">
        <div data-reveal="">
          <SubscribeYouTube />
        </div>
      </Section>

      <Section eyebrow="The notes">
        <div data-reveal="">
          <NewsletterPanel compact />
        </div>
      </Section>
    </>
  );
}
