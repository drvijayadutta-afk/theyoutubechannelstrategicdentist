import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "tiny-agent-reading-list",
  title: "Building a tiny agent that sorts my reading list",
  dek: "Not an autonomous assistant. A twelve-line loop that does one boring job well — and taught me more about agents than any explainer video.",
  pillar: "ai-automation",
  format: "video",
  date: "2026-05-30",
  externalUrl: "https://www.youtube.com/@thestrategicdentist",
  body: [
    {
      type: "para",
      text: "I save far more links than I read. Not an unusual problem. Most people solve it with a folder system they abandon in four days, so instead of organising harder I tried to build the smallest possible thing that could triage the list for me.",
    },
    {
      type: "para",
      text: "The finished thing is not impressive. It reads my saved links, fetches each page, and sorts them into three buckets: read this week, read eventually, and you are never going to read this. That's the whole product. It took an evening.",
    },
    { type: "heading", text: "Why small was the point" },
    {
      type: "para",
      text: "Every agent tutorial I'd watched started with a framework, a tool registry and a planning loop. Building the ugly version by hand first made it obvious which of those parts I actually needed — which was almost none of them, because a job with one decision doesn't need a planner.",
    },
    {
      type: "list",
      items: [
        "No framework. A loop, a fetch, and one model call per link.",
        "No memory. Each link is judged on its own, which turned out to be fine.",
        "One clear output format, so failures were visible instead of plausible.",
      ],
    },
    {
      type: "callout",
      title: "The bit that surprised me",
      text: "The 'never going to read this' bucket was the useful one. Being told honestly that I'd saved something out of guilt rather than interest changed my saving habits more than any summary did.",
    },
    {
      type: "para",
      text: "The full build is in the video — including the part where it confidently classified an article I'd written as low priority, which I'm choosing to find funny.",
    },
    {
      type: "tryThis",
      title: "Build the smallest agent you'll actually use",
      time: "1 evening",
      steps: [
        "Pick a boring, repetitive judgement you make weekly. Not a creative task — a sorting task.",
        "Write the decision rule in plain English first. If you can't, the agent can't either.",
        "Build it with no framework: a loop, your data, one model call, one printed result.",
        "Run it on ten real items and grade the output yourself.",
        "Only add structure where you actually saw it fail. Most of the scaffolding in tutorials is solving problems you don't have yet.",
      ],
    },
  ],
};
