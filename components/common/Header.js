import Image from "next/image";

const NAV_LINKS = [
  { label: "Services", href: "#" },
  { label: "Investments", href: "#" },
  { label: "Events", href: "#" },
  { label: "Deals", href: "#" },
];

export default function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-20 w-full bg-transparent">
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
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-6 py-2 text-sm font-semibold tracking-[0.06em] text-[var(--ink)] uppercase rounded-full hover:bg-[var(--paper-2)] transition-colors"
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
