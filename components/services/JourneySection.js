import Image from "next/image";

const MILESTONES = [
  {
    year: "2020 – 21",
    title: "Vision",
    desc: "FINVIN begins its journey with a clear vision to create meaningful solutions across the distressed asset ecosystem.",
    x: 8,
    y: 88,
  },
  {
    year: "2021 – 22",
    title: "Capability",
    desc: "Building credibility, strengthening capabilities and establishing a strong foundation in the market.",
    x: 23,
    y: 76,
  },
  {
    year: "2022 – 23",
    title: "Expansion",
    desc: "Expanding our reach and deepening our expertise across advisory and distressed asset opportunities.",
    x: 39,
    y: 66,
  },
  {
    year: "2023 – 24",
    title: "Scale",
    desc: "Strengthening our operational capabilities and expanding our presence to serve clients across markets.",
    x: 55,
    y: 56,
  },
  {
    year: "2024 – 25",
    title: "Impact",
    desc: "Expanding our impact across IBC Advisory, Portfolio Sale and Retail NPA solutions.",
    x: 70,
    y: 44,
  },
  {
    year: "2025 – 26",
    title: "Leadership",
    desc: "Evolving into a stronger, more integrated platform across Advisory, IPE Services and Distressed Asset Solutions.",
    x: 83,
    y: 30,
  },
];

export default function JourneySection() {
  return (
    <section className="w-full bg-[var(--navy)]">
      <div className="max-w-[1366px] mx-auto px-6 sm:px-10 pt-20">
        <p className="eyebrow text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-3">
          Our Journey
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
          From Vision to Leadership
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/70 max-w-md">
          A journey of growth, expansion and impact.
        </p>
      </div>

      <div className="relative w-full aspect-[16/10] sm:aspect-[16/8] mt-12 overflow-hidden">
        <Image
          src="/images/services/our-journey-hero.png"
          alt="Our journey — from vision to leadership"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/10 to-transparent" />

        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <polyline
            points={MILESTONES.map((m) => `${m.x},${m.y}`).join(" ")}
            fill="none"
            className="journey-path"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {MILESTONES.map((m) => (
          <div
            key={m.year}
            className="journey-node absolute"
            style={{ left: `${m.x}%`, top: `${m.y}%` }}
            tabIndex={0}
          >
            <div className="journey-card absolute left-1/2 bottom-12 w-44 rounded-lg bg-white/95 backdrop-blur-sm px-3 py-2.5 shadow-lg">
              <p className="text-[0.65rem] font-bold tracking-wide text-[var(--brand-2)] uppercase">
                {m.year}
              </p>
              <p className="font-display font-semibold text-sm text-[var(--ink)] mt-0.5">
                {m.title}
              </p>
              <p className="text-[0.7rem] text-[var(--muted)] leading-snug mt-1">
                {m.desc}
              </p>
            </div>

            <span className="journey-line absolute left-1/2 bottom-0" />
            <span className="journey-dot absolute left-1/2 bottom-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
