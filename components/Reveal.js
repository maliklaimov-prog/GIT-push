"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal primitive — this is what makes sections fade/slide in as
 * they enter the viewport (the effect you saw on the reference site).
 *
 * How it works:
 * 1. Renders `children` inside a tag that starts with the `.reveal` class
 *    (opacity: 0, translateY(28px) — defined once in app/globals.css).
 * 2. On mount, an IntersectionObserver watches that element.
 * 3. The moment it's ~15% visible, we flip `visible` to true, which adds
 *    `.is-visible` (opacity: 1, translateY(0)) — CSS transitions animate
 *    between the two states. We unobserve immediately after, so it only
 *    plays once per page load (matching the reference site's behaviour).
 *
 * `delay` lets you stagger a group of children (e.g. 0, 90, 180ms) so a
 * grid reveals as a cascade instead of all at once.
 */
export default function Reveal({ children, as: Tag = "div", delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
