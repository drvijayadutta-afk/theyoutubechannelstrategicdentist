import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "ai-notetakers-tested",
  title: "I ran six AI note-takers on the same messy call",
  dek: "Every one of them produced a confident summary. Only two of them produced a summary I'd have been willing to send to the person who missed the meeting.",
  pillar: "ai-automation",
  format: "experiment",
  date: "2026-08-02",
  featured: true,
  body: [
    {
      type: "para",
      text: "The demo videos all use the same kind of call: three people, good microphones, one topic, nobody interrupting. Actual meetings are not like that. So I recorded a genuinely messy one — five people, two accents the tools were unlikely to have heard much of, a tangent about pricing that went nowhere, and one decision buried in the last four minutes — and fed the identical recording to six tools.",
    },
    {
      type: "para",
      text: "I'm not going to name winners and losers, partly because the tools will have changed by the time you read this, and partly because that wasn't the interesting part. The interesting part was how they failed.",
    },
    { type: "heading", text: "What I was actually measuring" },
    {
      type: "para",
      text: "A summary is not a compression problem. It's a judgement problem. So instead of scoring accuracy, I scored three things that matter when you send the notes to a colleague:",
    },
    {
      type: "list",
      items: [
        "Did it find the decision — the one sentence that changes what someone does tomorrow?",
        "Did it correctly drop the tangent, or did it dutifully summarise eight minutes of nothing?",
        "Did it attribute the action item to the right person?",
      ],
    },
    { type: "heading", text: "Where they broke" },
    {
      type: "para",
      text: "Four of the six treated airtime as importance. The pricing tangent was the longest continuous stretch of talking in the call, so it got the most summary space — while the actual decision, made quickly and quietly near the end because everyone already agreed, got one clause or got dropped entirely.",
    },
    {
      type: "para",
      text: "That's a reasonable thing for a model to do and a terrible thing for a note-taker to do. In a real meeting the important moment is often the shortest one, because agreement takes less time than disagreement.",
    },
    {
      type: "callout",
      title: "The thing I keep coming back to",
      text: "Length is the easiest signal available and almost never the right one. Any summarising system you build — with a tool or a prompt of your own — needs something else to weigh importance by.",
    },
    {
      type: "para",
      text: "Attribution was the second failure. With five voices and no speaker labels, three tools confidently assigned an action item to the wrong person. Confidently is the operative word: nothing in the output suggested a guess had been made. A summary that says \"Priya will send the draft\" when Priya said no such thing is worse than no summary, because it will be believed.",
    },
    { type: "heading", text: "What actually fixed it" },
    {
      type: "para",
      text: "Not switching tools. Changing what I asked for. When I stopped asking for a summary and started asking for a specific structure — decisions, owners, open questions, and an explicit \"unclear\" bucket — the gap between the best and worst tool narrowed sharply. The permission to say \"unclear\" did most of the work. Given nowhere to put uncertainty, a model will resolve it into a confident sentence.",
    },
    {
      type: "quote",
      text: "Most of what looks like a model problem is a brief problem. That's true of people too.",
    },
    {
      type: "para",
      text: "Which is roughly where I landed. I went in expecting to end up with a recommendation and came out with a template instead. I might be wrong about this — six calls is not a study, it's an afternoon — but the pattern was consistent enough that I've changed how I ask.",
    },
    {
      type: "tryThis",
      title: "Test your own note-taker in 20 minutes",
      time: "20 min",
      steps: [
        "Find a recording of a real meeting you were in — one you remember well enough to grade.",
        "Before you run any tool, write down the one decision that came out of it and who owns it. This is your answer key.",
        "Run it through whatever tool you currently use, with your normal prompt.",
        "Run it again asking for four labelled sections: Decisions, Owners, Open questions, Unclear.",
        "Compare both against your answer key. If the second is better, the fix was never the tool.",
      ],
    },
  ],
};
