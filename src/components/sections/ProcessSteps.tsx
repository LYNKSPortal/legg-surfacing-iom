import Section from "@/components/ui/Section";
import Heading, { Eyebrow } from "@/components/ui/Heading";
import FadeIn from "@/components/ui/FadeIn";
import { processSteps } from "@/lib/content/nav";

export default function ProcessSteps() {
  return (
    <Section className="bg-offwhite">
      <div className="max-w-2xl">
        <Eyebrow>Our Process</Eyebrow>
        <Heading as="h2" className="mt-4">
          From initial enquiry to finished surface
        </Heading>
        <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
          A clear, straightforward process designed to get your project
          assessed, quoted and completed properly.
        </p>
      </div>

      <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {processSteps.map((step, index) => (
          <FadeIn as="li" key={step.title} delay={index * 0.08} className="relative">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-charcoal text-base font-bold text-offwhite lg:mb-5">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-charcoal lg:mt-0">
                {step.title}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              {step.description}
            </p>
          </FadeIn>
        ))}
      </ol>
    </Section>
  );
}
