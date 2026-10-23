"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TOTAL = 16;
const SLIDES = Array.from({ length: TOTAL }, (_, i) => ({
  src: `/images/events/wall-of-fame/award-${String(i + 1).padStart(2, "0")}.jpeg`,
  alt: `Wall of Fame — recognition moment ${i + 1}`,
}));

const VISIBLE_RANGE = 2;

function cardStyle(offset) {
  const abs = Math.abs(offset);
  if (abs > VISIBLE_RANGE) {
    return { opacity: 0, pointerEvents: "none" };
  }
  const translate = offset * 54;
  const scale = 1 - abs * 0.14;
  const opacity = abs === 0 ? 1 : abs === 1 ? 0.75 : 0.45;
  return {
    transform: `translateX(${translate}%) scale(${scale})`,
    zIndex: 50 - abs,
    opacity,
  };
}

export default function WallOfFame() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + TOTAL) % TOTAL);
  const next = () => setActive((i) => (i + 1) % TOTAL);

  return (
    <section className="w-full bg-[#f8f8f8]">
      <div className="max-w-[1366px] mx-auto px-6 sm:px-10 py-16 sm:py-20 text-center">
        <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--brand)] mb-4">
          Wall of Fame
        </p>
        <h2 className="font-display font-bold text-2xl sm:text-3xl leading-tight max-w-2xl mx-auto">
          <span className="text-[var(--ink)]">
            Celebrating the people behind the journey the effort,
          </span>{" "}
          <span className="text-[var(--brand)]">
            ownership and energy that move us forward.
          </span>
        </h2>

        <div className="relative max-w-2xl mx-auto mt-16 h-[260px] sm:h-[340px] overflow-x-clip">
          {SLIDES.map((slide, i) => {
            let offset = i - active;
            if (offset > TOTAL / 2) offset -= TOTAL;
            if (offset < -TOTAL / 2) offset += TOTAL;
            const isActive = offset === 0;

            return (
              <div
                key={slide.src}
                className="absolute inset-0 mx-auto w-[78%] sm:w-[62%] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-out"
                style={cardStyle(offset)}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 640px) 40vw, 70vw"
                  className="object-cover"
                />
                {isActive && (
                  <span className="absolute bottom-3 left-4 text-white text-sm font-bold tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    {String(active + 1).padStart(2, "0")} / {TOTAL}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] hover:bg-white transition-colors"
          >
            <ArrowLeft size={16} />
          </button>

          <div className="flex items-center gap-1.5">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-5 bg-[var(--brand)]" : "w-1.5 bg-[var(--line)]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] hover:bg-white transition-colors"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
