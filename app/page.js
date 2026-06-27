import Link from "next/link";

const stats = [
  { value: "₹100B+", label: "Debt Resolved" },
  { value: "6", label: "Offices Nationwide" },
  { value: "5+", label: "Years of Excellence" },
  { value: "IBBI", label: "Recognized IPE" },
];

const advantages = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
    gradient: "from-blue-600 to-blue-800",
    title: "Deep Expertise",
    description:
      "Specialized knowledge of IBC, NPA resolution frameworks, and distressed asset management built over complex multi-sector engagements.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="3 3 3 21 21 21" />
        <polyline points="7 16 11 10 15 13 21 7" />
      </svg>
    ),
    gradient: "from-indigo-600 to-indigo-800",
    title: "Proven Track Record",
    description:
      "Over ₹100 billion in stressed debt successfully resolved across India — spanning PSBs, NBFCs, ARCs, and corporate accounts.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: "from-sky-500 to-sky-700",
    title: "Innovative Solutions",
    description:
      "Pioneering digital tools like Estatedeal.in to modernize distressed asset disposal and maximize recovery value for every stakeholder.",
  },
];

const services = [
  {
    href: "/what-we-do",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    accentColor: "#2563eb",
    bgLight: "#eff6ff",
    title: "What We Do",
    description:
      "Advisory, portfolio sales, insolvency support, and real estate monetization through our end-to-end distressed asset solutions.",
    cta: "Explore Services",
  },
  {
    href: "/who-we-are",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    accentColor: "#7c3aed",
    bgLight: "#f5f3ff",
    title: "Who We Are",
    description:
      "A team of seasoned CAs, Insolvency Professionals, and financial experts united by a mission to transform distressed assets.",
    cta: "Meet Our Team",
  },
  {
    href: "/resource-center",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    accentColor: "#0891b2",
    bgLight: "#ecfeff",
    title: "Resource Center",
    description:
      "Access IBBI regulations, IBC frameworks, circulars, and guidelines — everything you need to navigate insolvency law in India.",
    cta: "Browse Resources",
  },
  {
    href: "/contact-us",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    accentColor: "#059669",
    bgLight: "#ecfdf5",
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

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section
        className="relative w-full text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0B1929 0%, #0e2647 55%, #0B1929 100%)",
          minHeight: "90vh",
        }}
      >
        {/* Dot-grid overlay */}
        <div className="absolute inset-0 hero-dot-pattern" />

        {/* Blurred orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.38) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/6 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div
          className="relative max-w-6xl mx-auto px-4 flex flex-col items-center text-center"
          style={{ paddingTop: "9rem", paddingBottom: "7rem" }}
        >
          {/* IBBI Badge */}
          <div
            className="inline-flex items-center gap-2.5 mb-8 px-5 py-2.5 rounded-full text-sm font-medium text-blue-200"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 pulse-glow"
            />
            IBBI Recognized IPE &middot; Certificate No. IBBI/IPE/0159
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            Transforming Distressed
            <br />
            Assets into{" "}
            <span className="text-gold-gradient">Opportunities</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Your trusted partner in NPA resolution, insolvency management, and
            distressed asset recovery across India
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded-full font-semibold text-lg text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #d97706, #f59e0b)",
                boxShadow: "0 4px 24px rgba(245,158,11,0.38)",
              }}
            >
              Get Started
            </Link>
            <Link
              href="/what-we-do"
              className="px-8 py-4 rounded-full font-semibold text-lg text-white transition-all duration-200 hover:bg-white/10"
              style={{ border: "2px solid rgba(255,255,255,0.28)" }}
            >
              Explore Services
            </Link>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="py-5 px-4 rounded-2xl text-center"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: "#f59e0b" }}
                >
                  {value}
                </div>
                <div className="text-xs text-blue-300 mt-1.5 font-medium tracking-wide">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Finvin Advantage ── */}
      <section className="w-full bg-white py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-blue-600 tracking-widest uppercase mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              The Finvin Advantage
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Comprehensive solutions backed by expertise, a proven track
              record, and a commitment to maximizing recovery value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map(({ icon, title, description, gradient }) => (
              <div
                key={title}
                className="group rounded-2xl p-8 bg-white border border-gray-100 card-lift"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-6`}
                >
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted-by strip ── */}
      <div className="w-full bg-blue-50 border-y border-blue-100 py-7">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-5 text-center">
          <p className="text-xs font-bold text-blue-800 uppercase tracking-widest whitespace-nowrap">
            Trusted By
          </p>
          <div className="h-5 border-l border-blue-300 hidden md:block" />
          <div className="flex flex-wrap justify-center gap-2">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="px-4 py-1.5 rounded-full text-sm font-medium text-blue-700 bg-white border border-blue-200"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services grid ── */}
      <section className="w-full py-24" style={{ background: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-blue-600 tracking-widest uppercase mb-3">
              Navigate Finvin
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Everything You Need
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(
              ({ href, icon, accentColor, bgLight, title, description, cta }) => (
                <div
                  key={href}
                  className="group bg-white rounded-2xl p-8 flex flex-col card-lift"
                  style={{
                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: bgLight, color: accentColor }}
                  >
                    {icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                    {description}
                  </p>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
                    style={{ color: accentColor }}
                  >
                    {cta}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="w-full py-24 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #0B1929 0%, #0e2647 100%)",
        }}
      >
        <div
          className="absolute inset-0 hero-dot-pattern opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Resolve Your
            <br />
            <span className="text-gold-gradient">Distressed Assets?</span>
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Talk to our experts today and discover how Finvin can help unlock
            maximum value from your stressed portfolio.
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-10 py-4 rounded-full font-semibold text-lg text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #d97706, #f59e0b)",
              boxShadow: "0 4px 24px rgba(245,158,11,0.38)",
            }}
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
