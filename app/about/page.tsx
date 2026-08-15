import type { Metadata } from "next";
import { site } from "@/content/site";
import { journey } from "@/content/resources";
import { pillars } from "@/content/pillars";
import { Section } from "@/components/layout/section";
import { ButtonLink } from "@/components/ui/button";
import { Circled, HandArrow, Highlight, MarginNote } from "@/components/ui/marks";
import { StickyNote } from "@/components/ui/sticky-note";
import { NewsletterPanel } from "@/components/forms/newsletter-panel";
import { SubscribeYouTube } from "@/components/cta/subscribe-youtube";
import { revealDelay } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "A career path with a few unexpected turns — from dentistry into branding, communication, marketing and AI — and why The Strategic Dentist documents the learning in public.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About · ${site.name}`,
    description:
      "A career path with a few unexpected turns, and why the learning happens in public.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b-2 border-ink bg-paper">
        <div className="mx-auto max-w-[78rem] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <p className="label-meta text-pink-deep" data-reveal="">
                About
              </p>
              <h1
                className="mt-5 max-w-3xl font-display text-[2.4rem] leading-[1.02] font-extrabold tracking-tight sm:text-5xl lg:text-[3.75rem]"
                data-reveal=""
                style={revealDelay(1)}
              >
                A career path with a few{" "}
                <Highlight style={revealDelay(5)}>unexpected turns.</Highlight>
              </h1>
              <p
                className="mt-7 max-w-2xl font-prose text-lg leading-relaxed text-ink-soft sm:text-xl"
                data-reveal=""
                style={revealDelay(2)}
              >
                I&rsquo;m {site.author}. I trained as a dentist, got distracted
                by a question I couldn&rsquo;t answer from inside a clinic, and
                have spent the years since learning branding, communication,
                marketing and — most recently — what AI can actually do once you
                stop watching demos of it.
              </p>
              <p
                className="mt-4 max-w-2xl font-prose text-lg leading-relaxed text-ink-soft"
                data-reveal=""
                style={revealDelay(3)}
              >
                This site is where that gets written down, while it&rsquo;s
                still in progress rather than tidied up afterwards.
              </p>
            </div>

            <div className="flex flex-col gap-5" data-reveal="" style={revealDelay(3)}>
              <div className="border-2 border-ink bg-paper-2 p-5 shadow-hard">
                <div
                  aria-hidden="true"
                  className="flex aspect-[4/5] items-center justify-center border-2 border-dashed border-ink/25 bg-butter/50"
                >
                  <span className="prose-note px-6 text-center text-[1.05rem]">
                    a photo goes here eventually
                  </span>
                </div>
              </div>
              <StickyNote label="Currently" tone="pink" rotate={1.5}>
                Reading about how people decide to trust a clinic before
                they&rsquo;ve met anyone who works there.
              </StickyNote>
            </div>
          </div>
        </div>
      </section>

      {/* The beginning */}
      <Section
        eyebrow="The beginning"
        note={<>it really did start in a clinic</>}
        tone="paper-2"
      >
        <div className="max-w-3xl" data-reveal="">
          <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl">
            Dentistry taught me something I didn&rsquo;t expect
          </h2>
          <p className="mt-6 font-prose text-lg leading-relaxed text-ink-soft">
            Most of the job is not the procedure. It&rsquo;s the ten minutes
            beforehand, explaining something complicated to a person who is
            nervous, in a hurry, or has already read something frightening on
            the internet. Do that badly and the clinical skill barely matters,
            because they don&rsquo;t come back.
          </p>
          <p className="mt-5 font-prose text-lg leading-relaxed text-ink-soft">
            Nobody called that communication work. But it was, and it turned out
            to be the part I found most interesting.
          </p>
        </div>
      </Section>

      {/* The curiosity problem */}
      <Section eyebrow="The curiosity problem" note={<>one question, then twelve</>}>
        <div className="max-w-3xl" data-reveal="">
          <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl">
            Why do some clinics fill their books and equally good ones
            don&rsquo;t?
          </h2>
          <p className="mt-6 font-prose text-lg leading-relaxed text-ink-soft">
            I couldn&rsquo;t answer it, and nothing in my training was going to.
            So I went looking outside — which is how a clinical career quietly
            turns into reading about positioning at eleven at night.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Marketing", "Why does anyone choose anything?"],
            ["Branding", "Why do some names stick?"],
            ["Communication", "Why does the same fact land differently?"],
            ["AI", "What can this genuinely do, minus the hype?"],
          ].map(([field, question], i) => (
            <div
              key={field}
              data-reveal=""
              style={revealDelay(i)}
              className="border-2 border-ink bg-paper p-5"
            >
              <p className="label-meta text-pink-deep">{field}</p>
              <p className="mt-2 font-prose text-[1.05rem] leading-relaxed">
                {question}
              </p>
            </div>
          ))}
        </div>

        <p className="prose-note mt-7 flex items-center gap-3 text-[1.05rem]">
          <HandArrow variant="squiggle" className="h-8 w-24 shrink-0" />
          each one opened three more
        </p>
      </Section>

      {/* The non-linear career */}
      <Section
        eyebrow="The route"
        note={<>not a ladder — more of a scenic detour</>}
        tone="ink"
        size="loose"
      >
        <div className="max-w-3xl" data-reveal="">
          <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            The non-linear bit
          </h2>
          <p className="mt-6 font-prose text-lg leading-relaxed text-paper/75">
            Written out plainly, because CVs like this tend to get apologised
            for and I&rsquo;d rather not.
          </p>
        </div>

        <ol className="mt-12 space-y-6 border-l-2 border-highlight/50 pl-6 sm:pl-8">
          {journey.map((step, i) => (
            <li key={step.title} data-reveal="" style={revealDelay(i)} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[calc(1.5rem+5px)] h-2.5 w-2.5 bg-highlight sm:-left-[calc(2rem+5px)]"
              />
              <p className="label-meta text-highlight">{step.label}</p>
              <h3 className="mt-1.5 font-display text-xl leading-snug font-bold sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 max-w-2xl font-prose leading-relaxed text-paper/70">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Why this exists */}
      <Section
        eyebrow="Why this exists"
        note={<>the honest version</>}
        tone="ruled"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div data-reveal="">
            <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl">
              Why The Strategic Dentist exists
            </h2>
            <p className="mt-6 font-prose text-lg leading-relaxed text-ink-soft">
              Because the gap between knowing something and being able to do it
              is enormous, and almost nobody writes about the middle. There are
              endless explainers and very few honest accounts of what happened
              when someone actually tried.
            </p>
            <p className="mt-5 font-prose text-lg leading-relaxed text-ink-soft">
              So this is the middle. Written while I&rsquo;m still in it, which
              means occasionally being wrong in public. That&rsquo;s a trade
              I&rsquo;ll take — being corrected is faster than being careful.
            </p>
            <p className="mt-6 font-prose text-xl leading-relaxed sm:text-2xl">
              I&rsquo;m not the expert here. I&rsquo;m the{" "}
              <Circled>person taking notes</Circled>.
            </p>
          </div>

          <div className="flex flex-col gap-4" data-reveal="" style={revealDelay(2)}>
            <StickyNote label="What this is" tone="butter" rotate={-1.8}>
              A record of experiments, with the results reported honestly —
              including the boring ones.
            </StickyNote>
            <StickyNote label="What this isn't" tone="pink" rotate={1.4}>
              A course funnel, a credentials wall, or a place where someone
              pretends to have finished learning.
            </StickyNote>
          </div>
        </div>
      </Section>

      {/* What I'm exploring now */}
      <Section eyebrow="Right now" note={<>subject to change, obviously</>}>
        <div className="max-w-3xl" data-reveal="">
          <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl">
            What I&rsquo;m exploring at the moment
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.id}
              data-reveal=""
              style={revealDelay(i)}
              className="border-2 border-ink bg-paper p-5"
            >
              <h3 className="font-display text-lg font-bold">{pillar.name}</h3>
              <ul className="mt-3 space-y-2">
                {pillar.exploring.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[0.95rem] text-ink-soft">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-pink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Open invitation */}
      <Section eyebrow="An open invitation" tone="paper-2">
        <div className="max-w-3xl" data-reveal="">
          <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            If you&rsquo;re learning something too, I&rsquo;d like to hear about
            it
          </h2>
          <MarginNote className="mt-5 text-[1.1rem]">
            genuinely — the replies are the best part
          </MarginNote>
          <p className="mt-5 font-prose text-lg leading-relaxed text-ink-soft">
            Tell me what you&rsquo;re testing, what didn&rsquo;t work, or what I
            got wrong. Half the things on this site exist because somebody
            replied and sent me down a better path.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/contact">Start a conversation</ButtonLink>
            <ButtonLink href="/blog" variant="secondary">
              Read what&rsquo;s here
            </ButtonLink>
          </div>
        </div>

        <SubscribeYouTube className="mt-12" />
      </Section>

      <Section eyebrow="The notes">
        <div data-reveal="">
          <NewsletterPanel compact />
        </div>
      </Section>
    </>
  );
}
