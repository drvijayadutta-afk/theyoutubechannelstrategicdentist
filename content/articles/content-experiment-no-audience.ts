import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "content-experiment-no-audience",
  title: "How to run a content experiment when nobody is reading yet",
  dek: "Small numbers aren't a reason to skip measurement. They're a reason to measure different things.",
  pillar: "marketing-growth",
  format: "tutorial",
  date: "2026-07-11",
  body: [
    {
      type: "para",
      text: "The standard advice is to post consistently for a year and then look at your analytics. That's not wrong, but it wastes the first year. You can learn things much earlier — you just can't learn them from the metrics everyone points at, because at forty views a post, views are almost entirely noise.",
    },
    {
      type: "para",
      text: "Here's the setup I use instead. It works at small numbers because it doesn't depend on statistical significance; it depends on qualitative signal, which arrives much sooner.",
    },
    { type: "heading", text: "Step 1: Pick one variable, not five" },
    {
      type: "para",
      text: "Most people change the topic, the format, the hook, the length and the posting time all at once, then conclude that \"video works better.\" Nothing was learned there. Choose one variable and hold everything else roughly still for the run.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Opening line: question versus flat statement.",
        "Specificity: a named number versus a general claim.",
        "Length: 150 words versus 600.",
        "Ending: a question to the reader versus no ask at all.",
      ],
    },
    { type: "heading", text: "Step 2: Measure replies, not reach" },
    {
      type: "para",
      text: "Reach at small scale is mostly the algorithm's mood. Replies are not. One person taking ninety seconds to write you a sentence is a far stronger signal than two hundred passive impressions, and it arrives on post three instead of post three hundred.",
    },
    {
      type: "callout",
      title: "The metric that actually moved things for me",
      text: "Count how many replies contain a specific detail from your post rather than a generic 'great post'. Specific replies mean the idea landed. Generic replies mean the post was pleasant and forgettable.",
    },
    { type: "heading", text: "Step 3: Run it for eight posts, not eight weeks" },
    {
      type: "para",
      text: "Time-boxing an experiment makes it hostage to how busy you were that month. Count posts instead. Four with the variable, four without, alternating so that any improvement in your writing gets spread across both groups rather than landing entirely in whichever came second.",
    },
    { type: "heading", text: "Step 4: Write the conclusion before you look" },
    {
      type: "para",
      text: "Before opening any numbers, write down what you expect to find. This is the step everyone skips and it's the one that makes the exercise honest — without it you will find a story in the data no matter what the data says. Then compare. Being wrong on paper is the entire point; it's the only version of the result you'll actually remember.",
    },
    {
      type: "quote",
      text: "An experiment you can't be wrong about isn't an experiment. It's a press release.",
    },
    {
      type: "para",
      text: "What surprised me running this on my own posts: the opening-line variable did almost nothing, and the specificity variable did a lot. Naming an actual number — 'six tools', 'twenty minutes' — changed the character of the replies more than any structural change I tried. I'd assumed hooks were the lever. They weren't, at least not at this size.",
    },
    {
      type: "tryThis",
      title: "Set up your first eight-post experiment",
      time: "30 min to plan",
      steps: [
        "Write down one variable you're curious about. One.",
        "Draft your prediction in a sentence: 'I think X will produce more specific replies than Y, because…'",
        "Plan eight posts, alternating the variable: A, B, A, B, A, B, A, B.",
        "Track only two columns in a sheet: which version, and how many specific replies.",
        "After all eight, read your prediction before the sheet. Then write one honest paragraph on what happened — including if the answer is 'no visible difference', which is a real result.",
      ],
    },
  ],
};
