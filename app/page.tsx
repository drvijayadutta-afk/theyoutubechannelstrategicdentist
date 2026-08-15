import Link from "next/link";
import { site } from "@/content/site";
import { pillars } from "@/content/pillars";
import { articles, featuredArticle } from "@/content/articles";
import {
  comingSoon,
  freeResources,
  loopSteps,
  practiceLadder,
} from "@/content/resources";
import { Section } from "@/components/layout/section";
import { ButtonLink } from "@/components/ui/button";
import { Circled, HandArrow, Highlight, MarginNote } from "@/components/ui/marks";
import { StickyNote } from "@/components/ui/sticky-note";
import { Portrait } from "@/components/ui/portrait";
import { TryThisCard } from "@/components/ui/try-this";
import { SwipeCarousel } from "@/components/ui/swipe-carousel";
import { LoopDiagram } from "@/components/ui/loop-diagram";
import { PillarCard } from "@/components/content/pillar-card";
import { ArticleCard } from "@/components/content/article-card";
import { ResourceCard } from "@/components/content/resource-card";
import { NewsletterPanel } from "@/components/forms/newsletter-panel";
import { SubscribeYouTube } from "@/components/cta/subscribe-youtube";
import { revealDelay } from "@/components/ui/reveal";

/* Offsets are full class strings — Tailwind can't see names built at runtime. */
const ladderOffset = [
  "md:ml-0",
  "md:ml-[3rem]",
  "md:ml-[6rem]",
  "md:ml-[9rem]",
  "md:ml-[12rem]",
  "md:ml-[15rem]",
];

/* Real half-finished thoughts, not decoration — used both in the desktop
   pinned stack and the mobile swipe carousel below it. */
const pinnedNotes = [
  {
    label: "Just learned",
    tone: "butter" as const,
    rotate: -2.5,
    offset: "lg:mr-10",
    text: "Length is the easiest signal a summariser has, and almost never the right one. The important moment in a meeting is usually the shortest one.",
  },
  {
    label: "Currently testing",
    tone: "pink" as const,
    rotate: 1.8,
    offset: "lg:ml-12",
    text: "Does naming a real number in the first line change who replies? Eight posts in, four to go.",
  },
  {
    label: "Changed my mind about",
    tone: "pen" as const,
    rotate: -1.2,
    offset: "lg:mr-6",
    text: "Thought hooks were the lever. They weren't. Specificity was doing all the work.",
  },
];

