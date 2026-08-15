export type PillarId =
  | "ai-automation"
  | "branding-communication"
  | "marketing-growth"
  | "healthcare-health-tech"
  | "career-learning";

export type ContentFormat =
  | "article"
  | "video"
  | "short"
  | "tutorial"
  | "experiment";

/** Colour role a pillar borrows from the notebook palette. */
export type PillarAccent = "pink" | "highlight" | "pen" | "gold" | "butter";

export interface Pillar {
  id: PillarId;
  name: string;
  tagline: string;
  description: string;
  accent: PillarAccent;
  exploring: string[];
}

export type Block =
  | { type: "heading"; text: string }
  | { type: "para"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; text: string }
  | { type: "tryThis"; title: string; steps: string[]; time?: string };

export interface Article {
  slug: string;
  title: string;
  dek: string;
  pillar: PillarId;
  format: ContentFormat;
  date: string;
  featured?: boolean;
  /** Present for video/short formats. */
  externalUrl?: string;
  body: Block[];
}

export type ResourceStatus = "free" | "coming-soon" | "external";

export interface Resource {
  title: string;
  description: string;
  pillar: PillarId;
  kind: string;
  status: ResourceStatus;
  url?: string;
}

export interface TimelineStep {
  label: string;
  title: string;
  text: string;
}
