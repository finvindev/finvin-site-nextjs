export default function EventsHero() {
  return (
    <section className="w-full bg-[#f8f8f8] pt-32 sm:pt-40">
      <div className="max-w-[1366px] mx-auto px-6 sm:px-10 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
          <div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight">
              <span className="text-[var(--ink)]">We chase big goals</span>
              <br />
              <span className="text-[var(--brand)]">Also celebrate big moments</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed max-w-lg">
              There&apos;s rarely a typical day at FINVIN. One day might involve
              understanding a business; the next could mean a client
              discussion, a market deep-dive or a visit to the ground.
            </p>
            <p className="mt-4 text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed max-w-lg">
              What stays constant is how we work: curious, collaborative, and
              willing to take on problems that don&apos;t have straightforward
              answers. We learn from each other, take ownership and celebrate
              the people who make the journey worthwhile.
            </p>
          </div>

          <div
            className="relative w-full max-w-[340px] mx-auto aspect-[478/850]"
            style={{ clipPath: "inset(0 round 1rem)" }}
          >
            <video
              src="/images/events/hero-events.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-[102%] h-[103.5%]"
              style={{ filter: "brightness(1)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
