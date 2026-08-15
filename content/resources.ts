import type { Resource, TimelineStep } from "@/lib/types";

export const freeResources: Resource[] = [
  {
    title: "The Meeting Notes Prompt",
    description:
      "The four-section prompt from the note-taker experiment — decisions, owners, open questions, and an explicit place to put uncertainty.",
    pillar: "ai-automation",
    kind: "Prompt",
    status: "free",
  },
  {
    title: "Positioning Sentence Worksheet",
    description:
      "Five questions to ask five people, and a grid for spotting which nouns keep coming back. One page, deliberately.",
    pillar: "branding-communication",
    kind: "Worksheet",
    status: "free",
  },
  {
    title: "Eight-Post Experiment Tracker",
    description:
      "A sheet for running one content variable properly: prediction first, alternating posts, replies counted rather than reach.",
    pillar: "marketing-growth",
    kind: "Template",
    status: "free",
  },
  {
    title: "Clinic Page Audit Checklist",
    description:
      "The nervous-patient test. Fourteen questions to run against any healthcare page, ordered by how early they should be answered.",
    pillar: "healthcare-health-tech",
    kind: "Checklist",
    status: "free",
  },
  {
    title: "Proof-of-Work Starter Grid",
    description:
      "For when you have no experience in the field yet: a way to turn what you've already noticed into something you can show.",
    pillar: "career-learning",
    kind: "Framework",
    status: "free",
  },
];

export const learningLibrary: Resource[] = [
  {
    title: "Tools I actually kept using",
    description:
      "A short, honest list. Most tools I try get dropped within a fortnight — these are the ones that survived, with a line on why.",
    pillar: "ai-automation",
    kind: "Tool list",
    status: "free",
  },
  {
    title: "Reading that changed my mind",
    description:
      "Books, papers and posts that made me revise something I believed. Organised by what they changed rather than by topic.",
    pillar: "career-learning",
    kind: "Reading list",
    status: "free",
  },
  {
    title: "Brand teardowns worth studying",
    description:
      "Positioning examples I keep returning to, with notes on the specific decision each one got right.",
    pillar: "branding-communication",
    kind: "Collection",
    status: "free",
  },
];

export const comingSoon: Resource[] = [
  {
    title: "The Prompt Library",
    description:
      "Prompts organised by the job they do, not the tool they run on. Each with the failure mode it's designed around.",
    pillar: "ai-automation",
    kind: "Toolkit",
    status: "coming-soon",
  },
  {
    title: "Healthcare Communication Playbook",
    description:
      "Patient-facing writing, from appointment reminders to the awkward pricing page.",
    pillar: "healthcare-health-tech",
    kind: "Playbook",
    status: "coming-soon",
  },
  {
    title: "The Career Switch Field Guide",
    description:
      "For people whose CV doesn't run in a straight line and are tired of apologising for it.",
    pillar: "career-learning",
    kind: "Guide",
    status: "coming-soon",
  },
];

/** The learning-in-public loop. Order carries meaning here, so it's numbered. */
export const loopSteps: TimelineStep[] = [
  {
    label: "Learn",
    title: "Read it, watch it, save it",
    text: "The easy part, and the part most of us are already very good at.",
  },
  {
    label: "Try",
    title: "Use it on something real",
    text: "Not a practice exercise. An actual task with an actual outcome.",
  },
  {
    label: "Fail",
    title: "Find out what the tutorial left out",
    text: "There's always a gap between the demo and your situation. This is where it shows up.",
  },
  {
    label: "Adjust",
    title: "Change one thing and go again",
    text: "Usually the brief, not the tool. Usually simpler than expected.",
  },
  {
    label: "Share",
    title: "Write down what happened",
    text: "Including the parts that didn't work, which are the parts people can use.",
  },
];

/** Theory → practice ladder, homepage section 5. */
export const practiceLadder: TimelineStep[] = [
  {
    label: "01",
    title: "Watch a video",
    text: "Feels like progress. Isn't yet.",
  },
  {
    label: "02",
    title: "Understand the idea",
    text: "You can now explain it. Still not the same as doing it.",
  },
  {
    label: "03",
    title: "Try it yourself",
    text: "The gap between knowing and doing shows up in about four minutes.",
  },
  {
    label: "04",
    title: "Make mistakes",
    text: "This is the actual learning. Everything before it was preparation.",
  },
  {
    label: "05",
    title: "Build something",
    text: "Small and finished beats ambitious and abandoned.",
  },
  {
    label: "06",
    title: "Share what you learned",
    text: "Which is how you find out whether you understood it.",
  },
];

/** About page — direction of travel, no invented specifics. */
export const journey: TimelineStep[] = [
  {
    label: "Then",
    title: "Dentistry",
    text: "Clinical training, and years of explaining complicated things to people who were nervous, in a hurry, or both. It turns out that's a communication job wearing a lab coat.",
  },
  {
    label: "Next",
    title: "A question I couldn't drop",
    text: "Why do some clinics fill their books while equally good ones don't? Nothing in my training answered that, so I went looking outside it.",
  },
  {
    label: "Then",
    title: "Marketing and communication",
    text: "Positioning, messaging, content, the craft of a sentence. Learned mostly by doing it badly first and paying attention to why.",
  },
  {
    label: "Now",
    title: "AI, and where it all overlaps",
    text: "Testing what these tools can genuinely do for communication and healthcare — and being specific about where they fall over.",
  },
  {
    label: "Next",
    title: "Still deciding",
    text: "Which is the honest answer, and the reason this site exists in the first place.",
  },
];
