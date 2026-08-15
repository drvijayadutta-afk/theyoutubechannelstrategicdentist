import type { Pillar, PillarId } from "@/lib/types";

export const pillars: Pillar[] = [
  {
    id: "ai-automation",
    name: "AI & Automation",
    tagline: "Past the demo, into the workflow",
    description:
      "Everyone can explain what a large language model is. Fewer people have wired one into something they use on a Tuesday. This is where the tools get tested against real tasks.",
    accent: "pen",
    exploring: [
      "Agents that actually finish a task",
      "Prompting as a repeatable system",
      "No-code automation for small teams",
    ],
  },
  {
    id: "branding-communication",
    name: "Branding & Communication",
    tagline: "Why some ideas land and others don't",
    description:
      "Positioning, messaging, story and the unglamorous craft of writing a sentence someone remembers. Mostly by taking apart brands that got it right and asking why.",
    accent: "pink",
    exploring: [
      "Teardowns of positioning that works",
      "Writing that sounds like a person",
      "Naming, tone and voice",
    ],
  },
  {
    id: "marketing-growth",
    name: "Marketing & Growth",
    tagline: "Experiments with the numbers attached",
    description:
      "Funnels, content, SEO, audience building — run as small experiments with results reported honestly, including the ones that went nowhere.",
    accent: "highlight",
    exploring: [
      "Content that compounds",
      "What consumer behaviour research really says",
      "Campaign post-mortems",
    ],
  },
  {
    id: "healthcare-health-tech",
    name: "Healthcare & Health Tech",
    tagline: "Where the name came from",
    description:
      "Patient communication, hospital and clinic marketing, digital health and AI in care. The industry I started in, looked at with the tools I picked up later.",
    accent: "gold",
    exploring: [
      "How clinics actually explain themselves",
      "AI in diagnostics, minus the hype",
      "Trust as a design problem",
    ],
  },
  {
    id: "career-learning",
    name: "Career & Learning",
    tagline: "Careers that don't run in a straight line",
    description:
      "Switching fields, learning in public, building proof of work, and making peace with having several interests at once instead of one tidy job title.",
    accent: "butter",
    exploring: [
      "Building a portfolio with no experience",
      "Learning something properly in 30 days",
      "Explaining a non-linear CV",
    ],
  },
];

export const pillarById = (id: PillarId): Pillar =>
  pillars.find((p) => p.id === id) ?? pillars[0];
