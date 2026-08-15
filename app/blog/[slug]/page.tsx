import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { articles, getArticle, relatedArticles } from "@/content/articles";
import { pillarById } from "@/content/pillars";
import {
  formatDate,
  formatLabels,
  readingMinutes,
  tableOfContents,
} from "@/lib/content-utils";
import { Tag, MetaTag, accentBar } from "@/components/ui/tag";
import { BlockRenderer } from "@/components/content/block-renderer";
import { Toc } from "@/components/content/toc";
import { ArticleCard } from "@/components/content/article-card";
import { NewsletterPanel } from "@/components/forms/newsletter-panel";
import { SubscribeYouTube } from "@/components/cta/subscribe-youtube";
import { Section } from "@/components/layout/section";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Not found" };

  return {
    title: article.title,
    description: article.dek,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.dek,
      url: `/blog/${article.slug}`,
      publishedTime: article.date,
      authors: [site.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.dek,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const pillar = pillarById(article.pillar);
  const toc = tableOfContents(article);
  const minutes = readingMinutes(article);
  const related = relatedArticles(article);
  const isWatchable = article.format === "video" || article.format === "short";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.dek,
            datePublished: article.date,
            author: { "@type": "Person", name: site.author, url: `${site.url}/about` },
            publisher: { "@type": "Organization", name: site.name },
            mainEntityOfPage: `${site.url}/blog/${article.slug}`,
            articleSection: pillar.name,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: site.url },
              { "@type": "ListItem", position: 2, name: "Content", item: `${site.url}/blog` },
              {
                "@type": "ListItem",
                position: 3,
                name: article.title,
                item: `${site.url}/blog/${article.slug}`,
              },
            ],
          }),
        }}
      />

      <article>
        <header className="border-b-2 border-ink bg-paper">
          <div aria-hidden="true" className={`h-2.5 ${accentBar[pillar.accent]}`} />
          <div className="mx-auto max-w-[78rem] px-5 py-12 sm:px-8 sm:py-16">
            <nav aria-label="Breadcrumb" className="label-meta text-ink-soft">
              <Link href="/blog" className="underline decoration-2 underline-offset-4 hover:text-pink-deep">
                Content
              </Link>
              <span aria-hidden="true" className="px-2">
                /
              </span>
              <span>{pillar.name}</span>
            </nav>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <Tag accent={pillar.accent}>{pillar.name}</Tag>
              <MetaTag>{formatLabels[article.format]}</MetaTag>
            </div>

            <h1 className="mt-5 max-w-4xl font-display text-[2.2rem] leading-[1.04] font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem]">
              {article.title}
            </h1>

            <p className="mt-6 max-w-2xl font-prose text-lg leading-relaxed text-ink-soft sm:text-xl">
              {article.dek}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5">
              <MetaTag>{site.author}</MetaTag>
              <MetaTag>{formatDate(article.date)}</MetaTag>
              <MetaTag>{minutes} min read</MetaTag>
              {isWatchable && article.externalUrl && (
                <SubscribeYouTube variant="inline" className="text-sm" />
              )}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[78rem] px-5 py-14 sm:px-8 sm:py-16">
          <div className="grid justify-center gap-10 lg:grid-cols-[minmax(0,44rem)_16rem] lg:gap-16">
            <div className="max-w-[44rem] lg:order-1">
              <BlockRenderer blocks={article.body} />

              <div className="mt-14 border-t-2 border-ink pt-8">
                <p className="label-meta text-pink-deep">The takeaway</p>
                <p className="mt-3 font-display text-xl leading-snug font-bold sm:text-2xl">
                  Reading this changed nothing yet. The Try This box above is the
                  part that does.
                </p>
              </div>
            </div>

            <aside className="lg:order-2">
              <Toc items={toc} />
            </aside>
          </div>
        </div>
      </article>

      <Section eyebrow="The notes" tone="paper-2">
        <div data-reveal="">
          <NewsletterPanel compact />
        </div>
      </Section>

      <Section eyebrow="Related" note={<>more from the same corner</>}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ArticleCard key={item.slug} article={item} />
          ))}
        </div>
      </Section>
    </>
  );
}
