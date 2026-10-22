import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-offwhite">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          404
        </p>
        <h1 className="balance mt-4 text-[clamp(2rem,4vw+1rem,3rem)] font-bold text-charcoal">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-slate">
          The page you&apos;re looking for may have moved. Try one of the links
          below, or head back to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/">Back to homepage</Button>
          <Link
            href="/contact"
            className="text-sm font-semibold text-charcoal hover:text-accent"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </section>
  );
}
