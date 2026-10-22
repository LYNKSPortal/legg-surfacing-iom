"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
  as?: "div" | "li";
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];

  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: direction === "up" ? 24 : 0 };

  return (
    <Component
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
