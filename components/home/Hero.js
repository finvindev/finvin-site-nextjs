import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[640px] sm:min-h-0">
      <Image
        src="/images/homepage-hero.png"
        alt="Helping India revive distressed assets"
        fill
        priority
        className="animate-hero-image object-cover object-[68%_center] sm:object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white from-0% via-white/70 via-45% to-white/10 to-75% sm:bg-gradient-to-r sm:from-white sm:from-0% sm:via-white/55 sm:via-25% sm:to-transparent sm:to-60%" />

      <div className="relative max-w-[1366px] mx-auto px-6 sm:px-10 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <h1 className="animate-hero-up [animation-delay:200ms] font-display font-bold text-[2.5rem] sm:text-[3.2rem] leading-[1.08] max-w-xl text-[var(--ink)]">
          Helping India
          <br />
          Revive
          <br />
          <span className="text-[var(--brand)]">Distressed Assets.</span>
        </h1>

        <p className="animate-hero-up [animation-delay:400ms] mt-5 max-w-md text-[0.95rem] font-bold text-[var(--ink)]">
          Trusted by banks and ARCs for NPA revival, Insolvency management and
          distressed asset recovery.
        </p>

        <div className="animate-hero-up [animation-delay:600ms] mt-8 flex flex-wrap items-center gap-4">
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
