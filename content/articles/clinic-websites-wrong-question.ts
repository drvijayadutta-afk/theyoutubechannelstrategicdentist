import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "clinic-websites-wrong-question",
  title: "Most clinic websites answer the wrong question",
  dek: "They explain the treatment in detail. The person reading is usually trying to work out something much simpler and much more human.",
  pillar: "healthcare-health-tech",
  format: "article",
  date: "2026-06-28",
  body: [
    {
      type: "para",
      text: "I spent an evening reading clinic websites — dental, dermatology, physiotherapy, a few hospitals — and the structure was almost identical every time. A list of treatments. A paragraph explaining each procedure. Credentials. Equipment. A form.",
    },
    {
      type: "para",
      text: "All of it accurate. Almost none of it answering what the person on the other end is actually thinking, which, in my experience of sitting across from patients, is some version of: is this going to hurt, what will it cost, how long will I be out of action, and will I feel stupid asking.",
    },
    { type: "heading", text: "The gap between the two questions" },
    {
      type: "para",
      text: "A clinic writes from inside its own expertise, where the interesting distinctions are clinical ones. A patient reads from inside a specific worry, where the interesting distinctions are practical and emotional. Both are reasonable positions. They just aren't the same page.",
    },
    {
      type: "list",
      items: [
        "The site says: 'We use advanced rotary endodontics.' The reader hears: I don't know if that's good or bad.",
        "The site says: 'Consultation available.' The reader wonders: how much, and will they push me into something.",
        "The site says nothing about pain. The reader is mostly thinking about pain.",
      ],
    },
    {
      type: "callout",
      title: "Worth noticing",
      text: "The information a clinic finds most impressive about itself is usually the information a patient is least equipped to evaluate. Credentials reassure other clinicians more reliably than they reassure patients.",
    },
    { type: "heading", text: "What seems to work better" },
    {
      type: "para",
      text: "The sites I found genuinely good did an unglamorous thing: they answered the awkward questions in plain words, early, before being asked. What it costs, roughly. Whether it hurts, honestly. What the appointment is actually like, minute by minute. What happens if you're nervous.",
    },
    {
      type: "para",
      text: "That last one matters more than it looks. A line acknowledging that people put these appointments off for years — and that the clinic is used to that and won't make it weird — probably does more for conversion than a paragraph about equipment. Not because it's a clever tactic, but because it addresses the actual barrier.",
    },
    {
      type: "quote",
      text: "Trust in healthcare isn't built by sounding impressive. It's built by sounding like you've anticipated the thing the person is embarrassed to ask.",
    },
    { type: "heading", text: "The constraint I keep bumping into" },
    {
      type: "para",
      text: "Publishing prices is genuinely hard — cases vary, regulations differ by region, and an oversimplified number can mislead. I don't have a clean answer. But 'it varies' as the entire response leaves the reader exactly where they started, and a range with a plain explanation of what moves it seems better than silence.",
    },
    {
      type: "para",
      text: "This is one where I'd rather be corrected than confident. If you run a practice and have tested this, I'd genuinely like to hear what happened.",
    },
    {
      type: "tryThis",
      title: "Audit a clinic page in 15 minutes",
      time: "15 min",
      steps: [
        "Open any clinic website — yours, or one you've been a patient at.",
        "Write down the first four questions a nervous first-time patient would have. Be honest, including the embarrassing ones.",
        "Search the page for an answer to each. Note how far down you had to scroll, or whether it's there at all.",
        "Count how much of the page is about the clinic versus about the patient's experience.",
        "Rewrite the top section to answer question one directly, in the plainest language you can manage.",
      ],
    },
  ],
};
