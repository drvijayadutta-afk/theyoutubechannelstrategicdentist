import type { Article } from "@/lib/types";
import { article as aiNotetakers } from "./ai-notetakers-tested";
import { article as brandSentence } from "./brand-is-a-sentence";
import { article as contentExperiment } from "./content-experiment-no-audience";
import { article as clinicWebsites } from "./clinic-websites-wrong-question";
import { article as beingBadAgain } from "./being-bad-again";
import { article as tinyAgent } from "./tiny-agent-reading-list";

/** Add an article: create the file, import it, drop it in here. */
export const articles: Article[] = [
  aiNotetakers,
  brandSentence,
  contentExperiment,
  clinicWebsites,
  beingBadAgain,
  tinyAgent,
].sort((a, b) => b.date.localeCompare(a.date));

export const featuredArticle =
  articles.find((a) => a.featured) ?? articles[0];

export const getArticle = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);

export const relatedArticles = (current: Article, limit = 3): Article[] => {
  const others = articles.filter((a) => a.slug !== current.slug);
  const samePillar = others.filter((a) => a.pillar === current.pillar);
  return [...samePillar, ...others.filter((a) => a.pillar !== current.pillar)].slice(
    0,
    limit,
  );
};
