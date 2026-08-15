"use client";

import {
  Children,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

/**
 * A horizontal, swipeable strip of cards.
 *
 * Touch devices get real native swipe for free from scroll-snap — no JS
 * required for that part. Desktop mouse users get the same gesture via
 * pointer-drag. Arrow buttons and dots are the fallback for everyone else,
 * and double as the "where am I" indicator once you've swiped past card one.
 */
export function SwipeCarousel({
  children,
  ariaLabel,
  className = "",
  itemClassName = "",
}: {
  children: ReactNode;
  ariaLabel: string;
  className?: string;
  itemClassName?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const items = Children.toArray(children);
  const [active, setActive] = useState(0);
  const [edge, setEdge] = useState({ start: true, end: items.length <= 1 });
  const dragOrigin = useRef<{ x: number; scroll: number } | null>(null);
  const [dragging, setDragging] = useState(false);

  const measure = () => {
    const track = trackRef.current;
    if (!track) return;
    const kids = Array.from(track.children) as HTMLElement[];
    let closest = 0;
    let closestDist = Infinity;
    kids.forEach((kid, i) => {
      const dist = Math.abs(kid.offsetLeft - track.scrollLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActive(closest);
    setEdge({
      start: track.scrollLeft <= 4,
      end: track.scrollLeft >= track.scrollWidth - track.clientWidth - 4,
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    measure();
    track.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      track.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const goTo = (i: number) => {
    const track = trackRef.current;
    const kid = track?.children[i] as HTMLElement | undefined;
    if (!track || !kid) return;
    track.scrollTo({ left: kid.offsetLeft, behavior: "smooth" });
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || e.pointerType !== "mouse") return;
    dragOrigin.current = { x: e.clientX, scroll: track.scrollLeft };
    setDragging(true);
    track.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragOrigin.current) return;
    track.scrollLeft = dragOrigin.current.scroll - (e.clientX - dragOrigin.current.x);
  };
  const endDrag = () => {
    dragOrigin.current = null;
    setDragging(false);
  };

  return (
    <div className={className}>
      <div
        ref={trackRef}
        role="group"
        aria-label={ariaLabel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className={`scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 ${
          dragging ? "cursor-grabbing scroll-auto" : "cursor-grab"
        }`}
      >
        {items.map((child, i) => (
          <div key={i} className={`shrink-0 snap-start ${itemClassName}`}>
            {child}
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(Math.max(0, active - 1))}
            disabled={edge.start}
            aria-label="Previous"
            className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-ink bg-paper transition-transform hover:-translate-y-[1px] disabled:opacity-25 disabled:hover:translate-y-0 motion-reduce:transition-none"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>

          <div className="flex items-center gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to card ${i + 1} of ${items.length}`}
                aria-current={i === active}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-6 bg-pink" : "w-1.5 bg-ink/25 hover:bg-ink/45"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(Math.min(items.length - 1, active + 1))}
            disabled={edge.end}
            aria-label="Next"
            className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-ink bg-paper transition-transform hover:-translate-y-[1px] disabled:opacity-25 disabled:hover:translate-y-0 motion-reduce:transition-none"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
