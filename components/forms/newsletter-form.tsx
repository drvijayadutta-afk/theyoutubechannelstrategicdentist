"use client";

import { useId, useState } from "react";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "done" | "error";

export function NewsletterForm({
  variant = "panel",
  className = "",
}: {
  variant?: "panel" | "footer";
  className?: string;
}) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const onFooter = variant === "footer";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok: boolean; message: string };
      setMessage(data.message);
      setStatus(data.ok ? "done" : "error");
      if (data.ok) setEmail("");
    } catch {
      setMessage("That didn't go through. Try again in a moment?");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        role="status"
        className={`border-2 border-ink bg-butter p-5 ${className}`}
      >
        <p className="font-display text-lg font-bold">You&rsquo;re on the list.</p>
        <p className="mt-1 font-prose text-ink-soft">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={className} noValidate>
      <div
        className={`flex flex-col gap-3 ${onFooter ? "sm:flex-row" : "sm:flex-row sm:items-end"}`}
      >
        <div className="flex-1">
          <label
            htmlFor={`${id}-email`}
            className={`label-meta mb-1.5 block ${onFooter ? "text-paper/70" : "text-ink-soft"}`}
          >
            Your email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby={status === "error" ? `${id}-msg` : undefined}
            aria-invalid={status === "error" || undefined}
            placeholder="you@example.com"
            className={`min-h-12 w-full border-2 px-3.5 py-2.5 font-prose text-[1.02rem] placeholder:text-ink/35 ${
              onFooter
                ? "border-paper/30 bg-paper text-ink"
                : "border-ink bg-paper text-ink"
            }`}
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 shrink-0 items-center justify-center border-2 border-ink bg-highlight px-5 font-bold text-ink shadow-hard-pink transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:cursor-wait disabled:opacity-70 motion-reduce:transition-none"
        >
          {status === "sending" ? "Sending…" : site.newsletter.cta}
        </button>
      </div>

      <p
        id={`${id}-msg`}
        role="status"
        aria-live="polite"
        className={`mt-2 min-h-[1.25rem] text-sm ${
          status === "error"
            ? onFooter
              ? "text-highlight"
              : "text-pink-deep"
            : "sr-only"
        }`}
      >
        {status === "error" ? message : ""}
      </p>

      <p
        className={`mt-1 text-sm ${onFooter ? "text-paper/60" : "text-ink-soft"}`}
      >
        No spam, and unsubscribing takes one click.
      </p>
    </form>
  );
}
