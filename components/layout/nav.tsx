"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

const isActive = (href: string, pathname: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[78rem] items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="group flex items-baseline gap-2 font-display font-extrabold tracking-tight"
          aria-label={`${site.name} — home`}
        >
          <span className="text-lg leading-none sm:text-xl">
            The Strategic
          </span>
          <span className="relative isolate text-lg leading-none sm:text-xl">
            <span
              aria-hidden="true"
              className="absolute inset-x-[-0.15em] bottom-[0.02em] -z-10 h-[0.45em] bg-highlight"
            />
            Dentist
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = isActive(item.href, pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex min-h-11 items-center px-3 text-[0.95rem] font-semibold transition-colors hover:text-pink-deep ${
                  active ? "text-pink-deep" : "text-ink"
                }`}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-2 bottom-1.5 h-[3px] bg-pink"
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 inline-flex min-h-11 items-center border-2 border-ink bg-highlight px-4 text-[0.95rem] font-bold shadow-hard-pink transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px] motion-reduce:transition-none"
          >
            Let&rsquo;s Collaborate
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex h-11 w-11 items-center justify-center border-2 border-ink bg-paper lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? (
              <>
                <path d="M5 5l14 14" />
                <path d="M19 5L5 19" />
              </>
            ) : (
              <>
                <path d="M3.5 7h17" />
                <path d="M3.5 12h17" />
                <path d="M3.5 17h17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t-2 border-ink bg-paper-2 lg:hidden"
        >
          <ul className="mx-auto max-w-[78rem] px-5 py-3 sm:px-8">
            {nav.map((item) => {
              const active = isActive(item.href, pathname);
              return (
                <li key={item.href} className="border-b border-line last:border-0">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-12 items-center gap-3 font-semibold ${
                      active ? "text-pink-deep" : "text-ink"
                    }`}
                  >
                    {active && (
                      <span aria-hidden="true" className="h-2.5 w-2.5 bg-pink" />
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-4 pb-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 w-full items-center justify-center border-2 border-ink bg-highlight px-4 font-bold shadow-hard-pink"
              >
                Let&rsquo;s Collaborate
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
