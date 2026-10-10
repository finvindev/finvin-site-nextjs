"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CountUp from "../common/CountUp";

export default function InvestmentBlock({
  heading,
  subtext,
  subheading,
  tagline,
  description,
  statValue,
  statCaption,
  image,
  imageAlt,
}) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const reveal = inView ? "sb-reveal is-visible" : "sb-reveal";

  return (
    <section ref={sectionRef} className="w-full">
      <div className="max-w-[1366px] mx-auto px-6 sm:px-10 py-14 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="lg:order-1">
            <h2
              className={`${reveal} font-display font-bold text-3xl sm:text-4xl text-[var(--brand)] mb-4 leading-tight`}
              style={{ transitionDelay: "0ms" }}
            >
              {heading}
            </h2>
            <p
              className={`${reveal} text-base text-[var(--ink)] leading-relaxed max-w-md mb-10`}
              style={{ transitionDelay: "100ms" }}
            >
              {subtext}
            </p>

            <div className={`${reveal} mb-6`} style={{ transitionDelay: "200ms" }}>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--ink)] mb-2 uppercase tracking-wide">
                {subheading}
              </h3>
              <p className="text-sm font-semibold text-[var(--ink)] mb-3">{tagline}</p>
              <p className="text-sm text-[var(--ink)]/80 leading-relaxed max-w-md">
                {description}
              </p>
            </div>

            <div
              className={`${reveal} flex items-start gap-4 pl-4 border-l-2`}
              style={{ transitionDelay: "300ms", borderColor: "var(--brand)" }}
            >
              <div>
                <p className="font-display font-bold text-3xl sm:text-4xl text-[var(--brand)] leading-none">
                  <CountUp value={statValue} />
                </p>
                <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[var(--muted)] mt-1.5">
                  {statCaption}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:order-2">
            <div
              className={`${reveal} sb-reveal-image relative w-full aspect-[2/1] rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(14,26,58,0.12)]`}
              style={{ transitionDelay: "180ms" }}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
