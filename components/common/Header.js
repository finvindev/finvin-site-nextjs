"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Investments", href: "/investments" },
  { label: "Events", href: "/events" },
  { label: "Deals", href: "#" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 inset-x-0 z-50 w-full bg-transparent">
      <div className="max-w-[1366px] mx-auto flex items-center justify-between px-6 sm:px-10 py-5">
        <a href="/" className="flex items-center shrink-0">
          <Image
            src="/images/finvin-logo.png"
            alt="Finvin"
            width={170}
            height={46}
            priority
            className="h-14 w-auto"
          />
        </a>

        <nav
          className="hidden md:flex items-center rounded-full border px-3 py-2.5"
          style={{ borderColor: "#000" }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = link.href !== "#" && pathname === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className="relative px-6 py-2 text-sm font-semibold tracking-[0.06em] text-[var(--ink)] uppercase group"
              >
                {link.label}
                <span
                  className={`absolute left-6 right-6 -bottom-0.5 h-[2px] bg-[var(--brand)] origin-center transition-transform duration-200 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="md:hidden rounded-full border border-[var(--line)] p-2 bg-white"
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="#141b2e" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        className={`md:hidden fixed inset-0 bg-[var(--navy)]/50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-in drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[78%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: "var(--line)" }}>
          <Image src="/images/finvin-logo.png" alt="Finvin" width={130} height={36} className="h-10 w-auto" />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border"
            style={{ borderColor: "var(--line)" }}
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M5 5l10 10M15 5L5 15" stroke="#141b2e" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col px-3 py-4">
          {NAV_LINKS.map((link) => {
            const isActive = link.href !== "#" && pathname === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-display font-semibold text-lg px-4 py-3.5 rounded-xl transition-colors ${
                  isActive
                    ? "text-[var(--brand)] bg-[var(--brand-soft)]"
                    : "text-[var(--ink)] hover:bg-[var(--paper-2)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto px-6 py-6 border-t" style={{ borderColor: "var(--line)" }}>
          <a
            href="#"
            className="block text-center rounded-full bg-[var(--brand)] text-white text-sm font-semibold px-6 py-3 hover:bg-[var(--brand-2)] transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
