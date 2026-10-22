import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import FacebookIcon from "@/components/icons/FacebookIcon";
import Logo from "./Logo";
import { business } from "@/lib/business";
import { services } from "@/lib/content/services";
import { mainNav } from "@/lib/content/nav";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-offwhite">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-offwhite/65">
              Specialist surfacing and groundwork contractors serving
              residential, commercial and infrastructure customers across
              the Isle of Man.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {business.facebookUrl ? (
                <a
                  href={business.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LEGG Surfacing on Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-offwhite/20 text-offwhite transition-colors hover:border-accent hover:text-accent"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-offwhite/50">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-offwhite/75 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-offwhite/50">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-offwhite/75 transition-colors hover:text-accent"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-offwhite/50">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-offwhite/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{business.fullAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={business.phoneHref} className="hover:text-accent transition-colors">
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={business.emailHref} className="hover:text-accent transition-colors break-all">
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-offwhite/10 pt-8 text-xs text-offwhite/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {business.legalName}. All rights
            reserved.
          </p>
          <p>{business.fullAddress}</p>
        </div>
      </Container>
    </footer>
  );
}
