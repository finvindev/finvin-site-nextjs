const resources = [
  {
    href: "https://ibbi.gov.in/en/legal-framework/act",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    label: "IBBI Acts",
    description: "The Insolvency and Bankruptcy Code and allied legislation",
  },
  {
    href: "https://ibbi.gov.in/en/legal-framework/rules",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    label: "IBBI Rules",
    description: "Operational rules and procedural frameworks",
  },
  {
    href: "https://ibbi.gov.in/en/legal-framework/updated",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: "IBBI Regulations",
    description: "Updated and consolidated regulatory framework",
  },
  {
    href: "https://ibbi.gov.in/en/legal-framework/circulars",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "IBBI Circulars",
    description: "Official communications and policy updates",
  },
  {
    href: "https://ibbi.gov.in/en/legal-framework/notifications",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    label: "IBBI Notifications",
    description: "Important announcements and statutory notices",
  },
  {
    href: "https://ibbi.gov.in/en/legal-framework/facilitation",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "IBBI Facilitations",
    description: "Support programs and facilitation mechanisms",
  },
  {
    href: "https://ibbi.gov.in/en/legal-framework/guidelines",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    label: "IBBI Guidelines",
    description: "Best practices, standards, and procedural guidance",
  },
  {
    href: "https://ibbi.gov.in/en/legal-framework/other-authorities",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: "Other Authorities",
    description: "References from external regulatory bodies",
  },
];

function ArrowOut({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function ResourceCenter() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden pt-40 pb-20" style={{ background: "var(--paper)" }}>
        <div className="absolute inset-0 paper-grid opacity-70" />
        <div
          className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(176,122,44,0.13) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div className="relative max-w-6xl mx-auto px-5 text-center space-y-5">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.16em] uppercase"
            style={{ background: "var(--surface)", border: "1px solid var(--line)", color: "var(--muted)" }}
          >
            IBBI Recognition No. IBBI/IPE/0159
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display" style={{ color: "var(--ink)" }}>Resource Center</h1>
          <div className="rule-gold mx-auto" />
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
            Your gateway to comprehensive insolvency and bankruptcy frameworks.
            Access official documents, regulations, and guidelines from IBBI.
          </p>
          <p className="text-base italic font-display" style={{ color: "var(--gold)" }}>
            &ldquo;Empowering stakeholders with authoritative legal resources and regulatory insights&rdquo;
          </p>
        </div>
      </section>

      {/* ── Info strip ── */}
      <div className="w-full border-y py-6" style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            All resources below link directly to the official IBBI portal at{" "}
            <span className="font-semibold" style={{ color: "var(--ink-2)" }}>ibbi.gov.in</span>
          </p>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
            style={{ background: "rgba(176,122,44,0.1)", color: "var(--gold)", border: "1px solid rgba(176,122,44,0.25)" }}
          >
            <ArrowOut className="w-3.5 h-3.5" />
            Opens on official IBBI website
          </div>
        </div>
      </div>

      {/* ── Resources grid ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-6 py-16" style={{ background: "var(--paper)" }}>
        <div className="mb-10">
          <span className="eyebrow">Legal Framework</span>
          <h2 className="text-2xl md:text-3xl font-bold font-display mt-2" style={{ color: "var(--ink)" }}>
            IBBI Official Resources
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map(({ href, icon, label, description }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-editorial rounded-2xl p-6 flex flex-col"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0 transition-transform group-hover:scale-110 duration-200"
                style={{ background: "var(--paper-2)", color: "var(--ink-2)" }}
              >
                {icon}
              </div>
              <h3 className="font-bold font-display mb-2" style={{ color: "var(--ink)" }}>{label}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>{description}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold" style={{ color: "var(--gold)" }}>
                View on IBBI
                <ArrowOut className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-200" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <div className="w-full py-16 text-center" style={{ background: "var(--surface)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-xl mx-auto px-5">
          <h3 className="text-2xl font-bold font-display mb-3" style={{ color: "var(--ink)" }}>
            Need expert guidance?
          </h3>
          <p className="mb-8" style={{ color: "var(--muted)" }}>
            Our team can help you interpret regulations and build the right
            strategy for your distressed asset situation.
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5"
            style={{ background: "var(--ink)", boxShadow: "0 8px 22px rgba(20,35,58,0.18)" }}
          >
            Talk to Our Team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
