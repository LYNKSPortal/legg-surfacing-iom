"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import Button from "@/components/ui/Button";
import { mainNav } from "@/lib/content/nav";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close any open menus when the route changes. Adjusting state during
  // render in response to a prop/derived value change (rather than in an
  // effect) avoids an extra render pass.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const openServices = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    closeTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-navy transition-all duration-300",
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(0,0,0,0.5)]"
          : "bg-navy/90 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between container-px py-4">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-1">
          {mainNav.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-accent-light",
                    isActive(item.href) ? "text-accent-light" : "text-offwhite/90"
                  )}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      servicesOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3"
                    >
                      <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white p-2 shadow-xl">
                        <Link
                          href="/services"
                          className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-charcoal hover:bg-offwhite-dim"
                        >
                          All Services
                        </Link>
                        <div className="my-1 h-px bg-charcoal/5" />
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl px-4 py-2.5 text-sm text-slate hover:bg-offwhite-dim hover:text-accent"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-accent-light",
                  isActive(item.href) ? "text-accent-light" : "text-offwhite/90"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-offwhite hover:text-accent-light transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <Button href="/contact" size="md">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-offwhite lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 h-dvh bg-navy lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex h-full flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between container-px py-4">
                <Logo />
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-offwhite"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav aria-label="Mobile" className="flex flex-1 flex-col container-px py-6">
                <ul className="flex flex-col gap-1">
                  {mainNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block py-3 text-2xl font-semibold text-offwhite hover:text-accent transition-colors"
                      >
                        {item.label}
                      </Link>
                      {"children" in item && item.children && (
                        <ul className="mb-2 ml-4 flex flex-col gap-0.5 border-l border-offwhite/15 pl-4">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block py-2 text-sm text-offwhite/70 hover:text-accent transition-colors"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-col gap-4 pt-10">
                  <a
                    href={business.phoneHref}
                    className="flex items-center gap-2 text-lg font-semibold text-offwhite"
                  >
                    <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                    {business.phoneDisplay}
                  </a>
                  <Button href="/contact" size="lg" className="w-full">
                    Get a Quote
                  </Button>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
