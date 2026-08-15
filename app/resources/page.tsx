import type { Metadata } from "next";
import { site } from "@/content/site";
import { comingSoon, freeResources, learningLibrary } from "@/content/resources";
import { Section } from "@/components/layout/section";
import { Highlight, MarginNote } from "@/components/ui/marks";
import { ResourceCard } from "@/components/content/resource-card";
import { TryThisCard } from "@/components/ui/try-this";
import { NewsletterPanel } from "@/components/forms/newsletter-panel";
import { revealDelay } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Templates, checklists, frameworks and tool lists pulled out of experiments that actually ran — plus a look at what's still being built.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: `Resources · ${site.name}`,
    description:
      "Templates, checklists and frameworks pulled out of experiments that actually ran.",
    url: "/resources",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b-2 border-ink bg-paper">
        <div className="mx-auto max-w-[78rem] px-5 py-14 sm:px-8 sm:py-18 lg:py-20">
          <p className="label-meta text-pink-deep" data-reveal="">
            Resources
          </p>
          <h1
            className="mt-4 max-w-3xl font-display text-[2.4rem] leading-[1.02] font-extrabold tracking-tight sm:text-5xl lg:text-[3.5rem]"
            data-reveal=""
            style={revealDelay(1)}
          >
            Less saving. <Highlight style={revealDelay(5)}>More doing.</Highlight>
          </h1>
          <p
            className="mt-6 max-w-2xl font-prose text-lg leading-relaxed text-ink-soft"
            data-reveal=""
            style={revealDelay(2)}
          >
            Everything here came out of something that was actually tried, which
            is the only reason it exists. Nothing was made to fill a resources
            page.
          </p>
          <MarginNote className="mt-5 text-[1.05rem]" data-reveal="">
            if you download one and never open it, we&rsquo;ve both wasted our time
          </MarginNote>
        </div>
      </section>

      <Section
        eyebrow="Free resources"
        note={<>sent with the notes, no charge</>}
        tone="paper-2"
      >
        <div className="max-w-3xl" data-reveal="">
          <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl">
            The working files
          </h2>
          <p className="mt-5 font-prose text-lg leading-relaxed text-ink-soft">
            The actual templates and checklists behind the experiments on this
            site. Subscribers get them; that&rsquo;s the whole arrangement.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {freeResources.map((resource, i) => (
            <div key={resource.title} data-reveal="" style={revealDelay(i)} className="h-full">
              <ResourceCard resource={resource} />
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Learning library" note={<>things worth your attention</>}>
        <div className="max-w-3xl" data-reveal="">
          <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl">
            Curated, and kept short on purpose
          </h2>
          <p className="mt-5 font-prose text-lg leading-relaxed text-ink-soft">
            A list of two hundred tools helps nobody. These are the few that
            survived contact with real use.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learningLibrary.map((resource, i) => (
            <div key={resource.title} data-reveal="" style={revealDelay(i)} className="h-full">
              <ResourceCard resource={resource} />
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Try this first" tone="ruled">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div data-reveal="">
            <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl">
              Before you download anything
            </h2>
            <p className="mt-5 font-prose text-lg leading-relaxed text-ink-soft">
              The honest truth about resources is that collecting them feels like
              progress and isn&rsquo;t. So here&rsquo;s a use-it-now exercise
              that needs no download at all.
            </p>
          </div>
          <div data-reveal="" style={revealDelay(2)}>
            <TryThisCard
              title="Turn one saved link into one finished thing"
              time="45 min"
              steps={[
                "Open the oldest unread thing in your saved folder.",
                "Set a timer for 45 minutes.",
                "Apply one idea from it to something real you're working on.",
                "Write three sentences on what the article left out.",
                "Delete the link. You've either used it or you never will.",
              ]}
            />
          </div>
        </div>
      </Section>

      <Section eyebrow="In the workshop" note={<>no launch dates, on purpose</>} tone="paper-2">
        <div className="max-w-3xl" data-reveal="">
          <h2 className="font-display text-3xl leading-[1.05] font-extrabold tracking-tight sm:text-4xl">
            Coming soon
          </h2>
          <p className="mt-5 font-prose text-lg leading-relaxed text-ink-soft">
            Nothing is for sale yet. These get finished when they&rsquo;re
            genuinely useful, and the notes will say so first.
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

      <Section eyebrow="The notes">
        <div data-reveal="">
          <NewsletterPanel />
        </div>
      </Section>
    </>
  );
}
