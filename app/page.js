import Link from "next/link";

const stats = [
  { value: "₹100B+", label: "Debt Resolved" },
  { value: "6", label: "Offices Nationwide" },
  { value: "5+", label: "Years of Excellence" },
  { value: "IBBI", label: "Recognized IPE" },
];

const advantages = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Deep Expertise",
    description:
      "Specialized knowledge of IBC, NPA resolution frameworks, and distressed asset management built over complex multi-sector engagements.",
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="3 3 3 21 21 21" />
        <polyline points="7 16 11 10 15 13 21 7" />
      </svg>
    ),
    title: "Proven Track Record",
    description:
      "Over ₹100 billion in stressed debt successfully resolved across India — spanning PSBs, NBFCs, ARCs, and corporate accounts.",
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Innovative Solutions",
    description:
      "Pioneering digital tools like Estatedeal.in to modernize distressed asset disposal and maximize recovery value for every stakeholder.",
  },
];

const services = [
  {
    href: "/what-we-do",
    label: "Services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "What We Do",
    description:
      "Advisory, portfolio sales, insolvency support, and real estate monetization through our end-to-end distressed asset solutions.",
    cta: "Explore Services",
  },
  {
    href: "/who-we-are",
    label: "Team",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Who We Are",
    description:
      "A team of seasoned CAs, Insolvency Professionals, and financial experts united by a mission to transform distressed assets.",
    cta: "Meet Our Team",
  },
  {
    href: "/resource-center",
    label: "Resources",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Resource Center",
    description:
      "Access IBBI regulations, IBC frameworks, circulars, and guidelines — everything you need to navigate insolvency law in India.",
    cta: "Browse Resources",
  },
  {
    href: "/contact-us",
    label: "Contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Contact Us",
    description:
      "Reach out to discuss your requirements. We have offices in 6 cities across India, ready to support your recovery needs.",
    cta: "Get in Touch",
  },
];

const trustedBy = [
  "Public Sector Banks",
  "Private Banks",
  "NBFCs",
  "ARCs",
  "Special Situation Funds",
  "Corporates",
];

