import { cn } from "@/lib/utils";
import Container from "./Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  bleed?: boolean;
};

export default function Section({
  children,
  className,
  containerClassName,
  id,
  bleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 lg:py-28", className)}
    >
      {bleed ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
