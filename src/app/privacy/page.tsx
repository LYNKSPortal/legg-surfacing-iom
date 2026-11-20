import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import Heading, { Eyebrow } from "@/components/ui/Heading";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How LEGG Surfacing Ltd collects, uses and protects the information you share with us through our website and enquiry form.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Notice" }]} />

      <Section className="bg-offwhite">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Privacy Notice</Eyebrow>
          <Heading as="h1" className="mt-4">
            How we use your information
          </Heading>
          <p className="mt-5 text-sm text-slate">
            Last updated: November 2026
          </p>

          <div className="prose-sm mt-10 space-y-8 text-sm leading-relaxed text-slate sm:text-base">
            <p>
              This notice explains what information {business.legalName}{" "}
              (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects through{" "}
              {business.websiteDisplay}, why we collect it, and how it is
              used. We are committed to handling your information responsibly
              and only using it for the purposes described here.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-charcoal">
                Who we are
              </h2>
              <p className="mt-3">
                {business.legalName} is a surfacing and groundwork
                contractor registered in the Isle of Man (company number{" "}
                {business.companyNumber}), based at {business.fullAddress}.
                You can contact us at{" "}
                <a href={business.emailHref} className="text-accent hover:text-accent-dark">
                  {business.email}
                </a>{" "}
                or {business.phoneDisplay}.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal">
                What information we collect
              </h2>
              <p className="mt-3">
                When you submit an enquiry through our contact form, we ask
                for your name, email address, telephone number, location,
                the service you&apos;re enquiring about, a description of
                your project, and — optionally — photographs of your site or
                project. We only collect what we need to respond to your
                enquiry and provide a quotation.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal">
                How we use your information
              </h2>
              <p className="mt-3">We use the information you provide to:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Respond to your enquiry and discuss your project;</li>
                <li>Arrange a site visit and provide a quotation;</li>
                <li>
                  Keep a record of enquiries and any resulting work so we can
                  provide a consistent service; and
                </li>
                <li>
                  Comply with our legal and accounting obligations where
                  relevant.
                </li>
              </ul>
              <p className="mt-3">
                We do not sell your information, and we do not use it for
                marketing from third parties.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal">
                How your enquiry is delivered
              </h2>
              <p className="mt-3">
                When you submit the contact form, the details you provide are
                sent directly to us by email so we can respond. We do not
                currently store enquiry submissions in a separate database.
                If we use a transactional email service to deliver enquiry
                notifications, that provider processes the message only to
                deliver it to us and does not use it for its own purposes.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal">
                Cookies and analytics
              </h2>
              <p className="mt-3">
                Our website does not currently use advertising or
                third-party tracking cookies. If this changes in the future,
                we will update this notice accordingly.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal">
                How long we keep your information
              </h2>
              <p className="mt-3">
                We keep enquiry information for as long as is reasonably
                necessary to respond to your enquiry, carry out any
                resulting work, and meet our legal and accounting
                obligations, after which it is deleted or securely
                destroyed.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal">
                Your rights
              </h2>
              <p className="mt-3">
                You have the right to ask what information we hold about
                you, to ask us to correct it if it&apos;s inaccurate, and to
                ask us to delete it where we no longer need it. To exercise
                any of these rights, please contact us at{" "}
                <a href={business.emailHref} className="text-accent hover:text-accent-dark">
                  {business.email}
                </a>
                . If you&apos;re not satisfied with our response, you can
                contact the Isle of Man Information Commissioner at{" "}
                <a
                  href="https://www.inforights.im/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark"
                >
                  inforights.im
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal">
                Changes to this notice
              </h2>
              <p className="mt-3">
                We may update this notice from time to time. Any changes
                will be posted on this page.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-charcoal">
                Contact us
              </h2>
              <p className="mt-3">
                If you have any questions about this notice or how we handle
                your information, please get in touch at{" "}
                <a href={business.emailHref} className="text-accent hover:text-accent-dark">
                  {business.email}
                </a>{" "}
                or {business.phoneDisplay}.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
