"use client";

import { useEffect, useRef, useState } from "react";

const PHOTOS = [
  { src: "/images/events/hero-photos/1.png", fan: -16 },
  { src: "/images/events/hero-photos/2.png", fan: -5 },
  { src: "/images/events/hero-photos/3.png", fan: 5 },
  { src: "/images/events/hero-photos/4.png", fan: 16 },
];

// Phase A (0 -> 0.5): fanned-out cards converge into a tight concise stack.
// Phase B (0.5 -> 1): the stack slides left and gradually re-opens while
// the description fades in on the right.
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function clamp01(v) {
  return Math.min(1, Math.max(0, v));
}

function EventsHeroDesktop() {
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setProgress(1);
    }

    const updateScale = () => {
      const w = window.innerWidth;
      setScale(w < 1024 ? 0.72 : 1);
    };

    let rafId;
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const node = wrapRef.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const scrolled = -rect.top;
        const p = total > 0 ? clamp01(scrolled / total) : 0;
        setProgress(p);
      });
    };

    updateScale();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("resize", updateScale);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("resize", updateScale);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const phaseA = clamp01(progress / 0.5);
  const phaseB = clamp01((progress - 0.5) / 0.5);
  const s = (px) => px * scale;

  return (
    <section ref={wrapRef} className="relative w-full h-[150vh] bg-[#f8f8f8]">
      <div className="sticky top-0 h-screen w-full overflow-visible pt-28 sm:pt-32">
        <div className="max-w-[1366px] mx-auto px-6 sm:px-10 h-full relative">
          {/* Photo stack */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              width: `${s(lerp(170, 215, phaseB))}px`,
              height: `${s(lerp(230, 290, phaseB))}px`,
              left: `${lerp(50, 14, phaseB)}%`,
              top: `${lerp(2, 90, progress)}%`,
              transform: `translate(${lerp(-50, 0, phaseB)}%, 0)`,
            }}
          >
            {PHOTOS.map((photo, index) => {
              const mid = (PHOTOS.length - 1) / 2;
              const fannedX = s((index - mid) * 190);
              const consiseX = s((index - mid) * 10);
              const openX = s((index - mid) * 56);

              const x = phaseB === 0 || progress <= 0.5
                ? lerp(fannedX, consiseX, phaseA)
                : lerp(consiseX, openX, phaseB);

              const fanRotate = progress <= 0.5
                ? lerp(photo.fan, 0, phaseA)
                : lerp(0, photo.fan * 0.5, phaseB);

              const cardWidth = s(lerp(170, 215, phaseB));
              const cardHeight = s(lerp(230, 290, phaseB));

              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={photo.src}
                  className="absolute rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(14,26,58,0.22)] transition-transform duration-300 ease-out"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex((current) => (current === index ? null : current))}
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    transform: `translateX(${x}px) rotate(${fanRotate}deg) scale(${isHovered ? 1.08 : 1})`,
                    zIndex: isHovered ? 50 : 10 + index,
                  }}
                >
                  <img
                    src={photo.src}
                    alt=""
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>

          {/* Heading — sits below the cards, fades out once they start sliding left */}
          <div
            className="absolute left-0 w-full px-6 sm:px-10 text-center"
            style={{
              top: "50%",
              opacity: clamp01(1 - phaseB * 1.6),
            }}
          >
            <h1 className="font-display font-bold text-4xl lg:text-5xl leading-tight">
              <span className="text-[var(--ink)]">We chase big goals</span>
              <br />
              <span className="text-[var(--brand)]">Also celebrate big moments</span>
            </h1>
          </div>

          {/* Description — fades in on the right as the stack opens on the left */}
          <div
            className="absolute w-full max-w-sm lg:max-w-md px-6 sm:px-10"
            style={{
              right: scale >= 1 ? "10%" : 0,
              top: "90%",
              transform: `translateX(${lerp(40, 0, phaseB)}px)`,
              opacity: clamp01(phaseB * 1.6 - 0.3),
              pointerEvents: phaseB > 0.5 ? "auto" : "none",
            }}
          >
            <p className="text-sm lg:text-base text-[var(--ink)]/80 leading-relaxed">
              There&apos;s rarely a typical day at FINVIN. One day might involve
              understanding a business; the next could mean a client
              discussion, a market deep-dive or a visit to the ground.
            </p>
            <p className="mt-4 text-sm lg:text-base text-[var(--ink)]/80 leading-relaxed">
              What stays constant is how we work: curious, collaborative, and
              willing to take on problems that don&apos;t have straightforward
              answers. We learn from each other, take ownership and celebrate
              the people who make the journey worthwhile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventsHeroMobile() {
  return (
    <section className="w-full bg-[#f8f8f8] pt-28 sm:pt-32">
      <div className="px-6 sm:px-10 pb-14 sm:pb-20 max-w-3xl md:max-w-5xl mx-auto">
        <div className="relative h-[190px] sm:h-[260px] md:h-[280px] flex items-center justify-center">
          {PHOTOS.map((photo, index) => (
            <div
              key={photo.src}
              className="absolute rounded-xl overflow-hidden shadow-[0_12px_28px_rgba(14,26,58,0.2)]"
              style={{
                width: "118px",
                height: "160px",
                transform: `translateX(${(index - 1.5) * 44}px) rotate(${photo.fan * 0.6}deg)`,
                zIndex: 10 + index,
              }}
            >
              <img
                src={photo.src}
                alt=""
                className="w-full h-full object-cover sm:hidden"
                draggable={false}
              />
            </div>
          ))}
          {PHOTOS.map((photo, index) => (
            <div
              key={`lg-${photo.src}`}
              className="hidden sm:block absolute rounded-xl overflow-hidden shadow-[0_12px_28px_rgba(14,26,58,0.2)]"
              style={{
                width: "160px",
                height: "220px",
                transform: `translateX(${(index - 1.5) * 64}px) rotate(${photo.fan * 0.6}deg)`,
                zIndex: 10 + index,
              }}
            >
              <img
                src={photo.src}
                alt=""
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>

        <h1 className="mt-10 sm:mt-14 font-display font-bold text-2xl sm:text-4xl leading-tight text-center">
          <span className="text-[var(--ink)]">We chase big goals</span>
          <br />
          <span className="text-[var(--brand)]">Also celebrate big moments</span>
        </h1>

        <div className="mt-6 sm:mt-8 sm:grid sm:grid-cols-2 sm:gap-8 md:max-w-2xl md:mx-auto">
          <p className="text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed">
            There&apos;s rarely a typical day at FINVIN. One day might involve
            understanding a business; the next could mean a client
            discussion, a market deep-dive or a visit to the ground.
          </p>
          <p className="mt-4 sm:mt-0 text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed">
            What stays constant is how we work: curious, collaborative, and
            willing to take on problems that don&apos;t have straightforward
            answers. We learn from each other, take ownership and celebrate
            the people who make the journey worthwhile.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function EventsHero() {
  return (
    <>
      <div className="lg:hidden">
        <EventsHeroMobile />
      </div>
      <div className="hidden lg:block">
        <EventsHeroDesktop />
      </div>
    </>
  );
}
