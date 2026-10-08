"use client";

import { useState } from "react";
import ImagePlaceholder from "../common/ImagePlaceholder";

const FILTERS = ["Advisory", "Portfolio Sale", "IPE", "EstateDeal", "Retail NPA"];

const LOGOS = Array.from({ length: 16 }, (_, i) => `Partner logo ${i + 1}`);

export default function TrustedBy() {
  const [active, setActive] = useState("Advisory");

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1366px] mx-auto px-6 sm:px-10 py-20 text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--ink)]">
          Trusted by <span className="text-[var(--brand)]">Leading Organisation</span>
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-[var(--ink)]/80">
          Our solutions support leading institutions across the distressed
          asset ecosystem.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors border ${
                active === filter
                  ? "bg-[var(--navy)] text-white border-[var(--navy)]"
                  : "text-[var(--muted)] border-[var(--line)] hover:border-[var(--brand)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-4 sm:grid-cols-8 gap-px bg-[var(--line)] border border-[var(--line)]">
          {LOGOS.map((logo) => (
            <ImagePlaceholder key={logo} label={logo} className="aspect-[3/2] bg-white" />
          ))}
        </div>
      </div>
    </section>
  );
}
