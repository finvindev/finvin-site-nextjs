"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const TOTAL = 16;
const SLIDES = Array.from({ length: TOTAL }, (_, i) => ({
  src: `/images/events/wall-of-fame/award-${String(i + 1).padStart(2, "0")}.jpeg`,
  alt: `Wall of Fame — recognition moment ${i + 1}`,
}));

const VISIBLE_RANGE = 1;

function cardShadow(offset) {
  if (offset !== 0) return "none";
  return "0 14px 32px rgba(14,26,58,0.3)";
}

function cardStyle(offset) {
  const abs = Math.abs(offset);
  if (abs > VISIBLE_RANGE) {
    return { opacity: 0, pointerEvents: "none" };
  }
  const translate = offset * 54;
  const scale = 1 - abs * 0.14;
  return {
    transform: `translateX(${translate}%) scale(${scale})`,
    zIndex: 50 - abs,
    boxShadow: cardShadow(offset),
  };
}

function scrimOpacity(absOffset) {
  return absOffset === 0 ? 0 : absOffset === 1 ? 0.1 : 0.3;
}

const SWIPE_THRESHOLD = 40;

export default function WallOfFame() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  const prev = () => setActive((i) => (i - 1 + TOTAL) % TOTAL);
  const next = () => setActive((i) => (i + 1) % TOTAL);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchDeltaX.current > SWIPE_THRESHOLD) {
      prev();
    } else if (touchDeltaX.current < -SWIPE_THRESHOLD) {
      next();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <section className="w-full bg-[#f8f8f8]">
      <div className="max-w-[1366px] mx-auto px-6 sm:px-10 py-8 sm:py-10 text-center">
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

        <div
          className="relative mt-8 h-[190px] sm:h-[320px] px-6 sm:px-[110px] lg:px-[180px] overflow-x-clip touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
        <div className="relative max-w-2xl mx-auto h-full">
          {SLIDES.map((slide, i) => {
            let offset = i - active;
            if (offset > TOTAL / 2) offset -= TOTAL;
            if (offset < -TOTAL / 2) offset += TOTAL;
            const isActive = offset === 0;

            return (
              <div
                key={slide.src}
                role={isActive ? undefined : "button"}
                aria-label={isActive ? undefined : `Go to slide ${i + 1}`}
                onClick={isActive ? undefined : () => setActive(i)}
                className={`absolute inset-0 mx-auto w-[78%] sm:w-[62%] aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-500 ease-out ${
                  isActive ? "" : "cursor-pointer"
                }`}
                style={cardStyle(offset)}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 640px) 40vw, 70vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-[#f8f8f8] transition-opacity duration-500 ease-out"
                  style={{ opacity: scrimOpacity(Math.abs(offset)) }}
                />
              </div>
            );
          })}
        </div>
        </div>

        <div className="flex items-center justify-center gap-1.5 mt-4">
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
      </div>
    </section>
  );
}
