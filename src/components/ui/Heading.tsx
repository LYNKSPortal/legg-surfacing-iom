import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent",
        className
      )}
    >
      <span className="h-px w-6 bg-accent" aria-hidden="true" />
      {children}
    </span>
  );
}

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  align?: "left" | "center";
};

const sizeMap: Record<NonNullable<HeadingProps["as"]>, string> = {
  h1: "text-[clamp(2.25rem,5vw+1rem,4rem)] leading-[1.05] tracking-tight",
  h2: "text-[clamp(1.875rem,3vw+1rem,3rem)] leading-[1.1] tracking-tight",
  h3: "text-[clamp(1.375rem,1.5vw+1rem,1.875rem)] leading-[1.2]",
  h4: "text-[clamp(1.125rem,1vw+0.8rem,1.375rem)] leading-[1.3]",
};

export default function Heading({
  children,
  className,
  as = "h2",
  align = "left",
}: HeadingProps) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "balance font-semibold text-charcoal",
        sizeMap[as],
        align === "center" && "text-center",
        className
      )}
    >
      {children}
    </Tag>
  );
}
