import ImagePlaceholder from "../common/ImagePlaceholder";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <ImagePlaceholder
        label="Hero photo — distressed industrial asset at sunrise"
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />

      <div className="relative max-w-[1366px] mx-auto px-6 sm:px-10 pt-12 pb-20 sm:pt-16 sm:pb-28">
        <h1 className="font-display font-bold text-[2.5rem] sm:text-[3.2rem] leading-[1.08] max-w-xl text-[var(--ink)]">
          Helping India
          <br />
          Revive
          <br />
          <span className="text-[var(--brand)]">Distressed Assets.</span>
        </h1>

        <p className="mt-5 max-w-md text-[0.95rem] text-[var(--muted)]">
          Trusted by banks and ARCs for NPA revival, Insolvency management and
          distressed asset recovery.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#"
            className="rounded-full bg-[var(--brand)] text-white text-sm font-semibold px-6 py-3 hover:bg-[var(--brand-2)] transition-colors"
          >
            Schedule a Consultation
          </a>
          <a
            href="#"
            className="rounded-full bg-[var(--paper-2)] text-[var(--ink)] text-sm font-semibold px-6 py-3 hover:bg-[var(--line)] transition-colors"
          >
            Explore Opportunity
          </a>
        </div>
      </div>
    </section>
  );
}
