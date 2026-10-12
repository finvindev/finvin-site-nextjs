"use client";

import { useRef, useState } from "react";

export default function FYReview() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  return (
    <section className="w-full">
      <div className="max-w-[1366px] mx-auto px-6 sm:px-10 pt-16 sm:pt-20 pb-20 sm:pb-28 text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl">
          <span className="text-[var(--ink)]">FY 25-26 in </span>
          <span className="text-[var(--brand)]">Review</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[var(--ink)]/80 max-w-xl mx-auto">
          Watch our journey of growth, trust and success as we continue
          transforming India&apos;s distressed asset ecosystem.
        </p>

        <div
          className="relative mt-12 max-w-2xl mx-auto aspect-[914/487]"
          style={{
            backgroundImage: "url(/images/events/fy-bg-2.png)",
            backgroundSize: "100% 100%",
          }}
        >
          <div
            className="absolute"
            style={{
              left: "3.61%",
              top: "0%",
              width: "92.12%",
              height: "95.69%",
              clipPath: "inset(0 round 4px)",
            }}
          >
            <video
              ref={videoRef}
              src="/images/events/fy.mp4"
              playsInline
              controls={isPlaying}
              onPause={() => setIsPlaying(false)}
              className="absolute left-0 w-[100.5%] h-[101.6%]"
              style={{ filter: "brightness(1)", top: "3%" }}
            />
            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Play FY25-26 review video"
                className="absolute inset-0"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