// Light editorial "recovery" figure on the right of the hero.
// Server-rendered SVG/markup — no client JS.
function HeroVisual() {
  return (
    <div className="relative mx-auto" style={{ maxWidth: "30rem" }}>
      {/* Soft warm plate behind */}
      <div
        className="absolute -inset-6 rounded-[2.5rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 70% 25%, rgba(176,122,44,0.16), transparent 70%)",
          filter: "blur(18px)",
        }}
      />

      {/* Main card */}
      <div
        className="relative rounded-3xl p-7 bg-white hero-float"
        style={{
          border: "1px solid var(--line)",
          boxShadow: "0 30px 60px rgba(20,35,58,0.12)",
        }}
      >
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="eyebrow">Debt Resolved</p>
            <p className="text-4xl font-bold font-display mt-1" style={{ color: "var(--ink)" }}>
              ₹100B+
            </p>
          </div>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{
              background: "rgba(176,122,44,0.12)",
              color: "var(--gold)",
              border: "1px solid rgba(176,122,44,0.25)",
            }}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
            Recovery
          </span>
        </div>

        {/* Area chart */}
        <svg viewBox="0 0 320 150" className="w-full h-auto mt-4" role="img" aria-label="Upward recovery-value trend">
          <defs>
            <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e3a57" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#1e3a57" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2c5070" />
              <stop offset="100%" stopColor="#b07a2c" />
            </linearGradient>
          </defs>
          {[30, 70, 110].map((y) => (
            <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="rgba(20,35,58,0.07)" strokeWidth="1" />
          ))}
          <path
            d="M0,120 L40,108 L80,118 L120,92 L160,96 L200,64 L240,58 L280,30 L320,18 L320,150 L0,150 Z"
            fill="url(#heroArea)"
          />
          <path
            d="M0,120 L40,108 L80,118 L120,92 L160,96 L200,64 L240,58 L280,30 L320,18"
            fill="none"
            stroke="url(#heroLine)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="320" cy="18" r="5" fill="#b07a2c" stroke="#ffffff" strokeWidth="2" />
        </svg>

        {/* Mini metrics */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {[
            { k: "Accounts", v: "PSB · NBFC" },
            { k: "Offices", v: "6 cities" },
            { k: "Track", v: "5+ yrs" },
          ].map(({ k, v }) => (
            <div
              key={k}
              className="rounded-xl px-3 py-3"
              style={{ background: "var(--paper)", border: "1px solid var(--line)" }}
            >
              <p className="text-[10px] uppercase tracking-wide font-semibold" style={{ color: "var(--gold)" }}>{k}</p>
              <p className="text-sm font-bold mt-0.5" style={{ color: "var(--ink)" }}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating IBBI badge */}
      <div
        className="absolute -left-5 bottom-8 rounded-2xl px-4 py-3 hero-float-slow"
        style={{ background: "var(--ink)", boxShadow: "0 16px 30px rgba(20,35,58,0.3)" }}
      >
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5" style={{ color: "var(--gold-soft)" }} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="leading-tight">
            <p className="text-[10px] uppercase tracking-wide font-semibold" style={{ color: "var(--gold-soft)" }}>IBBI Recognized</p>
            <p className="text-xs font-bold text-white">Insolvency Professional Entity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ index, children }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-3">
      {index && <span className="text-sm font-semibold" style={{ color: "var(--gold)" }}>{index}</span>}
      <span className="eyebrow">{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden" style={{ background: "var(--paper)" }}>
        <div className="absolute inset-0 paper-grid opacity-70" />
        <div
          className="absolute -top-20 right-0 w-[40rem] h-[40rem] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(176,122,44,0.12) 0%, transparent 62%)",
            filter: "blur(40px)",
          }}
        />

        <div
          className="relative max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-12 items-center"
          style={{ minHeight: "100vh", paddingTop: "9rem", paddingBottom: "5rem" }}
        >
          {/* Left: content */}
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2.5 mb-8 px-3.5 py-2 rounded-full"
              style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full pulse-glow" style={{ background: "var(--gold)" }} />
              <span className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase" style={{ color: "var(--muted)" }}>
                IBBI Recognized IPE &middot; IBBI/IPE/0159
              </span>
            </div>

            <h1
              className="font-display font-bold mb-7"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4.25rem)", lineHeight: 1.05, color: "var(--ink)" }}
            >
              Transforming distressed assets into{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>opportunities</span>.
            </h1>

            <div className="rule-gold mb-7" />

            <p className="text-lg mb-9 leading-relaxed" style={{ color: "var(--muted)" }}>
              Your trusted partner in NPA resolution, insolvency management, and
              distressed asset recovery across India.
            </p>

            <div className="flex flex-wrap items-center gap-5 mb-12">
              <Link
                href="/contact-us"
                className="px-8 py-4 rounded-full font-semibold text-base text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "var(--ink)", boxShadow: "0 10px 28px rgba(20,35,58,0.2)" }}
              >
                Get Started
              </Link>
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 font-semibold text-base group"
                style={{ color: "var(--ink-2)" }}
              >
                Explore services
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-6 pt-8 border-t" style={{ borderColor: "var(--line)" }}>
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl md:text-3xl font-bold font-display" style={{ color: "var(--ink)" }}>
                    {value}
                  </div>
                  <div className="text-xs mt-1 font-medium tracking-wide uppercase" style={{ color: "var(--gold)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ── Finvin Advantage ── */}
      <section className="w-full py-24" style={{ background: "var(--surface)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <div className="text-center mb-16">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4" style={{ color: "var(--ink)" }}>
              The Finvin Advantage
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
              Comprehensive solutions backed by expertise, a proven track
              record, and a commitment to maximizing recovery value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ background: "var(--line)" }}>
            {advantages.map(({ icon, title, description, num }) => (
              <div key={title} className="group p-9 bg-white transition-colors hover:bg-[var(--paper)]">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--paper-2)", color: "var(--ink-2)" }}
                  >
                    {icon}
                  </div>
                  <span className="font-display text-3xl font-semibold" style={{ color: "var(--line)" }}>
                    {num}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display mb-3" style={{ color: "var(--ink)" }}>
                  {title}
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--muted)" }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted-by strip ── */}
      <div className="w-full py-9" style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-center gap-5 text-center">
          <p className="eyebrow whitespace-nowrap">Trusted By</p>
          <div className="h-5 border-l hidden md:block" style={{ borderColor: "var(--line)" }} />
          <div className="flex flex-wrap justify-center gap-2.5">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-white"
                style={{ color: "var(--ink-2)", border: "1px solid var(--line)" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services grid ── */}
      <section className="w-full py-24" style={{ background: "var(--paper)" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <div className="text-center mb-16">
            <SectionLabel>Navigate Finvin</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold font-display" style={{ color: "var(--ink)" }}>
              Everything You Need
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(({ href, icon, title, description, cta, label }) => (
              <Link
                key={href}
                href={href}
                className="group card-editorial rounded-2xl p-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--paper-2)", color: "var(--ink-2)" }}
                  >
                    {icon}
                  </div>
                  <span className="eyebrow">{label}</span>
                </div>
                <h3 className="text-2xl font-bold font-display mb-3" style={{ color: "var(--ink)" }}>
                  {title}
                </h3>
                <p className="leading-relaxed mb-6 flex-1" style={{ color: "var(--muted)" }}>
                  {description}
                </p>
                <span className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: "var(--gold)" }}>
                  {cta}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative w-full py-24 text-center text-white overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute inset-0 hero-dot-pattern opacity-50 pointer-events-none" aria-hidden="true" />
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(176,122,44,0.16) 0%, transparent 62%)", filter: "blur(50px)" }}
        />
        <div className="relative max-w-3xl mx-auto px-5">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 leading-tight">
            Ready to resolve your
            <br />
            <span className="italic text-gold-gradient">distressed assets?</span>
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed text-gray-300">
            Talk to our experts today and discover how Finvin can help unlock
            maximum value from your stressed portfolio.
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-10 py-4 rounded-full font-semibold text-lg text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, var(--gold), var(--gold-soft))",
              boxShadow: "0 10px 28px rgba(176,122,44,0.35)",
            }}
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
