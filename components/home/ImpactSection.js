import ImagePlaceholder from "../common/ImagePlaceholder";
import CountUp from "../common/CountUp";

const STATS = [
  {
    value: ">5,000",
    unit: "Cr. RESOLVED",
    title: "Retail Debt Resolved",
    desc: "Structured resolution and recovery across retail debt portfolios.",
  },
  {
    value: ">200",
    unit: "PROPERTIES",
    title: "Bank Auction Properties Sold",
    desc: "Successful transactions across bank-auction properties.",
  },
  {
    value: "25+",
    unit: "PLANS",
    title: "Resolution Plans Approved & Implemented",
    desc: "₹1,200 Cr+ Recovered",
  },
];

export default function ImpactSection() {
  return (
    <section className="w-full bg-[var(--paper-2)]">
      <div className="max-w-[1366px] mx-auto px-6 sm:px-10 py-20">
        <div className="text-center mb-14">
          <p className="eyebrow text-[var(--brand)] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Our Impact
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--ink)]">
            Turning Resolution Into{" "}
            <span className="text-[var(--brand)]">Measurable Impact.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-10">
            {STATS.map((stat) => (
              <div key={stat.title} className="flex items-center gap-5">
                <div className="relative shrink-0 flex items-center justify-center w-36 h-36">
                  <video
                    src="/decor/circle-border.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="pointer-events-none absolute inset-0 w-full h-full object-contain"
                  />
                  <div className="relative z-10 flex flex-col items-center justify-center w-24 h-24 rounded-full bg-white text-[var(--brand)] px-1">
                    <span className="text-[0.8rem] font-bold leading-none tracking-tight whitespace-nowrap">
                      <CountUp value={stat.value} />
                    </span>
                    <span className="text-[0.55rem] font-semibold tracking-wide mt-1">
                      {stat.unit}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-[var(--ink)] mb-1">
                    {stat.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] max-w-sm">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <ImagePlaceholder
            label="Impact photo — resolved distressed asset"
            className="w-full aspect-[4/3] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
