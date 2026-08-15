import { site } from "@/content/site";

function PlayMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M23 12c0-2.7-.2-4.6-.4-5.7a3 3 0 0 0-2.1-2.1C19 3.8 15.9 3.7 12 3.7s-7 .1-8.5.5A3 3 0 0 0 1.4 6.3C1.2 7.4 1 9.3 1 12s.2 4.6.4 5.7a3 3 0 0 0 2.1 2.1c1.5.4 4.6.5 8.5.5s7-.1 8.5-.5a3 3 0 0 0 2.1-2.1c.2-1.1.4-3 .4-5.7ZM9.8 15.4V8.6l6 3.4-6 3.4Z" />
    </svg>
  );
}

/**
 * Second conversion track. Deliberately never rendered in the same eyeline as a
 * newsletter form, so the two asks don't compete.
 */
export function SubscribeYouTube({
  variant = "panel",
  className = "",
}: {
  variant?: "panel" | "inline" | "compact";
  className?: string;
}) {
  const href = site.social.youtube;

  if (variant === "compact") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-h-11 items-center gap-2 border-2 border-ink bg-paper px-4 py-2 text-sm font-bold shadow-hard-sm transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px] motion-reduce:transition-none ${className}`}
      >
        <PlayMark className="h-5 w-5 text-pink-deep" />
        Subscribe on YouTube
      </a>
    );
  }

  if (variant === "inline") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center gap-2 font-bold text-pink-deep underline decoration-2 underline-offset-4 hover:decoration-4 ${className}`}
      >
        <PlayMark className="h-5 w-5" />
        Watch on YouTube
      </a>
    );
  }

  return (
    <div
      className={`flex flex-col items-start gap-5 border-2 border-ink bg-pink-wash p-6 shadow-hard sm:flex-row sm:items-center sm:justify-between sm:p-8 ${className}`}
    >
      <div className="max-w-xl">
        <p className="label-meta text-pink-deep">The channel</p>
        <h3 className="mt-2 font-display text-2xl leading-tight font-bold sm:text-3xl">
          Some things are easier to show than to write
        </h3>
        <p className="mt-2 font-prose text-[1.05rem] text-ink-soft">
          Experiments, walkthroughs and the occasional thing that didn&rsquo;t
          work, over on {site.youtubeHandle}.
        </p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 shrink-0 items-center gap-2.5 border-2 border-pink-deep bg-pink-deep px-5 py-3 font-bold text-paper shadow-hard transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none motion-reduce:transition-none"
      >
        <PlayMark className="h-5 w-5" />
        Subscribe
      </a>
    </div>
  );
}

export { PlayMark };
