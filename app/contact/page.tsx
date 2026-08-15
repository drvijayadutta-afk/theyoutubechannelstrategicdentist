import type { Metadata } from "next";
import { site } from "@/content/site";
import { Section } from "@/components/layout/section";
import { Highlight, HandArrow, MarginNote } from "@/components/ui/marks";
import { StickyNote } from "@/components/ui/sticky-note";
import { ContactForm } from "@/components/forms/contact-form";
import { SubscribeYouTube } from "@/components/cta/subscribe-youtube";
import { revealDelay } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Collaborations, conversations and interesting experiments — in AI, branding, marketing, healthcare and health tech. Not a sales enquiry form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact · ${site.name}`,
    description: "Let's make something interesting.",
    url: "/contact",
  },
};

const collaborations = [
  ["Content collaboration", "Co-writing, guest pieces, joint experiments."],
  ["Podcasts and video", "Conversations, especially the ones without a script."],
  ["Creative projects", "Things that don't fit neatly into a category."],
  ["Learning initiatives", "Workshops, student sessions, curriculum thinking."],
  ["Healthcare and health tech", "Communication, patient experience, AI in care."],
  ["Something unclassifiable", "Genuinely — the odd ones are usually the best."],
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b-2 border-ink bg-paper">
        <div className="mx-auto max-w-[78rem] px-5 py-14 sm:px-8 sm:py-18 lg:py-20">
          <p className="label-meta text-pink-deep" data-reveal="">
            Contact
          </p>
          <h1
            className="mt-4 max-w-3xl font-display text-[2.4rem] leading-[1.02] font-extrabold tracking-tight sm:text-5xl lg:text-[3.5rem]"
            data-reveal=""
            style={revealDelay(1)}
          >
            Let&rsquo;s make something{" "}
            <Highlight style={revealDelay(5)}>interesting.</Highlight>
          </h1>
          <p
            className="mt-6 max-w-2xl font-prose text-lg leading-relaxed text-ink-soft"
            data-reveal=""
            style={revealDelay(2)}
          >
            This isn&rsquo;t an enquiry form and there&rsquo;s nothing to buy.
            It&rsquo;s for collaborations, conversations, corrections, and
            experiments that sound like they might be fun.
          </p>
          <div className="mt-5 flex items-start gap-3" data-reveal="" style={revealDelay(3)}>
            <HandArrow variant="curve-right" className="h-8 w-20 shrink-0" />
            <MarginNote className="pt-1 text-[1.05rem]">
              half-formed ideas are completely welcome
            </MarginNote>
          </div>
        </div>
      </section>

      <Section eyebrow="Say hello" note={<>I read all of these myself</>} tone="paper-2">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div
            className="border-2 border-ink bg-paper p-6 shadow-hard sm:p-8"
            data-reveal=""
          >
            <ContactForm />
          </div>

          <div className="flex flex-col gap-6" data-reveal="" style={revealDelay(2)}>
            <div className="border-2 border-ink bg-paper p-6">
              <h2 className="label-meta text-pink-deep">Other ways round</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${site.social.email}`}
                    className="inline-flex min-h-11 items-center font-bold text-ink underline decoration-pink decoration-2 underline-offset-4 hover:decoration-4"
                  >
                    {site.social.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center font-bold text-ink underline decoration-pink decoration-2 underline-offset-4 hover:decoration-4"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
              <SubscribeYouTube variant="compact" className="mt-4" />
            </div>

            <StickyNote label="Fair warning" tone="butter" rotate={-1.6}>
              Replies can take a few days. Everything gets read, and the
              interesting ones get answered first.
            </StickyNote>
          </div>
        </div>
      </Section>

      <Section eyebrow="Good reasons to write" note={<>not an exhaustive list</>}>
        <div className="max-w-3xl" data-reveal="">
          <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl">
            What tends to work well
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {collaborations.map(([title, text], i) => (
            <div
              key={title}
              data-reveal=""
              style={revealDelay(i)}
              className="border-2 border-ink bg-paper p-5"
            >
              <h3 className="font-display text-lg leading-snug font-bold">{title}</h3>
              <p className="mt-2 font-prose leading-relaxed text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
