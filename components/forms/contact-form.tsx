"use client";

import { useId, useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

const topics = [
  "Content collaboration",
  "A podcast or video conversation",
  "A creative project",
  "Healthcare / health-tech",
  "Something else entirely",
];

const field =
  "min-h-12 w-full border-2 border-ink bg-paper px-3.5 py-2.5 font-prose text-[1.02rem] placeholder:text-ink/35";

export function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; message: string };
      setMessage(json.message);
      setStatus(json.ok ? "done" : "error");
      if (json.ok) form.reset();
    } catch {
      setMessage("That didn't send. Email works too, if it keeps failing.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="border-2 border-ink bg-butter p-6 shadow-hard">
        <p className="font-display text-xl font-bold">Got it — thank you.</p>
        <p className="mt-2 font-prose text-ink-soft">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="label-meta mb-1.5 block text-ink-soft">
            Your name
          </label>
          <input id={`${id}-name`} name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="label-meta mb-1.5 block text-ink-soft">
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-topic`} className="label-meta mb-1.5 block text-ink-soft">
          What&rsquo;s this about?
        </label>
        <select id={`${id}-topic`} name="topic" className={field} defaultValue={topics[0]}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${id}-message`} className="label-meta mb-1.5 block text-ink-soft">
          Tell me about it
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={6}
          placeholder="What are you thinking about? Half-formed ideas are welcome — most of mine are."
          className={`${field} min-h-[9rem] resize-y`}
        />
        <p className="mt-1.5 text-sm text-ink-soft">
          No pitch deck needed. A couple of sentences is plenty.
        </p>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 items-center justify-center border-2 border-ink bg-highlight px-6 font-bold text-ink shadow-hard-pink transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:cursor-wait disabled:opacity-70 motion-reduce:transition-none"
      >
        {status === "sending" ? "Sending…" : "Send it over"}
      </button>

      <p role="status" aria-live="polite" className="min-h-[1.25rem] text-sm text-pink-deep">
        {status === "error" ? message : ""}
      </p>
    </form>
  );
}
