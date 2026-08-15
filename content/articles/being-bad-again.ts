import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "being-bad-again",
  title: "Switching fields means being bad at something again",
  dek: "Nobody warns you that the hardest part isn't the learning. It's the drop in status from competent to beginner.",
  pillar: "career-learning",
  format: "short",
  date: "2026-06-15",
  body: [
    {
      type: "para",
      text: "You spend years getting good at one thing. You reach the point where people ask you questions and you know the answers. Then you move sideways into something new — and you're back to not knowing what the words mean.",
    },
    {
      type: "para",
      text: "The skill gap is fine; that closes with work. The part people don't mention is the status drop. Going from the person who knows to the person asking basic questions is genuinely uncomfortable, and that discomfort — not difficulty — is what sends most people back.",
    },
    {
      type: "callout",
      title: "What helped me",
      text: "Separating 'I don't know this yet' from 'I'm not capable of this'. They feel identical from the inside and they are not the same sentence.",
    },
    {
      type: "para",
      text: "The other thing: your old field isn't wasted. It's the reason you notice things the people around you don't. Coming into marketing from clinical work, I kept noticing how much health communication assumes a reader who isn't frightened. That's not a marketing insight and it's not a clinical one. It only exists at the join.",
    },
    {
      type: "quote",
      text: "The advantage of a non-linear career isn't the second skill. It's the view from between the two.",
    },
    {
      type: "tryThis",
      title: "Make the beginner phase shorter",
      time: "10 min",
      steps: [
        "Write down three things from your previous field that nobody in your new one seems to think about.",
        "Pick the one that comes up most often, and write 200 words on it in public this week.",
        "Notice who replies. That intersection is usually where your actual position is.",
      ],
    },
  ],
};
