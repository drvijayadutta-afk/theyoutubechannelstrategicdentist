import type { Article, Block, ContentFormat } from "./types";

const WORDS_PER_MINUTE = 225;

const blockText = (block: Block): string => {
  switch (block.type) {
    case "list":
      return block.items.join(" ");
    case "callout":
      return `${block.title} ${block.text}`;
    case "tryThis":
      return `${block.title} ${block.steps.join(" ")}`;
    default:
      return block.text;
  }
};

export const readingMinutes = (article: Article): number => {
  const words = article.body.reduce(
    (total, block) => total + blockText(block).split(/\s+/).length,
    0,
  );
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
};

/** Headings double as the table of contents, so ids must match both places. */
export const headingId = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export const tableOfContents = (article: Article) =>
  article.body
    .filter((block): block is Extract<Block, { type: "heading" }> => block.type === "heading")
    .map((block) => ({ id: headingId(block.text), text: block.text }));

export const formatLabels: Record<ContentFormat, string> = {
  article: "Article",
  video: "Video",
  short: "Short",
  tutorial: "Tutorial",
  experiment: "Experiment",
};

export const formatDate = (iso: string): string =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
