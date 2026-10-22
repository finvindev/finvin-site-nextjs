"use client";

import { useState } from "react";
import ImagePlaceholder from "../common/ImagePlaceholder";

const PANELS = [
  {
    id: "advisory-services",
    title: "Advisory Services",
    tagline:
      "Debt restructuring and resolution strategy for distressed assets, backed by deep IBC and SARFAESI expertise.",
    imageLabel: "Advisory services — stressed asset resolution",
  },
  {
    id: "portfolio-sell",
    title: "Portfolio Sale",
    tagline:
      "Connecting NPA portfolios with the right ARCs and investors to maximise recovery value.",
    imageLabel: "Portfolio sale — distressed asset transactions",
  },
  {
    id: "insolvency-professional-entity",
    title: "Insolvency Professional Services",
    tagline:
      "IBBI-aligned support for IPs managing end-to-end insolvency and liquidation assignments.",
    imageLabel: "Insolvency Professional Entity — IBC support",
  },
  {
    id: "estatedeal-in",
    title: "EstateDeal.in",
    tagline:
      "Our technology platform streamlining the sale of bank-owned and NPA properties.",
    imageLabel: "Estatedeal.in — bank auction properties",
  },
  {
    id: "retail-npa-pool-services",
    title: "Retail NPA Pool Servicing",
    tagline:
      "End-to-end servicing and recovery solutions for retail NPA pools.",
    imageLabel: "Retail NPA Pool — loan servicing & recovery",
  },
];

export default function ServiceAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Mobile — vertical stacked accordion, one row expands downward */}
      <div className="md:hidden">
        <div className="flex flex-col gap-3">
        {PANELS.map((panel, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={panel.id}
              type="button"
              onClick={() => setActiveIndex(isActive ? activeIndex : index)}
              aria-expanded={isActive}
              style={{ animationDelay: `${index * 90}ms` }}
              className={`animate-accordion-panel relative block w-full text-left rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(14,26,58,0.15)] transition-[height] duration-500 ease-out ${
                isActive ? "h-[260px]" : "h-16"
              }`}
            >
              <ImagePlaceholder label={panel.imageLabel} className="absolute inset-0" />
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? "bg-gradient-to-t from-[var(--navy)]/90 via-[var(--navy)]/40 to-[var(--navy)]/20"
                    : "bg-[var(--navy)]/55"
                }`}
              />

              {isActive ? (
                <div className="absolute inset-x-0 bottom-0 p-5 pb-6">
                  <h3 className="font-display font-bold text-xl text-white leading-tight">
                    {panel.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/85 leading-relaxed">{panel.tagline}</p>
                  <a
                    href={`#${panel.id}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#8fd6ff]"
                  >
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-between px-5">
                  <span className="font-display font-bold text-sm text-white">{panel.title}</span>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5l5 5 5-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
        </div>
      </div>

      {/* Tablet/desktop — horizontal accordion */}
      <div className="hidden md:block">
        <div className="flex gap-3 h-[420px] lg:h-[440px] overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
        {PANELS.map((panel, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={panel.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-expanded={isActive}
              style={{ animationDelay: `${index * 90}ms` }}
              className={`animate-accordion-panel relative shrink-0 h-full text-left rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(14,26,58,0.15)] transition-[flex-basis,flex-grow] duration-500 ease-out ${
                isActive ? "flex-[5_1_0%] min-w-[220px] lg:min-w-[280px]" : "flex-[0_0_70px] sm:flex-[0_0_90px] lg:flex-[0_0_110px]"
              }`}
            >
              <ImagePlaceholder label={panel.imageLabel} className="absolute inset-0" />
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? "bg-gradient-to-t from-[var(--navy)]/90 via-[var(--navy)]/40 to-[var(--navy)]/20"
                    : "bg-[var(--navy)]/55"
                }`}
              />

              <div
                className="absolute font-display font-bold text-white whitespace-nowrap transition-[top,left,font-size,transform] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                style={
                  isActive
                    ? {
                        top: "calc(100% - 10.5rem)",
                        left: "1.75rem",
                        transform: "translate(0, 0) rotate(0deg)",
                        transformOrigin: "left bottom",
                        fontSize: "clamp(1.375rem, 2.3vw, 2rem)",
                      }
                    : {
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%) rotate(-90deg)",
                        transformOrigin: "center",
                        fontSize: "clamp(0.9rem, 1.1vw, 1.125rem)",
                      }
                }
              >
                <span className={isActive ? "" : "uppercase tracking-wide"}>{panel.title}</span>
              </div>

              <div
                className={`absolute left-7 right-6 bottom-6 transition-opacity duration-300 max-w-xl ${
                  isActive ? "opacity-100 delay-200" : "opacity-0 pointer-events-none"
                }`}
              >
                <p className="text-sm lg:text-base text-white/85 leading-relaxed">
                  {panel.tagline}
                </p>
                <a
                  href={`#${panel.id}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#8fd6ff] hover:text-white transition-colors"
                >
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </button>
          );
        })}
        </div>
      </div>
    </>
  );
}
