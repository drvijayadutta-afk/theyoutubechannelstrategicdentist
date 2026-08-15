import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 border-2 border-ink px-5 py-2.5 text-[0.95rem] font-bold transition-transform duration-150 active:translate-x-[2px] active:translate-y-[2px] motion-reduce:transition-none";

/* Fills are chosen for contrast: ink-on-yellow and white-on-pink-deep both clear AA. */
const variants: Record<Variant, string> = {
  primary:
    "bg-highlight text-ink shadow-hard-pink hover:-translate-x-[1px] hover:-translate-y-[1px] active:shadow-none",
  secondary:
    "bg-paper text-ink shadow-hard hover:-translate-x-[1px] hover:-translate-y-[1px] active:shadow-none",
  dark: "bg-pink-deep text-paper border-pink-deep shadow-hard hover:-translate-x-[1px] hover:-translate-y-[1px] active:shadow-none",
  ghost:
    "border-transparent bg-transparent px-2 text-ink underline decoration-pink decoration-2 underline-offset-4 hover:decoration-4",
};

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

interface ButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
