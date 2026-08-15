import { site } from "@/content/site";
import { NewsletterForm } from "./newsletter-form";

export function NewsletterPanel({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative border-2 border-ink bg-butter shadow-hard ${compact ? "p-6 sm:p-8" : "p-6 sm:p-10"} ${className}`}
    >
      <p className="label-meta text-pink-deep">{site.newsletter.name}</p>
      <h2
        className={`mt-2 max-w-2xl font-display leading-[1.1] font-extrabold tracking-tight ${
          compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl lg:text-[2.75rem]"
        }`}
      >
        {site.newsletter.promise}
      </h2>
      <p className="mt-4 max-w-2xl font-prose text-[1.08rem] leading-relaxed text-ink-soft">
        {site.newsletter.detail}
      </p>

      <NewsletterForm className="mt-7 max-w-xl" />
    </div>
  );
}
