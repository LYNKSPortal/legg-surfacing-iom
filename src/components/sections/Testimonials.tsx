import { Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import Heading, { Eyebrow } from "@/components/ui/Heading";
import FadeIn from "@/components/ui/FadeIn";
import { testimonials } from "@/lib/content/testimonials";
import { business } from "@/lib/business";

export default function Testimonials() {
  return (
    <Section className="bg-offwhite-dim">
      <div className="max-w-2xl">
        <Eyebrow>Customer Reviews</Eyebrow>
        <Heading as="h2" className="mt-4">
          What our customers say
        </Heading>
      </div>

      {testimonials.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.author} delay={index * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-charcoal/5">
                <Quote className="h-6 w-6 text-accent" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-charcoal">
                  {testimonial.author}
                  {(testimonial.location || testimonial.source) && (
                    <span className="block font-normal text-slate">
                      {testimonial.location}
                      {testimonial.location && testimonial.source && " · "}
                      {testimonial.source && `via ${testimonial.source}`}
                    </span>
                  )}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      ) : (
        <FadeIn>
          <div className="mt-12 rounded-3xl border border-dashed border-charcoal/15 bg-white/60 p-10 text-center">
            <Quote className="mx-auto h-8 w-8 text-accent" aria-hidden="true" />
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate">
              We&apos;re building a collection of genuine customer reviews here.
              In the meantime, feel free to get in touch and we&apos;re happy to
              discuss references for recent work.
            </p>
            <a
              href={business.emailHref}
              className="mt-5 inline-block text-sm font-semibold text-accent hover:text-accent-dark"
            >
              {business.email}
            </a>
          </div>
        </FadeIn>
      )}
    </Section>
  );
}
