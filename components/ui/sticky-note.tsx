"use client";

import {
  useRef,
  useState,
  type ComponentProps,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";

const tones = {
  butter: "bg-butter text-ink",
  highlight: "bg-highlight text-ink",
  pink: "bg-pink-wash text-ink",
  pen: "bg-pen-wash text-ink",
  paper: "bg-paper text-ink",
} as const;

interface StickyNoteProps extends Omit<ComponentProps<"div">, "children"> {
  children: ReactNode;
  label?: string;
  tone?: keyof typeof tones;
  rotate?: number;
  /** Lets a visitor pick the note up and drop it — it springs back on release. */
  draggable?: boolean;
}

export function StickyNote({
  children,
  label,
  tone = "butter",
  rotate = -2,
  draggable = false,
  className = "",
  style,
  ...rest
}: StickyNoteProps) {
  const origin = useRef<{ x: number; y: number } | null>(null);
  const [drag, setDrag] = useState<{ x: number; y: number } | null>(null);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (!draggable) return;
    origin.current = { x: e.clientX, y: e.clientY };
    setDrag({ x: 0, y: 0 });
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!draggable || !origin.current) return;
    setDrag({ x: e.clientX - origin.current.x, y: e.clientY - origin.current.y });
  };
  const endDrag = () => {
    if (!draggable) return;
    origin.current = null;
    setDrag(null);
  };

  const dragging = draggable && drag !== null && (drag.x !== 0 || drag.y !== 0);
  const dragTransform =
    drag && dragging
      ? `translate(${drag.x * 0.4}px, ${drag.y * 0.4}px) rotate(${rotate + drag.x * 0.05}deg) scale(1.04)`
      : undefined;

  return (
    <div
      style={
        {
          "--tilt": `${rotate}deg`,
          transform: dragTransform,
          touchAction: draggable ? "none" : undefined,
          ...style,
        } as CSSProperties
      }
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={dragging ? undefined : endDrag}
      onPointerCancel={endDrag}
      className={`shadow-hard-sm rotate-[var(--tilt)] border border-ink/15 p-4 hover:rotate-0 motion-reduce:hover:rotate-[var(--tilt)] ${
        dragging
          ? "z-10 cursor-grabbing shadow-hard"
          : `sticky-spring motion-reduce:transition-none ${draggable ? "cursor-grab" : ""}`
      } ${tones[tone]} ${className}`}
      {...rest}
    >
      {label && <p className="label-meta mb-2 text-ink/75">{label}</p>}
      <div className="prose-note text-[1.02rem] leading-snug text-ink">
        {children}
      </div>
      {draggable && (
        <p className="label-meta mt-3 text-ink/40" aria-hidden="true">
          drag me
        </p>
      )}
    </div>
  );
}
