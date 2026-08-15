import type { Article } from "@/lib/types";

export const article: Article = {
  slug: "brand-is-a-sentence",
  title: "Your brand is the sentence people repeat when you're not there",
  dek: "Not the logo, not the palette, not the deck. The sentence. And you can usually find out what yours is in an afternoon.",
  pillar: "branding-communication",
  format: "article",
  date: "2026-07-24",
  body: [
    {
      type: "para",
      text: "There's a test I like because it's cheap and slightly uncomfortable. Ask five people who know roughly what you do to describe it to someone else, in one sentence, without using your website. Write down exactly what they say. Don't correct them.",
    },
    {
      type: "para",
      text: "That collection of sentences is your brand. Everything else — the mark, the type, the colour system — is in service of it. If the five sentences don't resemble each other, no amount of visual identity work will fix it, because the problem is upstream of design.",
    },
    { type: "heading", text: "Why the sentence matters more than the assets" },
    {
      type: "para",
      text: "Brands mostly travel through other people's mouths. Someone recommends you in a group chat. Someone explains you in a meeting you're not in. In those moments none of your assets are present. The only thing that survives is a compressed sentence — and if you haven't given people one, they'll write their own, and theirs will be about whatever was easiest to remember.",
    },
    {
      type: "callout",
      title: "A useful reframe",
      text: "You're not trying to be described accurately. You're trying to be described consistently. Those are different goals and consistency is the one that compounds.",
    },
    { type: "heading", text: "What makes a sentence repeatable" },
    {
      type: "para",
      text: "Looking at the ones that spread, three things show up repeatedly. They're short enough to say without rehearsing. They contain one concrete noun — a thing, not a quality. And they leave something out, which gives the listener a reason to ask a follow-up question.",
    },
    {
      type: "list",
      items: [
        "\"They make the thing that stops your invoices going missing.\" — a noun, a specific problem, no adjectives.",
        "\"She's the dentist who ended up in marketing.\" — leaves a gap, invites the obvious next question.",
        "\"We're the boring accounting software.\" — takes a position most competitors won't.",
      ],
    },
    {
      type: "para",
      text: "Compare those to what most about-pages say: \"we help ambitious brands unlock their potential through innovative strategy.\" Nobody has ever repeated that sentence to another human being. It has no noun in it. It could belong to nine thousand companies, which is a way of saying it belongs to none.",
    },
    { type: "heading", text: "The uncomfortable part" },
    {
      type: "para",
      text: "A repeatable sentence requires giving something up. \"The boring accounting software\" forfeits every customer who wants exciting accounting software, and that forfeit is exactly why it sticks. Most positioning work stalls here — not for lack of ideas, but because the good sentences all cost something, and the costless ones are the vague ones.",
    },
    {
      type: "quote",
      text: "If your positioning doesn't lose you anyone, it probably isn't positioning.",
    },
    {
      type: "para",
      text: "I don't think this is fully solvable, for what it's worth. I've written sentences for my own work that I later decided were too narrow. But narrow and wrong is easier to fix than broad and forgettable, because at least people were repeating something.",
    },
    {
      type: "tryThis",
      title: "Find out what your sentence actually is",
      time: "1 afternoon",
      steps: [
        "Message five people who roughly know your work. Ask: 'How would you describe what I do to someone who's never met me? One sentence, off the top of your head.'",
        "Copy the replies into one document, verbatim. Resist all editing.",
        "Underline every noun. Nouns are what people remember; adjectives are what they forget.",
        "Look for the sentence that shows up in more than one reply — that's your real position, whether or not you chose it.",
        "Write the sentence you'd rather have. Then name what it costs you. If the answer is 'nothing', it's not specific enough yet.",
      ],
    },
  ],
};
