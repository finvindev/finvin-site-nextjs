"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/resource-center", label: "Resource Center" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/" || pathname === null;
    return pathname.startsWith(href);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-30 transition-all duration-300"
      style={{
        background: "rgba(250, 248, 243, 0.82)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
        boxShadow: scrolled ? "0 1px 24px rgba(20,35,58,0.06)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-3.5 px-5 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/finvin-logo.png"
            alt="Finvin"
            width={120}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className="relative px-3.5 py-2 text-sm font-medium transition-colors"
                style={{ color: active ? "var(--ink)" : "var(--muted)" }}
              >
                {label}
                <span
                  className="absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 rounded-full transition-transform origin-left duration-300"
                  style={{
                    background: "linear-gradient(90deg, var(--gold), var(--gold-soft))",
                    transform: active ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </Link>
            );
          })}
          <Link
            href="/contact-us"
            className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
            style={{
              background: "var(--ink)",
              boxShadow: "0 6px 18px rgba(20,35,58,0.18)",
            }}
          >
            Contact Us
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--ink)" }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{ background: "var(--paper)", borderTop: "1px solid var(--line)", boxShadow: "0 12px 28px rgba(20,35,58,0.1)" }}
        >
          <div className="max-w-6xl mx-auto px-5 py-3 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-xl font-medium text-sm transition-colors"
                style={{
                  color: isActive(href) ? "var(--ink)" : "var(--muted)",
                  background: isActive(href) ? "rgba(176,122,44,0.08)" : "transparent",
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block text-center px-4 py-3 rounded-xl font-semibold text-white text-sm"
              style={{ background: "var(--ink)" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
