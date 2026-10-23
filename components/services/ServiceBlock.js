"use client";

import { useEffect, useRef, useState } from "react";
import ImagePlaceholder from "../common/ImagePlaceholder";

export default function ServiceBlock({
  id,
  title,
  intro,
  lists,
  imageLabel,
  imageSide = "right",
  ctaLabel,
  ctaHref,
  video,
}) {
  const imageFirst = imageSide === "left";
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
    <section id={id} ref={sectionRef} className="w-full scroll-mt-28">
      <div className="max-w-[1366px] mx-auto px-6 sm:px-10 py-14 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
            <h2
              className={`${reveal} font-display font-bold text-2xl sm:text-3xl text-[var(--brand)] mb-4`}
              style={{ transitionDelay: "0ms" }}
            >
              {title}
            </h2>
            <p
              className={`${reveal} text-sm sm:text-[0.95rem] text-[var(--ink)]/80 leading-relaxed max-w-xl`}
              style={{ transitionDelay: "120ms" }}
            >
              {intro}
            </p>

            {lists.map((list, listIndex) => (
              <div
                key={list.heading || "default"}
                className={`${reveal} mt-6`}
                style={{ transitionDelay: `${220 + listIndex * 120}ms` }}
              >
                {list.heading && (
                  <p className="text-sm font-semibold text-[var(--ink)] mb-2">
                    {list.heading}
                  </p>
                )}
                <ul className="space-y-1.5">
                  {list.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[var(--ink)]/80 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[var(--brand)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {ctaHref && (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${reveal} mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] text-white text-sm font-semibold px-6 py-3 hover:bg-[var(--brand-2)] transition-colors`}
                style={{ transitionDelay: `${220 + lists.length * 120}ms` }}
              >
                {ctaLabel || "Visit Website"}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </div>

          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className={`${reveal} sb-reveal-image w-full aspect-[4/3] rounded-2xl object-cover ${
                imageFirst ? "lg:order-1" : "lg:order-2"
              }`}
              style={{ transitionDelay: "180ms" }}
            />
          ) : (
            <ImagePlaceholder
              label={imageLabel}
              className={`${reveal} sb-reveal-image w-full aspect-[4/3] rounded-2xl ${
                imageFirst ? "lg:order-1" : "lg:order-2"
              }`}
              style={{ transitionDelay: "180ms" }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
