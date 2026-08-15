export function Toc({ items }: { items: { id: string; text: string }[] }) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-labelledby="toc-heading"
      className="border-2 border-ink bg-paper-2 p-5 lg:sticky lg:top-24"
    >
      <h2 id="toc-heading" className="label-meta text-pink-deep">
        On this page
      </h2>
      <ol className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item.id} className="flex gap-2.5">
            <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-pink" />
            <a
              href={`#${item.id}`}
              className="text-[0.95rem] leading-snug font-semibold text-ink underline decoration-transparent decoration-2 underline-offset-4 transition hover:decoration-pink"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
