import Link from "next/link";
import { nav, site } from "@/content/site";
import { pillars } from "@/content/pillars";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { PlayMark } from "@/components/cta/subscribe-youtube";

const social = [
  { href: site.social.youtube, label: "YouTube" },
  { href: site.social.linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper surface-grid">
      <div className="mx-auto max-w-[78rem] px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="label-meta text-highlight">
              {site.newsletter.name}
            </p>
            <p className="mt-2 max-w-md font-display text-xl leading-snug font-bold sm:text-2xl">
              {site.newsletter.promise}
            </p>
            <NewsletterForm variant="footer" className="mt-5 max-w-md" />
          </div>

          <nav aria-label="Footer">
            <h2 className="label-meta text-paper/60">Pages</h2>
            <ul className="mt-3 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-9 items-center font-semibold text-paper/90 underline decoration-transparent decoration-2 underline-offset-4 transition hover:decoration-highlight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label-meta text-paper/60">The Learning Lab</h2>
            <ul className="mt-3 space-y-2">
              {pillars.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/blog?pillar=${p.id}`}
                    className="inline-flex min-h-9 items-center text-[0.95rem] text-paper/80 underline decoration-transparent decoration-2 underline-offset-4 transition hover:decoration-highlight"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-paper/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 border border-paper/25 px-3 font-semibold text-paper transition hover:border-highlight hover:text-highlight"
            >
              <PlayMark className="h-4.5 w-4.5" />
              Subscribe on YouTube
            </a>
            {social.slice(1).map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center px-1 text-paper/80 underline decoration-paper/30 decoration-2 underline-offset-4 transition hover:text-highlight hover:decoration-highlight"
              >
                {s.label}
              </a>
            ))}
            <a
              href={`mailto:${site.social.email}`}
              className="inline-flex min-h-11 items-center px-1 text-paper/80 underline decoration-paper/30 decoration-2 underline-offset-4 transition hover:text-highlight hover:decoration-highlight"
            >
              Email
            </a>
          </div>
          <p className="text-sm text-paper/50">
            © {new Date().getFullYear()} {site.name}. Still learning.
          </p>
        </div>
      </div>
    </footer>
  );
}
