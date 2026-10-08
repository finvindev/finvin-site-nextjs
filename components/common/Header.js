const NAV_LINKS = [
  { label: "Services", href: "#" },
  { label: "Investments", href: "#" },
  { label: "Events", href: "#" },
  { label: "Deals", href: "#" },
];

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-[1366px] mx-auto flex items-center justify-between px-6 sm:px-10 py-5">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="32" height="32" rx="8" stroke="#1a3fb0" strokeWidth="1.5" />
            <path d="M11 24V10h11" stroke="#1a3fb0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 17h8" stroke="#3062e0" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <span className="font-display font-semibold text-xl tracking-tight text-[var(--ink)]">
            FINVIN
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-[var(--line)] px-2 py-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 text-[0.78rem] font-semibold tracking-[0.08em] text-[var(--ink)] uppercase rounded-full hover:bg-[var(--paper-2)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden rounded-full border border-[var(--line)] p-2"
          aria-label="Open menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="#141b2e" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
