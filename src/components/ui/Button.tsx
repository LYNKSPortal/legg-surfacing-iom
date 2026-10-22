import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-charcoal shadow-[0_8px_24px_-8px_rgba(255,193,7,0.6)] hover:bg-accent-dark hover:-translate-y-0.5",
  secondary:
    "bg-charcoal text-offwhite hover:bg-charcoal-light hover:-translate-y-0.5",
  outline:
    "border border-charcoal/20 text-charcoal bg-transparent hover:border-accent hover:text-accent",
  ghost:
    "bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white/20",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    icon,
    ...restProps
  } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in restProps && restProps.href) {
    const { href, external } = restProps as ButtonAsLink;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  const { type = "button", ...rest } = restProps as ButtonAsButton;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}
