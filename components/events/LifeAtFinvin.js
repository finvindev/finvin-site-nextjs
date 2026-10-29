export default function LifeAtFinvin() {
  return (
    <section id="life-at-finvin" className="w-full bg-[#f8f8f8] scroll-mt-28">
      <div className="max-w-[1366px] mx-auto px-6 sm:px-10 py-8 sm:py-10">
        <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--brand)] mb-4">
          Life at Finvin
        </p>
        <h2 className="font-display font-bold text-2xl sm:text-3xl leading-tight mb-5">
          <span className="text-[var(--ink)]">We take the work seriously. </span>
          <span className="text-[var(--brand)]">We take the fun seriously too.</span>
        </h2>
        <p className="text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed max-w-2xl mb-2">
          At FINVIN, ambition doesn&apos;t stop when the workday does. We bring
          the same energy to our celebrations, our friendships and the
          moments that make a team feel like a team.
        </p>
        <p className="text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed max-w-2xl mb-10">
          From intense FINVIN Premier League matches and spontaneous team
          dinners to awards, outings, festivals and potlucks, there&apos;s
          always room to step away from the desk and come together. Different
          people. Different stories. Different traditions. One FINVIN.
        </p>

        <div
          className="relative w-full aspect-[1886/690]"
          style={{ clipPath: "inset(0 round 1rem)" }}
        >
          <video
            src="/images/events/office-events.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-[100.2%] h-[102.2%]"
            style={{ filter: "brightness(1)" }}
          />
        </div>
      </div>
    </section>
  );
}
