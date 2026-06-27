"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/resource-center", label: "Resource Center" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/" || pathname === null;
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white/95 border-b border-gray-100" style={{ backdropFilter: "blur(12px)", boxShadow: "0 1px 20px rgba(0,0,0,0.06)" }}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/finvin-logo.png"
            alt="Finvin Logo"
            width={64}
            height={64}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-lg transition-colors relative ${
                isActive(href)
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="ml-3 px-5 py-2.5 rounded-full font-semibold text-white text-sm transition-all hover:-translate-y-0.5 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
              boxShadow: "0 2px 12px rgba(37,99,235,0.3)",
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
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
        <div className="md:hidden bg-white border-t border-gray-100" style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium transition-colors text-sm ${
                  isActive(href)
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block text-center px-4 py-3 rounded-xl font-semibold text-white text-sm"
              style={{ background: "linear-gradient(135deg, #1d4ed8, #2563eb)" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
