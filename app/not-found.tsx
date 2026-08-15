import { ButtonLink } from "@/components/ui/button";
import { Highlight, MarginNote } from "@/components/ui/marks";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[78rem] px-5 py-24 sm:px-8 sm:py-32">
        <div className="max-w-2xl">
          <p className="label-meta text-pink-deep">404</p>
          <h1 className="mt-4 font-display text-[2.4rem] leading-[1.02] font-extrabold tracking-tight sm:text-5xl">
            This one didn&rsquo;t <Highlight>work out.</Highlight>
          </h1>
          <MarginNote className="mt-5 text-[1.05rem]">
            fitting, for a site about things that don&rsquo;t go to plan
          </MarginNote>
          <p className="mt-6 font-prose text-lg leading-relaxed text-ink-soft">
            The page you were after has either moved or never existed. Both
            happen here.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/blog">Browse the content</ButtonLink>
            <ButtonLink href="/" variant="secondary">
              Back to the start
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