export default function HomePage() {
  const [, ...restArticles] = articles;
  const sidebarPicks = restArticles.slice(0, 3);
  const gridPicks = restArticles.slice(3, 5);

  return (
    <>
      {/* 1 — HERO */}
      <section className="relative overflow-hidden border-b-2 border-ink bg-paper">
        <div className="mx-auto max-w-[78rem] px-5 py-16 sm:px-8 sm:py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="label-meta text-pink-deep" data-reveal="">
                A learning-in-public experiment
              </p>

              <h1
                className="mt-5 font-display text-[2.6rem] leading-[0.98] font-extrabold tracking-tight sm:text-6xl lg:text-[4.25rem]"
                data-reveal=""
                style={revealDelay(1)}
              >
                Where theory becomes{" "}
                <Highlight style={revealDelay(6)}>practical execution.</Highlight>
              </h1>

              <div
                className="mt-4 flex items-start gap-2"
                data-reveal=""
                style={revealDelay(3)}
              >
                <HandArrow
                  variant="hook-up"
                  className="h-10 w-16 shrink-0 sm:h-12 sm:w-20"
                />
                <MarginNote className="max-w-[16rem] pt-5">
                  this is the part everyone skips
                </MarginNote>
              </div>

              <p
                className="mt-7 max-w-xl font-prose text-lg leading-relaxed text-ink-soft sm:text-xl"
                data-reveal=""
                style={revealDelay(4)}
              >
                A space for exploring AI, branding, communication, marketing,
                healthcare and career learning — by actually trying the ideas
                instead of collecting them. Some of it works. Some of it
                doesn&rsquo;t. All of it gets written down.
              </p>

              <div
                className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                data-reveal=""
                style={revealDelay(5)}
              >
                <ButtonLink href="/blog">Explore what I&rsquo;m learning</ButtonLink>
                <ButtonLink href="#notes" variant="secondary">
                  Get The Strategic Notes
                </ButtonLink>
              </div>
            </div>

            {/* Pinned notes — real half-finished thoughts, not decoration.
                Mobile swipes through them; lg+ gets the pinned, draggable stack. */}
            <div className="lg:hidden" data-reveal="" style={revealDelay(2)}>
              <SwipeCarousel
                ariaLabel="What I'm currently learning"
                itemClassName="w-[78%] max-w-xs sm:w-[55%] sm:max-w-sm"
              >
                {pinnedNotes.map((note) => (
                  <StickyNote key={note.label} label={note.label} tone={note.tone} rotate={note.rotate}>
                    {note.text}
                  </StickyNote>
                ))}
              </SwipeCarousel>
            </div>

            <div className="relative mx-auto hidden w-full max-w-md flex-col gap-4 sm:max-w-lg lg:flex lg:max-w-none">
              {pinnedNotes.map((note, i) => (
                <StickyNote
                  key={note.label}
                  label={note.label}
                  tone={note.tone}
                  rotate={note.rotate}
                  draggable
                  className={note.offset}
                  data-reveal=""
                  style={revealDelay(i + 2)}
                >
                  {note.text}
                </StickyNote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2 — WHAT IS THE STRATEGIC DENTIST */}
      <Section
        eyebrow="The name"
        note={<>yes, I get asked about it a lot</>}
        tone="paper-2"
      >
        <div className="max-w-3xl" data-reveal="">
          <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            It started with dentistry. It didn&rsquo;t stay there.
          </h2>
          <p className="mt-6 font-prose text-lg leading-relaxed text-ink-soft">
            The Strategic Dentist began with a person whose career started in a
            clinic and kept wandering — into branding, communication, marketing,
            healthcare strategy and, eventually, AI. The name stuck because the
            starting point matters: it&rsquo;s why the questions here come from
            an odd angle.
          </p>
          <p className="mt-5 font-prose text-xl leading-relaxed sm:text-2xl">
            <Circled>Curiosity</Circled> doesn&rsquo;t always stay inside one job
            description.
          </p>
          <div className="mt-8">
            <ButtonLink href="/about" variant="secondary">
              Read the story
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* 3 — LEARNING IN PUBLIC */}
      <Section
        eyebrow="The philosophy"
        note={<>the loop, not the ladder</>}
      >
        <div
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          data-reveal=""
        >
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              I don&rsquo;t know everything. That&rsquo;s kind of the point.
            </h2>
            <p className="mt-6 font-prose text-lg leading-relaxed text-ink-soft">
              The internet doesn&rsquo;t need another person performing
              certainty. What gets published here is the working-out: what
              I&rsquo;m testing, what held up, what fell over, and what
              quietly changed my mind.
            </p>
          </div>
          <LoopDiagram className="hidden shrink-0 lg:block" />
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {loopSteps.map((step, i) => (
            <li
              key={step.label}
              data-reveal=""
              style={revealDelay(i)}
              className="flex h-full flex-col border-2 border-ink bg-paper p-5"
            >
              <span className="label-meta text-pink-deep">{step.label}</span>
              <h3 className="mt-2 font-display text-lg leading-snug font-bold">
                {step.title}
              </h3>
              <p className="mt-2 font-prose text-[0.98rem] leading-relaxed text-ink-soft">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="prose-note mt-6 flex items-center gap-3 text-[1.05rem]">
          <HandArrow variant="curve-right" className="h-8 w-20 shrink-0" />
          and then straight back to the start
        </p>
      </Section>

      {/* 4 — THE LEARNING LAB */}
      <Section
        eyebrow="The learning lab"
        note={<>five rooms, one messy building</>}
        tone="ruled"
        id="lab"
      >
        <div className="max-w-3xl" data-reveal="">
          <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Five things I keep pulling apart
          </h2>
          <p className="mt-6 font-prose text-lg leading-relaxed text-ink-soft">
            They overlap more than they look like they should. That overlap is
            usually where the interesting bit is.
          </p>
        </div>

        {/* Small screens: swipe through the five rooms. */}
        <div className="mt-12 sm:hidden" data-reveal="">
          <SwipeCarousel ariaLabel="The five learning pillars" itemClassName="w-[84%] max-w-sm">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.id} pillar={pillar} />
            ))}
            <div className="flex h-full min-h-[15rem] flex-col justify-center border-2 border-dashed border-ink/40 p-6">
              <p className="prose-note text-[1.05rem]">
                Something missing that you&rsquo;d want explored? That&rsquo;s
                a genuinely useful thing to tell me.
              </p>
              <Link
                href="/contact"
                className="mt-4 font-bold text-pink-deep underline decoration-2 underline-offset-4 hover:decoration-4"
              >
                Suggest something →
              </Link>
            </div>
          </SwipeCarousel>
        </div>

        {/* sm+: the full grid. */}
        <div className="mt-12 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div key={pillar.id} data-reveal="" style={revealDelay(i)} className="h-full">
              <PillarCard pillar={pillar} />
            </div>
          ))}

          <div
            className="flex h-full flex-col justify-center border-2 border-dashed border-ink/40 p-6"
            data-reveal=""
            style={revealDelay(5)}
          >
            <p className="prose-note text-[1.05rem]">
              Something missing that you&rsquo;d want explored? That&rsquo;s a
              genuinely useful thing to tell me.
            </p>
            <Link
              href="/contact"
              className="mt-4 font-bold text-pink-deep underline decoration-2 underline-offset-4 hover:decoration-4"
            >
              Suggest something →
            </Link>
          </div>
        </div>
      </Section>

      {/* 5 — THEORY → PRACTICE */}
      <Section
        eyebrow="Theory → practice"
        note={<>most people stop at step two</>}
        tone="ink"
        size="loose"
      >
        <div className="max-w-3xl" data-reveal="">
          <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Learning is easy. Doing is where it gets interesting.
          </h2>
          <p className="mt-6 font-prose text-lg leading-relaxed text-paper/75">
            Six steps, and the drop-off is always in the same place. Steps one
            and two feel productive, which is exactly what makes them such a
            comfortable place to stall.
          </p>
        </div>

        <ol className="mt-14 space-y-4">
          {practiceLadder.map((step, i) => (
            <li
              key={step.label}
              data-reveal=""
              style={revealDelay(i)}
              className={`relative border-l-4 border-highlight pl-5 md:max-w-2xl ${ladderOffset[i]}`}
            >
              <div className="flex items-baseline gap-3">
                <span className="label-meta text-highlight">{step.label}</span>
                <h3 className="font-display text-lg leading-snug font-bold sm:text-xl">
                  {step.title}
                </h3>
              </div>
              <p className="mt-1.5 font-prose leading-relaxed text-paper/70">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="prose-note mt-10 text-[1.05rem] text-pen-light md:ml-[15rem]">
          steps 3 and 4 are the whole job
        </p>
      </Section>

      {/* 6 — LATEST LEARNINGS */}
      <Section
        eyebrow="Latest learnings"
        note={<>written up while still fresh enough to be honest</>}
        id="latest"
      >
        <div className="flex flex-wrap items-end justify-between gap-4" data-reveal="">
          <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            What I&rsquo;ve been working through
          </h2>
          <Link
            href="/blog"
            className="font-bold text-pink-deep underline decoration-2 underline-offset-4 hover:decoration-4"
          >
            All content →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.55fr_1fr]">
          <div data-reveal="">
            <ArticleCard article={featuredArticle} variant="featured" />
          </div>

          <div
            className="border-2 border-ink bg-paper-2 p-5 sm:p-6"
            data-reveal=""
            style={revealDelay(2)}
          >
            <h3 className="label-meta text-pink-deep">Also on the desk</h3>
            <div className="mt-2">
              {sidebarPicks.map((article) => (
                <ArticleCard key={article.slug} article={article} variant="compact" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {gridPicks.map((article, i) => (
            <div key={article.slug} data-reveal="" style={revealDelay(i)} className="h-full">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        <SubscribeYouTube className="mt-10" />
      </Section>

      {/* 7 — PRACTICAL RESOURCES */}
      <Section
        eyebrow="Resources"
        note={<>the opposite of a bookmark folder</>}
        tone="paper-2"
      >
        <div className="max-w-3xl" data-reveal="">
          <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Less saving. More doing.
          </h2>
          <p className="mt-6 font-prose text-lg leading-relaxed text-ink-soft">
            Templates, checklists and frameworks pulled straight out of things
            that were actually tried here — not assembled to fill a resources
            page.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {freeResources.slice(0, 3).map((resource, i) => (
            <div key={resource.title} data-reveal="" style={revealDelay(i)} className="h-full">
              <ResourceCard resource={resource} />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <ButtonLink href="/resources" variant="secondary">
            Explore resources
          </ButtonLink>
        </div>
      </Section>

      {/* 8 — NEWSLETTER */}
      <Section eyebrow="The notes" id="notes" tone="paper">
        <div data-reveal="">
          <NewsletterPanel />
        </div>
      </Section>

      {/* 9 — LEARN TOGETHER */}
      <Section
        eyebrow="Learn together"
        note={<>genuinely, not as a growth tactic</>}
        tone="ruled"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div data-reveal="">
            <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              I&rsquo;m learning. You&rsquo;re learning. Let&rsquo;s compare
              notes.
            </h2>
            <p className="mt-6 font-prose text-lg leading-relaxed text-ink-soft">
              There&rsquo;s no forum here, no members&rsquo; area, no community
              app — I&rsquo;m not going to invent one before it exists. What
              there is: a newsletter, a channel, an inbox I read, and a standing
              interest in what you&rsquo;re trying.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "Students and freshers working out where to start",
                "Marketers testing things on small audiences",
                "Healthcare and health-tech people who think about communication",
                "Anyone whose CV takes a while to explain",
              ].map((item) => (
                <li key={item} className="flex gap-3 font-prose text-[1.05rem]">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-4 shrink-0 bg-pink" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5" data-reveal="" style={revealDelay(2)}>
            <TryThisCard
              title="Start with one thing this week"
              time="under an hour"
              steps={[
                "Pick one idea you saved recently and never used.",
                "Give it 45 minutes on something real, not a practice exercise.",
                "Write down what the tutorial left out.",
                "Send it to me — I'm collecting these.",
              ]}
            />
            <SubscribeYouTube variant="compact" className="self-start" />
          </div>
        </div>
      </Section>

      {/* 10 — THE HUMAN BEHIND THE EXPERIMENT */}
      <Section eyebrow="The human" note={<>hello</>}>
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div
            className="relative border-2 border-ink bg-paper-2 p-6 shadow-hard"
            data-reveal=""
          >
            <Portrait className="aspect-[4/5] w-full bg-butter/35" />
            <p className="label-meta mt-4 text-pink-deep">{site.author}</p>
          </div>

          <div data-reveal="" style={revealDelay(2)}>
            <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              The human behind the experiment
            </h2>

            <p className="mt-7 font-display text-2xl leading-[1.35] font-bold sm:text-3xl">
              Dentist.
              <br />
              Then marketer.
              <br />
              Then communicator.
              <br />
              Then AI explorer.
              <br />
              <span className="text-pink-deep">
                Still figuring out what comes next.
              </span>
            </p>

            <p className="mt-7 max-w-xl font-prose text-lg leading-relaxed text-ink-soft">
              I spent years explaining complicated things to people who were
              nervous or in a hurry, which turns out to be a communication job
              wearing a lab coat. Everything since has been a version of the same
              question: why do some explanations land and others bounce straight
              off?
            </p>

            <div className="mt-8">
              <ButtonLink href="/about" variant="secondary">
                More about me
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* 11 — COMING SOON */}
      <Section
        eyebrow="In the workshop"
        note={<>no launch dates, on purpose</>}
        tone="paper-2"
      >
        <div className="max-w-3xl" data-reveal="">
          <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Things I&rsquo;m building
          </h2>
          <p className="mt-6 font-prose text-lg leading-relaxed text-ink-soft">
            Nothing is for sale yet, and I&rsquo;d rather show you the outline
            than a countdown timer. These get finished when they&rsquo;re
            actually useful.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {comingSoon.map((resource, i) => (
            <div key={resource.title} data-reveal="" style={revealDelay(i)} className="h-full">
              <ResourceCard resource={resource} />
            </div>
          ))}
        </div>
      </Section>

      {/* 12 — FINAL CTA */}
      <section className="border-t-2 border-ink bg-ink text-paper surface-grid">
        <div className="mx-auto max-w-[78rem] px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-3xl text-center" data-reveal="">
            <h2 className="font-display text-[2.2rem] leading-[1.02] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Don&rsquo;t just collect information.
              <br />
              <span className="text-highlight">Do something with it.</span>
            </h2>
            <p className="mt-7 font-prose text-lg leading-relaxed text-paper/75">
              Pick one idea. Give it an hour. Find out what the explainer left
              out. That&rsquo;s the whole method, and it works better than any
              course I&rsquo;ve bought.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="#lab">Explore the Learning Lab</ButtonLink>
              <ButtonLink href="#notes" variant="dark">
                Get The Strategic Notes
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
