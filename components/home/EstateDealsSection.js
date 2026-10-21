import { Building2, ShieldCheck, Search } from "lucide-react";

const FEATURES = [
  {
    icon: Search,
    label: "Discover Listings",
    desc: "Browse bank auction and NPA properties across India in one place.",
  },
  {
    icon: ShieldCheck,
    label: "Verified & Secure",
    desc: "Every listing is backed by proper legal and title due diligence.",
  },
  {
    icon: Building2,
    label: "End-to-End Support",
    desc: "From discovery to acquisition, guided by the Finvin team.",
  },
];

export default function EstateDealsSection() {
  return (
    <section className="w-full bg-[var(--paper-2)]">
      <div className="max-w-[1366px] mx-auto px-6 sm:px-10 py-20 text-center">
        <p className="eyebrow text-[var(--brand)] text-xs font-bold tracking-[0.2em] uppercase mb-3">
          Our Platform
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--ink)] leading-tight">
          Bank Auction Properties,{" "}
          <span className="text-[var(--brand)]">Simplified.</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-[var(--ink)]/80 leading-relaxed">
          Estate Deals is our technology platform built to streamline the
          sale of bank-owned and NPA properties — giving buyers verified
          listings and banks a complete, end-to-end auction solution.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.label} className="flex flex-col items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-soft)]">
                  <Icon size={20} className="text-[var(--brand)]" strokeWidth={1.8} />
                </div>
                <p className="mt-3 text-sm font-bold text-[var(--ink)]">
                  {feature.label}
                </p>
                <p className="mt-1 text-xs text-[var(--muted)] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        <a
          href="https://estatedeal.in"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] text-white text-sm font-semibold px-6 py-3 hover:bg-[var(--brand-2)] transition-colors"
        >
          Visit Estate Deals
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
