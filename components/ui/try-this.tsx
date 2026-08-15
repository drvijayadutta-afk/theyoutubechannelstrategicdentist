/**
 * The signature element. Every idea on this site comes with something to do,
 * and it always arrives as the same physical object: a tear-off card from a
 * notebook, perforated edge and all.
 */
export function TryThisCard({
  title,
  steps,
  time,
  className = "",
}: {
  title: string;
  steps: string[];
  time?: string;
  className?: string;
}) {
  return (
    <div className={`relative pt-3 ${className}`}>
      {/* Perforation the card tears away from. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-3 top-0 border-t-2 border-dashed border-ink/35"
      />
      <div className="shadow-hard-pen rotate-[-0.6deg] border-2 border-ink bg-butter p-5 sm:p-7">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <span className="label-meta border-2 border-ink bg-pink-deep px-2.5 py-1 text-paper">
            Try this
          </span>
          {time && (
            <span className="label-meta text-ink/65">{time}</span>
          )}
        </div>

        <h3 className="font-display text-xl leading-tight font-bold sm:text-2xl">
          {title}
        </h3>

        <ol className="mt-5 space-y-3.5">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3.5">
              <span
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 border-2 border-pen bg-paper/70"
              />
              <span className="font-prose text-[1.02rem] leading-relaxed text-ink">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
